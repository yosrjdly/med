import React, { useState } from 'react'

const UploadImage = (props) => {
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
    const handleCreate = () => {
        props.addPatient({
            image: imageUrl,  // Use the uploaded image URL
            name: name
        });
    }
  return (
    <div>
            <form onSubmit={handle}>
                <div>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])} // set the image file
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={name}
                        placeholder='name'
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <button type="submit" disabled={loading} >
                    {loading ? 'Uploading...' : 'Upload'}
                </button>
            </form>
            <button onClick={handleCreate} disabled={loading || !imageUrl}>
                {loading ? 'Creating...' : 'Create'}
            </button>
        </div>
    ); 
}

export default UploadImage
