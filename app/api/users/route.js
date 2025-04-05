import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_FILE_PATH = path.join(process.cwd(), "app/data/users.json");

export async function POST(req) {
  try {
    const userData = await req.json();
    await fs.mkdir(path.dirname(DATA_FILE_PATH), { recursive: true });

    let users = [];

    // Check if the file exists before reading
    try {
      await fs.access(DATA_FILE_PATH);
      const data = await fs.readFile(DATA_FILE_PATH, "utf-8");
      users = JSON.parse(data);
    } catch (error) {
      console.warn("Users file not found, creating a new one.");
      users = [];
    }

    const newUser = {
      id: generateId(),
      ...userData,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(users, null, 2));

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error saving user:", error.message);
    return NextResponse.json({ error: "Failed to save user data" }, { status: 500 });
  }
}

function generateId() {
  return Math.random().toString(36).substring(2, 15) +
         Math.random().toString(36).substring(2, 15);
}
