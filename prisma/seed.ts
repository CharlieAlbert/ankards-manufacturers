import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const initialFinishedGood = [
  {
    batchNumber: '2407001',
    name: 'Covermatt',
    description: 'Undercoat Paint',
    unit: 'Litres',
    pricePerUnit: 3500,
    pricePerUnitFormatted: '3500',
    color: 'white',
    finish: 'Matte'
  }
]

const initialUser = [
  {
    username: 'Ankards',
    hashedPassword: '4yrr7tjddwhr77r8t'
  }
]

async function main() {
  console.log(`Start Seeding ...`)

  for (const finishedGood of initialFinishedGood) {
    const newFinishedGood = await prisma.finishedGoods.create({
      data: finishedGood
    })
    console.log(
      `Created finishedGood with id: ${newFinishedGood.id} and batch number: ${newFinishedGood.batchNumber}`
    )
  }

  for (const user of initialUser) {
    const newUser = await prisma.user.create({
      data: user
    })
    console.log(`Created user: ${newUser.username})`)
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
