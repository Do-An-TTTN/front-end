import { message, Modal } from 'antd'
import { MdCloudUpload } from 'react-icons/md'
import copy from 'copy-to-clipboard'

export default function ModalGallery({ images, show, setShow }) {
  const copyUrl = (url) => {
    copy(url, {
      message: 'Press to copy'
    })
    message.success('Copy success!')
  }
  return (
    <Modal open={show} onCancel={() => setShow(false)}>
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
      <div className='grid grid-cols-4 gap-2 mt-3'>
        {images.length > 0 &&
          images.map((img, i) => (
            <div className=' cursor-pointer' onClick={() => copyUrl(img)} key={i}>
              <img src={img} alt='image' className='w-full h-[100px] object-cover' />
            </div>
          ))}
      </div>
    </Modal>
  )
}
