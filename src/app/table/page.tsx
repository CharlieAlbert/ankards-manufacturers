import prisma from '@/src/lib/db'
import TableComponent from './table'
import { Prisma } from '@prisma/client'
import { DataType } from './types'

export default async function TablePage() {
  const rawData = await prisma.finishedGoods.findMany()

  const formattedData = rawData.map(item => ({
    batchNumber: item.batchNumber,
    name: item.name,
    unit: item.unit,
    pricePerUnitFormatted: item.pricePerUnitFormatted,
    color: item.color ?? null,
    finish: item.finish ?? null
  }))
  return <TableComponent data={formattedData} />
}
