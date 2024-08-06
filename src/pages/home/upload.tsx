import { Form } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { PRIMARY_COLOR, THIRD_COLOR } from '../../theme';

export function Upload() {
    const [file, setFile] = useState<File>()

    const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0)
            setFile(event.target.files[0])
    }

    return <Form encType="multipart/form-data" method="post" action="/chat" className="upload-form">
                <label htmlFor="file_input">{file?.name || "Select file.."}</label>
                <input name="file" accept=".txt" id="file_input" onChange={onChangeFile} type="file"/>
                <button style={{backgroundColor: THIRD_COLOR}} type="submit">Upload</button>
        </Form>
}

