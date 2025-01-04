import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { IoHomeOutline } from 'react-icons/io5'
import { MdAdminPanelSettings } from 'react-icons/md'
import { SiStudyverse } from 'react-icons/si'
import { GrContact } from 'react-icons/gr'
import { FaRegNewspaper } from 'react-icons/fa'
import { BiCarousel } from 'react-icons/bi'
import { IoBusinessOutline } from 'react-icons/io5'
import { FaRegUser } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa6'
import { MdOutlineCategory } from 'react-icons/md'

function SideMenu() {
  const navigate = useNavigate()

  const listItems = [
    { status: '0', key: '/', icon: <FaBars />, label: 'Trang chủ' },
    { status: '1', key: 'admin/course', icon: <SiStudyverse />, label: 'Khóa học' },
    { status: '2', key: 'admin/category', icon: <MdOutlineCategory />, label: 'Thể loại khóa học' },
    { status: '3', key: 'admin/contact', icon: <GrContact />, label: 'Liên hệ' },
    { status: '4', key: 'admin/news', icon: <FaRegNewspaper />, label: 'Tin tức' },
    { status: '5', key: 'admin/banner', icon: <BiCarousel />, label: 'Quản lý banner' },
    { status: '6', key: 'admin/page', icon: <IoHomeOutline />, label: 'Quản lý trang chủ' },
    { status: '7', key: 'admin/infor', icon: <IoBusinessOutline />, label: 'Thông tin công ty' },
    { status: '8', key: 'admin/infor-admin', icon: <FaRegUser />, label: 'Thông tin admin' }
  ]

  const items = listItems.map((item) => {
    return {
      key: item.key,
      icon: <span>{item.icon}</span>,
      label: <span>{item.label}</span>
    }
  })

  return (
    <>
      <div className='flex justify-center py-4'>
        <MdAdminPanelSettings className='text-2xl' />
        ADMIN
      </div>
      <Menu
        items={items}
        defaultSelectedKeys='admin/course'
        onClick={(item) => {
          navigate(item.key)
        }}
      ></Menu>
    </>
  )
}

export default SideMenu
