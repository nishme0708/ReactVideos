import React from 'react';

export default class VideoDetail extends React.Component {
    render() {
        if (!this.props.video) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <div className="ui embed">
                    <iframe src={`https://youtube.com/embed/${this.props.video.id.videoId}`} frameBorder="0"></iframe>
                </div>
                <div className='ui segment'>
                    <h4 className='ui header'>{this.props.video.snippet.title}</h4>
                    <p>{this.props.video.snippet.description}</p>
                </div>
            </div>
        );
    }
}
