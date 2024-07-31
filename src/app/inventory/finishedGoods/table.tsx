// components/table.tsx
'use client'

import React, { useState } from 'react'
import { Table, Input } from 'antd'
import type { TableProps } from 'antd'
import { DataType } from './types'

const { Search } = Input

export interface ClientTableProps {
  data: DataType[]
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Batch Number',
    dataIndex: 'batchNumber'
  },
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Unit',
    dataIndex: 'unit'
  },
  {
    title: 'Price',
    className: 'column-money',
    dataIndex: 'pricePerUnitFormatted'
  },
  {
    title: 'Color',
    dataIndex: 'color'
  },
  {
    title: 'Finish',
    dataIndex: 'finish'
  }
]

export default function TableComponent({ data }: ClientTableProps) {
  const [filteredData, setFilteredData] = useState(data)
  const [searchText, setSearchText] = useState('')

  const handleSearch = (value: string) => {
    setSearchText(value)
    const searchedData = data.filter(
      item =>
        item.batchNumber.toLowerCase().includes(value.toLowerCase()) ||
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.unit.toLowerCase().includes(value.toLowerCase()) ||
        item.pricePerUnitFormatted
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        (item.color?.toLowerCase() ?? '').includes(value.toLowerCase()) ||
        (item.finish?.toLowerCase() ?? '').includes(value.toLowerCase())
    )
    setFilteredData(searchedData)
  }

  return (
    <div>
      <Search
        placeholder='Search table'
        value={searchText}
        onChange={e => handleSearch(e.target.value)}
        style={{ marginBottom: 20, width: 300 }}
      />
      <Table
        columns={columns}
        dataSource={filteredData}
        bordered
        title={() => 'Header'}
        footer={() => 'Footer'}
      />
    </div>
  )
}
