import { useContext } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { AuthContext } from '~/context/AuthContext'

const Footer = () => {
  const { infor } = useContext(AuthContext)

  return (
    <>
      <footer className='bg-gray-800 text-white py-8'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
              <h4 className='text-xl font-bold mb-4'>Về chúng tôi</h4>
              <p className='text-gray-300'>Chúng tôi tận tâm cung cấp các khóa học ngôn ngữ trực tuyến chất lượng cao để giúp bạn đạt được mục tiêu học tập của mình.</p>
            </div>

            <div>
              <h4 className='text-xl font-bold mb-4'>Thông tin liên hệ</h4>
              <ul className='space-y-2 text-gray-300'>
                <li>Email: {infor?.email}</li>
                <li>Số điện thoại: {infor?.phone}</li>
                <li>Địa chỉ: {infor?.address}</li>
              </ul>
            </div>
            <div>
              <h4 className='text-xl font-bold mb-4'>Theo dõi chúng tôi tại</h4>
              <div className='flex space-x-4'>
                {infor?.facebook && (
                  <a href={infor?.facebook} rel='noreferrer' target='_blank' className='text-gray-300 hover:text-white transition-colors'>
                    <FaFacebook size={24} />
                  </a>
                )}
                {infor?.twitter && (
                  <a href={infor?.twitter} rel='noreferrer' target='_blank' className='text-gray-300 hover:text-white transition-colors'>
                    <FaTwitter size={24} />
                  </a>
                )}
                {infor?.linkedin && (
                  <a href={infor?.linkedin} rel='noreferrer' target='_blank' className='text-gray-300 hover:text-white transition-colors'>
                    <FaLinkedin size={24} />
                  </a>
                )}
                {infor?.instagram && (
                  <a href={infor?.instagram} rel='noreferrer' target='_blank' className='text-gray-300 hover:text-white transition-colors'>
                    <FaInstagram size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className='border-t border-gray-700 mt-8 pt-8 text-center text-gray-300'>
            <p>© 2024 Công Ty TNHH TM - DV Đệ Nhất 5 Sao.</p>
            <p>Terms & Agreements Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
