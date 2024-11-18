import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer className='bg-gray-800 text-white py-8 mt-12'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div>
              <h4 className='text-xl font-bold mb-4'>About Us</h4>
              <p className='text-gray-300'>We are dedicated to providing high-quality online language courses to help you achieve your learning goals.</p>
            </div>
            <div>
              <h4 className='text-xl font-bold mb-4'>Quick Links</h4>
              <ul className='space-y-2'>
                <li>
                  <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                    Courses
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                    Instructors
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                    Resources
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-xl font-bold mb-4'>Contact Info</h4>
              <ul className='space-y-2 text-gray-300'>
                <li>Email: info@dn5sao.edu.vn</li>
                <li>Phone: 0938 762 783</li>
                <li>Address: 85 Nguyễn Văn Nghi, Phường 7, Quận Gò Vấp, TP.HCM</li>
              </ul>
            </div>
            <div>
              <h4 className='text-xl font-bold mb-4'>Follow Us</h4>
              <div className='flex space-x-4'>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  <FaFacebook size={24} />
                </a>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  <FaTwitter size={24} />
                </a>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  <FaInstagram size={24} />
                </a>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  <FaLinkedin size={24} />
                </a>
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
