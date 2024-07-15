"use client"
import FilePicker from "../core/file_picker";
import FileUpload from "../core/file_upload";
import { ReactNode } from 'react';
import Navbar from "../core/navbar";


export default function FileAnalysis({ children }: { children: ReactNode }) {
    return <>
        <div className="flex flex-row justify-evenly items-center">
            <FilePicker optionPicked={console.log} />
            <FileUpload onUpload={console.log} />
        </div>
            <Navbar />
            {children}
        </>
}
