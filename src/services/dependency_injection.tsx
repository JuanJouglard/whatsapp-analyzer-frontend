import { ComponentType } from "react"
import { InjectableService } from "."
import InteractService from "./interact"
import MessageValidation from "./message_validation"

export enum Services {
    Interact = "interact",
    MessageValidation = "message_validation"
}

type ServiceType = {
    name: Services,
    Class: new (...args: any[]) => InjectableService
}

const services: ServiceType[] = [
    {
        "name": Services.Interact,
        "Class": InteractService
    },
    {
        "name": Services.MessageValidation,
        "Class": MessageValidation
    }
]

export type ServiceProps = {
    interact?: Readonly<InteractService>,
    message_validation?: Readonly<MessageValidation>
}


export function withService<T>(OriginalComponent: ComponentType<Omit<T, keyof ServiceProps>>, services_to_inject: Services[]): ComponentType<T & ServiceProps> {

    return function EnhancedComponent(props: T) {
        const set_of_services_to_inject = new Set(services_to_inject)
        const services_to_pass: ServiceProps = services.filter(
            service => set_of_services_to_inject.has(service.name)
        ).reduce((acc, service: ServiceType) => {
            acc[`${service.name}` as keyof ServiceProps] = new service.Class();
            return acc;
        }, {} as ServiceProps)
        return <OriginalComponent {...props as T} {...services_to_pass} />
    }
}
