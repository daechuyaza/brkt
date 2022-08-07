import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function main() {
  /**
   * NOTE data가 생성될 때 deleted_at은 null입니다.
   */
  prisma.$use(async (params, next) => {
    if (params.action === 'create') {
      params.args.where.deleted_at = null;
    }

    return next(params);
  });
}

main()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
