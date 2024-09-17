import db from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"


export async function GET(
    req:Request,
    {params}:{
        params:{billboardId:string}
    }
) {
    const {userId} =  auth()

    if(!userId) return new NextResponse("Unauthorized")
  

    try {
        const res = await db.billboard.findUnique({
            where:{
                id:params.billboardId
            }
        })
        return NextResponse.json(res)
    } catch (error) {
        console.log(error)
        return new NextResponse("Internal server error",{status:500})
    }
}
export async function PUT(
    req:Request,
    {params}:{
        params:{billboardId:string}
    }
) {
    const {userId} =  auth()

    if(!userId) return new NextResponse("Unauthorized")
    const body =await req.json()
    console.log(body)
    try {
        const res = await db.billboard.update({
            where:{
                id:params.billboardId
            },
            data:{
                ...body
            }
        })
        return NextResponse.json(res)
    } catch (error) {
        console.log(error)
        return new NextResponse("Internal server error",{status:500})
    }
}