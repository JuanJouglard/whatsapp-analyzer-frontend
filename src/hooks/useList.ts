import { useState } from "react"


export const useList = <T>(initialState: T[]): [T[], (item: T) => void, (index: number) => void] => {
    const [list, setList] = useState(initialState)

    const addToList = (item: T) => {
        setList(previousList => [...previousList, item])
    }

    const removeFromList = (index: number) => {
        setList(prevList => {
            if (index >= prevList.length)
                throw Error("Index out of range")
            return [...prevList.slice(0, index), ...prevList.slice(index+1)]
        })
    }

    return [list, addToList, removeFromList]
}
