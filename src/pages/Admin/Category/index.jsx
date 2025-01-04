import { Button, Input, message, Modal, Popconfirm, Table } from 'antd'
import { useEffect, useState } from 'react'
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa'
import cateAPI from '~/api/cateAPI'

export default function Category() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [action, setAction] = useState('CREATE')
  const [dataSource, setDataSource] = useState([])
  const [data, setData] = useState({})

  const handleDelete = async (id) => {
    await cateAPI.deleteCate(id)
    message.success('Xóa thành công')
    fetchData()
  }

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id'
    },
    {
      title: 'Thể loại khóa học',
      dataIndex: 'title'
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      render: (data) => <span className='line-clamp-1'>{new Date(data).toLocaleDateString('vi-VN')}</span>
    },
    {
      title: 'Actions',
      render: (data) => {
        return (
          <div className='flex gap-3'>
            <FaEdit
              className='text-2xl cursor-pointer text-blue-500'
              onClick={() => {
                setIsOpenModal(true)
                setData(data)
                setAction('UPDATE')
              }}
            />
            <Popconfirm placement='leftTop' title='Xác nhận xóa' description='Bạn có chắc muốn xóa?' okText='Yes' cancelText='No' onConfirm={() => handleDelete(data.id)}>
              <FaRegTrashAlt className='text-2xl cursor-pointer text-red-500' />
            </Popconfirm>
          </div>
        )
      }
    }
  ]

  const handleOk = async (id) => {
    try {
      const res = action === 'CREATE' ? await cateAPI.createCate(data) : await cateAPI.updateCate(id, data)
      message.success(res.message)
      setData({})
      setIsOpenModal(false)
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }

  const fetchData = async () => {
    try {
      const res = await cateAPI.getAllCate()
      setDataSource(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <Button
        type='primary'
        className='mb-2'
        onClick={() => {
          setAction('CREATE')
          setIsOpenModal(true)
        }}
      >
        Tạo thể loại
      </Button>
      <Table columns={columns} dataSource={dataSource} />
      <Modal
        title={action === 'CREATE' ? 'Thêm thể loại' : 'Sửa thể loại'}
        open={isOpenModal}
        onCancel={() => {
          setIsOpenModal(false)
          setData({})
        }}
        onOk={() => handleOk(data?.id)}
      >
        <Input
          value={data?.title}
          onChange={(e) => {
            setData((prev) => {
              return { ...prev, title: e.target.value }
            })
          }}
        />
      </Modal>
    </>
  )
}
