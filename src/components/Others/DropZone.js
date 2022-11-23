import axios from 'axios';
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { httpClient } from '../../axios';

const DropZone = () => {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        // console.log(acceptedFiles);
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
        .then(() => {
          console.log("file uploaded successfully");
        })
        .catch((err) => {
          console.log(err);
        });
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <div {...getRootProps()}>
    <input {...getInputProps()} />
    {
      isDragActive ?
        <p>Drop the files here ...</p> :
        <p>Drag 'n' drop some files here, or click to select files</p>
    }
  </div>
  )
}

export default DropZone