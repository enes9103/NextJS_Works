import {videos} from '../../../videos.js';

export default (req, res) => {
    const {id} = req.query;

    const video = videos.find(video => video.id.toString() == id);

    if(video) {
        res.status(200).json(video);
    }else{
        res.status(404).json({message: "Video not found"});
    }
  res.status(200).json(videos);
}