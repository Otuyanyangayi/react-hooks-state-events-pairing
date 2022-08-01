import React from "react";
import Comments from "./Comments";
import Votes from "./Votes";

function Video({video}) {
  return (
    <>
    <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h2>{video.title}</h2>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <Votes upvotes={video.upvotes} downvotes={video.downvotes}/>
      <Comments comments={video.comments} />
    </>
  )
}

export default Video