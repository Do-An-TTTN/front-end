import { Image, message, Popconfirm, Table } from 'antd'
import { useEffect, useState } from 'react'
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa'
import cateAPI from '~/api/cateAPI'

import courseAPI from '~/api/courseAPI'
import ButtonCustom from '~/components/ui/Button'
import ModalCourse from '~/pages/Admin/Course/ModalCourse'
import { formatPriceVND } from '~/utils/formatPriceVND'

const Course = () => {
  const [isModalCourse, setIsModalCourse] = useState(false)
  const [actionModal, setActionModal] = useState('CREATE')
  const [listCourse, setListCourse] = useState([])
  const [listCate, setListCate] = useState([])
  const [dataUpdate, setDataUpdate] = useState({})

  const handleDelete = async (_id) => {
    await courseAPI.deleteCourse(_id)
    message.success('Xóa thành công')
    fetchData()
  }

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      render: (data) => {
        return <Image width={80} src={data} />
      }
    },
    {
      title: 'Tên khóa',
      dataIndex: 'name'
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      render: (value) => {
        return <b>{formatPriceVND(value)}</b>
      }
    },
    {
      title: 'Thể loại',
      dataIndex: 'categoryId',
      render: (data) => {
        return <span>{data.title}</span>
      }
    },
    {
      title: 'Actions',
      render: (data) => {
        return (
          <div className='flex gap-3'>
            <FaEdit
              className='text-2xl cursor-pointer text-yellow-500'
              onClick={() => {
                setIsModalCourse(true)
                setDataUpdate(data)
                setActionModal('UPDATE')
              }}
            />
            <Popconfirm placement='leftTop' title='Xác nhận xóa' description='Bạn có chắc muốn xóa?' onConfirm={() => handleDelete(data._id)} okText='Yes' cancelText='No'>
              <FaRegTrashAlt className='text-2xl cursor-pointer text-red-500' />
            </Popconfirm>
          </div>
        )
      }
    }
  ]
  const fetchData = async () => {
    try {
      const res = await courseAPI.getAllCourse()
      setListCourse(res.data)
      const resCate = await cateAPI.getAllCate()
      setListCate(resCate.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <ButtonCustom
        className='mb-2 bg-blue-500 hover:!bg-blue-600'
        type='primary'
        normal
        onClick={() => {
          setIsModalCourse(true)
        }}
      >
        Tạo khóa học
      </ButtonCustom>
      <Table columns={columns} dataSource={listCourse} />
      <ModalCourse
        isModalCourse={isModalCourse}
        listCate={listCate}
        setIsModalCourse={setIsModalCourse}
        fetchData={fetchData}
        action={actionModal}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
      />
    </>
  )
}
export default Course
