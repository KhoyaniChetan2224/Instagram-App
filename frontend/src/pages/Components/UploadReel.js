// src/components/UploadReel.js
import React, { useState } from "react";
import axios from "axios";

const UploadReel = () => {
  const [caption, setCaption] = useState("");
  const [video, setVideo] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("video", video);
    formData.append("caption", caption);
    formData.append("userId", "123456"); // Replace with real userId

    await axios.post("http://localhost:5000/api/reels", formData);
    alert("Reel uploaded!");
  };

  return (
    <div className="p-4">
      <input type="file" accept="video/*" onChange={(e) => setVideo(e.target.files[0])} />
      <input type="text" placeholder="Caption" onChange={(e) => setCaption(e.target.value)} />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 mt-2">Upload</button>
    </div>
  );
};

export default UploadReel;
