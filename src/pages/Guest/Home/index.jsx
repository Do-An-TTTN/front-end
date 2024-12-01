import { useState, useEffect } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import { useLocation } from 'react-router-dom'
import Contact from '~/components/Contact'
import ButtonCustom from '~/components/ui/Button'

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false)

  const programs = [
    {
      id: 1,
      title: 'Tiếng Anh thiếu nhi',
      description: 'Xây dựng nền tảng tiếng Anh vững chắc ngay khi còn nhỏ cho bé.',
      features: [
        'Luyện phát âm giọng chuẩn',
        'Ôn luyện ngữ pháp theo sách giáo khoa ở trường',
        'Phát huy toàn diện 4 kỹ năng nghe - nói - đọc - viết',
        'Đảm bảo chuẩn đầu ra của Đại học Cambridge'
      ],
      image: 'tienganhthieunhi.jpg'
    },
    {
      id: 2,
      title: 'IELTS',
      description: 'Chuẩn bị cho kỳ thi IELTS với sự hướng dẫn tận tình từ đội ngũ giáo viên giàu kinh nghiệm',
      features: [
        'Đảm bảo chuẩn đầu ra IELTS từ 6.',
        'Luyện phát âm với giáo viên bản xứ',
        'Phát huy toàn diện 4 kỹ năng nghe - nói - đọc - viết',
        'Tham gia các Mock Test để đánh giá kỹ năng'
      ],
      image: 'ielts.jpg'
    },
    {
      id: 3,
      title: 'PTE',
      description: 'Cách nhanh hơn và công bằng hơn để chứng minh trình độ tiếng Anh của bạn. Nhận kết quả chỉ trong 48 giờ.',
      features: ['100% học với giáo viên bản xứ', 'Học online hoặc trực tiếp tại trung tâm', 'Đảm bảo chuẩn đầu ra như cam kết'],
      image: 'PTE.jpg'
    }
  ]

  const events = [
    {
      id: 1,
      title: 'Khai giảng lớp tiếng Anh thiếu nhi',
      image: 'sukientienganhthieunhi.jpg',
      date: '2024-02-12',
      description: 'Khai giảng các lớp tiếng Anh thiếu nhi dành cho các bé từ 5-11 tuổi'
    },
    {
      id: 2,
      title: 'Lễ khai giảng lớp tiếng Đức',
      image: 'khaigiang.jpg',
      date: '2024-12-10',
      description: 'Khai giảng lớp tiếng Đức'
    }
  ]

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 700) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo === 'contact') {
      const section = document.getElementById('contact')
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  return (
    <div className='font-sans'>
      {/* Hero Section */}
      <section className='relative h-[500px] mt-16'>
        {' '}
        <div className='absolute inset-0'>
          <img src='/images/hero.jpg' alt='English Learning Environment' className='w-full h-full object-contain' />
          <div className='absolute inset-0 bg-black bg-opacity-10'></div>
        </div>
      </section>

      <section className='GT section flex items-center justify-center min-h-screen bg-gray-100' id='GT'>
        <div className='container max-w-5xl text-center p-3'>
          <h1 className='text-4xl mb-10 font-bold text-red-600'>Trung tâm Anh ngữ Star xin chào bạn</h1>
          <div className='intro-content flex items-center justify-center space-x-4'>
            <img src='/images/taytrai.png' alt='Bàn tay bên trái' className='hand left-hand w-1/3 h-auto' />
            <img className='intro-image w-1/2 h-auto' src='/images/ThuNgoStar.png' alt='Giới Thiệu Image' onClick='openModal(this)' />
            <img src='/images/tayphai.png' alt='Bàn tay bên phải' className='hand right-hand w-1/3 h-auto' />
          </div>
        </div>
      </section>

      <section className='bg-gray-50 py-12'>
        <div className='container mx-auto px-4'>
          {/* Section Heading */}
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-red-600'>Anh văn Thiếu nhi</h1>
          </div>

          {/* Grid Layout for Images */}
          <div className='intro-content flex items-center justify-center space-x-4 mx-10'>
            <img className='intro-image w-1/2 h-auto' src='/images/chitietchuongtrinh.jpg' alt='Chi tiết chương trình' onClick='openModal(this)' />
            <img className='intro-image w-1/2 h-auto' src='/images/sukientienganhthieunhi.jpg' alt='Khai giảng lớp tiếng Anh thiếu nhi' onClick='openModal(this)' />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-16 text-red-600'>Chương trình của chúng tôi</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {programs.map((program) => (
              <div key={program.id} className='bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300'>
                <img src={`/images/${program.image}`} alt={program.title} className='w-full h-48 object-cover' />
                <div className='p-6'>
                  <h3 className='text-2xl font-bold mb-4'>{program.title}</h3>
                  <p className='text-gray-600 mb-4'>{program.description}</p>
                  <ul className='mb-6'>
                    {program.features.map((feature, index) => (
                      <li key={index} className='flex items-center mb-2'>
                        <span className='w-2 h-2 bg-red-600 rounded-full mr-2'></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <ButtonCustom>Xem chi tiết</ButtonCustom>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-16 text-red-600'>Sự kiện sắp tới</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {events.map((event) => (
              <div key={event.id} className='bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105'>
                {/* Image Section */}
                <img src={`/images/${event.image}`} alt={event.title} className='w-full h-60 object-cover rounded-t-lg mb-4' />

                {/* Event Content */}
                <h3 className='text-2xl font-bold mb-2'>{event.title}</h3>
                <p className='text-red-600 mb-4'>{new Date(event.date).toLocaleDateString()}</p>
                <p className='text-gray-600 mb-6'>{event.description}</p>

                <ButtonCustom>Xem chi tiết</ButtonCustom>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Google Map section */}
      <section className='h-60 md:h-96 w-full'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.3815125782735!2d106.6787431!3d10.8260782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528fc64e522fb%3A0xdc415619b7791a50!2zODUgTmd1eeG7hW4gVsSDbiBOZ2hpLCBQaMaw4budbmcgNywgR8O0IFbhuq1wLCBUaMOgbmggcGjhuqduIFRQLiBIw7JhIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1620312725826!5m2!1svi!2s'
          allowfullscreen=''
          loading='lazy'
          className='h-full w-full'
        ></iframe>
      </section>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button onClick={scrollToTop} className='fixed bottom-8 right-8 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition duration-300'>
          <IoIosArrowUp size={24} />
        </button>
      )}
    </div>
  )
}

export default HomePage
