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
    componentDidMount(){
        this.handleSearch('trending');
    }

    setSelectedVideo = (video) => {
        this.setState({ selectedVideo: video });
    };
    handleSearch = (searchTerm) => {
        Youtube.get('/search', {
            params: {
                q: searchTerm
            }
        })
            .then((res) => res.data.items)
            .then((res) => {
                this.setState({ videos: res,selectedVideo:res[0] });
            });
    };
    render() {
        return (
            <div className='ui container'>
                <Search onSearch={this.handleSearch} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList videos={this.state.videos} setSelectedVideo={this.setSelectedVideo} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
