import { NextResponse } from "next/server"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export async function GET() {
  try {
    const filePath = join(process.cwd(), "public", "Aayush_Malla_CV.pdf")
    const fileBuffer = await readFile(filePath)

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Aayush_Malla_CV.pdf"',
        "Content-Length": fileBuffer.length.toString(),
      },
    })
  } catch (error) {
    console.error("Error serving CV file:", error)
    return new NextResponse("File not found", { status: 404 })
  }
}
