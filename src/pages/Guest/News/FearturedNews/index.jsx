import React from 'react'

const news = [
  {
    id: 1,
    title: 'Opening English communication class in December',
    description:
      'Star Foreign Language Center opens English communication classes for all ages. Register now to receive a 20% tuition discount!',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    title: 'Free trial program',
    description:
      'Join the free trial program now to experience the modern and friendly learning environment at Star Foreign Language Center.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    title: 'Workshop on effective foreign language learning methods',
    description:
      'Attend a special seminar on effective foreign language learning methods with experts at Star Foreign Language Center.',
    image: 'https://via.placeholder.com/300x200',
  },
]

const FeaturedNews = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className='relative bg-gray-800 text-white py-20'>
        <div className='container mx-auto px-4 text-center mt-24'>
          <h1 className='text-5xl font-bold mb-4 text-red-600'>
            Featured News
          </h1>
          <p className='text-lg mb-8'>
            Featured news at our Star Foreign Language Center
          </p>
        </div>
      </section>

      <section className='py-20 bg-gray-100 px-4 sm:px-8 lg:px-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {news.map((item) => (
            <div
              key={item.id}
              className='bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg max-w-xs mx-auto transform hover:scale-105 transition duration-300'
            >
              <img
                src={item.image}
                alt={item.title}
                className='w-full h-40 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-lg font-bold text-gray-800 mb-2'>
                  {item.title}
                </h3>
                <p className='text-gray-700 mb-4'>{item.description}</p>
                <button className='bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors'>
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-8'>
          <button className='bg-red-600 text-white px-6 py-3 rounded-md font-bold hover:bg-red-700 transition-colors'>
            See all news
          </button>
        </div>
      </section>
    </div>
  )
}

export default FeaturedNews
