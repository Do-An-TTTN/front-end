const OurCompany = () => {
  const infos = [
    {
      id: 1,
      title: 'Đội ngũ giáo viên giàu kinh nghiệm',
      description:
        'Đội ngũ giảng viên tại Trung tâm Anh ngữ Star đều có trình độ chuyên môn cao và giàu kinh nghiệm giảng dạy. Họ không chỉ thông thạo ngoại ngữ mà còn được đào tạo bài bản về phương pháp giảng dạy hiện đại, luôn tận tâm và nhiệt tình phát triển học viên.',
    },
    {
      id: 2,
      title: 'Chương trình đa dạng',
      description:
        'Trung tâm Anh ngữ Star cung cấp đa dạng các khóa học tiếng Anh dành cho mọi lứa tuổi... Chúng tôi thiết kế chương trình phù hợp với từng đối tượng, từ trẻ em, sinh viên đến người đi làm, giúp mọi người có cơ hội nâng cao trình độ tiếng Anh của mình.',
    },
    {
      id: 3,
      title: 'Cơ sở vật chất hiện đại',
      description:
        'Tại Trung tâm Anh ngữ Star, học viên sẽ được học trong không gian hiện đại, tiện nghi với phòng học rộng rãi, thoáng mát, được trang bị đầy đủ các thiết bị hỗ trợ học tập như máy chiếu, loa, bảng tin… Đây là môi trường lý tưởng để các bạn cảm thấy thoải mái và tự tin, tập trung hoàn toàn vào việc học của bạn',
    },
  ]

  return (
    <>
      <div>
        {/* Hero Section */}
        <section className='relative bg-gray-800 text-white py-20'>
          <div className='container mx-auto px-4 text-center mt-24'>
            <h1 className='text-5xl font-bold mb-4 text-red-600'>
              Chào mừng đến với Trung tâm Anh ngữ Star
            </h1>
            <p className='text-lg mb-8'>
              languages education. Giúp học viên đạt được mục tiêu ngôn ngữ với
              chương trình giáo dục tầm quốc tế.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className='py-20 bg-gray-100'>
          <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h2 className='text-4xl font-bold mb-4 text-red-600'>
                Về Trung tâm Anh ngữ Star
              </h2>
              <p className='text-gray-700 mb-4'>
                Trung Tâm Anh Ngữ Star - Nơi Tiềm Năng Ngôn Ngữ Của Bạn Được
                Giải phóng. Bạn đang tìm kiếm một nơi để nâng cao trình độ ngoại
                ngữ của mình? Hãy đến với Trung tâm Anh ngữ Star - một địa chỉ
                uy tín, chất lượng hàng đầu Việt Nam.
              </p>
              <p className='text-gray-700'>
                Từ luyện thi IELTS đến các khóa học tiếng Anh tổng quát, chúng
                tôi cung cấp nhiều chương trình phong phú đáp ứng mọi nhu cầu.
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
              Tại sao lại chọn học tại Trung tâm Anh ngữ Star?
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
              Đăng ký học tại Trung tâm Anh ngữ Star ngay hôm nay!
            </h2>
            <p className='text-2xl mb-8'>
              Trung tâm Anh ngữ Star - Nơi trau dồi và phát triển tiềm năng ngôn
              ngữ của bạn!
            </p>
            <button className='px-6 py-3 bg-red-600 rounded-lg hover:bg-gray-100 hover:text-red-600 transition'>
              Liên hệ với chúng tôi
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default OurCompany
