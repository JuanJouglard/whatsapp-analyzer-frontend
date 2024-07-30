import {ComponentType, useState} from "react"

export type ErrorProps = {
    setError: Function
}

export type FallbackProps = {
    error: object
}

export function withErrorHandling<T>(OriginalComponent: ComponentType<Omit<T, keyof ErrorProps>>, Fallback: ComponentType<FallbackProps>): ComponentType<T & ErrorProps> {

    return function EnhancedComponent(props: Omit<T, keyof ErrorProps>) {
        const [error, setError] = useState()
        if (error)
            return <Fallback error={error}/>
        return <OriginalComponent {...props as T} setError={setError}/>
    }
}
