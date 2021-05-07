import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const { data } = req.body;
  if (req.method === "PUT") {
    const resultPosts = await prisma.formaPagamento.update({
      where: { id: Number(id) },
      data: { ...data },
    });
    res.send(resultPosts);
  } else if (req.method === "GET") {
    const resultPosts = await prisma.formaPagamento.findUnique({
      where: { id: Number(id) },
    });
    res.send(resultPosts);
  } else if (req.method === "DELETE") {
    const resultPosts = await prisma.formaPagamento.delete({
      where: { id: Number(id) },
    });
    res.send(resultPosts);
  }
}
