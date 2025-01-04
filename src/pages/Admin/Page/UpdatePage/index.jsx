import { Input, message } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { MdCloudUpload } from 'react-icons/md'
import { NavLink, useParams } from 'react-router-dom'
import JoditEditor from 'jodit-react'

import pageAPI from '~/api/pageAPI'
import ButtonCustom from '~/components/ui/Button'
import ModalGallery from '~/pages/Admin/News/AddNews/ModalGallery'

export default function UpdatePage() {
  const { id } = useParams()
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)

  const dataPageDefault = {
    title: '',
    content: ''
  }
  const [dataPage, setDataPage] = useState(dataPageDefault)
  const editor = useRef(null)

  const handleSubmitForm = async () => {
    try {
      setLoading(true)
      const res = await pageAPI.updatePage(id, { ...dataPage })
      message.success(res.message)
      fetchData()
    } catch (error) {
      message.error(error.response.data.message)
    } finally {
      setLoading(false)
    }
  }

  const fetchData = async () => {
    try {
      const res = await pageAPI.getPage(id)
      setDataPage(res.data)
    } catch (error) {
      message.error(error.response.data.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [id])

  return (
    <>
      <NavLink to='/admin/page'>
        <ButtonCustom className='bg-blue-500 hover:!bg-blue-600'>
          <FaArrowLeft />
          Trở lại
        </ButtonCustom>
      </NavLink>
      <div className='p-4 mt-4 bg-white rounded-lg'>
        <div>
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
              value={dataPage?.title}
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
                value={dataPage?.content}
                onBlur={(value) => {
                  setDataPage((prev) => {
                    return { ...prev, content: value }
                  })
                }}
              />
            </div>
          </div>

          <ButtonCustom onClick={handleSubmitForm} disabled={loading} className='bg-cyan-500 hover:!bg-cyan-600'>
            {loading ? 'loading...' : 'Sửa'}
          </ButtonCustom>
        </div>
      </div>
      <ModalGallery show={show} setShow={setShow} />
    </>
  )
}
