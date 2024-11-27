import { Input, message, Modal, Select, Spin, Upload } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useEffect, useState } from 'react'
import cateAPI from '~/api/cateAPI'
import handleUploadImage from '~/utils/handleUploadImage'

const getBase64 = (img, callback) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('Chỉ chấp nhận các định dạng: JPG/PNG')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Dung lượng ảnh phải nhỏ hơn 2MB!')
  }
  return isJpgOrPng && isLt2M
}

export default function ModalCourse({ isModalCourse, setIsModalCourse }) {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [listCate, setListCate] = useState([])

  const dataCourseDefault = {
    name: '',
    title: '',
    description: '',
    duration: '',
    price: '',
    image: '',
    categoryId: ''
  }
  const [dataCourse, setDataCourse] = useState(dataCourseDefault)

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none'
      }}
      type='button'
    >
      {loading ? <Spin /> : <span>Upload</span>}
    </button>
  )

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    getBase64(info.file.originFileObj, async (url) => {
      const secure_url = await handleUploadImage(url)
      setImageUrl(secure_url)
      setLoading(false)
      setDataCourse({ ...dataCourse, image: secure_url })
    })
  }

  const handleChangeInput = (name, value) => {
    setDataCourse((prev) => {
      prev[name] = value
      return { ...prev }
    })
  }

  const handleCancel = () => {
    setIsModalCourse(false)
    setImageUrl('')
  }

  const handleOk = async () => {
    try {
      console.log(dataCourse)
      // const res = await
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await cateAPI.getAllCate()
        setListCate(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Modal open={isModalCourse} title='Tạo khóa học' onOk={handleOk} onCancel={handleCancel}>
        <div className='grid grid-cols-2 gap-4'>
          <div className='col-span-2 text-center'>
            <Upload
              name='avatar'
              listType='picture-card'
              className='avatar-uploader'
              showUploadList={false}
              action='https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload'
              beforeUpload={beforeUpload}
              onChange={handleChange}
              status='error'
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt='avatar'
                  style={{
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
          <div>
            <span>
              <p>
                <span className='text-red-600'>(*) </span>Tên khóa học
              </p>
            </span>
            <Input onChange={(e) => handleChangeInput('name', e.target.value)} />
          </div>
          <div>
            <span>
              <p>
                <span className='text-red-600'>(*) </span>Giá
              </p>
            </span>
            <Input onChange={(e) => handleChangeInput('price', e.target.value)} />
          </div>
          <div>
            <span>
              <p>
                <span className='text-red-600'>(*) </span>Thời gian học
              </p>
            </span>
            <Input onChange={(e) => handleChangeInput('duration', e.target.value)} />
          </div>
          <div>
            <span>
              <p>
                <span className='text-red-600'>(*) </span>Tiêu đề
              </p>
            </span>
            <Input onChange={(e) => handleChangeInput('title', e.target.value)} />
          </div>
          <Select
            placeholder='Vui lòng chọn thể loại'
            // value={dataBook.supplierId || undefined}
            // status={validInput.supplierId ? '' : 'error'}
            onChange={(value) => {
              handleChangeInput('categoryId', value)
            }}
            options={listCate.map((item) => {
              return {
                value: item._id,
                label: item.title
              }
            })}
            className='mt-2 col-span-2'
          />
          <TextArea
            showCount
            maxLength={100}
            className='col-span-2'
            onChange={(e) => handleChangeInput('description', e.target.value)}
            placeholder='Nhập mô tả'
            style={{
              height: 120,
              resize: 'none',
              marginBottom: '4px'
            }}
          />
        </div>
      </Modal>
    </>
  )
}
