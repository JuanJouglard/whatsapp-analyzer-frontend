"use client"
import { ChangeEvent, useState } from "react"


export default function FileUpload({ onUpload } : { onUpload: Function }) {
    const [file, setFile] = useState<File | null>()
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const uploaded_file = event.target.files && event.target.files[0]
        setFile(uploaded_file)
        onUpload(uploaded_file)

    }
    return <div className="mb-3">
        <label
            htmlFor="formFile"
            className="mb-2 inline-block text-neutral-500 dark:text-neutral-400"
        >Upload conversation in .txt format</label
        >
        <input
            accept=".txt"
            className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white  file:dark:text-white"
            type="file"
            onChange={onChange}
            id="formFile" />
    </div>
}
