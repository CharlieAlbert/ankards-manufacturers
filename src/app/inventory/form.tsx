import React from 'react'
import { Button, Form, Input, InputNumber, Select } from 'antd'
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

const onFinish = (values: any) => {
  console.log(values)
}

export default function AddFinishedGoods() {
  return (
    <main>
      <Form
        action={createGood}
        {...layout}
        name='nest-messages'
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
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

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type='primary' htmlType='submit'>
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </main>
  )
}
