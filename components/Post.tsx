import React from 'react'

function Post({ id, post, postPage }) {
  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-700">
      {!postPage && (
        <img src={post?.userImg} alt="" />
      )}
    </div>
  )
} 
export default Post