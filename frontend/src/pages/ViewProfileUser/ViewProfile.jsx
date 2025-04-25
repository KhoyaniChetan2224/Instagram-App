import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProfileHeader from "./components/ProfileHeader";
import PostGrid from "./components/PostGrid";
import React from 'react'

const ViewProfile = () => {
  const { username } = useParams();
  const [data, setData] = useState({ user: null, posts: [] });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/profile/${username}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [username]);

  if (!data.user) return <div className="text-center mt-10">Loading.......!</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <ProfileHeader user={data.user} postCount={data.posts.length} />
      <PostGrid posts={data.posts} />
    </div>
  );
};

export default ViewProfile;
