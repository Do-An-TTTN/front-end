import { Input, message, Modal, Select } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useEffect, useState } from 'react'
import { MdCloudUpload } from 'react-icons/md'
import courseAPI from '~/api/courseAPI'

export default function ModalCourse({ isModalCourse, listCate, setIsModalCourse, fetchData, action, dataUpdate, setDataUpdate }) {
  const [imageUrl, setImageUrl] = useState('')
  const [image, setImage] = useState(null)

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
    if (image) {
      await handleImageUpload()
    }
    try {
      if (checkValidInput()) {
        const res = action === 'CREATE' ? await courseAPI.createCourse(dataCourse) : await courseAPI.updateCourse(dataUpdate.id, dataCourse)
        message.success(res.message)
        setDataCourse(dataCourseDefault)
        setValidInput(validInputDefault)
        setIsModalCourse(false)
        setImageUrl('')
        fetchData()
      }
    } catch (error) {
      message.success(error.response.data.message)
    }
  }

  const handleChangeUpload = async (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      const url = URL.createObjectURL(file)
      setImageUrl(url)
    }
  }

  const handleImageUpload = async () => {
    const formData = new FormData()
    formData.append('image', image)

    try {
      const response = await fetch(
        process.env.BUILD_MODE == 'production' ? 'https://langsch5sao.edu.vn/backend/api/upload/news/single' : 'http://localhost:4000/api/upload/course',
        {
          method: 'POST',
          body: formData
        }
      )

      const data = await response.json()
      if (data.imageUrl) {
        handleChangeInput('image', data.imageUrl)
      } else {
        message.error('Upload failed')
      }
    } catch (error) {
      console.error('Error uploading image:', error)
    }
  }

  useEffect(() => {
    const { Category, CategoryId, ...rest } = dataUpdate
    setDataCourse(rest)
    setImageUrl(dataUpdate.image)
  }, [dataUpdate])

  return (
    <>
      <Modal open={isModalCourse} title={action === 'CREATE' ? 'Tạo khóa học' : 'Cập nhật khóa học'} onOk={handleOk} onCancel={handleCancel}>
        <div className='grid grid-cols-2 gap-4'>
          <div className='col-span-2 text-center'>
            <label htmlFor='imgCourse' className='m-auto w-24 h-24 flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed'>
              {imageUrl ? (
                <img src={imageUrl} className='w-full h-full' alt='image' />
              ) : (
                <div className='flex justify-center items-center flex-col gap-y-2'>
                  <>
                    <span className='text-2xl'>
                      <MdCloudUpload />
                    </span>
                    <span>Image</span>
                  </>
                </div>
              )}
            </label>
            <input required className='hidden' type='file' id='imgCourse' onChange={handleChangeUpload} accept='image/png,image/jpeg' />
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
            value={dataCourse?.categoryId}
            status={!validInput.categoryId && 'error'}
            options={listCate.map((item) => {
              return {
                value: item.id,
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
