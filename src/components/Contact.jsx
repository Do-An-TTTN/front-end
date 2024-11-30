import { Form, Input, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import contactAPI from '~/api/contactAPI'
import ButtonCustom from '~/components/ui/Button'

export default function Contact() {
  const onFinish = async (values) => {
    try {
      await contactAPI.createContact(values)
      message.success('Gửi lời nhắn thành công')
    } catch (error) {
      message(error.response.data.message)
    }
  }

  return (
    <>
      <section className='py-20' id='contact'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-16 text-red-600'>Liên hệ với chúng tôi</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-2xl font-bold mb-6'>Liên hệ</h3>
              <Form
                name='basic'
                onFinish={onFinish}
                autoComplete='off'
                layout='vertical'
                labelCol={{
                  span: 8
                }}
                wrapperCol={{
                  span: 24
                }}
              >
                <Form.Item
                  label='Họ và Tên'
                  name='name'
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập họ tên!'
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label='Số điện thoại'
                  name='phone'
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập số điện thoại!'
                    },
                    {
                      min: 10,
                      message: 'Số điện thoại chỉ có 10 hoặc 11 ký tự!'
                    },
                    {
                      max: 11,
                      message: 'Số điện thoại chỉ có 10 hoặc 11 ký tự!'
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item label='Lời nhắn' name='message'>
                  <TextArea
                    showCount
                    maxLength={100}
                    placeholder='Lời nhắn của bạn'
                    style={{
                      height: 120,
                      resize: 'none',
                      marginBottom: '4px'
                    }}
                  />
                </Form.Item>
                <Form.Item>
                  <ButtonCustom htmlType='submit'> Gửi</ButtonCustom>
                </Form.Item>
              </Form>
            </div>
            <div>
              <h3 className='text-2xl font-bold mb-6'>Thông tin</h3>
              <div className='space-y-4'>
                <p className='flex items-center'>
                  <span className='font-bold mr-2'>Address:</span> 85 Nguyễn Văn Nghi, Phường 7, Quận Gò Vấp, TP.HCM
                </p>
                <p className='flex items-center'>
                  <span className='font-bold mr-2'>Phone:</span> 0938 762 783
                </p>
                <p className='flex items-center'>
                  <span className='font-bold mr-2'>Email:</span> info@dn5sao.edu.vn
                </p>
              </div>
              <div className='mt-8'>
                <h4 className='font-bold mb-4'>Follow Us</h4>
                <div className='flex space-x-4'>
                  <FaFacebook className='text-2xl text-red-600 hover:text-red-700 cursor-pointer' />
                  <FaTwitter className='text-2xl text-red-600 hover:text-red-700 cursor-pointer' />
                  <FaInstagram className='text-2xl text-red-600 hover:text-red-700 cursor-pointer' />
                  <FaLinkedin className='text-2xl text-red-600 hover:text-red-700 cursor-pointer' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
