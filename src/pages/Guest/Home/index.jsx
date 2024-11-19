import { Input } from 'antd'
import { useState, useEffect } from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoIosArrowUp } from 'react-icons/io'
import { useLocation } from 'react-router-dom'
import Button from '~/components/ui/Button'
const { TextArea } = Input

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false)

  const onChange = (e) => {
    console.log('Change:', e.target.value)
  }

  const programs = [
    {
      id: 1,
      title: 'General English',
      description: 'Master everyday English communication with our comprehensive program.',
      features: ['Interactive Classes', 'Native Speakers', 'Practical Exercises'],
      image: 'images.unsplash.com/photo-1523050854058-8df90110c9f1'
    },
    {
      id: 2,
      title: 'Business English',
      description: 'Develop professional English skills for the corporate world.',
      features: ['Business Writing', 'Presentation Skills', 'Networking'],
      image: 'images.unsplash.com/photo-1553877522-43269d4ea984'
    },
    {
      id: 3,
      title: 'Exam Preparation',
      description: 'Get ready for IELTS, TOEFL, and Cambridge exams with expert guidance.',
      features: ['Mock Test', 'Study Materials', 'Expert Tips'],
      image: 'images.unsplash.com/photo-1434030216411-0b793f4b4173'
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      image: 'images.unsplash.com/photo-1494790108377-be9c29b29330',
      text: 'The teaching quality here is exceptional. I improved my English significantly!'
    },
    {
      id: 2,
      name: 'Michael Chen',
      image: 'images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      text: 'Great environment and supportive teachers. Highly recommended!'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      image: 'images.unsplash.com/photo-1438761681033-6461ffad8d80',
      text: 'The business English program helped me advance in my career.'
    }
  ]

  const events = [
    {
      id: 1,
      title: 'Free Speaking Workshop',
      date: '2024-02-15',
      description: 'Join our interactive speaking workshop and practice with native speakers.'
    },
    {
      id: 2,
      title: 'IELTS Preparation Seminar',
      date: '2024-02-20',
      description: 'Learn essential tips and strategies for IELTS success.'
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

  console.log(location.state)

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
      <section className='relative h-screen'>
        <div className='absolute inset-0'>
          <img src='https://images.unsplash.com/photo-1524178232363-1fb2b075b655' alt='English Learning Environment' className='w-full h-full object-cover' />
          <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        </div>
        <div className='relative container mx-auto px-4 h-full flex items-center'>
          <div className='text-white max-w-3xl'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6'>Excel in English with Expert Guidance</h1>
            <p className='text-xl mb-8'>Join our world-class English language programs and unlock your potential</p>
            <a className='bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 cursor-pointer' href='/course'>
              Explore Programs
            </a>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-16 text-red-600'>Our Programs</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {programs.map((program) => (
              <div key={program.id} className='bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300'>
                <img src={`https://${program.image}`} alt={program.title} className='w-full h-48 object-cover' />
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
                  <Button>Learn More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-16 text-red-600'>Student Testimonials</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className='bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105'>
                <div className='flex items-center mb-4'>
                  <img src={`https://${testimonial.image}`} alt={testimonial.name} className='w-12 h-12 rounded-full object-cover mr-4' />
                  <h3 className='font-bold'>{testimonial.name}</h3>
                </div>
                <p className='text-gray-600'>{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-16 text-red-600'>Upcoming Events</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {events.map((event) => (
              <div key={event.id} className='bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105'>
                <h3 className='text-2xl font-bold mb-2'>{event.title}</h3>
                <p className='text-red-600 mb-4'>{new Date(event.date).toLocaleDateString()}</p>
                <p className='text-gray-600 mb-6'>{event.description}</p>
                <Button>Register Now</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-20' id='contact'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-16 text-red-600'>Contact Us</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-2xl font-bold mb-6'>Get in Touch</h3>
              <form className='space-y-4'>
                <div>
                  <label className='block text-gray-700 mb-2'>Name</label>
                  <Input size='large' />
                </div>
                <div>
                  <label className='block text-gray-700 mb-2'>Email</label>
                  <Input size='large' />
                </div>
                <div>
                  <label className='block text-gray-700 mb-2'>Message</label>
                  <TextArea
                    showCount
                    maxLength={100}
                    onChange={onChange}
                    placeholder='disable resize'
                    style={{
                      height: 120,
                      resize: 'none',
                      marginBottom: '4px'
                    }}
                  />
                </div>
                <Button widthFull>Send Message</Button>
              </form>
            </div>
            <div>
              <h3 className='text-2xl font-bold mb-6'>Contact Information</h3>
              <div className='space-y-4'>
                <p className='flex items-center'>
                  <span className='font-bold mr-2'>Address:</span> 85 Nguyễn Văn Nghi, Phường 7, Quận Gò Vấp, TP.HCM
                </p>
                <p className='flex items-center'>
                  <span className='font-bold mr-2'>Phone:</span> 0938 762 783
                </p>
                <p className='flex items-center'>
                  <span className='font-bold mr-2'>Email:</span> info@dn5sao.edu.vn
                </p>
              </div>
              <div className='mt-8'>
                <h4 className='font-bold mb-4'>Follow Us</h4>
                <div className='flex space-x-4'>
                  <FaFacebook className='text-2xl text-red-600 hover:text-red-700 cursor-pointer' />
                  <FaTwitter className='text-2xl text-red-600 hover:text-red-700 cursor-pointer' />
                  <FaInstagram className='text-2xl text-red-600 hover:text-red-700 cursor-pointer' />
                  <FaLinkedin className='text-2xl text-red-600 hover:text-red-700 cursor-pointer' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
