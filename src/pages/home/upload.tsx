import Button from '@mui/joy/Button';
import SvgIcon from '@mui/joy/SvgIcon';
import { styled } from '@mui/joy';
import { Form, useSubmit } from 'react-router-dom';
import { ChangeEvent, useRef, useState } from 'react';

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

function UploadIcon() {
    return <SvgIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
        </SvgIcon>
}

export function Upload() {
    const [file, setFile] = useState<File>()
    const submit = useSubmit()

    const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0)
            setFile(event.target.files[0])

        submit(event.currentTarget)
    }

    return <Form encType="multipart/form-data" method="post" action="/chat" className="upload-form">
                <label htmlFor="file_input">{file?.name || "Select file.."}</label>
                <input accept=".txt" id="file_input" onChange={onChangeFile} type="file"/>
                <button type="submit">Upload</button>
        </Form>
}
