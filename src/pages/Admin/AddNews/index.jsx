import { Input, message } from 'antd'
import JoditEditor from 'jodit-react'
import { useContext, useRef, useState } from 'react'
import { MdCloudUpload } from 'react-icons/md'
import { FaArrowLeft } from 'react-icons/fa'

import newsAPI from '~/api/newsAPI'
import ButtonCustom from '~/components/ui/Button'
import { AuthContext } from '~/context/AuthContext'
import ModalGallery from '~/pages/Admin/AddNews/ModalGallery'
import { NavLink } from 'react-router-dom'
import TextArea from 'antd/es/input/TextArea'

export default function AddNews() {
  const { currentUser } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)

  const [singleImage, setSingleImage] = useState(null)
  const [singleImageUrl, setSingleImageUrl] = useState('')

  const dataNewsDefault = {
    userId: '',
    title: '',
    image: '',
    description: '',
    content: ''
  }
  const [dataNews, setDataNews] = useState(dataNewsDefault)

  const handleChangeInput = (name, value) => {
    setDataNews((prev) => {
      prev[name] = value
      return { ...prev }
    })
  }

  const editor = useRef(null)

  const handleSingleImageChange = async (e) => {
    const file = e.target.files[0]
    if (file) {
      setSingleImage(file)
      setSingleImageUrl(URL.createObjectURL(file))
    }
  }

  const handleSingleImageUpload = async () => {
    if (!singleImage) {
      message.error('Please select a single image.')
      return
    }
    const formData = new FormData()
    formData.append('image', singleImage)
    try {
      const response = await fetch('http://localhost:4000/api/upload/news/single', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()
      if (data.imageUrl) {
        handleChangeInput('image', data.imageUrl)
      } else {
        message.error('Upload failed')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmitForm = async () => {
    await handleSingleImageUpload()
    try {
      setLoading(true)
      const res = await newsAPI.createNews({ ...dataNews, userId: currentUser.id })
      message.success(res.message)
      setDataNews(dataNewsDefault)
      setSingleImage(null)
      setSingleImageUrl('')
      setDataNews(dataNewsDefault)
    } catch (error) {
      message.error(error.response.data.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <NavLink to='/admin/news'>
        <ButtonCustom className='bg-blue-500 hover:!bg-blue-600'>
          <FaArrowLeft />
          Trở lại
        </ButtonCustom>
      </NavLink>
      <div className='p-4 mt-4 bg-white rounded-lg'>
        <form>
          <div className='flex flex-col gap-y-2 mb-6'>
            <label className='text-md font-medium text-gray-600' htmlFor='title'>
              Tiêu đề
            </label>
            <Input placeholder='Nhập tiêu đề' onChange={(e) => handleChangeInput('title', e.target.value)} />
          </div>
          <div className='mb-6'>
            <div>
              <span className='text-md font-medium text-gray-600'>Thumbnail</span>
              <label htmlFor='img' className='w-full h-[320px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed'>
                {singleImageUrl ? (
                  <img src={singleImageUrl} className='w-full h-full' alt='image' />
                ) : (
                  <div className='flex justify-center items-center flex-col gap-y-2'>
                    <>
                      <span className='text-2xl'>
                        <MdCloudUpload />
                      </span>
                      <span>Select Image</span>
                    </>
                  </div>
                )}
              </label>
              <input required className='hidden' type='file' onChange={handleSingleImageChange} id='img' accept='image/png,image/jpeg' />
            </div>
          </div>
          <div className='mb-6'>
            <span className='text-md font-medium text-gray-600'>Description</span>
            <TextArea
              showCount
              placeholder='Mô tả'
              style={{
                height: 120,
                resize: 'none'
              }}
              value={dataNews?.description}
              onChange={(e) => handleChangeInput('description', e.target.value)}
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
              <JoditEditor ref={editor} tabIndex={1} value={dataNews?.content} onBlur={(value) => handleChangeInput('content', value)} />
            </div>
          </div>

          <ButtonCustom onClick={handleSubmitForm} disabled={loading} className='bg-cyan-500 hover:!bg-cyan-600'>
            {loading ? 'loading...' : 'Thêm'}
          </ButtonCustom>
        </form>
        <ModalGallery show={show} setShow={setShow} />
      </div>
    </>
  )
}
