import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { IoHomeOutline } from 'react-icons/io5'
import { MdAdminPanelSettings } from 'react-icons/md'
import { SiStudyverse } from 'react-icons/si'
import { GrContact } from 'react-icons/gr'
import { FaRegNewspaper } from 'react-icons/fa'

function SideMenu() {
  const navigate = useNavigate()

  const listItems = [
    { status: '0', key: '/', icon: <IoHomeOutline />, label: 'Home' },
    { status: '1', key: 'admin/course', icon: <SiStudyverse />, label: 'Course' },
    { status: '2', key: 'admin/contact', icon: <GrContact />, label: 'Contact Form' },
    { status: '3', key: 'admin/news', icon: <FaRegNewspaper />, label: 'News' }
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
