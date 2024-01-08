import React from 'react';

const VideoBackground = ({ src }) => {
  return (
    <video className="video-background" autoPlay loop muted>
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default VideoBackground;
