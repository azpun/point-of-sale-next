/*
  Warnings:

  - You are about to drop the column `ordersId` on the `Menu` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_ordersId_fkey";

-- AlterTable
ALTER TABLE "Menu" DROP COLUMN "ordersId",
ADD COLUMN     "description" TEXT;
