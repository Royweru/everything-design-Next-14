import axios from "axios"

export const getBillboards  = async () => {
    try {
        const res = await axios.get(`${process.env.URL}/api/billboards`)
        console.log(res.data)
        return res.data
    } catch (error) {
         console.log(error)
    }
   
}