import { createContext, useEffect, useState } from 'react'
import bannerAPI from '~/api/bannerAPI'

export const AuthContext = createContext()
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null)
  const [infor, setInfor] = useState(JSON.parse(localStorage.getItem('infor')) || null)

  const updateUser = (data) => {
    setCurrentUser(data)
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser))
  }, [currentUser])

  const updateInfor = (data) => {
    setInfor(data)
    localStorage.setItem('infor', JSON.stringify(data))
  }

  const fetchDataInfor = async () => {
    try {
      const res = await bannerAPI.getInfor()
      updateInfor(res?.infor)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDataInfor()
  }, [])

  return <AuthContext.Provider value={{ currentUser, updateUser, infor, updateInfor }}>{children}</AuthContext.Provider>
}
