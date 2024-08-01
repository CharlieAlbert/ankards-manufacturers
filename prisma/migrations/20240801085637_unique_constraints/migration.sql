/*
  Warnings:

  - A unique constraint covering the columns `[categoryId,sizeId]` on the table `GoodsOnSale` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Category_name_key";

-- DropIndex
DROP INDEX "GoodsOnSale_name_categoryId_sizeId_key";

-- DropIndex
DROP INDEX "Size_size_key";

-- CreateIndex
CREATE UNIQUE INDEX "GoodsOnSale_categoryId_sizeId_key" ON "GoodsOnSale"("categoryId", "sizeId");
