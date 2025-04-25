import React, { useState } from 'react'
import BottomNav from '../BottomNav'
import axios from 'axios';

const PlaySquare = () => {
  const [caption, setCaption] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!caption || !imageFile) return alert("All fields required");

    setLoading(true);

    // Upload image to Cloudinary or some other service
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "YOUR_PRESET"); // Cloudinary
    const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload", formData);
    const imageUrl = uploadRes.data.secure_url;

    // Save post to backend
    await axios.post("http://localhost:5000/api/posts", {
      caption,
      imageUrl,
      userId: "12345" // Replace with logged in user id
    });

    setCaption("");
    setImageFile(null);
    setPreview("");
    setLoading(false);
    alert("Post uploaded 🎉");
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Create New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full"
        />
        {preview && <img src={preview} alt="preview" className="w-full h-64 object-cover rounded-lg" />}
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Write a caption..."
          className="w-full border rounded-lg p-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Post"}
        </button>
      </form>
      < BottomNav />
    </div>
  );
}

export default PlaySquare
