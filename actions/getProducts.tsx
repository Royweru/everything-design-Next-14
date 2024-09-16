import { lemonSqueezyApiInstance } from "@/lib/lemonAxios";

export const getProducts = async () => {
  try {
    const res = await lemonSqueezyApiInstance.get('/products')
    return(res.data)
  } catch (error) {
    console.error(error);
  }
};
