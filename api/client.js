import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";
const apiClient = create({
  baseURL: "http://192.168.1.86:9000/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get; //we store the methode get in variable

apiClient.get = async (url, params, axiosConfig) => {
  //redefine tha methode of getting the data from the server

  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }
  const data = await cache.get(url);

  return data ? { ok: true, data } : response;
};

export default apiClient;
