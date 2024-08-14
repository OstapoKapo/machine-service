import { NextResponse } from "next/server"
import connect from '../../../utils/db'
import User from '../../../models/User'

export const maxDuration = 5;
export const dynamic = 'focre-dynamic';

export const GET = async (req, res) => {

    

    try{
        await connect();

        const users = await User.find({});
        return new NextResponse(JSON.stringify(users), {status: 200})
    }catch(err){
        return new NextResponse('bad', {status: 500})
    }
}