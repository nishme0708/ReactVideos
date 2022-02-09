import React from 'react';
import Video from './Video';

export default class VideoList extends React.Component {
    render() {
        return (
            <div className='ui relaxed divided list'>
                {this.props.videos.map((video) => (
                    <Video key={video.id.videoId} video={video} setSelectedVideo={this.props.setSelectedVideo} />
                ))}
            </div>
        );
    }
}
