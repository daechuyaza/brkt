import { PrismaClient } from '@prisma/client';

import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * (prisma) 아티클 리스트 조회
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient({ log: ['query'] });

  try {
    const articles = await prisma.post.findMany({ include: { author: true, series: true } });

    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ error: err });
  } finally {
    await prisma.$disconnect();
  }
}
