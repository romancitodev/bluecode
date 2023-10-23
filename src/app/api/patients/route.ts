import prisma from "@/prisma/singleton"
import { NextApiResponse } from "next";

export const GET = async (request: Request) => {
    const data = await prisma.paciente.findMany();
    return Response.json({ data })
}