/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */

import React,{useState} from "react"
import axios from "axios"
import {TextField, Button} from "@mui/material"
import env from "../../constants/env"

function Upload():JSX.Element{
    const [file, setFile] = useState("")
    const [progress, setProgress] = useState(0)
    const [imageUrl, setImageUrl] = useState("")

    const cdnUrlUload = `${env.cdnUrl}/upload`;

    const handlerUpload = async (e:any)=>{
        e.preventDefault()
        
        const config = {
            onUploadProgress: (progressEvent:any) => {
                const { loaded, total } = progressEvent;
                const percent = Math.floor((loaded * 100) / total);
                setProgress(percent);
            }
        }

        const formData = new FormData()
        formData.append("file", file)
        await axios
          .post(cdnUrlUload, formData, config)
          .then((res) => {
            // eslint-disable-next-line no-console
            console.log(res);
            setImageUrl(`https://cdn.guihon.cm/${res.data.file}?quality=medium&compressed=true`);
          })
          // eslint-disable-next-line no-console
          .catch((err) => console.log(err));
    }

    const handlerSelect = (e:any) => {
         const image = e.target.files[0];
         setFile(image)

    }
    return (
      <div className="upload">
        <div className="upload-container">
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            type="text"
            fullWidth
            value={imageUrl}
          />
          <form
            action=""
            onSubmit={handlerUpload}
            encType="multipart/form-data"
          >
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              type="file"
              onChange={handlerSelect}
            />
            <Button type="submit" variant="contained" disableElevation>
              Uploader l image
            </Button>
          </form>
        </div>
      </div>
    );
}


export default Upload