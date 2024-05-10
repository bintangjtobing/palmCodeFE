import axios from "axios";
import Cookies from 'js-cookie'

export async function getApiData({ endPoint }:{endPoint:any}) {
  try {
    const response = await axios.get(`https://be-palmcode.octansidn.com/api/${endPoint}`, {
      withXSRFToken: true,
      headers: {
        withCredentials: true,
        Authorization: `Bearer 3|U2zR6itoSGhj8JR12dEwRcGtBgpXNcve9AHwj6Dv01f72008`,
      },
    });
    return response.data;
  } catch (error) {
    // Handle error, misalnya log atau tampilkan pesan kesalahan
    console.error("Error in API request:", error);
    throw error; // Rethrow error agar dapat ditangkap oleh pemanggil fungsi
  }
}

export async function getCSRF() {
  try {
    const response = await axios.get(`https://be-palmcode.octansidn.com/csrf`, {
      withXSRFToken: true,
      headers: {
        withCredentials: true,
        Authorization: `Bearer 3|U2zR6itoSGhj8JR12dEwRcGtBgpXNcve9AHwj6Dv01f72008`,
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
      `https://be-palmcode.octansidn.com/api/${endPoint}`,
      dataBody,
      {
        headers: {
          'X-XSRF-TOKEN': Cookies.get('csrf_token'), // Menambahkan CSRF token dari cookie
          Authorization: `Bearer 3|U2zR6itoSGhj8JR12dEwRcGtBgpXNcve9AHwj6Dv01f72008`,
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
