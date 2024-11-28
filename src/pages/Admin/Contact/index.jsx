import { message, Modal, Popconfirm, Table } from 'antd'
import { useEffect, useState } from 'react'
import { FaEye, FaRegTrashAlt } from 'react-icons/fa'
import contactAPI from '~/api/contactAPI'

export default function Contact() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [dataSource, setDataSource] = useState([])
  const [data, setData] = useState({})

  const handleDelete = async (_id) => {
    await contactAPI.deleteContact(_id)
    message.success('Xóa thành công')
    fetchData()
  }

  const columns = [
    {
      title: 'Tên',
      dataIndex: 'name'
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone'
    },
    {
      title: 'Lời nhắn',
      dataIndex: 'message',
      render: (data) => <span className='line-clamp-1'>{data}</span>
    },
    {
      title: 'Actions',
      render: (data) => {
        return (
          <div className='flex gap-3'>
            <FaEye
              className='text-2xl cursor-pointer text-blue-500'
              onClick={() => {
                setIsOpenModal(true)
                setData(data)
                // setActionModal('UPDATE')
              }}
            />
            <Popconfirm placement='leftTop' title='Xác nhận xóa' description='Bạn có chắc muốn xóa?' okText='Yes' cancelText='No' onConfirm={() => handleDelete(data._id)}>
              <FaRegTrashAlt className='text-2xl cursor-pointer text-red-500' />
            </Popconfirm>
          </div>
        )
      }
    }
  ]

  const fetchData = async () => {
    try {
      const res = await contactAPI.getAllContact()
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
      <Table columns={columns} dataSource={dataSource} />
      <Modal title='Lời nhắn' open={isOpenModal} onCancel={() => setIsOpenModal(false)}>
        <p>{data?.message}</p>
      </Modal>
    </>
  )
}
