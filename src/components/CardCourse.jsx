import { FaClock, FaMoneyBillAlt } from 'react-icons/fa'
import { formatPriceVND } from '~/utils/formatPriceVND'

export const CardCourse = ({ course }) => {
  return (
    <div key={course.id} className='bg-white rounded-lg shadow-lg overflow-hidden min-w-[250px] md:min-w-[350px] transform hover:scale-105 cursor-pointer transition duration-300'>
      <img src={course.image} alt={course.name} className='w-full h-40 md:h-64 object-cover' />
      <div className='p-4 md:p-6'>
        <p className='text-xs font-medium text-blue-500'>{course.category?.title}</p>
        <p className='text-lg md:text-2xl font-bold my-2'>{course.name}</p>
        <div className='mb-2 flex gap-4'>
          <p className='flex items-center gap-2'>
            <FaClock className='text-red-500' />
            <span>{course.duration} Tuần</span>
          </p>
          <p className='flex items-center gap-2'>
            <FaMoneyBillAlt className='text-red-500' />
            <span>{formatPriceVND(course.price)}</span>
          </p>
        </div>
        <p className='text-gray-600 line-clamp-4 md:line-clamp-5'>{course.description}</p>
      </div>
    </div>
  )
}
