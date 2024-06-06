-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_memberId_fkey";

-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "memberId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;
