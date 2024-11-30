import { message } from 'antd'
import { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import authAPI from '~/api/authAPI'
import ModalLogin from '~/components/Navbar/ModalLogin'
import ButtonCustom from '~/components/ui/Button'
import { AuthContext } from '~/context/AuthContext'

const Navbar = () => {
  const { currentUser, updateUser } = useContext(AuthContext)

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navigate = useNavigate()

  const showModal = async () => {
    if (currentUser) {
      await authAPI.logOut()
      updateUser(null)
      message.success('Đăng xuất thành công')
    } else {
      setIsModalOpen(true)
    }
  }

  const handleContactClick = () => {
    navigate('/', { state: { scrollTo: 'contact' } })
  }

  return (
    <>
      <nav className='bg-white shadow-lg fixed top-0 w-full z-50'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center py-5'>
            <NavLink to='/'>
              <img src='/logotrungtamstar.png' alt='Logo' className='h-10 w-24 object-cover' />
            </NavLink>

            {/* Desktop Menu */}

            <div className='hidden md:flex space-x-8 font-bold md:items-center'>
              <NavLink href='/' className='text-gray-700 hover:text-red-600 transition duration-300'>
                Home
              </NavLink>
              <NavLink to='/course' className='text-gray-700 hover:text-red-600 transition duration-300'>
                Programs
              </NavLink>
              <div className='relative group'>
                <NavLink to='/news' className='text-gray-700 hover:text-red-600 transition duration-300'>
                  News
                </NavLink>
                <div className='absolute left-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10'>
                  <ul className='py-2'>
                    <li>
                      <a href='/feartured-news' className='block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600'>
                        Feartured news
                      </a>
                    </li>
                    <li>
                      <a href='/events' className='block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600'>
                        Events
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='relative group'>
                <a href='#' className='text-gray-700 hover:text-red-600 transition duration-300'>
                  About
                </a>
                <div className='absolute left-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10'>
                  <ul className='py-2'>
                    <li>
                      <a href='/our-company' className='block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600'>
                        Our Company
                      </a>
                    </li>
                    <li>
                      <a href='/our-team' className='block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600'>
                        Our Team
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <Link to='/' onClick={handleContactClick} className='text-gray-700 hover:text-red-600 transition duration-300 cursor-pointer'>
                Contact
              </Link>
              <ButtonCustom onClick={showModal}>{currentUser ? 'Đăng xuất' : 'Đăng nhập'} </ButtonCustom>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden text-gray-700 focus:outline-none'>
              <svg className='h-6 w-6' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'>
                {isMenuOpen ? <path d='M6 18L18 6M6 6l12 12' /> : <path d='M4 6h16M4 12h16M4 18h16' />}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className='md:hidden py-4'>
              <div className='flex flex-col space-y-4'>
                <a href='/' className='text-gray-700 hover:text-red-600 transition duration-300'>
                  Home
                </a>
                <a href='/course' className='text-gray-700 hover:text-red-600 transition duration-300'>
                  Programs
                </a>
                <a href='#' className='text-gray-700 hover:text-red-600 transition duration-300'>
                  Events
                </a>
                <div className='relative group'>
                  <a href='#' className='text-gray-700 hover:text-red-600 transition duration-300'>
                    About
                  </a>
                  <div className='absolute left-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10'>
                    <ul className='py-2'>
                      <li>
                        <a href='#our-team' className='block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600'>
                          Our Company
                        </a>
                      </li>
                      <li>
                        <a href='#our-mission' className='block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600'>
                          Our Team
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link to='contact' duration='500' smooth='true' className='text-gray-700 hover:text-red-600 transition duration-300 cursor-pointer'>
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      <ModalLogin isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  )
}

export default Navbar
