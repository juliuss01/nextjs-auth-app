import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    console.log("BODY:", body); // ✅ Log what's coming in

    if (!email || !password || !name) {
      console.error("Missing fields:", { name, email, password });
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.error("User already exists:", email);
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Password hashed");

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    console.log("New user created:", newUser);

    return NextResponse.json({ message: "User registered" }, { status: 201 });

  } catch (error: any) {
    console.error("🔥 Registration error:", error); // 👈 IMPORTANT
    return NextResponse.json({ message: "Registration failed" }, { status: 500 });
  }
}
