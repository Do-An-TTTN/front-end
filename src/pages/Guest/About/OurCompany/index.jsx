const OurCompany = () => {
  const infos = [
    {
      id: 1,
      title: 'Experienced Teachers',
      description:
        'The teaching staff at Star Foreign Language Center are highly qualified and experienced in teaching. They are not only fluent in languages ​​but also thoroughly trained in modern teaching methods, always dedicated and enthusiastic about students development.',
    },
    {
      id: 2,
      title: 'Flexible Programs',
      description:
        'Star Foreign Language Center offers a variety of foreign language courses, from English, Japanese, Korean to Chinese, French... We design programs suitable for each audience, from children , students to working people, helping everyone have the opportunity to improve their foreign language skills.',
    },
    {
      id: 3,
      title: 'Modern Facilities',
      description:
        'At Star Foreign Language Center, students will study in a modern, comfortable space with spacious, airy classrooms, fully equipped with learning support equipment such as projectors, speakers, and bulletin boards... This is the ideal environment for you to feel comfortable and focus on your studies.',
    },
  ]

  return (
    <>
      <div>
        {/* Hero Section */}
        <section className='relative bg-gray-800 text-white py-20'>
          <div className='container mx-auto px-4 text-center mt-24'>
            <h1 className='text-5xl font-bold mb-4 text-red-600'>
              Welcome to Star Foreign Language Center
            </h1>
            <p className='text-lg mb-8'>
              Empowering students to achieve their goals with world-class
              languages education.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className='py-20 bg-gray-100'>
          <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h2 className='text-4xl font-bold mb-4 text-red-600'>
                About Star Foreign Language Center
              </h2>
              <p className='text-gray-700 mb-4'>
                Star Foreign Language Center - Where Your Language Potential Is
                Unleashed. Are you looking for a place to improve your foreign
                language skills? Come to Star Foreign Language Center - a
                prestigious and top quality address in Vietnam.
              </p>
              <p className='text-gray-700'>
                From IELTS preparation to general English courses, we provide a
                wide range of programs tailored to meet every need.
              </p>
            </div>
            <img
              src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1'
              alt='About Star English'
              className='rounded-lg shadow-lg w-full object-cover'
            />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-4xl font-bold mb-8 text-red-600'>
              Why Choose Star Foreign Language Center?
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {infos.map((info) => (
                <div
                  key={info.id}
                  className='p-6 bg-gray-100 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300'
                >
                  <h3 className='text-2xl font-bold mb-4'>{info.title}</h3>
                  <p className='text-gray-700 text-justify'>
                    {info.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className='py-2 text-white text-center relative'>
          <div className='absolute inset-0'>
            <img
              src='https://images.unsplash.com/photo-1524178232363-1fb2b075b655'
              alt='English Learning Environment'
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black bg-opacity-50'></div>
          </div>
          <div className='relative container mx-auto px-4 h-96 flex flex-col items-center justify-center'>
            <h2 className='text-5xl font-bold mb-4'>
              Join Star English Center Today!
            </h2>
            <p className='text-2xl mb-8'>
              Star Foreign Language Center - A place to form and develop your
              language abilities!
            </p>
            <button className='px-6 py-3 bg-red-600 rounded-lg hover:bg-gray-100 hover:text-red-600 transition'>
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default OurCompany
