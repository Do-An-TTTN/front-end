import { message } from 'antd'

const handleUploadImage = async (file) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', 'star_english')

  try {
    const response = await fetch('https://api.cloudinary.com/v1_1/dayuvo8ld/image/upload', {
      method: 'POST',
      body: formData
    })

    const data = await response.json()
    return data.secure_url
  } catch (error) {
    message.error('Upload failed')
  }
}

export default handleUploadImage
