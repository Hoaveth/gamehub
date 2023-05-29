import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f80e80138ecd410ba62fc207be40bb60",
  },
});
