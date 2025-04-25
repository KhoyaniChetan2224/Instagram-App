import React from 'react'

const PostGrid = ({ posts }) => {
    return (
      <div className="grid grid-cols-3 gap-2">
        {posts.map((post) => (
          <img key={post._id} src={post.image} className="w-full aspect-square object-cover" alt="" />
        ))}
      </div>
    );
  };
  
  export default PostGrid;
  