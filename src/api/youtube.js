import axios from "axios";

const KEY = "AIzaSyDtfDoOIADHeAckHYT8Q0MNEtb9fn2BENQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
