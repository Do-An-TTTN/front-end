const Button = ({ widthFull, children }) => {
  return (
    <>
      <button className={`${widthFull ? 'w-full' : ''} bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300`}>{children}</button>
    </>
  )
}
export default Button
