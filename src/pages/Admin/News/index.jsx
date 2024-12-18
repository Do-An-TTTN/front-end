import { Image, message, Popconfirm, Table } from 'antd'
import { useEffect, useState } from 'react'
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { format } from 'date-fns'

import newsAPI from '~/api/newsAPI'
import ButtonCustom from '~/components/ui/Button'

export default function AdminNews() {
  const [page, setPage] = useState(1)

  const [listNews, setListNews] = useState([])

  const handleDelete = async (id) => {
    await newsAPI.deleteNews(id)
    message.success('Xóa thành công')
    fetchData()
  }

  const columns = [
    {
      title: 'No',
      key: 'index',
      width: '20px',
      render: (text, record, index) => (page - 1) * 20 + index + 1
    },
    {
      title: 'Thumbnail',
      dataIndex: 'image',
      render: (data) => {
        return <Image preview={false} width={80} src={data} />
      }
    },
    {
      title: 'Tên bài viết',
      dataIndex: 'title',
      render: (data) => {
        return <span className='line-clamp-1'>{data}</span>
      }
    },
    {
      title: 'Tác giả',
      dataIndex: 'User',
      render: (User) => {
        return <>{User.name}</>
      }
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      render: (data) => {
        return <>{format(data, 'dd-MM-yyyy HH:mm:ss')}</>
      }
    },
    {
      title: 'Actions',
      render: (data) => {
        return (
          <div className='flex gap-3'>
            <NavLink to={`/admin/update-news/${data.id}`}>
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
      const res = await newsAPI.getAllNews()
      setListNews(res.data)
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
          <h2 className='text-xl font-medium'>News</h2>
          <NavLink to='/admin/add-news'>
            <ButtonCustom className='bg-blue-600 hover:!bg-blue-700'>Create News</ButtonCustom>
          </NavLink>
        </div>
        {/* <NewContent /> */}
      </div>
      <Table dataSource={listNews} columns={columns} />
    </>
  )
}
