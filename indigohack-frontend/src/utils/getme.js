import axios from "axios";

export const getme = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return false; 

    const result = await axios.get("http://localhost:3000/api/v1/getme", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return result.data.message ? true : false;
  } catch (error) {
    console.error('Error fetching /getme:', error);
    return false;
  }
};
