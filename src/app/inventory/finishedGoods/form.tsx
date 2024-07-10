import { createGood } from '@/src/actions/finished-goods'
import { Label } from 'flowbite-react'

const units = ['Litres', 'Kilograms', 'Pieces', 'N/A']
const finish = ['Matte', 'Vinyl', 'Gloss', 'N/A']

export default function FinishedGoods() {
  return (
    <main className='m-2 flex flex-col items-center justify-center'>
      <form
        action={createGood}
        className='flex w-[350px] flex-col rounded-md border border-blue-200 px-4 py-5'
      >
        <div className='mb-2 block'>
          <Label htmlFor='name' value='Name' />
        </div>
        <input
          id='name'
          name='name'
          type='text'
          placeholder='Enter name of product'
          className='mb-4 rounded-sm border border-black/15 px-2 py-1'
          required
        />

        <div className='mb-2 block'>
          <Label htmlFor='comment' value='Description (Optional)' />
        </div>
        <textarea
          id='comment'
          name='description'
          placeholder='Enter description'
          className='mb-4 rounded-sm border border-black/15 px-2 py-1'
          rows={4}
        />

        <div className='mb-2 block'>
          <Label htmlFor='unit' value='Unit of Measurement' />
        </div>
        <select
          id='unit'
          name='unit'
          className='mb-4 rounded-sm border border-black/15 px-2 py-1'
          required
        >
          {units.map((unit, index) => (
            <option key={index}>{unit}</option>
          ))}
        </select>

        <div className='mb-2 block'>
          <Label htmlFor='price' value='Price per Unit' />
        </div>
        <input
          id='price'
          name='price'
          type='number'
          min='0'
          step='100'
          placeholder='Enter price per unit'
          className='mb-4 rounded-sm border border-black/15 px-2 py-1'
          required
        />

        <div className='mb-2 block'>
          <Label htmlFor='color' value='Color' />
        </div>
        <input
          id='color'
          name='color'
          type='text'
          placeholder='Enter color of product'
          className='mb-4 rounded-sm border border-black/15 px-2 py-1'
        />

        <div className='mb-2 block'>
          <Label htmlFor='finish' value='Finish' />
        </div>
        <select
          id='finish'
          name='finish'
          className='mb-4 rounded-sm border border-black/15 px-2 py-1'
        >
          {finish.map((fin, index) => (
            <option key={index}>{fin}</option>
          ))}
        </select>

        <button className='mt-4 rounded-sm bg-blue-500 py-2 text-white'>
          Add product
        </button>
      </form>
    </main>
  )
}
