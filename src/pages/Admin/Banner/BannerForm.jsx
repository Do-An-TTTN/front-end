import { Button, message } from 'antd'
import { useState } from 'react'

import BannerList from '~/pages/Admin/Banner/BannerList/BannerList'

export default function BannerForm({ fetchData }) {
  const [disPlayImages, setDisPlayImages] = useState([])
  const [multipleImages, setMultipleImages] = useState([])

  const handleMultipleImageChange = async (e) => {
    const files = Array.from(e.target.files)
    setMultipleImages(files)
    setDisPlayImages((prev) => {
      return files.map((file, index) => {
        return {
          id: index,
          url: URL.createObjectURL(file)
        }
      })
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (multipleImages.length === 0 || disPlayImages.length === 0) {
      message.error('Vui lòng chọn ảnh banner')
      return
    }

    const formData = new FormData()
    multipleImages.forEach((image) => {
      formData.append(process.env.BUILD_MODE == 'production' ? 'images[]' : 'images', image)
    })

    try {
      await fetch(process.env.BUILD_MODE == 'production' ? 'https://langsch5sao.edu.vn/backend/api/banner' : 'http://localhost:4000/api/upload/news/multiple', {
        method: 'POST',
        body: formData
      })
      message.success('Thêm banner thành công')
      fetchData()
      setDisPlayImages([])
      setMultipleImages([])
    } catch (error) {
      message.error('Error uploading images.')
    }
  }

  const handleDeleteBanner = (id) => {
    setDisPlayImages(disPlayImages.filter((img) => img.id !== id))
  }

  return (
    <>
      <div className='space-y-4 bg-gray-50 shadow-md rounded-lg p-6'>
        <span className='text-2xl font-semibold mb-4'>Thêm mới các Banner</span>
        <div>
          <input type='file' multiple id='images' onChange={handleMultipleImageChange} required accept='image/png,image/jpeg' />
        </div>
        <BannerList listBanners={disPlayImages} onDelete={handleDeleteBanner} />
        <Button type='primary' onClick={handleSubmit}>
          Thêm Banner
        </Button>
      </div>
    </>
  )
}
