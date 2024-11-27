import { ConfigProvider, Button } from 'antd'

const ButtonCustom = ({ onClick, children, htmlType, normal, disabled, className }) => {
  return (
    <>
      <ConfigProvider theme={{ components: { Button: { colorPrimary: '#dc2626', algorithm: true } } }}>
        <Button
          onClick={onClick}
          size={`${!normal ? 'large' : ''}`}
          disabled={disabled}
          htmlType={htmlType}
          className={`text-white rounded-lg transition duration-300 ${className}`}
          type='primary'
        >
          {children}
        </Button>
      </ConfigProvider>
    </>
  )
}
export default ButtonCustom
