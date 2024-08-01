/*
  Warnings:

  - A unique constraint covering the columns `[name,categoryId,sizeId]` on the table `GoodsOnSale` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "GoodsOnSale_categoryId_sizeId_key";

-- CreateIndex
CREATE UNIQUE INDEX "GoodsOnSale_name_categoryId_sizeId_key" ON "GoodsOnSale"("name", "categoryId", "sizeId");
