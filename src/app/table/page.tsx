import prisma from '@/src/lib/db'
import TableComponent from './table'
import type { GetServerSideProps } from 'next'
import { Table } from 'flowbite-react'
import { useAuth } from '@/src/hooks/useAuth'

interface DataType {
  batchNumber: string
  name: string
  unit: string
  price: string
  color: string | null
  finish: string | null
}

export default async function TablePage({ data }: { data: DataType[] }) {
  // useAuth()
  const rawData = await prisma.finishedGoods.findMany()

  const formattedData: DataType[] = rawData.map(item => ({
    batchNumber: item.batchNumber,
    name: item.name,
    unit: item.unit,
    price: item.pricePerUnitFormatted,
    color: item.color,
    finish: item.finish
  }))
  return <TableComponent data={formattedData} />
}
