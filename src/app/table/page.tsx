import prisma from '@/src/lib/db'
import TableComponent from './table'
import { Prisma } from '@prisma/client'
import { DataType } from './types'

type FinishedGoods = {
  batchNumber: string
  name: string
  unit: string
  pricePerUnitFormatted: string
  color: string | null
  finish: string | null
}

export default async function TablePage() {
  const rawData: FinishedGoods[] = await prisma.finishedGoods.findMany()

  const formattedData: DataType[] = rawData.map(item => ({
    batchNumber: item.batchNumber,
    name: item.name,
    unit: item.unit,
    pricePerUnitFormatted: item.pricePerUnitFormatted,
    color: item.color ?? null,
    finish: item.finish ?? null
  }))
  return <TableComponent data={formattedData} />
}
