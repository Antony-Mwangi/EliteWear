import {NextResponse} from "next/server";
import bcrypt from "bcryptjs";
import {connectDB} from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
    try {
        const {email, password} = await req.json();

        if (!email || !password) {
            return NextResponse.json({message: "Email and password are required"}, {status: 400});
        }
        await connectDB();
        const user = await User.findOne({email});
        if (!user) {
            return NextResponse.json({message: "Invalid credentials"}, {status: 401});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({message: "Invalid credentials"}, {status: 401});
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET!, {expiresIn: "7d"});
        return NextResponse.json({success: true, token,
            user: {id: user._id, name: user.name, email: user.email}

        });
    } catch (error) {
        return NextResponse.json({message: "Login failed", error}, {status: 500});
    }}