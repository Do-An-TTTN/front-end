import { message } from 'antd'
import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import authAPI from '~/api/authAPI'
import cateAPI from '~/api/cateAPI'
import ModalLogin from '~/components/Navbar/ModalLogin'
import ButtonCustom from '~/components/ui/Button'
import { AuthContext } from '~/context/AuthContext'

const Navbar = () => {
  const { currentUser, updateUser } = useContext(AuthContext)

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCourseMenuOpen, setIsCourseMenuOpen] = useState(false)
  const [listCate, setListCate] = useState([])

  const showModal = async () => {
    if (currentUser) {
      await authAPI.logOut()
      updateUser(null)
      message.success('Đăng xuất thành công')
    } else {
      setIsModalOpen(true)
    }
  }

  const fetchData = async () => {
    try {
      const res = await cateAPI.getAllCate()
      setListCate(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <nav className='bg-white shadow-lg fixed top-0 w-full z-50 h-16'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center py-3'>
            <NavLink to='/'>
              <div className='flex items-center'>
                <img src='/images/logotrungtamstar.png' href='/Home' alt='Logo' className='h-10 w-24 object-cover' />
                <span className='uppercase ml-2 font-semibold text-red-700'>Trung Tâm Anh Ngữ Star</span>
              </div>
            </NavLink>

            {/* Desktop Menu */}

            <div className='hidden xl:flex space-x-8 md:items-center'>
              <NavLink href='/' className='hover:text-red-600 transition duration-300'>
                Trang chủ
              </NavLink>
              <NavLink to='/news' className='text-gray-700 hover:text-red-600 transition duration-300'>
                Tin tức
              </NavLink>
              <div className='relative group'>
                <a href='#' className='text-gray-700 hover:text-red-600 transition duration-300'>
                  Khóa học
                </a>
                <div className='absolute left-0 w-52 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10'>
                  <ul className='py-2'>
                    {listCate?.length > 0 &&
                      listCate.map((cate) => (
                        <>
                          <li>
                            <NavLink to={`/course/${cate.id}`} className='block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600'>
                              {cate.title}
                            </NavLink>
                          </li>
                        </>
                      ))}
                  </ul>
                </div>
              </div>
              <div className='relative group'>
                <NavLink to='/linguaskill' className='text-gray-700 hover:text-red-600 transition duration-300'>
                  Linguaskill
                </NavLink>
              </div>
              <div className='relative group'>
                <a href='https://futurelang.edu.vn/gioi-thieu' target='_blank' rel='noreferrer' className='text-gray-700 hover:text-red-600 transition duration-300'>
                  FutureLang
                </a>
              </div>
              <div className='relative group'>
                <a href='#' className='text-gray-700 hover:text-red-600 transition duration-300'>
                  Thông tin
                </a>
                <div className='absolute left-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10'>
                  <ul className='py-2'>
                    <li>
                      <a href='/our-company' className='block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600'>
                        Về trung tâm
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {currentUser?.role === 'admin' && (
                <NavLink to='/admin'>
                  <span className='hover:text-red-600'>Trang quản trị</span>
                </NavLink>
              )}
              <ButtonCustom onClick={showModal}>{currentUser ? 'Đăng xuất' : 'Đăng nhập'} </ButtonCustom>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='xl:hidden text-gray-700 focus:outline-none'>
              <svg className='h-6 w-6' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'>
                {isMenuOpen ? <path d='M6 18L18 6M6 6l12 12' /> : <path d='M4 6h16M4 12h16M4 18h16' />}
              </svg>
            </button>
            {isMenuOpen && (
              <div className='xl:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-40'>
                <ul className='flex flex-col space-y-2 pt-0 p-6'>
                  <NavLink href='/' onClick={() => setIsMenuOpen(false)} className='text-gray-700 mt-1 py-2 hover:text-red-600 transition duration-300 text-sm'>
                    Trang chủ
                  </NavLink>
                  <NavLink to='/news' onClick={() => setIsMenuOpen(false)} className='text-gray-700 py-2 hover:text-red-600 transition duration-300 text-sm m-0'>
                    Tin tức
                  </NavLink>
                  <li className='relative group'>
                    <a href='#' onClick={() => setIsCourseMenuOpen(!isCourseMenuOpen)} className='text-gray-700 hover:text-red-600 py-2 block transition duration-300 text-sm'>
                      Khóa học
                    </a>
                    {isCourseMenuOpen && (
                      <ul className='mt-2 ml-4'>
                        {listCate?.length > 0 &&
                          listCate.map((cate) => (
                            <li key={cate.id}>
                              <NavLink to={`/course/${cate.id}`} onClick={() => setIsMenuOpen(false)} className='block p-2 text-gray-700 hover:bg-gray-100 hover:text-red-600'>
                                {cate.title}
                              </NavLink>
                            </li>
                          ))}
                      </ul>
                    )}
                  </li>
                  <NavLink to='/linguaskill' onClick={() => setIsMenuOpen(false)} className='text-gray-700 hover:text-red-600 py-2 transition duration-300 text-sm'>
                    Linguaskill
                  </NavLink>
                  <a
                    href='https://futurelang.edu.vn/gioi-thieu'
                    target='_blank'
                    rel='noreferrer'
                    className='text-gray-700 py-2 block hover:text-red-600 transition duration-300 text-sm'
                  >
                    FutureLang
                  </a>
                  <NavLink to='/our-company' onClick={() => setIsMenuOpen(false)} className='text-gray-700 hover:text-red-600 py-2 transition duration-300 text-sm'>
                    Về trung tâm
                  </NavLink>
                  {currentUser?.role === 'admin' && (
                    <NavLink to='/admin' className='hover:text-red-600 py-2 text-sm'>
                      Trang quản trị
                    </NavLink>
                  )}
                  <ButtonCustom onClick={showModal}>{currentUser ? 'Đăng xuất' : 'Đăng nhập'}</ButtonCustom>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
      <ModalLogin isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  )
}

export default Navbar
