import { PrismaClient } from '@prisma/client';

import type { CreateCommentDto } from '../data/dto/CreateCommentDto';
import type { NextApiResponse } from 'next';

export default async function handler(req: CreateCommentDto, res: NextApiResponse) {
  const prisma = new PrismaClient({ log: ['query'] });
  const { articleId, userId, commentText } = req.body;

  try {
    const article = await prisma.post.findUnique({
      where: {
        id: articleId
      }
    });

    if (!article) {
      // TODO error handling
      throw new Error(`Article not found where id: ${articleId}`);
    }

    const comment = await prisma.comment.create({
      data: {
        userId,
        postId: articleId,
        comment: commentText
      }
    });

    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json({ error: err });
  } finally {
    await prisma.$disconnect();
  }
}
