import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import { httpClient } from '../../axios';

const Div = styled.div`
background: #8E8E8E;
color: white;
border: none;
border-radius: 50px;
font-size: 1.2rem;
font-weight: 500;
line-height: 1.7rem;
padding: 8px 12px;
width: fit-content;
margin: 15px 0 5px 0;
`

const AadharUploadBtn = ({returnLink, name, size, title}) => {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        // console.log(acceptedFiles[0].name);
        name(acceptedFiles[0].name)
        size(acceptedFiles[0].size)
        const files = acceptedFiles[0];
        // console.log(file);
        let formData = new FormData();
        formData.append("file", files);
        // console.log(formData);
        httpClient
            .post(
                '/bucket/push',
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            .then((res) => {
                // console.log(res);
                returnLink(res.data)
                console.log("file uploaded successfully");
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    return (
        <Div {...getRootProps()}>
            <input {...getInputProps()} />
            {title}
        </Div>
    )
}

export default AadharUploadBtn