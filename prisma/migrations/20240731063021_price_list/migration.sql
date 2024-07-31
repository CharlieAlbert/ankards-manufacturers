/*
  Warnings:

  - You are about to drop the column `description` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the `DeliveryNotes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FinishedGoodStock` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Invoice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Material` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MaterialSupplier` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Orders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Quotation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `QuotationItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sales` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Stock` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Supplier` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DeliveryNotes" DROP CONSTRAINT "DeliveryNotes_orderId_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_orderId_fkey";

-- DropForeignKey
ALTER TABLE "MaterialSupplier" DROP CONSTRAINT "MaterialSupplier_materialId_fkey";

-- DropForeignKey
ALTER TABLE "MaterialSupplier" DROP CONSTRAINT "MaterialSupplier_supplierId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_quotationId_fkey";

-- DropForeignKey
ALTER TABLE "QuotationItem" DROP CONSTRAINT "QuotationItem_quotationId_fkey";

-- DropForeignKey
ALTER TABLE "Stock" DROP CONSTRAINT "Stock_materialId_fkey";

-- DropForeignKey
ALTER TABLE "Usage" DROP CONSTRAINT "Usage_materialId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "description";

-- DropTable
DROP TABLE "DeliveryNotes";

-- DropTable
DROP TABLE "FinishedGoodStock";

-- DropTable
DROP TABLE "Invoice";

-- DropTable
DROP TABLE "Material";

-- DropTable
DROP TABLE "MaterialSupplier";

-- DropTable
DROP TABLE "OrderItem";

-- DropTable
DROP TABLE "Orders";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Quotation";

-- DropTable
DROP TABLE "QuotationItem";

-- DropTable
DROP TABLE "Sales";

-- DropTable
DROP TABLE "Stock";

-- DropTable
DROP TABLE "Supplier";

-- DropTable
DROP TABLE "Usage";

-- CreateTable
CREATE TABLE "GoodsOnSale" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "sizeId" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GoodsOnSale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Size" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GoodsOnSale" ADD CONSTRAINT "GoodsOnSale_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GoodsOnSale" ADD CONSTRAINT "GoodsOnSale_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Size"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
