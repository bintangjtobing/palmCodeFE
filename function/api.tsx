import axios from "axios";

export default async function getApiData({ endPoint }:{endPoint:any}) {
  try {
    const response = await axios.get(`https://be-palmcode.octansidn.com/api/${endPoint}`, {
      withXSRFToken: true,
      headers: {
        withCredentials: true,
        Authorization: `Bearer 2|r4xRa7PwXY9m6U70CjTlxtA6u15ZNbMtAjt5n2Vx84c12f1f`,
      },
    });
    return response.data;
  } catch (error) {
    // Handle error, misalnya log atau tampilkan pesan kesalahan
    console.error("Error in API request:", error);
    throw error; // Rethrow error agar dapat ditangkap oleh pemanggil fungsi
  }
}
