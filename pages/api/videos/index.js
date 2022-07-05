import {videos} from '../../../videos.js';

export default function handler(req, res) {
  res.status(200).json(videos);
}

//videos.js local datasını api olarak oluşturuk.