import { useState } from "react"
import { readFile } from "__tests__/helpers/images";

export default function Photo() {
  const [imageSrc, setImageSrc] = useState(null);// file data
  const [filename, setFilename] = useState(null);// file address
  const handleFileChange = async(e: any) => {
    if(e.target.files && e.target.files.length){
      //we got a file...
      const file = e.target.files[0];
      setFilename(e.target.files[0].path);
      //get the image data from the file
      const imageData: any = await readFile(file);
      // setImageSrc to that image data
      setImageSrc(imageData);
    }
  }
  if(!imageSrc){
    return (
   <>
   <h1>Photo Cropper Goes Here</h1>
   <input type="file" accept="image/*" onChange={handleFileChange}/>
   </>
    )
  }
  return (
    <>
      <img src={imageSrc} />
    </>
  )
}
