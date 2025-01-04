import { Input, message } from 'antd'
import JoditEditor from 'jodit-react'
import { useRef, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { MdCloudUpload } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import pageAPI from '~/api/pageAPI'
import ButtonCustom from '~/components/ui/Button'
import ModalGallery from '~/pages/Admin/News/AddNews/ModalGallery'

export default function AddPage() {
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)

  const [dataPage, setDataPage] = useState({ title: '', content: '' })
  const editor = useRef(null)

  const handleSubmitForm = async () => {
    if (!dataPage.title || !dataPage.content) {
      message.error('Tạo thiếu dữ liệu title hoặc content')
      return
    }
    try {
      setLoading(true)
      const res = await pageAPI.createPage({ ...dataPage })
      message.success(res.message)
      setDataPage({ title: '', content: '' })
    } catch (error) {
      message.error(error.response.data.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <NavLink to='/admin/page'>
        <ButtonCustom className='bg-blue-500 hover:!bg-blue-600'>
          <FaArrowLeft />
          Trở lại
        </ButtonCustom>
      </NavLink>
      <div className='p-4 mt-4 bg-white rounded-lg'>
        <div className='flex flex-col gap-y-2 mb-6'>
          <label className='text-md font-medium text-gray-600' htmlFor='title'>
            Tiêu đề
          </label>
          <Input
            placeholder='Nhập tiêu đề'
            onChange={(e) =>
              setDataPage((prev) => {
                return { ...prev, title: e.target.value }
              })
            }
          />
        </div>
        <div className='flex flex-col gap-y-2 mb-6'>
          <div className='flex justify-start items-center gap-x-2'>
            <span className='text-md font-medium text-gray-600'>Content</span>
            <div onClick={() => setShow(true)}>
              <span className='text-2xl cursor-pointer'>
                <MdCloudUpload />
              </span>
            </div>
          </div>
          <div>
            <JoditEditor
              ref={editor}
              tabIndex={1}
              onBlur={(value) =>
                setDataPage((prev) => {
                  return { ...prev, content: value }
                })
              }
            />
          </div>
        </div>

        <ButtonCustom onClick={handleSubmitForm} disabled={loading} className='bg-cyan-500 hover:!bg-cyan-600'>
          {loading ? 'loading...' : 'Thêm'}
        </ButtonCustom>
        <ModalGallery show={show} setShow={setShow} />
      </div>
    </>
  )
}
