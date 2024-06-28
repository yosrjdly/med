import React, { useState } from 'react'

const UploadImage = () => {
    const [name, setName] = useState("")
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const uploadFile = async () => {
        const data = new FormData();
        data.append("file", image); 
        data.append("upload_preset", "tested");
        try {
            const cloudName = "dxjndurf9";
            const resourceType = "image"; 
            const api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;
            const res = await axios.post(api, data);
            const { url } = res.data;
            console.log(url);
            return url;
        } catch (error) {
            console.log(error);
        }
    }
    const handle = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const imgUrl = await uploadFile();
            setImageUrl(imgUrl);  // Store the uploaded image URL in state
            setImage(null); // Clear the image input
            console.log("Upload successful");
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default UploadImage
