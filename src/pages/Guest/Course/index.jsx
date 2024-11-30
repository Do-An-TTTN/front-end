import { useEffect, useState } from 'react'
import { FaClock } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import courseAPI from '~/api/courseAPI'
import ButtonCustom from '~/components/ui/Button'

const CoursePage = () => {
  const navigate = useNavigate()

  const handleContactClick = () => {
    navigate('/', { state: { scrollTo: 'contact' } })
  }

  const [listCourse, setListCourse] = useState([])

  const fetchData = async () => {
    try {
      const res = await courseAPI.getAllCourse()
      setListCourse(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='mt-20 bg-gray-50'>
        <div className='container mx-auto px-4 py-8'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {listCourse.map((course) => (
              <>
                <div key={course.id} className='bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105' role='article'>
                  <div className='relative h-60'>
                    <img
                      src={course.image}
                      alt={course.title}
                      className='w-full h-full object-cover object-center'
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6'
                      }}
                    />
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-bold mb-2'>{course.name}</h3>
                    <div className='flex items-center gap-2 text-gray-600 mb-2'>
                      <FaClock className='text-red-500' />
                      <span>{course.duration} Tuần</span>
                    </div>
                    <p className='text-gray-600 mb-6'>{course.title}</p>

                    <Link to='/' onClick={handleContactClick}>
                      <ButtonCustom>Đăng ký học</ButtonCustom>
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CoursePage
