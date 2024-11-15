import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";

const router = Router();
const prisma = new PrismaClient();

router.get("/role", async (req: Request, res: Response) => {
  let take = req.query.take;
  let skip = req.query.skip;
  const role = await prisma.role.findMany({
    take: Number(take ?? 10),
    skip: Number(skip ?? 1),
  });
  res.status(200).json({
    data: role,
  });
});

router.post("/role", async (req: Request, res: Response) => {
  let roleName = req.body.role_name;

  const role = await prisma.role.create({
    data: {
      roleName: roleName,
    },
  });

  // for (let index = 0; index < 1; index++) {
  //   const role = await prisma.role.create({
  //     data: {
  //       roleName: roleName,
  //     },
  //   });
  // }

  res.status(201).json({
    data: role,
  });
});

export default router;
