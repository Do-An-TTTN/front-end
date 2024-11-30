import { Image, Popconfirm, Table } from 'antd'
import { useEffect, useState } from 'react'
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { format } from 'date-fns'

import newsAPI from '~/api/newsAPI'
import ButtonCustom from '~/components/ui/Button'

export default function News() {
  const [paginationSize, setPaginationSize] = useState(20) //your current default pagination size 25
  const [page, setPage] = useState(1)

  const [listNews, setListNews] = useState([])

  const columns = [
    {
      title: 'No',
      key: 'index',
      width: '20px',
      render: (text, record, index) => (page - 1) * paginationSize + index + 1
    },
    {
      title: 'Thumbnail',
      dataIndex: 'image',
      render: (data) => {
        return <Image width={80} src={data} />
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
      dataIndex: 'writerId',
      render: (writerId) => {
        return <>{writerId.name}</>
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
            <NavLink to={`/admin/update-news/${data._id}`}>
              <FaEdit className='text-2xl cursor-pointer text-yellow-500' />
            </NavLink>
            <Popconfirm placement='leftTop' title='Xác nhận xóa' description='Bạn có chắc muốn xóa?' okText='Yes' cancelText='No'>
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
