import { Button, message, Modal } from 'antd'
import { MdCloudUpload } from 'react-icons/md'
import copy from 'copy-to-clipboard'
import { useState } from 'react'

export default function ModalGallery({ show, setShow }) {
  const [multipleImages, setMultipleImages] = useState([])
  const [multipleImageUrls, setMultipleImageUrls] = useState([])

  const handleMultipleImageChange = async (e) => {
    const files = Array.from(e.target.files)
    setMultipleImages(files)
  }

  const handleMultipleImageUpload = async () => {
    if (multipleImages.length === 0) {
      message.error('Please select at least one image.')
      return
    }

    const formData = new FormData()
    multipleImages.forEach((image) => {
      formData.append(process.env.BUILD_MODE == 'production' ? 'images[]' : 'images', image)
    })

    try {
      const response = await fetch(
        process.env.BUILD_MODE == 'production' ? 'https://langsch5sao.edu.vn/backend/api/upload/news/multiple' : 'http://localhost:4000/api/upload/news/multiple',
        {
          method: 'POST',
          body: formData
        }
      )

      const data = await response.json()
      if (data.images) {
        setMultipleImageUrls(data.images)
        message.success('Multiple images uploaded successfully!')
      } else {
        message.error('Upload failed.')
      }
    } catch (error) {
      message.error('Error uploading images.')
    }
  }

  const copyUrl = (url) => {
    copy(url, {
      message: 'Press to copy'
    })
    message.success('Copy success!')
  }
  return (
    <>
      <input onChange={handleMultipleImageChange} type='file' multiple id='images' className='hidden' />

      <Modal
        open={show}
        onOk={() => setShow(false)}
        onCancel={() => {
          setShow(false)
          setMultipleImages([])
          setMultipleImageUrls([])
        }}
      >
        <div className='pb-3 flex justify-between items-center w-full'>
          <h2>Gallery</h2>
        </div>

        <div>
          <label htmlFor='images' className='w-full h-[180px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed'>
            <div className='flex justify-center items-center flex-col gap-y-2'>
              <span className='text-2xl'>
                <MdCloudUpload />
              </span>
              <span>Select Image</span>
            </div>
          </label>
        </div>
        <Button className='mt-4' type='primary' onClick={handleMultipleImageUpload}>
          Load ảnh
        </Button>
        <div className='grid grid-cols-4 gap-2 mt-3'>
          {multipleImageUrls.length > 0 &&
            multipleImageUrls.map((img, i) => (
              <div className=' cursor-pointer' onClick={() => copyUrl(img)} key={i}>
                <img src={img} alt='image' className='w-full h-[100px] object-cover' />
              </div>
            ))}
        </div>
      </Modal>
    </>
  )
}
