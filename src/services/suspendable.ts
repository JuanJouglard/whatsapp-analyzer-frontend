type Status = 'pending' | 'success' | 'error';

export interface SuspendableResource<T> {
  read(): T;
}

export class SuspendableService {
    compatibleWithSuspend<T>(result_promise: Promise<T>): SuspendableResource<T> {
        let status: Status = 'pending';
        let result: T;
        const promise = result_promise.then(
          (data: T) => {
            status = 'success';
            result = data;
          },
          (error: any) => {
            status = 'error';
            result = error;
          }
        );

        return {
          read(): T {
            switch (status) {
              case 'pending':
                throw promise;
              case 'error':
                throw result;
              case 'success':
                return result;
            }
          }
        };
    }
}
