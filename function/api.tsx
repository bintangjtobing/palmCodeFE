import axios from "axios";
import Cookies from 'js-cookie'

export async function getApiData({ endPoint }:{endPoint:any}) {
  try {
    const response = await axios.get( process.env.NEXT_PUBLIC_ENDPOINT_API + endPoint, {
      withXSRFToken: true,
      headers: {
        withCredentials: true,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    // Handle error, misalnya log atau tampilkan pesan kesalahan
    console.error("Error in API request:", error);
    throw error; // Rethrow error agar dapat ditangkap oleh pemanggil fungsi
  }
}

export async function postApiData({ endPoint, dataBody }: { endPoint: string; dataBody: any }) {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_ENDPOINT_API + endPoint, dataBody,
      {
        headers: {
          'X-XSRF-TOKEN': Cookies.get('csrf_token'), // Menambahkan CSRF token dari cookie
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
          'Content-Type': 'multipart/form-data',
          withCredentials: true, // Aktifkan pengiriman cookie
        },
      }
    );
    return response.data;
  } catch (error) {
    // Handle error, misalnya log atau tampilkan pesan kesalahan
    console.error('Error in API request:', error);
    throw error; // Rethrow error agar dapat ditangkap oleh pemanggil fungsi
  }
}
