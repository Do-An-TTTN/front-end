import { useState } from 'react'
import { FaStar, FaClock, FaUser } from 'react-icons/fa'
import ButtonCustom from '~/components/ui/Button'

const CoursePage = () => {
  const courses = [
    {
      id: 1,
      title: 'Advanced English Grammar',
      instructor: 'Dr. Sarah Johnson',
      duration: '12 weeks',
      description: 'Master complex grammar structures and enhance your writing skills',
      category: 'grammar',
      rating: 4.8,
      popularity: 95,
      price: 299,
      image: 'images.unsplash.com/photo-1523050854058-8df90110c9f1'
    },
    {
      id: 2,
      title: 'Business English Speaking',
      instructor: 'Prof. Michael Brown',
      duration: '8 weeks',
      description: 'Develop professional communication skills for the workplace',
      category: 'speaking',
      rating: 4.6,
      popularity: 88,
      price: 249,
      image: 'images.unsplash.com/photo-1524178232363-1fb2b075b655'
    },
    {
      id: 3,
      title: 'Vocabulary Mastery',
      instructor: 'Emma Wilson',
      duration: '6 weeks',
      description: 'Expand your vocabulary with practical exercises and real-world contexts',
      category: 'vocabulary',
      rating: 4.7,
      popularity: 92,
      price: 199,
      image: 'images.unsplash.com/photo-1456513080510-7bf3a84b82f8'
    },
    {
      id: 4,
      title: 'Vocabulary Mastery',
      instructor: 'Emma Wilson',
      duration: '6 weeks',
      description: 'Expand your vocabulary with practical exercises and real-world contexts',
      category: 'vocabulary',
      rating: 4.7,
      popularity: 92,
      price: 199,
      image: 'images.unsplash.com/photo-1456513080510-7bf3a84b82f8'
    }
  ]

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredCourses, setFilteredCourses] = useState(courses)

  const categories = ['all', 'grammar', 'speaking', 'vocabulary']

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    filterAndSortCourses(category)
  }

  const filterAndSortCourses = (category) => {
    let filtered = category === 'all' ? courses : courses.filter((course) => course.category === category)
    setFilteredCourses(filtered)
  }

  return (
    <>
      <div className='mt-20'>
        <div className='container mx-auto px-4 py-8'>
          <div className='mb-8 flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='flex flex-wrap gap-2'>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  aria-label={`Filter by ${category} courses`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredCourses.map((course) => (
              <div key={course.id} className='bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105' role='article'>
                <div className='relative h-48'>
                  <img
                    src={`https://${course.image}`}
                    alt={course.title}
                    className='w-full h-full object-cover'
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6'
                    }}
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold mb-2'>{course.title}</h3>
                  <div className='flex items-center gap-2 text-gray-600 mb-2'>
                    <FaUser className='text-red-500' />
                    <span>{course.instructor}</span>
                  </div>
                  <div className='flex items-center gap-2 text-gray-600 mb-2'>
                    <FaClock className='text-red-500' />
                    <span>{course.duration}</span>
                  </div>
                  <div className='flex items-center gap-2 text-gray-600 mb-4'>
                    <FaStar className='text-yellow-500' />
                    <span>{course.rating.toFixed(1)}</span>
                  </div>
                  <p className='text-gray-600 mb-6'>{course.description}</p>
                  <ButtonCustom>Learn More</ButtonCustom>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CoursePage
