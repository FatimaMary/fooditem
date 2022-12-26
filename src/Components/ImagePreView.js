import React, { useState } from 'react'

function ImagePreView() {
    const [imgfile, uploading] = useState("")

    const imgFilehandler = (e) => {
        uploading(URL.createObjectURL(e.target.files[0]))
        // console.log("image selected")
    }
  return (
    <div>
        <center>
            <h1>Image Preview</h1>
            <hr/>
            <input type='file' onChange={imgFilehandler}/>
            <hr/>
            <img src={imgfile} height="250" width="250" alt="preview"/>
        </center>
    </div>
  )
}

export default ImagePreView