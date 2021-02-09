import axios from "axios";

const KEY = "AIzaSyA2iB5S4Dfv1_Q5C2VluzyIyW8Ha-C4w1k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
