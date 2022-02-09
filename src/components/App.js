import React from 'react';
import Search from './Search';
import Youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
export default class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    setSelectedVideo = (video) => {
        this.setState({selectedVideo:video});
    };
    handleSearch = (searchTerm) => {
        Youtube.get('/search', {
            params: {
                q: searchTerm
            }
        })
            .then((res) => res.data.items)
            .then((res) => {
                this.setState({ videos: res });
            });
    };
    render() {
        return (
            <div className='ui container'>
                <Search onSearch={this.handleSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} setSelectedVideo={this.setSelectedVideo} />
            </div>
        );
    }
}
