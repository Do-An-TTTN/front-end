import { Image } from 'antd'
import { SlCalender } from 'react-icons/sl'
import { FiUser } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

export default function NewsItem({ item }) {
  return (
    <div className='flex flex-col md:flex-row gap-4 border-b border-gray-200 pb-4 mb-4 last:border-b-0 last:mb-0 last:pb-0'>
      <NavLink to={`/news/${item.id}`}>
        <Image src={item?.image} width={300} height={200} preview={false} className='w-full h-48 object-cover rounded-lg' />
      </NavLink>
      <div className=''>
        <h2 className='w-full text-xl font-bold mb-2 text-gray-800 hover:text-blue-600 transition-colors'>
          <NavLink to={`/news/${item.id}`}>{item?.title}</NavLink>
        </h2>
        <p className='text-gray-600 mb-4'>{item?.description}</p>
        <div className='flex items-center text-sm text-gray-500'>
          <div className='flex items-center mr-4'>
            <FiUser className='w-4 h-4 mr-1' />
            <span>{item?.User?.name}</span>
          </div>
          <div className='flex items-center'>
            <SlCalender className='w-4 h-4 mr-1' />
            <span>{new Date(item?.createdAt).toLocaleDateString('vi-VN')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
