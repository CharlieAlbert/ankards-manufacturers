'use client'

import { Button, Form, Input, InputNumber, Select, message } from 'antd'
import { createGood } from '@/src/actions/finished-goods'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const units = ['Litres', 'Kilograms', 'Pieces', 'N/A']
const finish = ['Matte', 'Vinyl', 'Gloss', 'N/A']

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!'
  },
  number: {
    range: '${label} must not be below ${min}'
  }
}
/* eslint-enable no-template-curly-in-string */

const onFinish = async (values: any) => {
  console.log(values)
  try {
    const formData = new FormData()
    Object.keys(values).forEach(key => {
      formData.append(key, values[key])
    })
    await createGood(formData)
    console.log('Success:', 'Product added successfully')
    message.success('Product added successfully!')
  } catch (error) {
    console.error('Error:', error)
    message.error('Failed to add product. Try again later')
  }
}

export default function AddFinishedGoods() {
  return (
    <main className='m-2 flex flex-col items-center justify-center'>
      <Form
        layout='vertical'
        name='nest-messages'
        onFinish={onFinish}
        // style={{ minWidth: 300, maxWidth: 600 }}
        validateMessages={validateMessages}
        className='flex w-[350px] flex-col px-4 py-5'
      >
        <Form.Item name='name' label='Name' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='description' label='Description'>
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label='Units of Measurement'
          name='unit'
          rules={[{ required: true }]}
        >
          <Select>
            {units.map((unit, index) => (
              <Select.Option key={index} value={unit}>
                {unit}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name='price'
          label='Price per Unit'
          rules={[{ type: 'number', min: 0, max: 1000000, required: true }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name='color' label='Color'>
          <Input />
        </Form.Item>

        <Form.Item label='Finish' name='finish'>
          <Select>
            {finish.map((fin, index) => (
              <Select.Option key={index} value={fin}>
                {fin}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <button className='rounded-sm bg-blue-500 p-2 text-white'>
          Add Product
        </button>
      </Form>
    </main>
  )
}
