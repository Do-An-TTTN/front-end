import { useEffect, useState } from 'react'
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
      <div className='mt-20 h-[500px]'>
        <div className='container mx-auto px-4 py-8'>
          <h1 className='text-3xl font-bold mb-6 text-gray-800'>Tất cả tin </h1>
          <div className='space-y-6'>
            {listNews.map((item, index) => (
              <NewsItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
