
import { lemonSqueezyApiInstance } from '@/lib/lemonAxios'


export const retriveVariantId = async({
    id
}:{id:string}) => {
   try {
    const res = await lemonSqueezyApiInstance.get(`/variants/${id}`)
    console.log(res.data)
    return(res.data.id)
   } catch (error) {
       console.error(error)
   }
 
}
