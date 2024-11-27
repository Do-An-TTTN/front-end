import { Input, message, Modal, Select, Spin, Upload } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useEffect, useState } from 'react'
import courseAPI from '~/api/courseAPI'
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

export default function ModalCourse({ isModalCourse, listCate, setIsModalCourse, fetchData, action, dataUpdate, setDataUpdate }) {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

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

  const validInputDefault = {
    name: true,
    title: true,
    description: true,
    duration: true,
    price: true,
    image: true,
    categoryId: true
  }
  const [validInput, setValidInput] = useState(validInputDefault)

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
    setDataCourse(dataCourseDefault)
    setValidInput(validInputDefault)
    setImageUrl('')
    setDataUpdate(dataCourseDefault)
  }

  const checkValidInput = () => {
    let arr = ['image', 'name', 'title', 'description', 'duration', 'price', 'categoryId']
    let check = true
    for (let i = 0; i < arr.length; i++) {
      if (!dataCourse[arr[i]]) {
        setValidInput((prev) => {
          prev[arr[i]] = false
          return { ...prev }
        })
        message.error(`${arr[i]} không được bỏ trống !`)
        check = false
        break
      }
    }
    return check
  }

  const handleOk = async () => {
    try {
      if (checkValidInput()) {
        const res = action === 'CREATE' ? await courseAPI.createCourse(dataCourse) : await courseAPI.updateCourse(dataUpdate._id, dataCourse)
        message.success(res.message)
        setDataCourse(dataCourseDefault)
        setIsModalCourse(false)
        setImageUrl('')
        fetchData()
      }
    } catch (error) {
      message.success(error.response.data.message)
    }
  }

  useEffect(() => {
    setDataCourse(dataUpdate)
    setImageUrl(dataUpdate.image)
  }, [dataUpdate])

  return (
    <>
      <Modal open={isModalCourse} title={action === 'CREATE' ? 'Tạo khóa học' : 'Cập nhật khóa học'} onOk={handleOk} onCancel={handleCancel}>
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
            <Input onChange={(e) => handleChangeInput('name', e.target.value)} value={dataCourse?.name} status={!validInput.name && 'error'} />
          </div>
          <div>
            <span>
              <p>
                <span className='text-red-600'>(*) </span>Giá
              </p>
            </span>
            <Input onChange={(e) => handleChangeInput('price', e.target.value)} value={dataCourse?.price} status={!validInput.price && 'error'} />
          </div>
          <div>
            <span>
              <p>
                <span className='text-red-600'>(*) </span>Thời gian học
              </p>
            </span>
            <Input onChange={(e) => handleChangeInput('duration', e.target.value)} value={dataCourse?.duration} status={!validInput.duration && 'error'} />
          </div>
          <div>
            <span>
              <p>
                <span className='text-red-600'>(*) </span>Tiêu đề
              </p>
            </span>
            <Input onChange={(e) => handleChangeInput('title', e.target.value)} value={dataCourse?.title} status={!validInput.title && 'error'} />
          </div>
          <Select
            placeholder='Vui lòng chọn thể loại'
            onChange={(value) => {
              handleChangeInput('categoryId', value)
            }}
            value={dataCourse?.categoryId?._id}
            status={!validInput.categoryId && 'error'}
            options={listCate.map((item) => {
              return {
                value: item._id,
                label: item.title
              }
            })}
            className='mt-2 col-span-2'
          />
          <div className='col-span-2'>
            <TextArea
              placeholder='Nhập mô tả'
              showCount
              maxLength={100}
              onChange={(e) => handleChangeInput('description', e.target.value)}
              value={dataCourse?.description}
              status={!validInput.description && 'error'}
              style={{
                height: 120,
                resize: 'none',
                marginBottom: '4px'
              }}
            />
            {!validInput.description && <span className='text-red-600'>Vui lòng nhập mô tả!</span>}
          </div>
        </div>
      </Modal>
    </>
  )
}
