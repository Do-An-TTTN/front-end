import { Image, message } from 'antd'
import { SlCalender } from 'react-icons/sl'
import { FiUser } from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import newsAPI from '~/api/newsAPI'

export default function DetailNews() {
  const [news, setNews] = useState({})
  const { id } = useParams()

  const fetchData = async () => {
    try {
      const res = await newsAPI.getNews(id)
      setNews(res.data)
    } catch (error) {
      message.error(error.response.data.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [id])

  return (
    <div className='mt-20'>
      <article className='container mx-auto px-4 pt-2 pb-10'>
        <Image src={news?.image} alt={news?.title} width='100%' height={500} preview={false} className='object-cover rounded-lg mb-8' />
        <h1 className='text-4xl font-bold mb-4 text-gray-800'>{news?.title}</h1>
        <div className='flex items-center text-sm text-gray-600 mb-8'>
          <div className='flex items-center mr-6'>
            <FiUser className='w-4 h-4 mr-2' />
            <span>{news?.User?.name}</span>
          </div>
          <div className='flex items-center mr-6'>
            <SlCalender className='w-4 h-4 mr-2' />
            <span>{new Date(news?.createdAt).toLocaleDateString('vi-VN')}</span>
          </div>
        </div>
        <div className='prose prose-lg max-w-none' dangerouslySetInnerHTML={{ __html: news?.content }} />
      </article>
    </div>
  )
}
