import { useState } from "react";


const ImageUpload = () => {
    const [Image, setImage]= useState('');
    function handleImage(e){
        console.log(e.target.files)
        setImage(e.target.files[0])
    }

  return (
    <div>
        <input type="file" name="avatar" onChange={handleImage}/>
    </div>
  )
}

export default ImageUpload