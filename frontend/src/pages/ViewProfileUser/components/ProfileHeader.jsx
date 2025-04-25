import React from 'react'

const ProfileHeader = ({ user, postCount }) => {
    return (
      <div className="flex gap-8 items-center mb-6">
        <img src={user.profilePic} className="w-24 h-24 rounded-full" alt="" />
        <div>
          <h2 className="text-2xl font-semibold">{user.username}</h2>
          <div className="flex gap-6 mt-2">
            <span><b>{postCount}</b> posts</span>
            <span><b>{user.followers.length}</b> followers</span>
            <span><b>{user.following.length}</b> following</span>
          </div>
          <p className="mt-2">{user.bio}</p>
        </div>
      </div>
    );
  };
  
  export default ProfileHeader;
  