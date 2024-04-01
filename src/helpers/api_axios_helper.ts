import axios from "axios";
import config from "src/config";

//apply base url for axios
//  const API_URL = process.env.NODE_ENV !== 'production'?"http://15.156.133.140:1337/api":config.axios.AXIOS_API_BASE_URL;
console.log("config.axios.AXIOS_API_BASE_URL==",config.axios.AXIOS_API_BASE_URL)
const API_URL = config.axios.AXIOS_API_BASE_URL;
axios.defaults.baseURL = config.axios.AXIOS_API_BASE_URL
const axiosApi = axios.create({
  baseURL:API_URL
});
// const axiosApi = axios;

// axiosApi.defaults.headers.common["Authorization"] = token;

// content type
axiosApi.defaults.headers.post["Content-Type"] = "application/json";

// intercepting to capture errors
axiosApi.interceptors.response.use(function (response) {
    return response.data ? response.data : response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let message;
    switch (error.status) {
        case 500: message = "Internal Server Error"; break;
        case 401: message = "Invalid credentials"; break;
        case 404: message = "Sorry! the data you are looking for could not be found"; break;
        default: message = error.message || error;
    }
    return Promise.reject(message);
});


class ApiCore {
  /**
   * Fetches data from given url
   */
  get = (url : string, params?: {}) => {
    console.log("get Api Call ",url)
      return axiosApi.get(url, params);
  };

  /**
   * post given data to url
   */
  create = (url : string, data : {}) => {
      return axiosApi.post(url, {data});
  };

  /**
   * Updates data
   */
  update = (url: string, data:{}) => {
      return axiosApi.put(url,  {data});
  };

  /**
   * Delete 
   */
  delete = (url : string, data?:{}) => {
      return axiosApi.delete(url, {...data});
  };
};

export {ApiCore};