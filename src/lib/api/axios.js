import axios from "axios";
import apiInfo from "../../data/apiInfo.json";

export default axios.create({
  baseURL: apiInfo.baseUrl,
});
