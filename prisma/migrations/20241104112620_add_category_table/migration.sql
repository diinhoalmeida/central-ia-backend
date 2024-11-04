/*
  Warnings:

  - You are about to drop the column `category` on the `ias` table. All the data in the column will be lost.
  - Added the required column `image` to the `ias` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ias" DROP COLUMN "category",
ADD COLUMN     "image" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");
