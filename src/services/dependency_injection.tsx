import { ComponentType } from "react"
import { InjectableService } from "."
import InteractService from "./interact"
import MessageValidation from "./message_validation"
import { FileHandler } from "./file_handler"
import MetricsServiceImplementation, { MetricsService } from "./metrics"

export enum Services {
    Interact = "interact",
    MessageValidation = "message_validation",
    FileHandler = "file_handler",
    Metrics = "metrics"
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
    },
    {
        "name": Services.FileHandler,
        "Class": FileHandler
    },
    {
        "name": Services.Metrics,
        "Class": MetricsServiceImplementation
    },

]

export type ServiceProps = {
    [Services.Interact]?: Readonly<InteractService>,
    [Services.MessageValidation]?: Readonly<MessageValidation>,
    [Services.FileHandler]?: Readonly<FileHandler>
    [Services.Metrics]?: Readonly<MetricsService>
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
