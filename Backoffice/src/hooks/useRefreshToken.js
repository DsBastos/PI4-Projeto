import axios from "../../api";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });
    console.log("useRefreshToken 1");

    setAuth((prev) => {
      //console.log(JSON.stringify(prev));
      //console.log(response.data.accessToken);
      console.log(response.data.role)
      return { 
        ...prev, 
        role: response.data.role,
        accessToken: response.data.accessToken };
    });
    console.log("refreshed");
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
