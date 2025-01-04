import { Empty } from 'antd'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import cateAPI from '~/api/cateAPI'
import { CardCourse } from '~/components/CardCourse'

const CoursePage = () => {
  const { id } = useParams()

  const [listCourse, setListCourse] = useState([])

  const fetchData = async () => {
    try {
      const res = await cateAPI.getCourseCate(id)
      setListCourse(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [id])

  return (
    <>
      <div className='mt-20 bg-gray-50 '>
        <div className='container mx-auto px-4 py-8 min-h-[50vh]'>
          {listCourse.length === 0 ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
              {listCourse.map((course) => (
                <>
                  <CardCourse course={course} />
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CoursePage
