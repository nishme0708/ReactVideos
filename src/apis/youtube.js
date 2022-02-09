import axios from 'axios';
const KEY = 'AIzaSyDKG5Xm2UWL96PhAYKjcW5Elzt-dkc2wbo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type:'video'
    }
});
