import { message, Popconfirm, Table } from 'antd'
import { useEffect, useState } from 'react'
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import pageAPI from '~/api/pageAPI'
import ButtonCustom from '~/components/ui/Button'

export default function Page() {
  const [listPages, setListPages] = useState([])
  const handleDelete = async (id) => {
    await pageAPI.deletePage(id)
    message.success('Xóa thành công')
    fetchData()
  }

  const columns = [
    {
      title: 'No',
      dataIndex: 'id'
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      render: (data) => {
        return <span className='line-clamp-1'>{data}</span>
      }
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      render: (data) => {
        return <>{new Date(data).toLocaleDateString('vi-VN')}</>
      }
    },
    {
      title: 'Actions',
      render: (data) => {
        return (
          <div className='flex gap-3'>
            <NavLink to={`/admin/update-page/${data.id}`}>
              <FaEdit className='text-2xl cursor-pointer text-yellow-500' />
            </NavLink>
            <Popconfirm placement='leftTop' title='Xác nhận xóa' description='Bạn có chắc muốn xóa?' okText='Yes' cancelText='No' onConfirm={() => handleDelete(data.id)}>
              <FaRegTrashAlt className='text-2xl cursor-pointer text-red-500' />
            </Popconfirm>
          </div>
        )
      }
    }
  ]

  const fetchData = async () => {
    try {
      const res = await pageAPI.getAllPages()
      setListPages(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='bg-white rounded-md mb-2'>
        <div className='flex justify-between p-4'>
          <h2 className='text-xl font-medium'>Page</h2>
          <NavLink to='/admin/add-page'>
            <ButtonCustom className='bg-blue-600 hover:!bg-blue-700'>Tạo trang</ButtonCustom>
          </NavLink>
        </div>
      </div>
      <Table dataSource={listPages} columns={columns} />
    </>
  )
}
