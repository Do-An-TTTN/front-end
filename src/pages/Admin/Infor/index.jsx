import { Button, Form, Input, message } from 'antd'
import { useContext } from 'react'
import bannerAPI from '~/api/bannerAPI'
import { AuthContext } from '~/context/AuthContext'

export default function Infor() {
  const { infor, updateInfor } = useContext(AuthContext)

  const onFinish = async (values) => {
    try {
      const res = await bannerAPI.updateInfor(infor.id, values)
      updateInfor(res?.data)
      message.success('Cập nhật thành công')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='min-h-[90vh] bg-white p-4 rounded-lg'>
      <div className='w-[30%] p-4 rounded-lg'>
        <p className='mb-4 text-xl font-bold'>Thông tin công ty</p>
        <div>
          <Form layout='vertical' onFinish={onFinish} initialValues={infor}>
            <Form.Item
              label='Email'
              name='email'
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Vui lòng nhập đúng định E-mail!'
                }
              ]}
            >
              <Input placeholder='Email' />
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
            <Form.Item label='Link facebook' name='facebook'>
              <Input
                placeholder='Link facebook'
                onChange={(e) => {
                  updateInfor({ ...infor, facebook: e.target.value })
                }}
              />
            </Form.Item>
            <Form.Item label='Link twitter' name='twitter'>
              <Input placeholder='Link twitter' />
            </Form.Item>
            <Form.Item label='Link linkedin' name='linkedin'>
              <Input placeholder='Link linkedin' />
            </Form.Item>
            <Form.Item label='Link instagram' name='instagram'>
              <Input placeholder='Link instagram' />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}
