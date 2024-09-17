import axios from "axios"

export const getCategories  = async () => {
    try {
        const res = await axios.get(`${process.env.URL}/api/categories`)
        console.log(res.data)
        return res.data
    } catch (error) {
         console.log(error)
    }
   
}