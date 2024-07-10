import prisma from '@/src/lib/db'

const tableHead = ['name', 'unit', 'price', 'color']

export default async function ViewProducts() {
  const products = await prisma.finishedGoods.findMany()

  return (
    <main className='overflow-x-auto'>
      <table>
        <thead>
          {tableHead.map((head, index) => (
            <th key={index} className='capitalize'>
              {head}
            </th>
          ))}
        </thead>
        <tbody className='divide-y'>
          {products.map(product => (
            <tr key={product.id} className=''>
              <td>{product.name || 'null'}</td>
              <td>{product.unit || 'null'}</td>
              <td>{product.pricePerUnit || 'null'}</td>
              <td>{product.color || 'null'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
