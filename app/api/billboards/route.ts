import db from "@/lib/db"
import { auth, currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function GET(
    req:Request,

) {
    const {userId} =await auth()
   if(currentUser) return new NextResponse("Unauthorized",{status:403})
    try {
        const res = await db.billboard.findMany({
            include:{
               categories:true
            }
        })
        return NextResponse.json(res)
    } catch (error) {
        console.log(error)
        return new NextResponse("Internal server error",{status:500})
    }
}
export async function POST(
    req:Request
) {
    const {userId} = auth()

    if(!userId) return new NextResponse("Unauthorized")
    const body = await req.json()

    try {
        const res = await db.billboard.create({
            data:{...body}
        })
        return NextResponse.json(res)
    } catch (error) {
        console.log(error)
        return new NextResponse("Internal server error",{status:500})
    }
}