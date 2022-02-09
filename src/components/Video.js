import React from 'react';
import './Video.css';
const Video = ({ video, setSelectedVideo }) => {
    return (
        <div
            className='item video-item'
            onClick={() => {
                setSelectedVideo(video);
            }}
        >
            <img src={video.snippet.thumbnails.medium.url} className='ui image' />
            <div className='content'>
                <div className='header'>{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default Video;
