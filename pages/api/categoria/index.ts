import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const result = await prisma.categoria.findMany();
    res.send(result);
  } else if (req.method === "POST") {
    const { data } = req.body;
    const resultPost = await prisma.categoria.create({ data: { ...data } });
    res.send(resultPost);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route`
    );
  }
}
