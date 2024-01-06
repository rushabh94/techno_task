import axios from "axios";

const api = (url = null, token = null) => {
  const access_token =
    token !== null ? token : localStorage.getItem("access_token");
  let config = {};
  if (url) {
    config = {
      baseURL: url,
      headers: {
        Authorization: access_token && `Bearer ${access_token}`,
      },
    };
  }
  let instance = axios.create(config);
  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      if (
        error?.response &&
        (error.response?.status === 401 ||
          error.response?.data?.statusCode === 401)
      ) {
        localStorage.clear();
        window.location.href = "/login";
        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
  );
  return instance;
};

export default api;
