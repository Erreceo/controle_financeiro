import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const resultPosts = await prisma.formaPagamento.findMany();
    res.send(resultPosts);
  } else if (req.method === "POST") {
    const { data } = req.body;
    const resultPosts = await prisma.formaPagamento.create({
      data: { ...data },
    });
    res.send(resultPosts);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
