import { Carousel } from 'antd'
import { useState, useEffect, useRef } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import { useLocation } from 'react-router-dom'
import bannerAPI from '~/api/bannerAPI'
import courseAPI from '~/api/courseAPI'
import pageAPI from '~/api/pageAPI'
import { CardCourse } from '~/components/CardCourse'
import Contact from '~/components/Contact'

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [listBanners, setListBanners] = useState([])
  const [listPages, setListPages] = useState([])
  const [listCourses, setListCourses] = useState([])

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

  const fetchData = async () => {
    try {
      const res = await bannerAPI.getAllBanners()
      const pages = await pageAPI.getAllPages()
      const courses = await courseAPI.getAllCourse()
      setListPages(pages.data)
      setListBanners(res.data)
      setListCourses(courses.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    const scrollInterval = 3000 // 3 giây
    const itemWidth = 300 // Chiều rộng của mỗi item, điều chỉnh theo `min-w-[300px]`

    let currentIndex = 0

    const scrollStep = () => {
      if (container) {
        const maxScroll = container.scrollWidth - container.clientWidth

        if (currentIndex * itemWidth >= maxScroll) {
          // Quay lại đầu danh sách
          currentIndex = 0
          container.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          // Cuộn qua item tiếp theo
          currentIndex++
          container.scrollTo({ left: currentIndex * itemWidth, behavior: 'smooth' })
        }
      }
    }

    const interval = setInterval(scrollStep, scrollInterval)

    // Dọn dẹp interval khi component unmount
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='font-sans'>
      <section className='w-full mt-[64px] bg-gray-100'>
        <Carousel autoplay>
          {listBanners.length > 0 &&
            listBanners.map((banner, index) => {
              return (
                <div key={index}>
                  <img
                    src={banner.url}
                    alt='English Learning Environment'
                    className='h-[200px] md:h-[600px] w-11/12 md:w-4/5 mx-auto mt-5 rounded-lg text-white leading-[160px] text-center bg-[#364d79] object-cover'
                  />
                </div>
              )
            })}
        </Carousel>
      </section>

      <section className='py-12 flex items-center justify-center bg-gray-100 overflow-hidden' id='GT'>
        <div className='container max-w-5xl text-center p-3'>
          <h1 className='text-xl md:text-4xl uppercase mb-10 font-bold text-red-600'>Trung tâm Anh ngữ Star xin chào bạn</h1>
          <div className='intro-content flex items-center justify-center space-x-4'>
            <img src='/images/taytrai.png' alt='Bàn tay bên trái' className='hand left-hand w-1/5 md:w-1/5 h-auto' />
            <img className='intro-image w-3/5 h-auto' src='/images/ThuNgoStar.png' alt='Giới Thiệu Image' onClick='openModal(this)' />
            <img src='/images/tayphai.png' alt='Bàn tay bên phải' className='hand right-hand w-1/5 md:w-1/5 h-auto' />
          </div>
        </div>
      </section>

      {listPages.length > 0 &&
        listPages.map((page, index) => {
          return (
            <>
              <section key={page.id} className='bg-gray-50 py-12'>
                <div className='container mx-auto px-4'>
                  <div className='text-center mb-12'>
                    <h1 className='text-4xl font-bold text-red-600'>{page.title}</h1>
                  </div>

                  <div className='mx-10'>
                    <div className='prose prose-lg max-w-none' dangerouslySetInnerHTML={{ __html: page.content }} />
                  </div>
                </div>
              </section>
            </>
          )
        })}
      <section className='py-12 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-xl md:text-4xl uppercase font-bold text-center mb-12 text-red-600'>Chương trình của chúng tôi</h2>
          <div ref={scrollContainerRef} className='overflow-x-auto flex space-x-8 p-8 '>
            {listCourses.length > 0 && listCourses.map((course) => <CardCourse key={course.id} course={course} />)}
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
