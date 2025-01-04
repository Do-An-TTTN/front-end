import { Image } from 'antd'
import { SlCalender } from 'react-icons/sl'
import { FiUser } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

export default function NewsItem({ item }) {
  return (
    <div className='flex flex-col md:flex-row gap-4 border-b border-gray-200 pb-4 mb-10 last:border-b-0 last:mb-0 last:pb-0'>
      <NavLink to={`/news/${item.id}`} className='md:basis-5/12 lg:basis-1/4 shrink-0'>
        <Image src={item?.image} preview={false} className='!h-40 md:!h-48 lg:!h-48 w-full object-cover rounded-lg' />
      </NavLink>
      <div className='md:flex-1 max-w-full'>
        <p className='w-full text-2xl font-bold mb-2 text-gray-800 hover:text-blue-600 transition-colors'>
          <NavLink to={`/news/${item.id}`}>{item?.title}</NavLink>
        </p>
        <p className='text-gray-600 mb-4 break-all'>{item?.description}</p>
        <div className='flex items-center text-sm text-gray-500'>
          <div className='flex items-center mr-4'>
            <FiUser className='w-4 h-4 mr-1' />
            <span>{item?.user?.name}</span>
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
