import { apiPrivate } from "../../api";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useApiPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {

      const requestIntercept = apiPrivate.interceptors.request.use(
          config => {
              if (!config.headers['Authorization']) {
                  config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
              }
              return config;
          }, (error) => Promise.reject(error)
      );

      const responseIntercept = apiPrivate.interceptors.response.use(
          response => response,
          async (error) => {
              const prevRequest = error?.config;
              if (error?.response?.status === 403 && !prevRequest?.sent) {
                  prevRequest.sent = true;
                  const newAccessToken = await refresh();
                  prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                  return apiPrivate(prevRequest);
              }
              return Promise.reject(error);
          }
      );

      return () => {
        apiPrivate.interceptors.request.eject(requestIntercept);
          apiPrivate.interceptors.response.eject(responseIntercept);
      }
  }, [auth, refresh])

  return apiPrivate;
}

export default useApiPrivate;

