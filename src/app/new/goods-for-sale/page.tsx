'use client'

import { Form, Input, InputNumber, Select, message } from 'antd'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AddGoods } from '../../../api/goods-for-sale/goods'

const category = [
  'emulsion',
  'gloss',
  'undercoat',
  'primer',
  'road-marking',
  'aluminium & bituminous',
  'thinners',
  'wood-varnish',
  'roof'
]

const size = [20, 4, 1]

export default function AddGoodsPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const onFinish = async (values: any) => {
    setLoading(true)
    console.log(values)

    try {
      const formData = new FormData()
      Object.keys(values).forEach(key => {
        formData.append(key, values[key])
      })
      await AddGoods(formData)
      console.log('Goods registered successfully')
      message.success('Goods registered successfully!')
      router.refresh()
    } catch (error) {
      console.error('Error:', error)
      message.error('Failed to register product. Try again later')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className='m-2 flex h-[80vh] flex-col items-center justify-center'>
      <Form
        layout='vertical'
        name='nest-messages'
        className='flex w-[350px] flex-col px-4 py-5'
        onFinish={onFinish}
      >
        <Form.Item
          name='name'
          label='Name'
          rules={[{ required: true, message: 'Name is required!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='category'
          label='Category'
          rules={[{ required: true, message: 'Category is required!' }]}
        >
          <Select className='capitalize'>
            {category.map((cat, index) => (
              <Select.Option key={index} value={cat} className='capitalize'>
                {cat}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name='price'
          label='Price'
          rules={[
            {
              type: 'number',
              min: 0,
              max: 1000000,
              required: true,
              message: 'Price is required!'
            }
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name='size'
          label='Size'
          rules={[{ required: true, message: 'Size is required!' }]}
        >
          <Select>
            {size.map((siz, index) => (
              <Select.Option key={index} value={siz}>
                {`${siz} LTRS`}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <button
          className='rounded-sm bg-blue-500 p-2 text-white'
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add product'}
        </button>
      </Form>
    </main>
  )
}
