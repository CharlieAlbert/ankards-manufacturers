import prisma from '@/src/lib/db'
import TableComponent from './table'
import { Prisma } from '@prisma/client'
import { DataType } from './types'


export default async function TablePage() {
  // useAuth()
  const rawData: DataType[] =
    await prisma.finishedGoods.findMany()

  const formattedData: DataType[] = rawData.map(item => ({
    batchNumber: item.batchNumber,
    name: item.name,
    unit: item.unit,
    pricePerUnitFormatted: item.pricePerUnitFormatted,
    color: item.color ?? '',
    finish: item.finish ?? ''
  }))
  return <TableComponent data={formattedData} />
}
