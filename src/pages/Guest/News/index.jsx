import { useEffect, useState } from 'react'
import { Empty } from 'antd'
import newsAPI from '~/api/newsAPI'
import NewsItem from '~/components/NewsItem'

export default function News() {
  const [listNews, setListNews] = useState([])

  const fetchData = async () => {
    try {
      const res = await newsAPI.getAllNews()
      setListNews(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='mt-20'>
        <div className='container mx-auto px-4 py-8 min-h-[60vh]'>
          <h1 className='text-3xl font-bold mb-6 text-gray-800'>Tất cả tin </h1>
          <div>{listNews.length === 0 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> : listNews.map((item, index) => <NewsItem key={index} item={item} />)}</div>
        </div>
      </div>
    </>
  )
}
