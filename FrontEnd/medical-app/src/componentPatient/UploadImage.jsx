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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <form onSubmit={handle} className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <div className="mb-4">
                <input
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])} // set the image file
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    value={name}
                    placeholder='Name'
                    onChange={e => setName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 px-4 text-white rounded ${loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'}`}
            >
                {loading ? 'Uploading...' : 'Upload'}
            </button>
        </form>
        <button
            onClick={handleCreate}
            disabled={loading || !imageUrl}
            className={`w-full py-2 px-4 mt-4 text-white rounded ${loading || !imageUrl ? 'bg-gray-500' : 'bg-green-500 hover:bg-green-600'}`}
        >
            {loading ? 'Creating...' : 'Create'}
        </button>
        {imageUrl && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <img src={imageUrl} alt={name} className="mt-4 w-64 h-64 object-cover rounded" />
                </div>
            )}
    </div>
);
}

export default UploadImage
