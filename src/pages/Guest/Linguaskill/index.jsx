import { useState } from 'react'

const Linguaskill = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }
  return (
    <>
      <div className='bg-gray-50 min-h-screen p-6 mt-6'>
        <div className='max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
          <div className='p-6'>
            <h1 className='text-3xl font-bold text-center text-red-600'>
              GIỚI THIỆU CHỨNG CHỈ TIẾNG ANH LINGUASKILL
            </h1>

            <div className='mt-4'>
              <h2 className='text-2xl font-bold text-red-600'>
                1. Chứng chỉ Linguaskill là gì?
              </h2>
              <p className='text-gray-700 leading-relaxed mt-2'>
                <strong>Linguaskill</strong> là chứng chỉ tiếng Anh quốc tế mới
                nhất của Cambridge Assessment được công nhận tại Việt Nam. Chứng
                chỉ này đáp ứng các quy định của các thông tư 18/2021/TT-BGDĐT,
                23/2021/TT-BGDĐT, và 17/2021/TT-BGDĐT của Bộ Giáo dục và Đào tạo
                cho việc tuyển sinh và đào tạo trình độ tiến sĩ, thạc sĩ, và
                giáo dục đại học.
              </p>
              <p className='mt-4 text-gray-700 leading-relaxed'>
                Đây là bài thi tiếng Anh trực tuyến, nhanh chóng có kết quả, có
                thể đánh giá đa cấp bậc về trình độ sử dụng tiếng Anh cả 4 kỹ
                năng: Nghe, Nói, Đọc, Viết.
              </p>
              <p className='mt-4 text-gray-700 leading-relaxed'>
                Thí sinh nhận ngay kết quả bài thi trong vòng tối đa 48 giờ
                (thông thường chỉ cần khoảng vài tiếng để có kết quả). Kết quả
                bài thi được căn chỉnh phù hợp với Khung tham chiếu trình độ
                ngôn ngữ chung Châu Âu (CEFR) từ A1 đến C2.
              </p>
              <img
                className='intro-image w-100 h-auto mt-2'
                src='/images/linguaskill-la-chung-chi-gi.jpg'
                alt='Giới Thiệu Image'
                onClick='openModal(this)'
              />
            </div>

            <div className='mt-4'>
              <h2 className='text-2xl font-bold text-red-600 mt-3'>
                2. Đối tượng nên thi chứng chỉ Linguaskill?
              </h2>
              <p>
                Chứng chỉ Linguaskill phù hợp với nhiều đối tượng khác nhau, bao
                gồm:
              </p>
              <strong>Sinh viên và học sinh: </strong>
              <ul className='list-disc list-inside text-gray-700 leading-relaxed'>
                <li>
                  Sinh viên đại học và cao đẳng: Để đánh giá trình độ tiếng Anh
                  hiện tại và chuẩn bị cho các kỳ thi quốc tế hoặc chương trình
                  học tập ở nước ngoài.
                </li>

                <li>
                  Học sinh trung học: Để xác định trình độ tiếng Anh và chuẩn bị
                  cho các kỳ thi chuyển tiếp hoặc du học.
                </li>
              </ul>
              <strong>Người đi làm:</strong>
              <ul className='list-disc list-inside text-gray-700 leading-relaxed'>
                <li>
                  Người đang tìm việc: Để nâng cao hồ sơ cá nhân và chứng minh
                  năng lực tiếng Anh với các nhà tuyển dụng.
                </li>
                <li>
                  Nhân viên: Để đáp ứng yêu cầu về trình độ tiếng Anh trong công
                  việc hoặc để thăng tiến trong sự nghiệp.
                </li>
              </ul>
              <strong>Các tổ chức và doanh nghiệp: </strong>
              <ul className='list-disc list-inside text-gray-700 leading-relaxed'>
                <li>
                  Nhà tuyển dụng: Để đánh giá trình độ tiếng Anh của các ứng
                  viên trong quá trình tuyển dụng.
                </li>
                <li>
                  Doanh nghiệp: Để kiểm tra và nâng cao trình độ tiếng Anh của
                  nhân viên, đảm bảo họ có khả năng giao tiếp hiệu quả trong môi
                  trường quốc tế.
                </li>
              </ul>
              <strong>Các tổ chức giáo dục: </strong>
              <ul className='list-disc list-inside text-gray-700 leading-relaxed'>
                <li>
                  Trường học và các cơ sở giáo dục: Để đánh giá và xếp lớp cho
                  học sinh, sinh viên.
                </li>
                <li>
                  Trung tâm ngoại ngữ: Để kiểm tra đầu vào và đánh giá tiến bộ
                  của học viên.
                </li>
              </ul>

              <p className='mt-4 text-gray-700 leading-relaxed'>
                Linguaskill là một công cụ linh hoạt và hiệu quả, phù hợp với
                nhiều đối tượng có nhu cầu kiểm tra và cải thiện trình độ tiếng
                Anh.
              </p>
              <img
                className='intro-image w-100 h-auto mt-2'
                src='/images/doi-tuong-nen-du-thi-chung-chi-linguaskill.jpg'
                alt='Giới Thiệu Image'
                onClick='openModal(this)'
              />
            </div>

            <div className='mt-4'>
              <h2 className='text-2xl font-bold text-red-600 mt-3'>
                3. Cấu trúc bài thi và thời gian thi từng phần?
              </h2>
              <table className='table-auto w-full mt-6 text-gray-700 border-collapse border border-gray-200'>
                <thead>
                  <tr className='bg-gray-100'>
                    <th className='border border-gray-200 px-4 py-2'>
                      Kỹ năng
                    </th>
                    <th className='border border-gray-200 px-4 py-2'>
                      Thời gian
                    </th>
                    <th className='border border-gray-200 px-4 py-2'>
                      Nội dung
                    </th>
                    <th className='border border-gray-200 px-4 py-2'>
                      Thang điểm
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-gray-200 px-4 py-2 font-semibold'>
                      Phần thi nghe và đọc
                    </td>
                    <td className='border border-gray-200 px-4 py-2'>
                      60 – 85 phút
                    </td>
                    <td className='border border-gray-200 px-4 py-2'>
                      <strong>Phần nghe:</strong>
                      <ul className='list-disc list-inside'>
                        <li>
                          Nghe và chọn lựa: Thí sinh nghe một đoạn ghi âm ngắn
                          và trả lời câu hỏi trắc nghiệm với ba lựa chọn.
                        </li>
                        <li>
                          Nghe thêm: Thí sinh nghe một bản ghi âm dài hơn và trả
                          lời một loạt các câu hỏi trắc nghiệm. Các câu hỏi theo
                          thứ tự như dữ liệu nghe được trong bản ghi âm.
                        </li>
                      </ul>
                      <strong>Phần đọc:</strong>
                      <ul className='list-disc list-inside'>
                        <li>
                          Đọc và chọn lựa: Thí sinh đọc một thông báo, sơ đồ,
                          nhãn, ghi nhớ hoặc thư dưới dạng văn bản ngắn và chọn
                          câu hoặc cụm từ phù hợp nhất với ý nghĩa của bài văn.
                        </li>
                        <li>
                          Câu bỏ trống: Thí sinh đọc một câu có một từ còn thiếu
                          (bỏ trống) và chọn từ phù hợp để điền vào chỗ trống.
                        </li>
                        <li>
                          Điền vào chỗ trống 1: Thí sinh chọn từ hoặc cụm từ phù
                          hợp để điền vào chỗ trống trong bài văn.
                        </li>
                        <li>
                          Điền vào chỗ trống 2: Thí sinh đọc một đoạn văn ngắn
                          trong đó có một số từ còn thiếu (bỏ trống) và viết từ
                          cần thiết vào mỗi ô trống.
                        </li>
                        <li>
                          Đọc thêm: Thí sinh đọc một đoạn văn dài hơn và trả lời
                          một loạt các câu hỏi trắc nghiệm.
                        </li>
                      </ul>
                    </td>
                    <td className='border border-gray-200 px-4 py-2'>
                      82 – 180
                    </td>
                  </tr>
                  <tr>
                    <td className='border border-gray-200 px-4 py-2 font-semibold'>
                      Phần thi viết
                    </td>
                    <td className='border border-gray-200 px-4 py-2'>
                      45 phút
                    </td>
                    <td className='border border-gray-200 px-4 py-2'>
                      <strong>Phần 1 (Email):</strong>
                      <ul className='list-disc list-inside'>
                        <li>Thí sinh đọc một đoạn ngắn, thường là email.</li>
                        <li>
                          Thí sinh sử dụng thông tin trong đoạn trên và bổ đầu
                          đầu để viết một email dài ít nhất 50 từ.
                        </li>
                      </ul>
                      <strong>Phần 2 (Viết văn bản):</strong>
                      <ul className='list-disc list-inside'>
                        <li>
                          Thí sinh đọc một văn bản ngắn hoặc đề tài và trả lời
                          bằng cách sử dụng thông tin tình huống và bài đầu của
                          mình.
                        </li>
                        <li>
                          Thí sinh thi Linguaskill General sẽ viết ít nhất 180
                          từ cho một văn bản tương đương gia hạn, và có thể được
                          yêu cầu viết kiểu văn bản khác nhau (ví dụ: bài đánh
                          giá, bài báo, bài viết trên web).
                        </li>
                      </ul>
                    </td>
                    <td className='border border-gray-200 px-4 py-2'>
                      82 – 180
                    </td>
                  </tr>
                  <tr>
                    <td className='border border-gray-200 px-4 py-2 font-semibold'>
                      Phần thi nói
                    </td>
                    <td className='border border-gray-200 px-4 py-2'>
                      15 phút
                    </td>
                    <td className='border border-gray-200 px-4 py-2'>
                      <ul className='list-disc list-inside'>
                        <li>
                          Phỏng vấn: Thí sinh trả lời 8 câu hỏi về bản thân{' '}
                          <em>(2 câu hỏi đầu tiên không được chấm điểm)</em>.
                        </li>
                        <li>Đọc to: Thí sinh đọc to 8 câu.</li>
                        <li>
                          Độc thoại: Thí sinh trình bày một chủ đề cụ thể trong
                          một phút. Thí sinh có 40 giây để chuẩn bị.
                        </li>
                        <li>
                          Độc thoại: Thí sinh trình bày về một hoặc nhiều đồ vật{' '}
                          <em>(ví dụ: biểu đồ, sơ đồ hoặc trang thông tin)</em>.
                          Thí sinh có một phút để chuẩn bị.
                        </li>
                        <li>
                          Hoạt động giao tiếp: Thí sinh bày tỏ ý kiến của bản
                          thân dưới dạng các câu trả lời ngắn cho 5 câu hỏi liên
                          quan đến một chủ đề. Thí sinh có 40 giây để chuẩn bị.
                        </li>
                      </ul>
                    </td>
                    <td className='border border-gray-200 px-4 py-2'>
                      82 – 180
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='mt-4'>
              <h2 className='text-2xl font-bold text-red-600 mt-3'>
                4. Thang điểm bài thi Linguaskill
              </h2>
              <p className='mt-2'>
                Bài thi Linguaskill sử dụng khung tham chiếu ngôn ngữ chung Châu
                Âu <em>(CEFR)</em> và thang điểm Cambridge English Scale để đánh
                giá kỹ năng tiếng Anh của thí sinh. Điểm số của bài thi được
                phản ánh qua 6 bậc điểm, từ 82 đến 180 điểm tương ứng với các
                trình độ từ A1 đến C1.
              </p>
              <p className='mt-2'>
                Cách tính điểm thi Linguaskill khá đơn giản. Nếu thí sinh chỉ
                thi một module, điểm số sẽ được xác định từ 82 đến 180. Trong
                trường hợp thí sinh tham gia từ 2 module trở lên, điểm số sẽ
                được tính dựa trên tổng điểm trung bình của các module.
              </p>
              <p className='mt-2'>Cụ thể như sau:</p>
              <img
                className='intro-image w-100 h-auto mt-2'
                src='/images/thang-diem-bai-thi-linguaskill.jpg'
                alt='Giới Thiệu Image'
              />
            </div>

            <div className='mt-4'>
              <h2 className='text-2xl font-bold text-red-600 mt-3'>
                5. Cách đăng ký thi chứng chỉ Linguaskill
              </h2>
              <p className='mt-2'>
                Đăng ký thi chung chỉ Linguaskill là một buoc quan trọng để bạn
                có thể chung minh năng lực tiêng Anh của mình trong môi truong
                học tập và làm việc quôc tê. Để đảm bảo quá trình đăng ký diên
                ra suôn sẻ và hiệu quả, chúng ta cân năm rõ các thông tin vê quy
                trình, yêu câu và các buoc cụ thể. Sau đây là huong dân chi tiêt
                thực hiện việc đăng ký một cách dê dàng và thuận tiện.
              </p>
              <strong className='text-xl'>
                5.1 Đăng ký thi Linguaskill ở đâu?
              </strong>
              <p className='mt-2'>
                {' '}
                Hiện nay, đã có nhiêu địa điểm tổ chuc thi Linguaskill trải dài
                tu Băc đên Nam. Một sô địa điểm bạn có thể tham khảo ở bảng sau:
              </p>
              <table className='table-auto w-full mt-6 text-gray-700 border-collapse border border-gray-200'>
                <thead>
                  <tr className='bg-gray-100'>
                    <th className='border border-gray-200 px-4 py-2'>STT</th>
                    <th className='border border-gray-200 px-4 py-2'>
                      Tên đơn vị tổ chức
                    </th>
                    <th className='border border-gray-200 px-4 py-2'>
                      Địa chỉ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-gray-200 px-4 py-2'>1</td>
                    <td className='border border-gray-200 px-4 py-2'>
                      Công ty Cổ phần Nghiên cứu Ứng dụng và Thực nghiệm Công
                      nghệ REAP.
                    </td>
                    <td className='border border-gray-200 px-4 py-2'>
                      187B phố Giảng Võ, Cát Linh, Đống Đa, Hà Nội.
                    </td>
                  </tr>
                  <tr>
                    <td className='border border-gray-200 px-4 py-2'>2</td>
                    <td className='border border-gray-200 px-4 py-2'>
                      Văn phòng Công ty Cổ phần Nghiên cứu Ứng dụng và Thực
                      nghiệm Công nghệ REAP tại Thái Nguyên.
                    </td>
                    <td className='border border-gray-200 px-4 py-2'>
                      284 đường Lương Ngọc Quyến, phường Quang Trung, thành phố
                      Thái Nguyên.
                    </td>
                  </tr>
                  <tr>
                    <td className='border border-gray-200 px-4 py-2'>3</td>
                    <td className='border border-gray-200 px-4 py-2'>
                      Văn phòng Công ty Cổ phần Nghiên cứu Ứng dụng và Thực
                      nghiệm Công nghệ REAP tại Nha Trang.
                    </td>
                    <td className='border border-gray-200 px-4 py-2'>
                      Số 2 Điện Biên Phủ, Vĩnh Hải, Nha Trang, Khánh Hòa.
                    </td>
                  </tr>
                  <tr>
                    <td className='border border-gray-200 px-4 py-2'>4</td>
                    <td className='border border-gray-200 px-4 py-2'>
                      Văn phòng Công ty Cổ phần Nghiên cứu Ứng dụng và Thực
                      nghiệm Công nghệ REAP tại Tp Hồ Chí Minh.
                    </td>
                    <td className='border border-gray-200 px-4 py-2'>
                      299 đường Trần Hưng Đạo, phường 10, Quận 5, Tp. Hồ Chí
                      Minh.
                    </td>
                  </tr>
                  <tr>
                    <td className='border border-gray-200 px-4 py-2'>5</td>
                    <td className='border border-gray-200 px-4 py-2'>
                      Văn phòng số 2 Công ty Cổ phần Nghiên cứu Ứng dụng và Thực
                      nghiệm Công nghệ REAP tại Tp Hồ Chí Minh.
                    </td>
                    <td className='border border-gray-200 px-4 py-2'>
                      263 đường Lê Trọng Tấn, phường Sơn Kỳ, quận Tân Phú, Tp.
                      Hồ Chí Minh.
                    </td>
                  </tr>
                  <tr>
                    <td className='border border-gray-200 px-4 py-2'>6</td>
                    <td className='border border-gray-200 px-4 py-2'>
                      Văn phòng Công ty Cổ phần Nghiên cứu Ứng dụng và Thực
                      nghiệm Công nghệ REAP tại Bình Dương.
                    </td>
                    <td className='border border-gray-200 px-4 py-2'>
                      Số 504, đại lộ Bình Dương, phường Hiệp Thành, thành phố
                      Thủ Dầu Một, Bình Dương.
                    </td>
                  </tr>
                </tbody>
              </table>
              <strong className='text-xl'>
                5.2 Hồ sơ đăng kí Linguaskill cần chuẩn bị những gì?
              </strong>
              <p className='mt-2'>
                Để hoàn tât hô so đăng ký dự thi chung chỉ Linguaskill, các bạn
                cân chuẩn bị các loại giây to sau:
              </p>
              <ul className='list-disc list-inside text-gray-700 leading-relaxed'>
                <li>Phiêu đăng ký dự thi theo mẫu.</li>
                <li>
                  4 ảnh 3 × 4 mặt sau ghi rõ họ tên và ngày tháng năm sinh.
                </li>
                <li>
                  Bản sao công chung một trong nhung loại giây to tùy thân nhu:
                  CCCD, hộ chiêu.
                </li>
              </ul>
              <p>
                Hồ sơ đăng ký có thể được gửi trực tiếp tại các đơn vị tổ chức
                hoặc qua đường bưu điện, kèm theo lệ phí dự thi.
              </p>
            </div>

            <div className='mt-2'>
              <h2 className='text-2xl font-bold text-red-600 mt-3'>
                6. Lệ phí thi chứng chỉ Linguaskill là bao nhiêu?
              </h2>
              <p>
                Vì kỳ thi Linguaskill có nhiều hình thức thi khác nhau, mức lệ
                phí sẽ khác nhau giữa các module. Dưới đây là các mức lệ phí cụ
                thể:
              </p>
              <ul className='list-disc list-inside text-gray-700 leading-relaxed'>
                <li>
                  Lệ phí thi bài thi 4 kỹ năng và cấp chứng chỉ: 2.400.000 VND/
                  thí sinh.
                </li>
                <li>
                  Lệ phí thi thi lại: 800k/module (Nghe – Đọc/ Nói/ Viết) (Thí
                  sinh chỉ thi lại module không đạt)
                </li>
              </ul>
            </div>

            <div className='mt-2'>
              <h2 className='text-2xl font-bold text-red-600 mt-3'>
                7. Khóa luyện thi trực tuyên bài thi Linguaskill tại Dn5Sao
              </h2>
              <ul className='list-disc list-inside text-gray-700 leading-relaxed'>
                <li>Giúp thí sinh nâng cao trình độ tiếng Anh:</li>
                <li>
                  Nội dung đa dạng vê kiến thức giao tiếp và thực hành kỹ năng
                  đọc, viết, nghe và nói
                </li>
                <li>Gồm nhiều phần học và thực hành về ngữ pháp và từ vựng</li>
              </ul>
              <img
                className='intro-image w-100 h-auto mt-2 mx-auto'
                src='/images/hoc-phi-linguaskill.jpg'
                alt='Giới Thiệu Image'
                onClick='openModal(this)'
              />
            </div>

            <div className='mt-2'>
              <h2 className='text-2xl font-bold text-red-600 mt-3'>
                7. Nội dung khóa luyện thi Linguaskill
              </h2>
              <ul className='list-disc list-inside text-gray-700 leading-relaxed'>
                <li>
                  {' '}
                  Các bài học trong khóa luyện thi dựa trên các chủ đề chính
                  trong bài thi chính thức{' '}
                </li>
                <li>
                  Phần thực hành chi tiết và sát với các câu hỏi trong bài thi
                </li>
                <li>Làm 2 bài thi thử trứớc khi thi thật</li>
                <li>
                  Các lời khuyên để thí sinh tăng tự tin và nâng cao hiệu quả
                  làm bài
                </li>
                <li>Phần thuởng sau khi hoàn thành khóa học.</li>
              </ul>
            </div>

            <div className='mt-2'>
              <h2 className='text-2xl font-bold text-red-600 mt-3'>
                8. Những câu hỏi phổ biến về chứng chỉ Linguaskill
              </h2>
              <div className='accordion mt-6'>
                {[
                  {
                    question: 'Thi Linguaskill bao lâu có kết quả?',
                    answer:
                      'Kết quả của bài thi Linguaskill thường sẽ được công bố trong vòng 48 giờ làm việc sau khi hoàn thành bài thi. Thời gian này có thể thay đổi tùy theo từng tổ chức tổ chức thi cụ thể.',
                  },
                  {
                    question: 'Bao lâu sẽ được cấp chứng chỉ?',
                    answer:
                      'Sau khi nhận được kết quả thi, việc cấp chứng chỉ Linguaskill thường sẽ được thực hiện trong vòng một tuần. Tuy nhiên, thời gian này cũng có thể biến đổi tùy thuộc vào quy trình của từng tổ chức cấp chứng chỉ.',
                  },
                  {
                    question: 'Chứng chỉ Linguaskill có thời hạn bao lâu?',
                    answer:
                      'Thời hạn của chứng chỉ Linguaskill thường được xác định bởi các tổ chức hoặc tổ chức đăng ký thi cụ thể. Tuy nhiên, chứng chỉ này thường có thời hạn từ 1 đến 2 năm kể từ ngày cấp, sau đó có thể được gia hạn nếu cần thiết.',
                  },
                ].map((item, index) => (
                  <div className='border-b border-gray-200' key={index}>
                    <button
                      className='w-full text-left flex justify-between items-center px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100'
                      onClick={() => toggleAccordion(index)}
                    >
                      {item.question}
                      <span className='text-blue-700'>
                        {activeIndex === index ? '−' : '+'}
                      </span>
                    </button>
                    <div
                      className={`px-4 py-2 text-gray-600 ${
                        activeIndex === index ? 'block' : 'hidden'
                      }`}
                    >
                      {item.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='mt-2'>
              <h2 className='text-2xl font-bold text-red-600 mt-3'>
                9. Kết luận
              </h2>
              <ul className='list-disc list-inside text-gray-700 leading-relaxed'>
                <li>
                  Chứng chỉ Linguaskill là một công cụ đánh giá tiếng Anh toàn
                  diện và linh hoạt, được thiết kế để đáp ứng nhu cầu của cả cá
                  nhân và tổ chức trong bối cảnh toàn cầu hóa ngày càng sâu
                  rộng.&nbsp;
                </li>
                <li>
                  Với cấu trúc bài thi đa dạng, thang điểm minh bạch và khả năng
                  quy đổi điểm sang các chứng chỉ quốc tế khác, Linguaskill cung
                  cấp một phương pháp đáng tin cậy để đánh giá và chứng nhận
                  trình độ tiếng Anh.&nbsp;
                </li>
                <li>
                  {' '}
                  Hy vọng qua bài viết này bạn có cái nhìn toàn diện hơn về
                  chứng chỉ Linguaskill. Nếu vẫn còn thắc mắc về chứng chỉ này
                  hoặc những chứng chỉ tiếng Anh khác thì bạn đừng ngần ngại để
                  lại bình luận ở bên dưới bài viết này nhé. Đội ngũ tư vấn viên
                  của Vietop English luôn sẵn sàng hỗ trợ bạn.
                </li>
              </ul>
            </div>

            <div>
              <img
                className='intro-image w-100 h-auto mt-2 mx-auto'
                src='/images/thu-cam-on.jpg'
                alt='Giới Thiệu Image'
                onClick='openModal(this)'
              />
            </div>

            <div className='mt-6 flex justify-center'>
              <a
                href='https://www.cambridgeenglish.org/'
                target='_blank'
                rel='noopener noreferrer'
                className='px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-800 transition'
              >
                Tìm hiểu thêm
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Linguaskill
