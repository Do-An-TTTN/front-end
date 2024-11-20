const OurTeam = () => {
  const teachers = [
    {
      id: 1,
      name: 'Mr.John Paul',
      subject: 'English Teacher',
      email: 'mrjohnpaul@example.com',
      image: 'images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    {
      id: 2,
      name: 'Mrs.Loan',
      subject: 'German Teacher',
      email: 'mrsloan@example.com',
      image: 'images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    },
    {
      id: 3,
      name: 'Mr.Danh',
      subject: 'French Teacher',
      email: 'mrdanh@example.com',
      image: 'images.unsplash.com/photo-1438761681033-6461ffad8d80',
    },
    {
      id: 4,
      name: 'Mrs.Thuy Ngoc',
      subject: 'Spanish Teacher',
      email: 'mrsthuyngoc@example.com',
      image: 'images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    {
      id: 5,
      name: 'Mrs.Phuong Vi',
      subject: 'English Teacher',
      email: 'mrsphuongvi@example.com',
      image: 'images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    },
    {
      id: 6,
      name: 'Mr.Khanh Thai',
      subject: 'Chinese Teacher',
      email: 'mrkhanhthai@example.com',
      image: 'images.unsplash.com/photo-1438761681033-6461ffad8d80',
    },
  ]

  return (
    <>
      <div>
        {/* Hero Section */}
        <section className='bg-gray-800 text-white py-20 mb-12'>
          <div className='container mx-auto text-center mt-24'>
            <h1 className='text-5xl font-bold mb-4 text-red-600'>
              Our Teachers
            </h1>
            <p className='text-lg mb-8'>
              Empowering students to achieve their goals with world-class
              languages education.
            </p>
          </div>
        </section>
        <div className='container mx-auto mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className='bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300'
            >
              {/* Image Section */}
              <img
                src={'https://' + teacher.image}
                alt={teacher.name}
                className='w-full h-48 object-cover'
              />

              {/* Content Section */}
              <div className='p-6 text-center'>
                <h2 className='text-2xl font-bold text-gray-800 mb-2'>
                  {teacher.name}
                </h2>
                <p className='text-gray-600 mb-2'>Subject: {teacher.subject}</p>
                <p className='text-gray-600 mb-4'>Email: {teacher.email}</p>

                {/* Action Button */}
                <button className='px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300'>
                  Contact Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default OurTeam
