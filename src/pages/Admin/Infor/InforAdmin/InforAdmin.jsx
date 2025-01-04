import { Button, Form, Input, message } from 'antd'
import { useContext } from 'react'
import bannerAPI from '~/api/bannerAPI'
import { AuthContext } from '~/context/AuthContext'

export default function InforAdmin() {
  const { currentUser, updateUser } = useContext(AuthContext)

  const onFinish = async (values) => {
    try {
      const res = await bannerAPI.updateUser(currentUser.id, values)
      updateUser(res?.data?.user)
      message.success('Cập nhật thành công')
    } catch (error) {
      console.log(error)
    }
  }

  const onFinish2 = async (values) => {
    try {
      await bannerAPI.updatePass(currentUser.id, values)
      message.success('Đổi mật khẩu thành công')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='min-h-[90vh] bg-white p-4 rounded-lg flex gap-10'>
      <div className='w-[40%] p-4 rounded-lg'>
        <p className='mb-4 text-xl font-bold'>Thông tin admin</p>
        <div>
          <Form layout='vertical' onFinish={onFinish} initialValues={currentUser}>
            <Form.Item
              label='Tên'
              name='name'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập tên'
                }
              ]}
            >
              <Input placeholder='Nhập tên' />
            </Form.Item>
            <Form.Item
              label='Số điện thoại'
              name='phone'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập số điện thoại'
                }
              ]}
            >
              <Input placeholder='Số điện thoại' />
            </Form.Item>
            <Form.Item
              label='Địa chỉ'
              name='address'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập địa chỉ'
                }
              ]}
            >
              <Input placeholder='Địa chỉ' />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className='w-[40%] p-4 rounded-lg'>
        <p className='mb-4 text-xl font-bold'>Đổi mật khẩu</p>
        <div>
          <Form layout='vertical' onFinish={onFinish2}>
            <Form.Item
              label='Mật khẩu hiện tại'
              name='currentPass'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu hiện tại'
                }
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label='Mật khẩu mới'
              name='newPass'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu mới'
                }
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label='Xác nhận mật khẩu'
              name='confirmPass'
              dependencies={['newPass']}
              rules={[
                {
                  required: true,
                  message: 'Vui lòng xác nhận lại mật khẩu'
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('newPass') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(new Error('Mật khẩu xác nhận không đúng!'))
                  }
                })
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Xác nhận đổi
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}
