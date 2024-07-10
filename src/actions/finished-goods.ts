'use server'

import { revalidatePath } from 'next/cache'
import prisma from '../lib/db'

export async function createGood(formData: FormData) {
  const price = formData.get('price')
  if (price === null) {
    throw new Error('pricePerUnit is required')
  }

  const name = formData.get('name') as string
  const description = (formData.get('description') as string) || 'No desc'
  const unit = formData.get('unit') as string
  const pricePerUnit = formData.get('price') as string
  const color = (formData.get('color') as string) || 'N/A'
  const finish = (formData.get('finish') as string) || 'N/A'

  const currentDate = new Date()
  const currentYear = currentDate.getFullYear().toString().slice(-2)
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')

  //fetching the last updated finishedGood
  const lastGood = await prisma.finishedGoods.findFirst({
    where: {
      batchNumber: {
        startsWith: `${currentYear}${month}`
      }
    },
    orderBy: {
      createdAt: 'desc'
    },
    select: {
      batchNumber: true
    }
  })

  //updating the sequence from the previous finishedGood
  let sequence = 1
  if (lastGood && lastGood.batchNumber) {
    const lastSequence = parseInt(lastGood.batchNumber.slice(-2), 10)
    sequence = lastSequence + 1
  }

  const batchNumber = `${currentYear}${month}${sequence.toString().padStart(3, '00')}`

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(parseFloat(pricePerUnit))

  await prisma.finishedGoods.create({
    data: {
      batchNumber,
      name,
      description,
      unit,
      pricePerUnit: formattedPrice,
      color,
      finish
    }
  })

  revalidatePath('/inventory/finishedGoods')
}
