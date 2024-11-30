import { useContext } from 'react'
import { AuthContext } from '~/context/AuthContext'

function Header() {
  const { currentUser } = useContext(AuthContext)

  return (
    <>
      <div className='py-4 text-lg'>
        <p>
          Welcom <b>{currentUser.name}</b>
        </p>
      </div>
    </>
  )
}

export default Header
