'use server'

import { message } from 'antd'
import prisma from '../../lib/db'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { CallTracker } from 'assert'

export async function AddGoods(formData: FormData) {
  const name = formData.get('name') as string
  const category = formData.get('category') as string
  const price = parseFloat(formData.get('price') as string)
  const size = formData.get('size') as string

  const categoryRecord = await prisma.category.create({
    data: {
      name: category
    }
  })

  const sizeRecord = await prisma.size.create({
    data: {
      size: size
    }
  })

  await prisma.goodsOnSale.create({
    data: {
      name,
      categoryId: categoryRecord.id,
      sizeId: sizeRecord.id,
      price
    }
  })

  await prisma.size.create({
    data: {
      size: size
    }
  })

  await prisma.category.create({
    data: {
      name: category
    }
  })

  revalidatePath('/new/goods-for-sale')
}
