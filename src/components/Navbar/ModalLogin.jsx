import { Form, Input, message, Modal, Spin } from 'antd'
import { useState, useContext } from 'react'
import authAPI from '~/api/authAPI'
import ButtonCustom from '~/components/ui/Button'
import { AuthContext } from '~/context/AuthContext'

export default function ModalLogin({ isModalOpen, setIsModalOpen }) {
  const [isLoading, setisLoading] = useState(false)
  const [frmRegis, setFrmRegis] = useState(false)
  const { updateUser } = useContext(AuthContext)

  const onFinish = async (values) => {
    setisLoading(true)

    try {
      const res = frmRegis ? await authAPI.register(values) : await authAPI.logIn(values)
      !frmRegis && updateUser(res.data.user)
      message.success(res.message)
      setIsModalOpen(false)
      setFrmRegis(false)
    } catch (error) {
      message.error(error.response.data.message)
    } finally {
      setisLoading(false)
    }
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    setFrmRegis(false)
  }
  return (
    <div>
      <Modal title={frmRegis ? 'Đăng ký' : 'Đăng nhập'} open={isModalOpen} onCancel={handleCancel} footer={false}>
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

          <Form.Item
            label='Mật khẩu'
            name='password'
            rules={[
              {
                type: 'string',
                message: 'Vui lòng nhập số!'
              },
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu!'
              }
            ]}
          >
            <Input.Password />
          </Form.Item>
          {frmRegis && (
            <>
              <Form.Item
                label='Họ và Tên'
                name='name'
                rules={[
                  {
                    type: 'string',
                    message: 'Vui lòng nhập số!'
                  },
                  {
                    required: true,
                    message: 'Vui lòng nhập họ tên!'
                  }
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label='Địa chỉ'
                name='address'
                rules={[
                  {
                    type: 'string',
                    message: 'Vui lòng nhập số!'
                  },
                  {
                    required: true,
                    message: 'Vui lòng nhập địa chỉ!'
                  }
                ]}
              >
                <Input />
              </Form.Item>
            </>
          )}
          <Form.Item>
            <div className='flex justify-between items-center'>
              <p className='cursor-pointer' onClick={() => setFrmRegis(true)}>
                {!frmRegis && 'Đăng ký ngay'}
              </p>
              <span className='text-rose-500 hover:text-rose-500 cursor-pointer'>Quên mật khẩu?</span>
            </div>
          </Form.Item>

          <Form.Item label={null}>
            {isLoading ? (
              <ButtonCustom htmlType='submit' normal disabled>
                <Spin size='small' />
                {frmRegis ? 'Đăng ký' : 'Đăng nhập'}
              </ButtonCustom>
            ) : (
              <ButtonCustom htmlType='submit'> {frmRegis ? 'Đăng ký' : 'Đăng nhập'}</ButtonCustom>
            )}
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
