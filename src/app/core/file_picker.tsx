import { useState } from "react"

const options = [
    {
        value: "file_id_1",
        title: "Conversation with group 1"
    },
    {
        value: "file_id_2",
        title: "Conversation with group 2"
    }
]


export default function FilePicker({ optionPicked }) {
    const [selectedOption, setSelectedOption] = useState(options[0].value)
    console.log(`OPTION: ${options[0].value}`)
    return <select className="text-black" onChange={event => setSelectedOption(event.target.value)} value={selectedOption}>
        {options.map((option) => <option
                                    key={option.value}
                                    value={option.value}>
                                        {option.title}
                                    </option>)}
            </select>
}
