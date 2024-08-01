/*
  Warnings:

  - You are about to drop the column `name` on the `Size` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,categoryId,sizeId]` on the table `GoodsOnSale` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[size]` on the table `Size` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `size` to the `Size` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Size" DROP COLUMN "name",
ADD COLUMN     "size" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "GoodsOnSale_name_categoryId_sizeId_key" ON "GoodsOnSale"("name", "categoryId", "sizeId");

-- CreateIndex
CREATE UNIQUE INDEX "Size_size_key" ON "Size"("size");
