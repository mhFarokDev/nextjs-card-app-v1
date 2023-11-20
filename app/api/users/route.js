import mongoDBconnect from '@/config/db';
import User from '@/models/User';
import { NextResponse } from 'next/server';


// get all user from mongoDB
export async function GET() {
    try {
        await mongoDBconnect()
        const users = await User.find()
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({error : error.message});
    }
  
}
