import { Input, message, Spin } from 'antd'
import JoditEditor from 'jodit-react'
import { useContext, useRef, useState } from 'react'
import { MdCloudUpload } from 'react-icons/md'
import { FaArrowLeft } from 'react-icons/fa'

import newsAPI from '~/api/newsAPI'
import ButtonCustom from '~/components/ui/Button'
import { AuthContext } from '~/context/AuthContext'
import ModalGallery from '~/pages/Admin/AddNews/ModalGallery'
import handleUploadImage from '~/utils/handleUploadImage'
import { NavLink } from 'react-router-dom'
import TextArea from 'antd/es/input/TextArea'

const getBase64 = (img, callback) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
export default function AddNews() {
  const { currentUser } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [loadThumbnail, setLoadThumbnail] = useState(false)
  const [show, setShow] = useState(false)
  const [images, setImages] = useState([])

  const dataNewsDefault = {
    writerId: '',
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

  const handleImgThumbnail = (e) => {
    const { files } = e.target
    setLoadThumbnail(true)
    if (files.length > 0) {
      getBase64(files[0], async (url) => {
        const secureUrl = await handleUploadImage(url)
        handleChangeInput('image', secureUrl)
        setLoadThumbnail(false)
      })
    }
  }

  const handleImgsDesc = async (e) => {
    const files = e.target.files
    await Promise.all(
      Array.from(files).map((file) => {
        const arrImages = []
        getBase64(file, async (url) => {
          const secureUrl = await handleUploadImage(url)
          arrImages.push(secureUrl)
          setImages((prev) => [...prev, ...arrImages])
        })
      })
    )
  }

  const handleSubmitForm = async () => {
    try {
      setLoading(true)
      const res = await newsAPI.createNews({ ...dataNews, writerId: currentUser._id })
      message.success(res.message)
      setDataNews(dataNewsDefault)
      setImages([])
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
                {dataNews?.image ? (
                  <img src={dataNews?.image} className='w-full h-full' alt='image' />
                ) : (
                  <div className='flex justify-center items-center flex-col gap-y-2'>
                    {loadThumbnail ? (
                      <Spin size='large' />
                    ) : (
                      <>
                        <span className='text-2xl'>
                          <MdCloudUpload />
                        </span>
                        <span>Select Image</span>
                      </>
                    )}
                  </div>
                )}
              </label>
              <input required className='hidden' type='file' onChange={handleImgThumbnail} id='img' accept='image/png,image/jpeg' />
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
        <input onChange={handleImgsDesc} type='file' multiple id='images' className='hidden' />
        <ModalGallery show={show} setShow={setShow} images={images} />
      </div>
    </>
  )
}
