import { message } from 'antd'
import { useEffect, useState } from 'react'
import bannerAPI from '~/api/bannerAPI'
import BannerForm from '~/pages/Admin/Banner/BannerForm'
import BannerList from '~/pages/Admin/Banner/BannerList/BannerList'

export default function Banner() {
  const [listBanners, setListBanners] = useState([])

  const deleteBanner = async (id) => {
    try {
      await bannerAPI.deleteBanner(id)
      message.success('Xóa thành công')
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }

  const fetchData = async () => {
    try {
      const res = await bannerAPI.getAllBanners()
      setListBanners(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='mx-auto p-4 bg-white rounded-lg h-screen'>
      <h1 className='text-xl font-bold mb-8'>Quản lý Banner</h1>
      <div className='grid grid-cols-2 gap-8'>
        <BannerForm fetchData={fetchData} />
        <div className='space-y-4 bg-gray-50 shadow-md rounded-lg p-6'>
          <span className='text-2xl font-semibold mb-4'>Danh sách Banner</span>
          <BannerList listBanners={listBanners} onDelete={deleteBanner} confirm />
        </div>
      </div>
    </div>
  )
}
