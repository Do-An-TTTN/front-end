import { Popconfirm } from 'antd'
import { FaRegTrashAlt } from 'react-icons/fa'

export default function Item({ banner, onDelete, confirm }) {
  return (
    <div className='border-2 rounded-md'>
      <div className='flex items-center gap-2' key={banner.id}>
        <img src={banner.url} alt='image' className='w-[70%] h-[100px] object-cover rounded-md' />
        <span className='text-2xl cursor-pointer text-red-600 flex-1 pl-2'>
          {confirm ? (
            <Popconfirm placement='leftTop' title='Xác nhận xóa' description='Bạn có chắc muốn xóa?' okText='Yes' cancelText='No' onConfirm={() => onDelete(banner.id)}>
              <FaRegTrashAlt />
            </Popconfirm>
          ) : (
            <FaRegTrashAlt onClick={() => onDelete(banner.id)} />
          )}
        </span>
      </div>
    </div>
  )
}
