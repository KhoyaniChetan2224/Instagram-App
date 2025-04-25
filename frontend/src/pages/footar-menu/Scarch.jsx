import BottomNav from '../BottomNav'
import React, { useState, useEffect } from "react";
import axios from "axios";

const Scarch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({ users: [], posts: [] });

  useEffect(() => {
    if (!query) return setResults({ users: [], posts: [] });

    const fetchResults = async () => {
      const res = await axios.get(`http://localhost:5000/api/search?q=${query}`);
      setResults(res.data);
    };

    const delay = setTimeout(() => fetchResults(), 300);
    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-lg"
        placeholder="Search users or posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="mt-6">
        <h2 className="text-lg font-bold mb-2">Users</h2>
        {results.users.map((user) => (
          <div key={user._id} className="flex items-center mb-2 gap-3">
            <img src={user.profilePic} className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-medium">{user.username}</p>
              <p className="text-sm text-gray-400">{user.fullName}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-bold mb-2">Posts</h2>
        <div className="grid grid-cols-3 gap-2">
          {results.posts.map((post) => (
            <img
              key={post._id}
              src={post.imageUrl}
              alt="post"
              className="w-full h-32 object-cover rounded-md"
            />
          ))}
        </div>
      </div>
      < BottomNav />
    </div>
  );
}

export default Scarch;