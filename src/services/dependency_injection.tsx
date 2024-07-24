import { InjectableService } from "."
import InteractService from "./interact"
import MessageValidation from "./message_validation"

type ServiceType = {
    name: string,
    Class: new (...args: any[]) => InjectableService
}

const services: ServiceType[] = [
    {
        "name": "interact",
        "Class": InteractService
    },
    {
        "name": "message_validation",
        "Class": MessageValidation
    }
]

export type ServiceProps = {
    interact?: Readonly<InteractService>,
    message_validation?: Readonly<MessageValidation>
}


export function withService<T>(OriginalComponent: React.ElementType, services_to_inject: String[]) {

    type ExtendedProps = T & ServiceProps

    return function EnhancedComponent(props: T): React.ReactElement<ExtendedProps> {
        const set_of_services_to_inject = new Set(services_to_inject)
        const services_to_pass: ServiceProps = services.filter(
            service => set_of_services_to_inject.has(service.name)
        ).reduce((acc, service: ServiceType) => {
            acc[`${service.name}`] = new service.Class();
            return acc;
        }, {})
        return <OriginalComponent {...props} {...services_to_pass} />
    }
}
