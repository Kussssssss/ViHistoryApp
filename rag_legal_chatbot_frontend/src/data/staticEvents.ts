// src/data/staticEvents.ts
import { HistoricalEvent } from '../types/historicalData';

export const STATIC_HISTORICAL_EVENTS: HistoricalEvent[] = [
  // Hai Ba Trung Events
  {
    id: 'event_hai_ba_trung',
    heading: 'Nước Âu Lạc đầu Công nguyên và Khởi nghĩa Hai Bà Trưng',
    year: 40,
    type: 'rebellion',
    context: 'Đầu Công nguyên, nước Âu Lạc chịu sự đô hộ của nhà Hán. Chính quyền đô hộ truyền bá Nho giáo và lập trường học nhằm đào tạo tay sai bản địa. Tuy nhiên, chính sách cai trị ngày càng hà khắc, đặc biệt dưới thời Thái thú Tô Định (từ năm 34) nổi tiếng tham lam, tàn bạo, đã làm gia tăng mâu thuẫn. Tô Định áp bức kinh tế, thu hẹp quyền lực của Lạc hầu, Lạc tướng, và khủng bố người dân. Việc Tô Định giết Thi Sách, chồng bà Trưng Trắc (con gái Lạc tướng Mê Linh), đã trở thành nguyên nhân trực tiếp thổi bùng ngọn lửa khởi nghĩa.',
    description: 'Mùa xuân năm Canh Tý (40 SCN), Hai Bà Trưng (Trưng Trắc và Trưng Nhị) phất cờ khởi nghĩa tại cửa sông Hát (Mê Linh), nhận được sự hưởng ứng rộng rãi của nhân dân các quận Giao Chỉ, Cửu Chân, Nhật Nam, Hợp Phố. Lời thề của Hai Bà thể hiện ý chí giành lại non sông, báo thù nhà, nợ nước. Nghĩa quân nhanh chóng đánh chiếm các quận huyện, bao gồm cả thủ phủ Luy Lâu, buộc Tô Định phải bỏ chạy. Hai Bà chiếm được 65 thành (có thuyết nói 56 thành), Trưng Trắc xưng Vương, đóng đô ở Mê Linh, xá thuế cho dân trong 2 năm và ban hành luật lệ riêng, khẳng định nền độc lập tự chủ.\n\nNhà Hán cử Mã Viện, một lão tướng dày dạn kinh nghiệm, mang 2 vạn quân sang đàn áp. Quân Trưng Vương dù chiến đấu dũng cảm nhưng do chênh lệch lực lượng và kinh nghiệm, đã thất bại trong các trận đánh lớn như ở Lãng Bạc. Hai Bà lui về Cấm Khê cố thủ nhưng cuối cùng bị đánh bại và anh dũng hy sinh vào năm 43 (có truyền thuyết nói Hai Bà tuẫn tiết ở sông Hát). Dù cuộc khởi nghĩa thất bại, các tướng lĩnh và nhân dân vẫn tiếp tục chống cự ở nhiều nơi, đặc biệt là ở Cửu Chân dưới sự lãnh đạo của Đô Dương và Chu Bá, nhưng cuối cùng cũng bị Mã Viện đàn áp khốc liệt.\n\nCuộc khởi nghĩa Hai Bà Trưng là cuộc nổi dậy lớn đầu tiên của nhân dân ta chống lại ách đô hộ phương Bắc, khẳng định mạnh mẽ ý chí độc lập, tự chủ và vai trò to lớn của người phụ nữ Việt Nam trong lịch sử đấu tranh của dân tộc.',
    period: 'period_1',
    characters: ['Trưng Trắc', 'Trưng Nhị', 'Tô Định', 'Mã Viện', 'Thi Sách', 'Đô Dương', 'Chu Bá'],
    locations: ['Mê Linh', 'Cửa sông Hát', 'Luy Lâu', 'Cấm Khê', 'Lãng Bạc'],
    questions: [
      {
        question: 'Ai là Thái thú Giao Chỉ nổi tiếng gian tham, tàn bạo, mà hành động giết Thi Sách đã trở thành nguyên nhân trực tiếp dẫn đến cuộc khởi nghĩa Hai Bà Trưng?',
        options: ['Tích Quang', 'Nhâm Diên', 'Tô Định', 'Mã Viện'],
        correctAnswer: 2,
        explanation: 'Tô Định là Thái thú Giao Chỉ từ năm 34, nổi tiếng tham lam, tàn bạo. Việc ông giết Thi Sách, chồng của Trưng Trắc, đã trở thành nguyên nhân trực tiếp dẫn đến cuộc khởi nghĩa.'
      },
      {
        question: 'Hai Bà Trưng phất cờ khởi nghĩa vào mùa xuân năm Canh Tý (năm 40 SCN) tại địa điểm nào?',
        options: ['Thành Cổ Loa', 'Thành Luy Lâu', 'Cửa sông Hát (Mê Linh)', 'Vùng Cấm Khê'],
        correctAnswer: 2,
        explanation: 'Hai Bà Trưng phất cờ khởi nghĩa tại cửa sông Hát (Mê Linh) vào mùa xuân năm Canh Tý (40 SCN), đây là nơi phát động cuộc khởi nghĩa đầu tiên.'
      },
      {
        question: 'Sau khi đánh đuổi quân Đông Hán, Trưng Trắc xưng Vương và đóng đô ở đâu?',
        options: ['Cổ Loa', 'Luy Lâu', 'Hát Môn', 'Mê Linh'],
        correctAnswer: 3,
        explanation: 'Sau khi đánh đuổi quân Đông Hán, Trưng Trắc xưng Vương và đóng đô ở Mê Linh, đây là quê hương của Hai Bà.'
      },
      {
        question: 'Tướng nhà Hán nào được cử sang đàn áp cuộc khởi nghĩa Hai Bà Trưng?',
        options: ['Tô Định', 'Lưu Long', 'Mã Viện', 'Đoàn Chí'],
        correctAnswer: 2,
        explanation: 'Mã Viện là một lão tướng dày dạn kinh nghiệm của nhà Hán, được cử mang 2 vạn quân sang đàn áp cuộc khởi nghĩa.'
      },
      {
        question: 'Ý nghĩa lịch sử quan trọng nhất của cuộc khởi nghĩa Hai Bà Trưng là gì?',
        options: [
          'Chấm dứt hoàn toàn ách đô hộ của phong kiến phương Bắc.',
          'Mở ra một thời kỳ phát triển rực rỡ của Nho giáo ở Việt Nam.',
          'Là cuộc khởi nghĩa lớn đầu tiên, thể hiện ý chí độc lập và vai trò to lớn của phụ nữ.',
          'Đánh dấu sự sụp đổ của chế độ Lạc tướng, Lạc hầu.'
        ],
        correctAnswer: 2,
        explanation: 'Cuộc khởi nghĩa Hai Bà Trưng là cuộc nổi dậy lớn đầu tiên của nhân dân ta chống lại ách đô hộ phương Bắc, khẳng định mạnh mẽ ý chí độc lập, tự chủ và vai trò to lớn của người phụ nữ Việt Nam trong lịch sử đấu tranh của dân tộc.'
      }
    ],
    rewards: {
      experience: 500,
      coins: 250
    }
  },
  {
    id: 'event_hai_ba_trung_2',
    heading: 'Khởi nghĩa Hai Bà Trưng (40 SCN)',
    year: 40,
    type: 'rebellion',
    context: 'Vào năm Kiến Vũ thứ tức năm, một cuộc khởi nghĩa lớn của người dân Giao Chì do hai người phụ nữ họ Trưng khởi xướng đã được sự ủng hộ nhiệt thành của nhân dân các quận Cửu Chân, Nhật Nam, Hợp Phố, lật đổ chính quyền đô hộ của nhà Đông Hán, giành được nền độc lập. Theo ghi chép của các sách sử Việt Nam và Trung Quốc, Hai Bà Trưng tên thật là Trưng Trắc và Trưng Nhị, vốn là con gái Lạc tướng huyện Mê Linh, về thân thế và nguồn gốc của Hai Bà, sách Lĩnh Nam chích quái cho rằng hai Bà mang họ Hùng. Sách Đại Việt sử ký toàn thư thì ghi rõ hai Bà: "tên húy là Trắc, họ Trưng. Nguyên là con gái của Lạc tướng huyện Mê Linh Phong châu". Theo truyền thuyết dân gian và thần tích ở miếu Mèn, thần tích đền Nam Nguyễn, Hai Bà Trưng là con của bà Man Thiện, người làng Nam Nguyễn. Ở đây tương truyền có mộ của bà mà người dân quen gọi là gò Mả Dạ (Dạ là tiếng Việt cổ chi người đàn bà đáng kính trọng). Như vậy, dù cho rằng Hai Bà mang họ nào đi nữa, có một điều tất cả các loại thư tịch đều khẳng định, Hai Bà là dòng dõi quý tộc Lạc Việt.',
    description: 'Năm 40 SCN (tức năm Kiến Vũ thứ 16 thời Đông Hán), một cuộc khởi nghĩa lớn của người dân Giao Chỉ đã bùng nổ. Cuộc khởi nghĩa này do hai chị em Trưng Trắc và Trưng Nhị, con gái của Lạc tướng huyện Mê Linh, khởi xướng và lãnh đạo. Với sự ủng hộ nhiệt thành của nhân dân các quận Cửu Chân, Nhật Nam, và Hợp Phố, Hai Bà Trưng đã thành công lật đổ ách đô hộ của nhà Đông Hán, giành lại nền độc lập cho đất nước. Các sách sử như Lĩnh Nam chích quái và Đại Việt sử ký toàn thư, cùng với truyền thuyết dân gian (như chuyện về bà Man Thiện, mẹ của Hai Bà), đều ghi nhận về thân thế và vai trò quan trọng của Hai Bà Trưng, khẳng định họ thuộc dòng dõi quý tộc Lạc Việt.',
    period: 'period_1',
    characters: ['Trưng Trắc', 'Trưng Nhị', 'Man Thiện'],
    locations: ['Giao Chỉ', 'Cửu Chân', 'Nhật Nam', 'Hợp Phố', 'Mê Linh', 'Phong Châu', 'Làng Nam Nguyễn', 'Miếu Mèn', 'Đền Nam Nguyễn', 'Gò Mả Dạ'],
    questions: [
      {
        question: 'Ai là người khởi xướng cuộc khởi nghĩa chống lại nhà Đông Hán được mô tả trong đoạn văn?',
        options: ['Bà Triệu', 'Trưng Trắc và Trưng Nhị', 'Lý Bí', 'Lạc tướng Mê Linh'],
        correctAnswer: 1,
        explanation: 'Đoạn văn nêu rõ: "một cuộc khởi nghĩa lớn của người dân Giao Chì do hai người phụ nữ họ Trưng khởi xướng". Đó chính là Trưng Trắc và Trưng Nhị.'
      },
      {
        question: 'Niên hiệu nào của nhà Đông Hán được đề cập trong văn bản khi nói về thời điểm diễn ra cuộc khởi nghĩa Hai Bà Trưng?',
        options: ['Kiến An', 'Kiến Vũ', 'Sơ Bình', 'Vĩnh Bình'],
        correctAnswer: 1,
        explanation: "Văn bản ghi 'Vào năm Kiến Vũ thứ tức năm...', cho thấy niên hiệu được nhắc đến là Kiến Vũ. Cuộc khởi nghĩa bắt đầu vào năm 40 SCN, tức năm Kiến Vũ thứ 16."
      },
      {
        question: 'Theo sách Đại Việt sử ký toàn thư, Hai Bà Trưng là con gái của ai?',
        options: ['Lạc tướng quận Cửu Chân', 'Lạc tướng huyện Mê Linh Phong châu', 'Bà Man Thiện', 'Vua Hùng'],
        correctAnswer: 1,
        explanation: 'Sách Đại Việt sử ký toàn thư ghi rõ Hai Bà: "Nguyên là con gái của Lạc tướng huyện Mê Linh Phong châu".'
      },
      {
        question: 'Mục tiêu chính của cuộc khởi nghĩa Hai Bà Trưng là gì?',
        options: [
          'Mở rộng lãnh thổ về phía Nam',
          'Chống lại quân xâm lược Lâm Ấp',
          'Lật đổ chính quyền đô hộ của nhà Đông Hán, giành độc lập',
          'Thiết lập quan hệ ngoại giao với nhà Hán'
        ],
        correctAnswer: 2,
        explanation: 'Cuộc khởi nghĩa nhằm "lật đổ chính quyền đô hộ của nhà Đông Hán, giành được nền độc lập."'
      },
      {
        question: 'Theo truyền thuyết dân gian và thần tích, mẹ của Hai Bà Trưng được cho là ai và quê ở đâu?',
        options: ['Âu Cơ, người Phong Châu', 'Vợ Lạc tướng Mê Linh, người Mê Linh', 'Bà Man Thiện, người làng Nam Nguyễn', 'Một công chúa Hùng Vương, người Việt Trì'],
        correctAnswer: 2,
        explanation: 'Theo truyền thuyết dân gian và thần tích ở miếu Mèn, thần tích đền Nam Nguyễn, Hai Bà Trưng là con của bà Man Thiện, người làng Nam Nguyễn.'
      }
    ],
    rewards: {
      experience: 500,
      coins: 250
    }
  },
  {
    'id': 'event_trung_sac_marriage_melinh_admin',
    'heading': 'Gia thế Trưng Trắc và vị thế hành chính của Mê Linh',
    'year': 35,
    'type': 'cultural',
    'context': 'Bà Trưng lấy chồng là Thi Sách, cũng là con trai một Lạc tướng đất Chu Diên. Đây là cuộc hôn nhân "môn đăng hộ đối" giữa hai dòng họ quý tộc trên đất Giao Chi. Sử cũ đều ghi quê hương của Hai Bà là huyện Mê Linh, thuộc đất Phong Châu. Đây là vùng đất cổ của của các vua Hùng. Thời Hán. Mê Linh là lỵ sờ của huyện này, đồng thời là quận tri quận Giao Chi và trị sở của bộ Giao Chỉ.',
    'description': 'Bà Trưng Trắc kết hôn với Thi Sách, con trai Lạc tướng Chu Diên, một cuộc hôn nhân mang tính "môn đăng hộ đối" củng cố vị thế của các gia đình quý tộc Lạc Việt tại Giao Chỉ. Sử sách xác định quê hương của Hai Bà Trưng là huyện Mê Linh, thuộc đất Phong Châu, một vùng đất có lịch sử lâu đời gắn liền với các vua Hùng. Dưới thời nhà Hán, Mê Linh có vị trí hành chính quan trọng, không chỉ là lỵ sở của huyện Mê Linh mà còn là nơi đặt quận trị của quận Giao Chỉ và trị sở của cả bộ Giao Chỉ.',
    'period': 'period_1',
    'characters': ['Bà Trưng (Trưng Trắc)', 'Thi Sách'],
    'locations': ['Chu Diên', 'Giao Chỉ', 'Mê Linh', 'Phong Châu'],
    'questions': [
      {
        'question': 'Bà Trưng Trắc đã kết hôn với ai, và người đó có xuất thân như thế nào?',
        'options': [
          'Lý Bí, một hào trưởng ở Long Biên',
          'Thi Sách, con trai một Lạc tướng đất Chu Diên',
          'Mã Viện, một tướng nhà Hán',
          'Tô Định, Thái thú quận Giao Chỉ'
        ],
        'correctAnswer': 1,
        'explanation': 'Theo nội dung, "Bà Trưng lấy chồng là Thi Sách, cũng là con trai một Lạc tướng đất Chu Diên".'
      },
      {
        'question': 'Theo sử cũ, quê hương của Hai Bà Trưng được xác định là ở đâu?',
        'options': [
          'Đất Chu Diên',
          'Huyện Mê Linh, thuộc đất Phong Châu',
          'Quận Cửu Chân',
          'Thành Luy Lâu'
        ],
        'correctAnswer': 1,
        'explanation': 'Sử cũ ghi rằng quê hương của Hai Bà Trưng là "huyện Mê Linh, thuộc đất Phong Châu".'
      },
      {
        'question': 'Dưới thời Hán, Mê Linh có vai trò hành chính như thế nào?',
        'options': [
          'Là một làng nông nghiệp đơn thuần',
          'Là kinh đô của nước Nam Việt',
          'Là lỵ sở huyện Mê Linh, quận trị quận Giao Chỉ và trị sở bộ Giao Chỉ',
          'Là một cảng biển giao thương sầm uất'
        ],
        'correctAnswer': 2,
        'explanation': 'Thời Hán, "Mê Linh là lỵ sờ của huyện này, đồng thời là quận tri quận Giao Chi và trị sở của bộ Giao Chỉ".'
      }
    ],
    'rewards': {
      'experience': 500,
      'coins': 250
    }
  },
  {
    'id': 'event_melinh_debate_rebellion_causes',
    'heading': 'Vị trí Mê Linh và Nguyên nhân sâu xa của Khởi nghĩa Hai Bà Trưng',
    'year': 39,
    'type': 'rebellion',
    'context': 'Theo chi dẫn của sách Đại Việt sử ký toàn thư: "Thời Tây Hán, trị sờ của Thái thú (Giao Châu) tại Long Uyên (tức Long Biên). Thời Đông Hán tại Mê Linh tức Yên Lãng". Các học giả sau này như Lê Quý Đôn trong sách Vân Đài cũng nhắc đến địa danh Mê Linh với chú dẫn như vậy. Các nhà sử học ngày nay đã càn cứ vào đó để xác định quê hương Hai Bà nằm ở tả ngạn sông Hồng - vùng đất có tên Hạ Lôi thuộc huyện Yên Lãng cũ, nay là huyện Mê Linh, Hà Nội. Tại khu vực này có đền thờ Hai Bà, các mộ Hán cổ và khá nhiều di tích, truyền thuyết liên quan đến thời kỳ Hai Bà Trung. Nhưng những năm gần đây, một số nhà khoa học lại đưa ra ý kiến xác định vị trí của huyện Mê Linh thời Hai Bà Trưng nằm ở hữu ngạn sông Hồng mà trung tâm là khu vực giáp ranh các huyện Thạch Thất, Quốc Oai (Hà Nội). Tại đây cũng có làng mang tên Hạ Lôi (còn có tên Nôm là Kẻ Lói) cùng hàng loạt các di tích, đền thờ của Hai Bà Trưng.\n Tuy nhiên, giả thuyết này cũng cần phải tiếp tục nghiên cứu để có thêm sức thuyết phục. về nguyên nhân trực tiếp dẫn đến sự bùng nổ cuộc khởi nghĩa đầu tiên dưới thời thuộc Hán, các sách sử Việt Nam và Trung Quốc đều cho rằng vì Tô Định bạo ngược đã giết Thi Sách nên Trưng Trắc cùng em là Trưng Nhị nổi dậy. Sự thật dưới ách thống trị của quan quân nhà Hán mà đại biểu chính thức lúc bấy giờ là tên Thái thú tham lam tàn bạo Tô Định, người dân Giao Chi phải chịu sự bóc lột nặng nề về kinh tế, áp bức về chính trị và đồng hóa về văn hóa. Từ người dân thường cho đến các Lạc hầu, Lạc tướng ở địa phương đều hết sức phẫn nộ, bất bình. Việc Tô Định giết hại Thi Sách, chồng bà Trưng Trắc, một người thuộc hàng ngũ quan nhỏ ở địa phương, chính là hành động trấn áp thảng tay sự phản kháng của tăng lóp quý tộc bàn xứ. Qua các tài liệu ở dạng thẩn tích, thẩn phả ở vùng Hà Tây cũ (nay là Hà Nội) và Vĩnh Yên có thể thấy khá nhiều Lạc tướng, Huyện lệnh bị hại bởi tên Thái thú cường bạo này. Thần tích làng Nghĩa Lộ, xã Yên Nghĩa, huyện Hoài Đức kể về việc Tô Định đã giết Nguyễn Viên là Trưởng doanh cổ Châu (Thanh Oai) vì ông này không chịu phục tùng.',
    'description': 'Sách Đại Việt sử ký toàn thư cho biết trị sở Thái thú Giao Châu thời Đông Hán đặt tại Mê Linh (Yên Lãng). Hiện có các cuộc thảo luận học thuật về vị trí chính xác của Mê Linh thời Hai Bà Trưng, với giả thuyết phổ biến chỉ về vùng Hạ Lôi (Mê Linh, Hà Nội ngày nay) ở tả ngạn sông Hồng, nhưng cũng có ý kiến khác về hữu ngạn sông Hồng. Nguyên nhân chính dẫn đến cuộc khởi nghĩa Hai Bà Trưng là sự cai trị tàn bạo của Thái thú Tô Định. Dưới ách đô hộ nhà Hán, người dân Giao Chỉ bị bóc lột kinh tế, áp bức chính trị và đồng hóa văn hóa. Việc Tô Định giết Thi Sách, chồng Trưng Trắc, và nhiều Lạc tướng, Huyện lệnh khác như Nguyễn Viên, là đỉnh điểm của sự tàn ác, thổi bùng ngọn lửa căm phẫn và quyết tâm khởi nghĩa của quý tộc và nhân dân bản địa.',
    'period': 'period_1',
    'characters': ['Lê Quý Đôn', 'Hai Bà Trưng (Trưng Trắc, Trưng Nhị)', 'Tô Định', 'Thi Sách', 'Nguyễn Viên'],
    'locations': ['Long Uyên (Long Biên)', 'Mê Linh (Yên Lãng)', 'Sông Hồng', 'Hạ Lôi (Mê Linh, Hà Nội)', 'Thạch Thất', 'Quốc Oai (Hà Nội)', 'Kẻ Lói', 'Giao Chỉ', 'Hà Tây cũ', 'Vĩnh Yên', 'Làng Nghĩa Lộ (Yên Nghĩa, Hoài Đức)', 'Châu Thanh Oai'],
    'questions': [
      {
        'question': 'Theo Đại Việt sử ký toàn thư, trị sở của Thái thú Giao Châu thời Đông Hán được đặt ở đâu?',
        'options': ['Long Biên', 'Luy Lâu', 'Mê Linh (tức Yên Lãng)', 'Cổ Loa'],
        'correctAnswer': 2,
        'explanation': 'Đoạn trích từ Đại Việt sử ký toàn thư nêu rõ: "Thời Đông Hán tại Mê Linh tức Yên Lãng".'
      },
      {
        'question': 'Nguyên nhân trực tiếp nào, theo các sách sử, đã dẫn đến việc Trưng Trắc và Trưng Nhị nổi dậy khởi nghĩa?',
        'options': [
          'Do chính sách thuế khóa nặng nề của nhà Hán.',
          'Do Tô Định bạo ngược đã giết Thi Sách.',
          'Do quân Lâm Ấp xâm phạm bờ cõi.',
          'Do mâu thuẫn nội bộ giữa các Lạc tướng.'
        ],
        'correctAnswer': 1,
        'explanation': 'Các sách sử Việt Nam và Trung Quốc đều cho rằng "vì Tô Định bạo ngược đã giết Thi Sách nên Trưng Trắc cùng em là Trưng Nhị nổi dậy".'
      },
      {
        'question': 'Ngoài Thi Sách, văn bản còn đề cập đến Lạc tướng/Huyện lệnh nào bị Thái thú Tô Định giết hại?',
        'options': ['Lý Nam Đế', 'Triệu Quang Phục', 'Nguyễn Viên (Trưởng doanh cổ Châu)', 'Phùng Hưng'],
        'correctAnswer': 2,
        'explanation': 'Thần tích làng Nghĩa Lộ kể về việc Tô Định đã giết Nguyễn Viên, Trưởng doanh cổ Châu (Thanh Oai).'
      },
      {
        'question': 'Chính sách cai trị của Thái thú Tô Định đối với người dân Giao Chỉ được mô tả như thế nào?',
        'options': [
          'Nhân từ và khoan dung, khuyến khích phát triển văn hóa bản địa.',
          'Bóc lột nặng nề về kinh tế, áp bức về chính trị và đồng hóa về văn hóa.',
          'Tập trung vào việc xây dựng các công trình thủy lợi quy mô lớn.',
          'Trao thêm quyền tự chủ cho các Lạc hầu, Lạc tướng.'
        ],
        'correctAnswer': 1,
        'explanation': 'Dưới ách thống trị của Tô Định, "người dân Giao Chi phải chịu sự bóc lột nặng nề về kinh tế, áp bức về chính trị và đồng hóa về văn hóa."'
      }
    ],
    'rewards': {
      'experience': 500,
      'coins': 250
    }
  },
  {
    'id': 'event_hai_ba_trung_rebellion_outbreak',
    'heading': 'Tô Định Gây Thêm Tội Ác và Cuộc Khởi Nghĩa Hai Bà Trưng Bùng Nổ',
    'year': 40,
    'type': 'rebellion',
    'context': 'Thần tích làng cổ Ngõa (xã Phương Đình huyện Đan Phượng) cũng cho biết Tô Định đã giết Nguyễn Anh là quan Doãn ở Đan Phượng vì tội ông không chịu nộp thuế cho Thái thú. Thần tích làng Bạch Trữ, xã Tiến Thắng, huyện Mê Linh cũng kể Trưởng bộ hộ Vũ Ninh là Đinh Đạm cũng bị Tô Định giết hại. Danh sách các nạn nhân của Tô Định còn có các Lạc tướng vùng Hạ Trì là Hùng Linh, Lại viên ở Thiên Trường là Cao Cự v.v...Những hành động vô đạo của Thái thú Tô Định đã thổi bùng lên ngọn lửa âm ỉ cháy trên đất Giao Chi bấy lâu. * Diễn biến Hai chị em Trưng Trắc, Trưng Nhị vốn là con gái Lạc tướng, từ nhỏ đã tinh thông võ nghệ. Theo thần tích ở vùng Quốc Oai, thầy dạy võ cho Hai Bà là Đỗ Năng Tế, sau trở thành một chủ tướng trong đoàn quân khởi nghĩa. Một số quyển sử Trung Quốc như Hậu Hán thư, Thủy kinh chú đều công nhận Trưng Trắc là người "rất hùng dũng", "có can đảm, dũng lược"... Theo ghi chép của hầu hết các sách sử Việt Nam và Trung Quốc, cuộc khởi nghĩa của Hai Bà Trưng nổ ra vào mùa Xuân năm Canh Tý (khoảng tháng 3 năm 40).\n Hầu hết các tư liệu đều cho rằng Hai Bà Trưng khởi binh sau khi Tô Định sát hại Thi Sách. Nợ nước, thù chồng đã khiến người phụ nữ can đảm cùng em gái dấy binh. Các nguồn thần phả và truyền thuyết cũng cho biết cuộc khởi nghĩa được mở đầu bằng cuộc tụ nghĩa tế cờ, hội thề đã diễn ra ở cửa sông Hát thuộc khu vực Mê Linh lúc đó (nay là Hát Môn, huyện Phúc Thọ, Hà Nội). Lời thề sau này đã được diễn lại bằng lời thơ trong sách Thiên Nam ngữ lục: "Một xin rữa sạch nước thù Hai xin lập lại nghiệp xưa Vua Hùng Ba kẻo oan ức lòng chồng Bốn xin vẹn vẹn sở công lênh này." Thần tích ở Hạ Lôi và Yên Lãng cũng ghi về sự kiện này của nghĩa quân: "tổ chức đại hội ở bãi Trường Sa". Truyền thuyết ở khu vực Mê Linh còn cho biết đại hội được tổ chức vào ngày mùng 4 cả thuyền chiến đậu ở cửa sông Hát. Cũng theo ghi chép của các thần tích, người ta đoán định số quân tham gia khởi nghĩa có thể lên đến 3 vạn người.',
    'description': 'Sự tàn bạo của Thái thú Tô Định tiếp tục được ghi nhận qua việc sát hại nhiều quan viên và Lạc tướng địa phương như Nguyễn Anh (quan Doãn ở Đan Phượng), Đinh Đạm (Trưởng bộ hộ Vũ Ninh), Hùng Linh (Lạc tướng Hạ Trì) và Cao Cự (Lại viên Thiên Trường). Những hành động này là nguyên nhân trực tiếp thổi bùng cuộc khởi nghĩa. Hai Bà Trưng Trắc và Trưng Nhị, con gái Lạc tướng, nổi tiếng giỏi võ nghệ (thầy dạy là Đỗ Năng Tế) và có khí phách hiên ngang. Cuộc khởi nghĩa chính thức nổ ra vào mùa xuân năm Canh Tý (tháng 3 năm 40 SCN), sau khi Tô Định giết Thi Sách. Sự kiện mở đầu là lễ tế cờ và hội thề tại cửa sông Hát (Hát Môn, huyện Phúc Thọ, Hà Nội), nơi Hai Bà đọc lời thề lịch sử, kêu gọi đánh đuổi quân xâm lược, báo thù nhà, đền nợ nước và khôi phục cơ nghiệp cũ. Theo các thần tích, cuộc khởi nghĩa ban đầu đã quy tụ được khoảng 3 vạn quân.',
    'period': 'period_1',
    'characters': ['Tô Định', 'Nguyễn Anh', 'Đinh Đạm', 'Hùng Linh', 'Cao Cự', 'Trưng Trắc', 'Trưng Nhị', 'Đỗ Năng Tế', 'Thi Sách'],
    'locations': ['Làng cổ Ngõa (Phương Đình, Đan Phượng)', 'Làng Bạch Trữ (Tiến Thắng, Mê Linh)', 'Vũ Ninh', 'Hạ Trì', 'Thiên Trường', 'Giao Chỉ', 'Quốc Oai', 'Cửa sông Hát (Hát Môn, Phúc Thọ, Hà Nội)', 'Mê Linh (khu vực)', 'Hạ Lôi', 'Yên Lãng', 'Bãi Trường Sa'],
    'questions': [
      {
        'question': 'Ngoài Thi Sách, văn bản còn đề cập đến những nạn nhân nào khác của Thái thú Tô Định?',
        'options': ['Lý Bí và Triệu Việt Vương', 'Nguyễn Anh, Đinh Đạm, Hùng Linh, Cao Cự', 'Các sứ thần nhà Hán', 'Chỉ có Thi Sách được đề cập'],
        'correctAnswer': 1,
        'explanation': 'Văn bản liệt kê: "Nguyễn Anh là quan Doãn ở Đan Phượng", "Đinh Đạm cũng bị Tô Định giết hại", "Hùng Linh, Lại viên ở Thiên Trường là Cao Cự v.v..."'
      },
      {
        'question': 'Theo thần tích vùng Quốc Oai, ai là người đã dạy võ cho Hai Bà Trưng?',
        'options': ['Lạc tướng Mê Linh (cha của Hai Bà)', 'Thi Sách', 'Đỗ Năng Tế', 'Một vị tướng nhà Hán'],
        'correctAnswer': 2,
        'explanation': 'Theo thần tích ở vùng Quốc Oai, "thầy dạy võ cho Hai Bà là Đỗ Năng Tế".'
      },
      {
        'question': 'Cuộc khởi nghĩa Hai Bà Trưng chính thức nổ ra vào thời điểm nào và địa điểm mở đầu là ở đâu?',
        'options': [
          'Mùa hè năm 39 SCN, tại thành Luy Lâu',
          'Mùa xuân năm Canh Tý (tháng 3 năm 40 SCN), tại cửa sông Hát (Hát Môn, Phúc Thọ)',
          'Mùa thu năm 40 SCN, tại Cổ Loa',
          'Đầu năm 41 SCN, tại quận Cửu Chân'
        ],
        'correctAnswer': 1,
        'explanation': 'Cuộc khởi nghĩa nổ ra "vào mùa Xuân năm Canh Tý (khoảng tháng 3 năm 40)" và được mở đầu bằng "cuộc tụ nghĩa tế cờ, hội thề đã diễn ra ở cửa sông Hát".'
      },
      {
        'question': 'Lời thề của Hai Bà Trưng tại cửa sông Hát, được diễn lại trong sách Thiên Nam ngữ lục, thể hiện những quyết tâm nào?',
        'options': [
          'Chỉ trả thù cho chồng (Thi Sách)',
          'Xin hàng nhà Hán để bảo toàn lực lượng',
          'Rửa sạch nước thù, lập lại nghiệp xưa Vua Hùng, trả oán cho chồng, và hoàn thành công việc lớn',
          'Mở rộng lãnh thổ về phía nam và giao hảo với Lâm Ấp'
        ],
        'correctAnswer': 2,
        'explanation': 'Lời thề bao gồm: "Một xin rữa sạch nước thù Hai xin lập lại nghiệp xưa Vua Hùng Ba kẻo oan ức lòng chồng Bốn xin vẹn vẹn sở công lênh này."'
      },
      {
        'question': 'Theo ghi chép của các thần tích, số lượng quân tham gia cuộc khởi nghĩa Hai Bà Trưng vào thời điểm ban đầu ước tính là bao nhiêu?',
        'options': ['Khoảng 1.000 người', 'Khoảng 5.000 người', 'Khoảng 3 vạn người', 'Khoảng 10 vạn người'],
        'correctAnswer': 2,
        'explanation': 'Cũng theo ghi chép của các thần tích, "người ta đoán định số quân tham gia khởi nghĩa có thể lên đến 3 vạn người."'
      }
    ],
    'rewards': {
      'experience': 500,
      'coins': 250
    }
  },
  {
    id: 'event_hai_ba_trung_forces_and_generals',
    heading: 'Lực lượng và Tướng lĩnh trong Khởi nghĩa Hai Bà Trưng',
    year: 40,
    type: 'rebellion',
    context: 'Thần tích hai làng Hạ Lôi (Yên Lâng) và Hát Môn chép: "Trưng Vương khởi binh được 1 năm, tướng sĩ nam nữ có tới 3 vạn người". Con số có thể chưa chuẩn xác nhưng theo các nhà nghiên cứu, chi căn cứ vào số nhân khẩu của quận Giao Chi vào khoảng 74 vạn người thì số lượng nghĩa quân như vậy cũng không phải là quá mức. Họ là những người dân của các quận Giao Chỉ, Cừu Chân, Nhật Nam, Hợp Phố ách đô hộ của nhà Đông Hán. Về đội ngũ tướng lĩnh trong cuộc khởi nghĩa của Hai Bà Trưng, các sách sử không thấy ghi chép, nhưng, hệ thống thần tích, thần phả trên khắp vùng đồng bằng Bắc Bộ cung cấp cho chúng ta rất nhiều tài liệu bổ sung (dĩ nhiên những nguồn tư liệu này vẫn cần thiết phải thẩm định thêm bằng những phương pháp nghiên cứu khoa học).',
    description: 'Đó là các vị tướng nổi tiếng đã và đang được thờ phụng trong hàng trăm đình, đền trên một địa bàn rộng lớn bao gồm Hà Nội, các tỉnh Vĩnh Yên, Phú Thọ, Bắc Ninh, Bắc Giang, Hưng Yên, Bát Nàn, Đào Kỳ, Lê Thị Hoa, Lê Chân, Thánh Thiên, Thiều Hoa, Ngoài ra, còn có rất nhiều vị tướng nam cũng được truyền tụng là các vị có nhiều công tích trong cuộc khởi nghĩa của Hai Bà Trưng như Đỗ Năng Te, ông Đống, ông Nà, ông Cai, Hoàng Đạo, các tướng lĩnh của Hai Bà Trưng có nhiều người là thủ lĩnh những đội quân ở địa phương và cũng có nhiều người là con cháu các dòng họ quý tộc Lạc Việt; bởi ở các địa phương, họ chính là những người có uy tín, có quyền lực chính trị và kinh tế.',
    period: 'period_1',
    characters: ['Trưng Vương', 'Bát Nàn', 'Đào Kỳ', 'Lê Thị Hoa', 'Lê Chân', 'Thánh Thiên', 'Thiều Hoa', 'Đỗ Năng Te', 'Ông Đống', 'Ông Nà', 'Ông Cai', 'Hoàng Đạo'],
    locations: ['Hạ Lôi', 'Yên Lâng', 'Hát Môn', 'Giao Chỉ', 'Cửu Chân', 'Nhật Nam', 'Hợp Phố', 'Đồng bằng Bắc Bộ', 'Hà Nội', 'Vĩnh Yên', 'Phú Thọ', 'Bắc Ninh', 'Bắc Giang', 'Hưng Yên'],
    questions: [
      {
        question: 'Theo thần tích, sau 1 năm khởi binh, lực lượng của Trưng Vương có khoảng bao nhiêu người?',
        options: ['1 vạn', '2 vạn', '3 vạn', '5 vạn'],
        correctAnswer: 2,
        explanation: 'Thần tích hai làng Hạ Lôi (Yên Lâng) và Hát Môn chép: "Trưng Vương khởi binh được 1 năm, tướng sĩ nam nữ có tới 3 vạn người".'
      },
      {
        question: 'Thông tin về các tướng lĩnh của Hai Bà Trưng chủ yếu được bổ sung từ nguồn nào, bên cạnh sử sách chính thống?',
        options: ['Ghi chép của nhà Hán', 'Truyền miệng dân gian các tỉnh phía Nam', 'Hệ thống thần tích, thần phả ở đồng bằng Bắc Bộ', 'Các văn bia cổ'],
        correctAnswer: 2,
        explanation: 'Về đội ngũ tướng lĩnh... hệ thống thần tích, thần phả trên khắp vùng đồng bằng Bắc Bộ cung cấp cho chúng ta rất nhiều tài liệu bổ sung.'
      },
      {
        question: 'Ai trong số các tướng sau đây KHÔNG được liệt kê là tướng nữ nổi tiếng trong cuộc khởi nghĩa Hai Bà Trưng theo đoạn trích?',
        options: ['Bát Nàn', 'Lê Chân', 'Thiều Hoa', 'Hoàng Đạo'],
        correctAnswer: 3,
        explanation: 'Đoạn trích liệt kê các nữ tướng như Bát Nàn, Đào Kỳ, Lê Thị Hoa, Lê Chân, Thánh Thiên, Thiều Hoa. Hoàng Đạo được kể trong nhóm "rất nhiều vị tướng nam".'
      },
      {
        question: 'Nhiều tướng lĩnh của Hai Bà Trưng có xuất thân như thế nào, giúp họ có uy tín và quyền lực ở địa phương?',
        options: ['Là các học giả Nho giáo', 'Là thương nhân giàu có', 'Là thủ lĩnh các đội quân địa phương hoặc con cháu quý tộc Lạc Việt', 'Là các nhà sư có ảnh hưởng'],
        correctAnswer: 2,
        explanation: '...các tướng lĩnh của Hai Bà Trưng có nhiều người là thủ lĩnh những đội quân ở địa phương và cũng có nhiều người là con cháu các dòng họ quý tộc Lạc Việt; bởi ở các địa phương, họ chính là những người có uy tín, có quyền lực chính trị và kinh tế.'
      }
    ],
    rewards: {
      experience: 500,
      coins: 250
    }
  },
  {
    id: 'event_hai_ba_trung_campaign_early_victories',
    heading: 'Sự Hưởng Ứng Rộng Rãi và Những Thắng Lợi Ban Đầu của Khởi Nghĩa Hai Bà Trưng',
    year: 40,
    type: 'rebellion',
    context: 'Thần tích ở các địa phương cũng nhắc đến những vị tướng của Hai Bà đem quân sĩ phía bắc có bà Nguyệt Đạo ở Tây Cốc, hai ông Trần Tuấn và Vương Đạo ở Phương Trung (Phú Thọ). Phía tây có Ả Nàng ở Kim Phượng (Thanh Sơn, Phú Thọ). Phía đông có bà Lê Chân ở An Biên (Hải Phòng), bà Thánh Thiên ở Ngọc Lâm (Yên Dũng, Bắc Giang), bà Thánh Hậu ở Hạ Phán (nay thuộc huyện Quỳnh Côi, Thái Bình). Trinh Thục ở Ngọ Xá (Mỹ Đức, Hà Nội), ba chị em Chiêu Nương Sơn, Lạng Giang, người ta còn thấy có cả quan chức người Hán tham gia cuộc khởi nghĩa của Hai Bà. Đó là hai ông Đô Thiên và Minh Giang, vì căm giận triều đình nên chạy sang Giao Chi đầu quân chống lại nhà Hán. Việc người khởi xướng cuộc nổi dậy đầu tiên chống lại chính quyền đô hộ thời Hán là hai người phụ nữ và những tướng lĩnh chế độ mẫu quyền vẫn còn khá sâu sắc trong xã hội của người Lạc Việt lúc bấy giờ.',
    description: 'Mùa Xuân năm Canh Tý (năm 40), Hai Bà Trưng từ đất Phong Châu đưa quân đi đánh các quận huyện. Có lẽ trước tiên quân khởi nghĩa tiến công các đồn trại và trị sở của quận Giao Chi ở Mê Linh. Tiếp theo đó là tiêu diệt các đồn sờ ở huyện Tây Vu, chiếm thành cổ Loa. Thần tích đền Mỵ Châu ở cổ Loa nói đến việc Hai Bà Trưng đã kéo quân qua đây. Từ cổ Loa, nghĩa quân dùng thuyền vượt sông Hoàng, sông Đuống rồi xuôi sông Dâu đánh chiếm thành Luy Lâu (Thuận Thành, Bắc Ninh), đây chính là châu trị và quận trị của quận Giao Chi. Bằng cuộc tấn công chiến lược, nghĩa quân Hai Bà Trưng đã tiến thẳng đến thủ phủ của chính quyền Đô hộ nhà Hán. Sách sử của ta đã ca ngợi khí thế của quân sĩ: "Trưng Trắc thực là hùng dũng, đi đến đâu như có gió cuốn". Hai Bà còn liên lạc, phối hợp với các lực lượng nổi dậy ở các địa phương.',
    period: 'period_1',
    characters: ['Hai Bà Trưng', 'Nguyệt Đạo', 'Trần Tuấn', 'Vương Đạo', 'Ả Nàng', 'Lê Chân', 'Thánh Thiên', 'Thánh Hậu', 'Trinh Thục', 'Chiêu Nương Sơn', 'Lạng Giang', 'Đô Thiên', 'Minh Giang', 'Trưng Trắc'],
    locations: ['Tây Cốc', 'Phương Trung', 'Phú Thọ', 'Kim Phượng', 'Thanh Sơn', 'An Biên', 'Hải Phòng', 'Ngọc Lâm', 'Yên Dũng', 'Bắc Giang', 'Hạ Phán', 'Quỳnh Côi', 'Thái Bình', 'Ngọ Xá', 'Mỹ Đức', 'Hà Nội', 'Giao Chỉ', 'Phong Châu', 'Mê Linh', 'Huyện Tây Vu', 'Cổ Loa', 'Sông Hoàng', 'Sông Đuống', 'Sông Dâu', 'Luy Lâu', 'Thuận Thành', 'Bắc Ninh'],
    questions: [
      {
        question: 'Nữ tướng nào được nhắc đến đã đem quân từ An Biên (Hải Phòng) hưởng ứng Hai Bà Trưng?',
        options: ['Nguyệt Đạo', 'Ả Nàng', 'Lê Chân', 'Thánh Thiên'],
        correctAnswer: 2,
        explanation: 'Phía đông có bà Lê Chân ở An Biên (Hải Phòng).'
      },
      {
        question: 'Điều gì đặc biệt về hai ông Đô Thiên và Minh Giang khi tham gia khởi nghĩa?',
        options: ['Họ là Lạc tướng giàu có', 'Họ là quan chức người Hán căm giận triều đình Hán', 'Họ là anh em ruột của Hai Bà Trưng', 'Họ là những nhà sư'],
        correctAnswer: 1,
        explanation: 'Đó là hai ông Đô Thiên và Minh Giang, vì căm giận triều đình nên chạy sang Giao Chi đầu quân chống lại nhà Hán.'
      },
      {
        question: 'Hai Bà Trưng xuất quân từ đâu để bắt đầu cuộc tấn công vào mùa Xuân năm Canh Tý (40)?',
        options: ['Thành Luy Lâu', 'Đất Phong Châu', 'Cổ Loa', 'Hát Môn'],
        correctAnswer: 1,
        explanation: 'Mùa Xuân năm Canh Tý (năm 40), Hai Bà Trưng từ đất Phong Châu đưa quân đi đánh các quận huyện.'
      },
      {
        question: 'Địa điểm nào được coi là thủ phủ của chính quyền đô hộ nhà Hán ở quận Giao Chỉ mà nghĩa quân Hai Bà Trưng đã tiến đánh và chiếm được?',
        options: ['Mê Linh', 'Cổ Loa', 'Tây Vu', 'Luy Lâu'],
        correctAnswer: 3,
        explanation: '...nghĩa quân dùng thuyền vượt sông Hoàng, sông Đuống rồi xuôi sông Dâu đánh chiếm thành Luy Lâu (Thuận Thành, Bắc Ninh), đây chính là châu trị và quận trị của quận Giao Chi.'
      }
    ],
    rewards: {
      experience: 500,
      coins: 250
    }
  },
  {
    id: 'event_hai_ba_trung_rebellion_spread_and_motivation',
    heading: 'Sự Lan Rộng Của Khởi Nghĩa và Động Lực Chiến Đấu Của Trưng Trắc',
    year: 40,
    type: 'rebellion',
    context: 'Truyền thuyết về Bà Man Thiện cũng kể về việc bà đã đi khắp vùng núi, vùng biền đề liên kết với các Lạc hầu, Lạc tướng, Huyện lệnh, Hào trướng ở các địa phương. Thần tích làng cổ Ngõa, xã Liên Minh (Đan Phượng, Hà Nội) chép việc bà Hải Diệu - một tướng của Hai Bà người làng này - đã lên đường vào Cửu Chân ngay sau hội thề ở Hát Môn. Bất ngờ và hoảng sợ trước sức tấn công mãnh liệt của quân khởi nghĩa, Thái thú Tô Định cùng lũ quan quân nhà Hán không mạch về Nam Hải. Sử Trung Quốc sau này còn ghi lại lời Mã Viện tố cáo sự hèn yếu của Tô Định: "Thấy tiền thì giương mắt lên, thấy địch thì cụp mắt xuống". Có lẽ, sau trận tấn công chiến lược phá tan được thủ phủ của chính quyền đô hộ nhà Hán ở quận Giao Chi, tin tức chiến thắng truyền đi và các quận khác như Cửu Chân, Nhật Nam, Hợp Phố cũng nhân đó mà nổi dậy. Điều này đã được chính sử của ta xác nhận: "Người Man, người Lý ở Cửu Chân, Nhật Nam, Hợp Phố đều hưởng ứng".',
    description: 'Tô Định đã xuống tay giết Thi Sách vào thời điểm trước khi cuộc khởi nghĩa nổ ra. Điều này đã khiến vị nữ tướng họ Trưng ra trận trong tâm thế phải "trả thù chồng, đền nợ nước". Sách Đại Việt sử ký tiền biên của Ngô Thì Sĩ còn dẫn theo dã sử và cho biết thêm một chi tiết: "Lúc Vua (túc Bà Trưng) xuất quân, tang chồng chưa hết, ảnh hưởng. Nếu giữ lễ mà làm xấu dung nhan thì nhuệ khí tự nhiên suy kém. Cho nên ta mặc đẹp để mạnh thêm màu sắc của quân, và khiến cho bọn giặc trông thấy động lòng, lợi là chỉ tranh đấu, thì dễ "mình không theo kịp" chí lự đàn bà". Cuộc nổi dậy đồng loạt với khí thế ngút trởi vào năm Canh Tý trên đất Giao Chỉ dẫn đến kết quả quân khởi nghĩa đã thu phục được 65 thành. Hầu hét các sách sử của ta được ghi nhận Hai Bà đã "lược định được 65 thành" nhưng riêng Ngô Thì Sĩ lại cho rằng con số thực chỉ là 56 thành. Ông đã viết: Hai Bà "chiếm được đất đai 56 thành dễ như người phủi bụi trên rương hòm, khiến cho các quan thú, quan úy cai trị đã 150 năm nay cũng bó tay chẳng làm gì được".',
    period: 'period_1',
    characters: ['Bà Man Thiện', 'Hải Diệu', 'Hai Bà Trưng', 'Tô Định', 'Mã Viện', 'Thi Sách', 'Trưng Trắc', 'Ngô Thì Sĩ'],
    locations: ['Làng cổ Ngõa', 'Liên Minh', 'Đan Phượng', 'Hà Nội', 'Cửu Chân', 'Hát Môn', 'Nam Hải', 'Giao Chỉ', 'Nhật Nam', 'Hợp Phố'],
    questions: [
      {
        question: 'Theo truyền thuyết, ai đã đi khắp nơi liên kết với các Lạc hầu, Lạc tướng để ủng hộ khởi nghĩa?',
        options: ['Hải Diệu', 'Bà Man Thiện', 'Trưng Nhị', 'Vợ Tô Định'],
        correctAnswer: 1,
        explanation: 'Truyền thuyết về Bà Man Thiện cũng kể về việc bà đã đi khắp vùng núi, vùng biền đề liên kết với các Lạc hầu, Lạc tướng, Huyện lệnh, Hào trướng ở các địa phương.'
      },
      {
        question: 'Thái thú Tô Định đã phản ứng như thế nào trước sức tấn công của quân khởi nghĩa?',
        options: ['Kiên cường chống trả', 'Đầu hàng ngay lập tức', 'Hoảng sợ bỏ chạy về Nam Hải', 'Xin Mã Viện cứu viện'],
        correctAnswer: 2,
        explanation: 'Bất ngờ và hoảng sợ trước sức tấn công mãnh liệt của quân khởi nghĩa, Thái thú Tô Định cùng lũ quan quân nhà Hán không mạch về Nam Hải.'
      },
      {
        question: 'Sự kiện nào đã khiến Trưng Trắc ra trận với tâm thế "trả thù chồng, đền nợ nước"?',
        options: ['Nhà Hán tăng thuế nặng nề', 'Tô Định giết Thi Sách', 'Chính sách đồng hóa văn hóa', 'Lời kêu gọi của Bà Man Thiện'],
        correctAnswer: 1,
        explanation: 'Tô Định đã xuống tay giết Thi Sách vào thời điểm trước khi cuộc khởi nghĩa nổ ra. Điều này đã khiến vị nữ tướng họ Trưng ra trận trong tâm thế phải "trả thù chồng, đền nợ nước".'
      },
      {
        question: 'Theo hầu hết các sách sử, quân khởi nghĩa Hai Bà Trưng đã thu phục được bao nhiêu thành?',
        options: ['45 thành', '56 thành', '65 thành', '75 thành'],
        correctAnswer: 2,
        explanation: 'Hầu hét các sách sử của ta được ghi nhận Hai Bà đã "lược định được 65 thành".'
      }
    ],
    rewards: {
      experience: 500,
      coins: 250
    }
  },
  {
    id: 'event_trung_sisters_kingdom_establishment',
    heading: 'Trưng Vương Xưng Vương và Nền Độc Lập Ban Đầu',
    year: 40,
    type: 'dynasty',
    context: 'Còn Lê Văn Hưu đã từng viết những dòng đầy tự hào về chiến công của Hai Bà: "Trưng Trắc, Trưng Nhị là đàn bà, hô một tiếng mà các quận Cừu Chân, Nhật Nam, Hợp Phố và 65 thành ở Lĩnh ngoại đều hưởng ứng. Việc dựng nước và xưng Vương dễ như trở bàn tay". Như vậy, sau khi đã đánh đổ được chính quyền đô hộ nhà Hán, Bà Trưng đã xưng Vương, sách sử nước ta đều ghi ràng Hai Bà "tự lập làm Vua, đóng đô ở Mê Linh".',
    description: 'Đây chính là sự khẳng định quyền độc lập tự chủ của quốc gia. Sách Đại Nam quốc sử diễn ca đã ghi lại một cách tự hào về sự kiện này: "Đô kỳ đóng cõi Mê Linh, Lĩnh Nam riêng một triều đình nước ta." Trưng Vương lên ngôi được 3 năm. Chúng ta chưa tìm được tư liệu nào cho biết Hai Bà đã điều hành, xây dựng đất nước ra sao? Duy nhất Thủy kinh chú cho biết Hai Bà đã xá thuế 2 năm cho dân 2 quận Giao Chỉ và Cửu Chân. Có tư liệu cho biết thời kỳ này đã có luật lệ. Sách Hậu Hán thư có ghi khi Mã Viện sang đàn áp cuộc khời nghĩa của Hai Bà Trưng đã có bản tâu về cho vua Hán nói rằng: "luật Việt khác luật Hán hơn 10 điều".',
    period: 'period_1',
    characters: ['Lê Văn Hưu', 'Trưng Trắc', 'Trưng Nhị', 'Bà Trưng', 'Hai Bà Trưng', 'Mã Viện'],
    locations: ['Cửu Chân', 'Nhật Nam', 'Hợp Phố', 'Lĩnh ngoại', 'Mê Linh', 'Lĩnh Nam', 'Giao Chỉ'],
    questions: [
      {
        question: 'Sử gia nào đã viết: "Trưng Trắc, Trưng Nhị là đàn bà, hô một tiếng mà các quận Cừu Chân, Nhật Nam, Hợp Phố và 65 thành ở Lĩnh ngoại đều hưởng ứng"?',
        options: ['Ngô Sĩ Liên', 'Lê Văn Hưu', 'Phan Huy Chú', 'Trần Trọng Kim'],
        correctAnswer: 1,
        explanation: 'Còn Lê Văn Hưu đã từng viết những dòng đầy tự hào về chiến công của Hai Bà: "Trưng Trắc, Trưng Nhị là đàn bà, hô một tiếng mà các quận Cừu Chân, Nhật Nam, Hợp Phố và 65 thành ở Lĩnh ngoại đều hưởng ứng..."'
      },
      {
        question: 'Sau khi đánh đổ chính quyền đô hộ nhà Hán, Hai Bà Trưng đã đóng đô ở đâu?',
        options: ['Cổ Loa', 'Luy Lâu', 'Phong Châu', 'Mê Linh'],
        correctAnswer: 3,
        explanation: '...Bà Trưng đã xưng Vương, sách sử nước ta đều ghi ràng Hai Bà "tự lập làm Vua, đóng đô ở Mê Linh".'
      },
      {
        question: 'Theo Thủy kinh chú, một trong những chính sách đầu tiên của Trưng Vương là gì?',
        options: ['Xây dựng quân đội hùng mạnh', 'Mở trường học dạy chữ Hán', 'Xá thuế 2 năm cho dân 2 quận Giao Chỉ và Cửu Chân', 'Ban hành bộ luật mới hoàn toàn'],
        correctAnswer: 2,
        explanation: 'Duy nhất Thủy kinh chú cho biết Hai Bà đã xá thuế 2 năm cho dân 2 quận Giao Chỉ và Cửu Chân.'
      },
      {
        question: 'Theo Hậu Hán thư, Mã Viện đã tâu về vua Hán rằng luật lệ của người Việt so với luật Hán có điểm gì đáng chú ý?',
        options: ['Giống hệt luật Hán', 'Đơn giản hơn luật Hán rất nhiều', 'Khác luật Hán hơn 10 điều', 'Tàn bạo hơn luật Hán'],
        correctAnswer: 2,
        explanation: 'Sách Hậu Hán thư có ghi khi Mã Viện sang đàn áp cuộc khời nghĩa của Hai Bà Trưng đã có bản tâu về cho vua Hán nói rằng: "luật Việt khác luật Hán hơn 10 điều".'
      }
    ],
    rewards: {
      experience: 500,
      coins: 250
    }
  },
{
    id: 'event_ma_vien_preparation',
    heading: 'Mã Viện Chuẩn Bị Quân Lực Đàn Áp Khởi Nghĩa Hai Bà Trưng',
    year: 41,
    type: 'battle',
    context: 'Sau khi Trưng Trắc xưng vương, vua Quang Vũ nhà Hán đã lệnh cho Mã Viện, một lão tướng nhiều kinh nghiệm, chuẩn bị lực lượng để đàn áp cuộc khởi nghĩa. Mã Viện được phong Phục Ba Tướng quân, huy động khoảng 2 vạn quân từ các quận Trường Sa, Quế Dương, Linh Lăng, Thương Ngô cùng nhiều xe ngựa và thuyền bè.',
    description: 'Đội quân của Mã Viện, gồm cả thủy binh và bộ binh, xuất phát từ Hồ Nam, tiến qua Quảng Tây, Quảng Đông và tập kết tại Hợp Phố trước khi tiến vào Giao Chỉ. Tại Hợp Phố, sau khi Lâu thuyền Tướng quân Đoàn Chí qua đời, Mã Viện thống lĩnh toàn bộ quân. Quân Hán tiến theo hai đường: thủy quân men theo ven biển Hạ Long, qua Hồng Quảng rồi vào sông Bạch Đằng đến Lục Đầu; bộ binh đi dọc theo bờ biển (nay là tuyến Móng Cái - Phả Lại). Mã Viện đã phải cho quân mở đường, vượt qua nhiều khó khăn trên đường hành quân.',
    period: 'period_1',
    characters: ['Mã Viện', 'Vua Quang Vũ', 'Lưu Long', 'Đoàn Chi', 'Trưng Trắc'],
    locations: ['Hồ Nam', 'Quảng Tây', 'Quảng Đông', 'Hợp Phố', 'Giao Chỉ', 'Hạ Long', 'Hồng Quảng', 'Sông Bạch Đằng', 'Lục Đầu', 'Trường Sa', 'Quế Dương', 'Linh Lăng', 'Thương Ngô', 'Móng Cái', 'Tiên Yên', 'Uông Bí', 'Đông Triều', 'Phả Lại'],
    questions: [
      {
        question: 'Ai là vị tướng nhà Hán được giao chỉ huy cuộc tấn công đàn áp khởi nghĩa Hai Bà Trưng?',
        options: ['Lưu Long', 'Đoàn Chi', 'Mã Viện', 'Vua Quang Vũ'],
        correctAnswer: 2,
        explanation: 'Mã Viện, một lão tướng nhiều kinh nghiệm, được vua Quang Vũ nhà Hán phong chức Phục Ba Tướng quân và giao chỉ huy cuộc tấn công.'
      },
      {
        question: 'Quân đội của Mã Viện tập kết tại đâu trước khi tiến vào Giao Chỉ?',
        options: ['Lục Đầu', 'Hồ Nam', 'Hợp Phố', 'Sông Bạch Đằng'],
        correctAnswer: 2,
        explanation: 'Đội quân của Mã Viện tới Hợp Phố là nơi hai cánh quân hợp với nhau để cùng tiến vào Giao Chỉ.'
      },
      {
        question: 'Lực lượng quân Hán do Mã Viện chỉ huy có khoảng bao nhiêu người?',
        options: ['1 vạn người', '2 vạn người', '5 vạn người', '10 vạn người'],
        correctAnswer: 1,
        explanation: 'Quân số của Mã Viện được tuyển ở các quận Trường Sa, Quế Dương, Linh Lăng, Thương Ngô khoảng 2 vạn người.'
      },
      {
        question: 'Tướng nào của Mã Viện bị chết tại Hợp Phố, khiến Mã Viện phải thống suất cả thủy và bộ binh?',
        options: ['Lưu Long', 'Hàn Vũ', 'Đoàn Chi', 'Phục Ba Tướng quân'],
        correctAnswer: 2,
        explanation: 'Tại Hợp Phố, Lâu thuyền Tướng quân Đoàn Chí bị chết nên Mã Viện được giao thống suất cả quân thủy và bộ.'
      },
      {
        question: 'Cánh quân bộ của Mã Viện đã hành quân men theo ven biển, tương đương với con đường nào ngày nay?',
        options: ['Đường Trường Sơn', 'Đường mòn Hồ Chí Minh', 'Đường Móng Cái - Tiên Yên - Uông Bí - Đông Triều - Phả Lại', 'Đường xuyên Á'],
        correctAnswer: 2,
        explanation: 'Cánh quân bộ hành quân men theo ven biển, tức con đường Móng Cái - Tiên Yên - Uông Bí - Đông Triều - Phả Lại ngày nay.'
      }
    ],
    rewards: {
      experience: 500,
      coins: 250
    }
  },
{
    id: 'event_trung_vuong_defense_prep',
    heading: 'Trưng Vương Tổ Chức Phòng Thủ Chống Quân Mã Viện',
    year: 42,
    type: 'battle',
    context: 'Trước sự tiến quân của Mã Viện, Trưng Vương đã tổ chức lực lượng phòng thủ. Dựa trên truyền thuyết và thần phả, các tướng lĩnh được bố trí tại các vị trí chiến lược: bà Thánh Thiên ở Ngọc Lâm (biên giới phía bắc), Lê Chân ở An Biên (vùng biển), Bát Nàn ở Tiên La. Hệ thống phòng tuyến được thiết lập dọc các sông Hồng, Lô, Tích, Đáy để bảo vệ kinh đô Mê Linh.',
    description: 'Quân đội Hai Bà Trưng được bố trí rộng khắp. Ven sông Lô có các tướng Trần Tuấn, Hùng Dũng, Mạnh Đạo, Nguyệt Diện. Ven sông Hồng có Ả Lan, Xuân Nương, Thiều Hoa, Ngọc Trinh, Đồng Vịnh. Vùng Mê Linh và ven sông Đáy có Hồ Đề, Hải Diệu, Lôi Chấn, Ả Lã, Nàng Đê, Vương Cai, Chiêu Trung, Nguyễn Lai, Cao Thị Lỗ. Ven sông Đuống có Ông Đống, Ông Hựu, Ả Tắc, Ả Di. Người thân của Hai Bà như Man Thiện, Trưng Nhị (cùng chồng Hùng Nguyên), và thầy dạy võ Đỗ Năng cũng tham gia. Đầu năm 42, quân Mã Viện khi vừa qua biên giới đã chạm trán quân của bà Thánh Thiên, làm chậm bước tiến của chúng.',
    period: 'period_1',
    characters: ['Trưng Vương (Hai Bà Trưng)', 'Bà Thánh Thiên', 'Lê Chân', 'Bát Nàn', 'Trần Tuấn', 'Hùng Dũng', 'Mạnh Đạo', 'Nguyệt Diện', 'Ả Lan', 'Xuân Nương', 'Thiều Hoa', 'Ngọc Trinh', 'Đồng Vịnh', 'Hồ Đề', 'Hải Diệu', 'Lôi Chấn', 'Ả Lã', 'Nàng Đê', 'Vương Cai', 'Chiêu Trung', 'Nguyễn Lai', 'Cao Thị Lỗ', 'Ông Đống', 'Ông Hựu', 'Ả Tắc', 'Ả Di', 'Man Thiện', 'Trưng Nhị', 'Hùng Nguyên', 'Đỗ Năng', 'Mã Viện'],
    locations: ['Lục Dầu', 'Tây Vu', 'Lãng Bạc', 'Mê Linh', 'Ngọc Lâm (Bắc Giang)', 'An Biên (Hải Phòng)', 'Tiên La (Thái Bình)', 'Sông Lô', 'Sông Hồng', 'Sông Đáy', 'Sông Đuống', 'Nam Nguyễn', 'An Duyên'],
    questions: [
      {
        question: 'Theo truyền thuyết, vị nữ tướng nào trấn giữ đồn trại Ngọc Lâm ở biên giới phía bắc chống quân Mã Viện?',
        options: ['Lê Chân', 'Bát Nàn', 'Bà Thánh Thiên', 'Xuân Nương'],
        correctAnswer: 2,
        explanation: 'Bà Thánh Thiên được ghi nhận là người trấn giữ đồn trại Ngọc Lâm (Bắc Giang) ở vùng biên giới phía bắc.'
      },
      {
        question: 'Mục tiêu của quân Mã Viện sau khi hội quân ở Lục Dầu là tiến sâu vào những vùng nào?',
        options: ['Mê Linh và Cổ Loa', 'Tây Vu và Lãng Bạc', 'Cửu Chân và Nhật Nam', 'Hợp Phố và Giao Chỉ'],
        correctAnswer: 1,
        explanation: 'Mục tiêu của hai cánh quân là hội quân ở Lục Dầu trước khi tiến sâu vào vùng Tây Vu, Lãng Bạc.'
      },
      {
        question: 'Quân đội của Hai Bà Trưng đã lợi dụng yếu tố địa lý nào để lập phòng tuyến bảo vệ kinh đô Mê Linh?',
        options: ['Vùng núi hiểm trở phía Tây Bắc', 'Các hang động ven biển', 'Hệ thống các con sông như Hồng, Lô, Tích, Đáy', 'Các thành lũy kiên cố từ thời An Dương Vương'],
        correctAnswer: 2,
        explanation: 'Dường như quân đội của Hai Bà đã lợi dụng những con sông này (Hồng, Lô, Tích, Đáy) để lập nên phòng tuyến bảo vệ kinh đô Mê Linh.'
      },
      {
        question: 'Theo một vài tư liệu, quân Mã Viện đã đụng độ với toán quân của Hai Bà Trưng do ai chỉ huy ngay khi vừa qua biên giới?',
        options: ['Lê Chân', 'Bà Thánh Thiên', 'Trưng Nhị', 'Bát Nàn'],
        correctAnswer: 1,
        explanation: 'Quân Mã Viện vừa qua biên giới đã đụng độ với một toán quân của Hai Bà Trưng do bà Thánh Thiên chỉ huy.'
      },
      {
        question: 'Ai trong số những người thân của Hai Bà Trưng được cho là cũng lập đồn trại riêng ở Nam Nguyễn?',
        options: ['Hùng Nguyên (chồng Trưng Nhị)', 'Đỗ Năng (thầy dạy võ)', 'Bà Man Thiện (mẹ Hai Bà)', 'Thi Sách (chồng Trưng Trắc)'],
        correctAnswer: 2,
        explanation: 'Theo truyền thuyết, bà Man Thiện (mẹ đẻ của Hai Bà) cũng lập một đồn riêng ở Nam Nguyễn.'
      }
    ],
    rewards: {
      experience: 500,
      coins: 250
    }
  },
{
    id: 'event_battle_tay_vu',
    heading: 'Trận Chiến Tại Tây Vu: Quân Hai Bà Chặn Bước Mã Viện',
    year: 42,
    type: 'battle',
    context: 'Trên đường tiến quân đến Lãng Bạc, đại quân của Mã Viện đã bị chặn lại tại đất Tây Vu, khu vực có trung tâm là thành Cổ Loa. Sử sách nhà Hán ghi nhận sự kiện này, cho thấy quân Hai Bà Trưng đã kháng cự mạnh mẽ.',
    description: 'Tại Tây Vu (khu vực Cổ Loa), quân Mã Viện đã vấp phải sự kháng cự quyết liệt từ quân Hai Bà Trưng. Thần tích làng Gia Lộc (Đông Anh, Hà Nội) ghi nhớ sự hy sinh của tướng Đông Bảng khi chặn giặc. Học giả Đào Duy Anh cho rằng do bị chặn đánh ở Tây Vu, quân Hán mới phải rút về Lãng Bạc. Lãng Bạc, nằm ở vùng đồi núi phía nam thị trấn Từ Sơn ngày nay (theo một giả thuyết), là một vị trí chiến lược, từng được Triệu Đà sử dụng.',
    period: 'period_1',
    characters: ['Mã Viện', 'Tướng Đông Bảng', 'Hai Bà Trưng (lực lượng)', 'Triệu Đà', 'Đào Duy Anh'],
    locations: ['Tây Vu', 'Cổ Loa', 'Làng Gia Lộc (Đông Anh)', 'Lãng Bạc', 'Mê Linh', 'Từ Sơn', 'Vũ Ninh'],
    questions: [
      {
        question: 'Đại quân Mã Viện đã phải dừng lại ở đâu trước khi đến được Lãng Bạc do sự kháng cự của quân Hai Bà Trưng?',
        options: ['Cổ Loa', 'Tây Vu', 'Mê Linh', 'Luy Lâu'],
        correctAnswer: 1,
        explanation: 'Đại quân của Mã Viện đã phải dừng lại ở đất Tây Vu, đó là điều các sách sử của nhà Hán đều công nhận.'
      },
      {
        question: 'Trung tâm của huyện Tây Vu, nơi diễn ra giao tranh, là địa danh lịch sử nào?',
        options: ['Thành Luy Lâu', 'Kinh đô Hoa Lư', 'Thành Cổ Loa', 'Đô thị Phố Hiến'],
        correctAnswer: 2,
        explanation: 'Huyện Tây Vu vốn có trung tâm là thành Cổ Loa, kinh đô cũ của nước Âu Lạc.'
      },
      {
        question: 'Vị tướng nào được thần tích làng Gia Lộc ghi nhận đã hy sinh khi chặn đoàn quân Mã Viện tại Cổ Loa?',
        options: ['Lê Chân', 'Bà Thánh Thiên', 'Tướng Đông Bảng', 'Phạm Tu'],
        correctAnswer: 2,
        explanation: 'Thần tích làng Gia Lộc ở đông bắc thành Cổ Loa cũng ghi về vị tướng Đông Bảng đã hy sinh khi chặn đoàn quân Mã Viện.'
      },
      {
        question: 'Theo học giả Đào Duy Anh, tại sao quân Mã Viện phải rút về Lãng Bạc thay vì tiến thẳng tới Mê Linh?',
        options: ['Do thiếu lương thực', 'Do quân số bị tổn thất nặng', 'Do vấp phải sự chống trả quyết liệt tại Tây Vu', 'Do thời tiết không thuận lợi'],
        correctAnswer: 2,
        explanation: 'Học giả Đào Duy Anh cho rằng quân nhà Hán nhằm thẳng tới Mê Linh nhưng vì vấp phải sự chống trả quyết liệt của quân Hai Bà tại Tây Vu, nên cuối cùng phải rút về Lãng Bạc.'
      },
      {
        question: 'Theo văn bản, Lãng Bạc, nơi Mã Viện đóng đại quân, là vùng nào?',
        options: ['Vùng Hồ Tây, Hà Nội', 'Vùng đồi núi huyện Tiên Du', 'Vùng đồi núi phía Nam thị trấn Từ Sơn', 'Khu vực chân núi Ba Vì'],
        correctAnswer: 2,
        explanation: 'Lãng Bạc, nơi Mã Viện đóng đại quân, là vùng đồi núi phía Nam thị trấn Từ Sơn ngày nay.'
      }
    ],
    rewards: {
      experience: 500,
      coins: 250
    }
  },
{
    id: 'event_ma_vien_lang_bac_hardships',
    heading: 'Mã Viện Tại Lãng Bạc: Vị Trí Chiến Lược và Khó Khăn Của Quân Hán',
    year: 42,
    type: 'battle',
    context: 'Địa danh Lãng Bạc, nơi Mã Viện đóng quân, có nhiều giả thuyết về vị trí. Giới nghiên cứu hiện nay, dựa trên ý kiến của H. Maspéro, cho rằng Lãng Bạc nằm ở vùng đồi núi huyện Tiên Du. Đây là vị trí chiến lược, gần các tuyến giao thông quan trọng và thuận lợi cho phối hợp thủy bộ.',
    description: 'Từ Lãng Bạc (được cho là ở huyện Tiên Du), quân Hán có thể kiểm soát Long Biên và trục đường giao thông chính sang Trung Hoa. Tuy nhiên, quân Mã Viện đối mặt nhiều khó khăn. Thời tiết chuyển sang hè nóng ẩm, mưa nhiều gây bệnh dịch. Tướng Hàn Vũ chết vì bệnh. Chính Mã Viện cũng chán nản, than thở về tình cảnh "nước lụt, mây mù, khí độc" và tự trách sự ham mê công danh của mình, theo ghi chép của Hậu Hán thư.',
    period: 'period_1',
    characters: ['Mã Viện', 'Hàn Vũ', 'H. Maspéro', 'Triệu Đà'],
    locations: ['Lãng Bạc', 'Hồ Tây (Hà Nội)', 'Huyện Tiên Du', 'Long Biên', 'Giao Chỉ', 'Sông Thiếp', 'Sông Đuống', 'Tây Vu (Tây Lý)', 'Móng Cái', 'Tiên Yên', 'Uông Bí', 'Đông Triều', 'Phả Lại', 'Luy Lâu'],
    questions: [
      {
        question: 'Theo giới nghiên cứu hiện nay, dựa trên ý kiến của H. Maspéro, Lãng Bạc nằm ở đâu?',
        options: ['Vùng Hồ Tây, Hà Nội', 'Vùng đồi núi huyện Tiên Du', 'Phía Nam thị trấn Từ Sơn', 'Khu vực Cổ Loa'],
        correctAnswer: 1,
        explanation: 'Từ ý kiến của các học giả người Pháp như H. Maspéro, ngày nay giới nghiên cứu đã khẳng định Lãng Bạc ở vùng đồi núi huyện Tiên Du.'
      },
      {
        question: 'Vị trí Lãng Bạc (Tiên Du) có lợi thế gì cho quân Hán?',
        options: ['Gần kinh đô Mê Linh của Hai Bà Trưng', 'Có nhiều lương thực và dễ phòng thủ', 'Khống chế Long Biên và trục đường giao thông sang Trung Hoa, tiện phối hợp thủy bộ', 'Địa hình hiểm trở, khó bị tấn công'],
        correctAnswer: 2,
        explanation: 'Từ vị trí này (Tiên Du), quân Hán có thể khống chế được một vùng rộng lớn trong đó có Long Biên, nằm trên trục đường giao thông bộ quan trọng... lại gần như song song với hai con sông... rất tiện lợi cho việc phối hợp tác chiến giữa hai đoàn quân thủy và bộ.'
      },
      {
        question: 'Những khó khăn nào mà quân Mã Viện gặp phải tại Lãng Bạc theo mô tả?',
        options: ['Bị quân Hai Bà Trưng bao vây chặt', 'Thiếu vũ khí và ngựa chiến', 'Nước lụt, mây mù, khí độc, bệnh dịch', 'Sự phản kháng của dân địa phương'],
        correctAnswer: 2,
        explanation: 'Đại quân gặp thời tiết nóng ẩm, nên bệnh dịch phát sinh... Hậu Hán thư có ghi lại câu nói của Mã Viện: "...dưới thì nước lụt, trên thi mây mù, khí độc bốc lên ngùn ngụt..."'
      },
      {
        question: 'Vị tướng nào của Mã Viện đã bị chết vì bệnh tại Lãng Bạc?',
        options: ['Đoàn Chi', 'Lưu Long', 'Hàn Vũ', 'Tướng Đông Bảng'],
        correctAnswer: 2,
        explanation: 'Viên tướng Hàn Vũ đã bị chết vì bệnh.'
      },
      {
        question: 'Trong Hậu Hán thư, Mã Viện đã than thở điều gì về tình cảnh của mình tại Lãng Bạc?',
        options: ['Chê trách quân lính không dũng cảm', 'Xin vua Hán viện trợ thêm quân', 'Tự trách mình "Ham giàu sang, thích công nghiệp là tự làm khổ mình"', 'Kêu gọi Hai Bà Trưng đầu hàng'],
        correctAnswer: 2,
        explanation: 'Mã Viện còn tự trách mình: "Ham giàu sang, thích công nghiệp là tự làm khổ mình".'
      }
    ],
    rewards: {
      experience: 500,
      coins: 250
    }
  },
{
    id: 'event_battle_lang_bac_defeat',
    heading: 'Trận Lãng Bạc: Thất Bại Của Nghĩa Quân và Rút Về Cấm Khê',
    year: 42,
    type: 'battle',
    context: 'Từ kinh đô Mê Linh, Hai Bà Trưng chủ động kéo quân qua Cổ Loa, tấn công quân Mã Viện đang đóng tại Lãng Bạc. Đây là một trận đánh lớn, thể hiện quyết tâm của nghĩa quân.',
    description: 'Trận Lãng Bạc diễn ra trong vài ngày với khí thế quyết liệt từ nghĩa quân. Tuy nhiên, do chênh lệch về lực lượng, vũ khí và kinh nghiệm, quân Hai Bà Trưng đã thất bại nặng nề, tổn thất hơn 1.000 người chết và hơn 1 vạn bị bắt (theo Hậu Hán thư). Các nhà nghiên cứu cho rằng đây là sai lầm chiến thuật khi đối đầu trực diện với quân Hán thiện chiến. Sau thất bại, Hai Bà Trưng phải lui quân, có thể đã cố thủ ở Cổ Loa và Mê Linh một thời gian ngắn trước khi rút về Cấm Khê. Cấm Khê, có thể là vùng Suối Vàng (chân núi Ba Vì), là một căn cứ phòng ngự hiểm trở, nơi Mã Viện tiếp tục truy đuổi và giao tranh ác liệt với quân Trưng Trắc.',
    period: 'period_1',
    characters: ['Hai Bà Trưng', 'Mã Viện', 'Trưng Trắc'],
    locations: ['Mê Linh', 'Cổ Loa', 'Lãng Bạc', 'Cấm Khê', 'Yên Lãng (Mê Linh)', 'Suối Vàng (Ba Vì)', 'Tam Điệp (Ninh Bình)'],
    questions: [
      {
        question: 'Hai Bà Trưng đã xuất quân từ đâu để tấn công Mã Viện ở Lãng Bạc?',
        options: ['Cấm Khê', 'Kinh đô Mê Linh, qua Cổ Loa', 'Tây Vu', 'Luy Lâu'],
        correctAnswer: 1,
        explanation: 'Từ Kinh đô Mê Linh, Hai Bà Trưng đã kéo quân qua cổ Loa, tấn công quân Mã Viện ở Lãng Bạc.'
      },
      {
        question: 'Theo Hậu Hán thư, tổn thất của nghĩa quân Hai Bà Trưng trong trận Lãng Bạc là bao nhiêu?',
        options: ['Chết 100 người, bị bắt 1.000 người', 'Chết hơn 1.000 người, bị bắt hơn 1 vạn người', 'Chết 5.000 người, bị bắt 5.000 người', 'Không có số liệu cụ thể'],
        correctAnswer: 1,
        explanation: 'Nghĩa quân bị chết hơn 1.000 người và bị bắt hơn 1 vạn (theo Hậu Hán thư).'
      },
      {
        question: 'Các nhà nghiên cứu lịch sử và quân sự cho rằng sai lầm chiến thuật của quân Hai Bà Trưng trong trận Lãng Bạc là gì?',
        options: ['Phòng thủ quá bị động', 'Không huy động đủ lực lượng', 'Chọn cách đối đầu trực tiếp với mũi chủ công của địch', 'Thiếu sự phối hợp giữa các cánh quân'],
        correctAnswer: 2,
        explanation: 'Quân ta đã vấp phải sai lầm về chiến thuật... chọn cách đối đầu trực tiếp cùng mũi chủ công của quân địch sẽ không tránh khỏi sự thất bại nặng nề.'
      },
      {
        question: 'Sau thất bại ở Lãng Bạc, Hai Bà Trưng đã lui quân về đâu để tiếp tục kháng cự?',
        options: ['Luy Lâu', 'Cổ Loa', 'Cấm Khê', 'Hợp Phố'],
        correctAnswer: 2,
        explanation: 'Sau thất bại ở Lãng Bạc, Hai Bà Trưng phải lui binh... lực lượng còn lại phải lui hẳn về Cấm Khê.'
      },
      {
        question: 'Vùng Cấm Khê, nơi Hai Bà Trưng lui về, được nhiều nhà nghiên cứu hiện nay cho là ở đâu?',
        options: ['Huyện Yên Lãng (Mê Linh, Hà Nội)', 'Thung lũng Suối Vàng, chân núi Ba Vì', 'Vùng đồng bằng sông Hồng', 'Khu vực biên giới phía Bắc'],
        correctAnswer: 1,
        explanation: 'Vùng Cấm Khê... nay có nhiều căn cứ để cho rằng cấm Khê (tức thung lũng Suối Vàng), ở chân núi Ba Vì.'
      }
    ],
    rewards: {
      experience: 500,
      coins: 250
    }
  },
{
    id: 'event_battle_cam_khe_fall',
    heading: 'Trận Cấm Khê: Cuộc Chiến Đấu Cuối Cùng và Sự Hy Sinh Của Hai Bà Trưng',
    year: 43,
    type: 'battle',
    context: 'Sau trận Lãng Bạc (mùa Xuân 42), quân Hai Bà Trưng lui về Cấm Khê và tiếp tục chiến đấu. Quân Hán do Mã Viện chỉ huy đã mất nhiều thời gian để khuất phục được căn cứ này.',
    description: 'Trận Cấm Khê là cuộc đọ sức cuối cùng của quân chủ lực Hai Bà Trưng, kéo dài cho đến đầu Hè năm 43. Dù chiến đấu kiên cường, nghĩa quân vẫn thất bại do chênh lệch lực lượng và trình độ tác chiến. Hai Bà Trưng đã anh dũng hy sinh tại trận. Hậu Hán thư ghi Mã Viện giết Hai Bà và mang đầu về Lạc Dương. Đại Việt sử ký toàn thư cũng chép rằng Trưng Vương và em gái Trưng Nhị đều thua và chết trong cuộc chiến chống quân Hán.',
    period: 'period_1',
    characters: ['Hai Bà Trưng (Trưng Trắc, Trưng Nhị)', 'Mã Viện'],
    locations: ['Cấm Khê', 'Lạc Dương'],
    questions: [
      {
        question: 'Trận chiến cuối cùng của đội quân chủ lực do Hai Bà Trưng lãnh đạo diễn ra ở đâu?',
        options: ['Lãng Bạc', 'Mê Linh', 'Cấm Khê', 'Cổ Loa'],
        correctAnswer: 2,
        explanation: 'Trận cấm Khê là cuộc đọ sức cuối cùng của đội quân chủ lực do Hai Bà lãnh đạo.'
      },
      {
        question: 'Theo văn bản, quân Hán đánh bật được quân Hai Bà ra khỏi căn cứ Cấm Khê vào thời điểm nào?',
        options: ['Cuối năm 42', 'Đầu Hè năm 43', 'Mùa Thu năm 43', 'Mùa Đông năm 42'],
        correctAnswer: 1,
        explanation: 'Phải đến đầu Hè năm 43, quân Hán mới đánh bật được quân Hai Bà ra khỏi căn cứ cấm Khê.'
      },
      {
        question: 'Nguyên nhân chính dẫn đến thất bại của quân Hai Bà Trưng trong trận Cấm Khê là gì?',
        options: ['Thiếu sự chỉ huy tài tình', 'Bị phản bội từ bên trong', 'Chênh lệch về quân số và trình độ tác chiến', 'Thời tiết không ủng hộ'],
        correctAnswer: 2,
        explanation: 'Nghĩa quân đã chiến đấu kiên cường, nhưng do sự chênh lệch về quân số, cũng như trình độ tác chiến, quân Hai Bà bị tổn thất lớn.'
      },
      {
        question: 'Theo Hậu Hán thư, Mã Viện đã làm gì sau khi giết được Hai Bà Trưng?',
        options: ['Cho chôn cất tử tế', 'Đem đầu về Lạc Dương', 'Tha cho toàn bộ nghĩa quân', 'Xây đền thờ để cảnh cáo'],
        correctAnswer: 1,
        explanation: 'Hậu Hán thư chép rằng, Mã Viện giết được Hai Bà và đem đầu về tận kinh đô Lạc Dương.'
      },
      {
        question: 'Đại Việt sử ký toàn thư ghi nhận kết cục của Hai Bà Trưng như thế nào?',
        options: ['Hai Bà Trưng tự vẫn ở sông Hát', 'Hai Bà Trưng bị bắt sống và giải về Trung Quốc', 'Trưng nữ vương cùng em gái là Nhị chống cự với quân nhà Hán, thế cô, đều thua chết', 'Hai Bà Trưng trốn thoát và tiếp tục lãnh đạo kháng chiến bí mật'],
        correctAnswer: 2,
        explanation: 'Đại Việt sử ký toàn thư của ta ghi: "Trưng nữ vương cùng em gái là Nhị chống cự với quân nhà Hán, thế cô, đều thua chết".'
      }
    ],
    rewards: {
      experience: 500,
      coins: 250
    }

},
  {
    id: 'event_hai_ba_trung_cam_khe_43',
    heading: 'Sự hy sinh của Hai Bà Trưng tại Cấm Khê và cuộc kháng chiến tiếp diễn (43)',
    year: 43,
    type: 'battle',
    context: 'Các sách sử của ta đều chép rằng Hai Bà Trưng đã chiến đấu đến cùng trong trận Cấm Khê. Tuy nhiên, theo truyền thuyết dân gian, sau khi thất thế, Hai Bà đã chạy đến cửa sông Hát và cùng tuẫn tiết tại đó. Truyền thuyết có câu: "Cấm Khê đến lúc hiểm nghèo, Chị em thất thế phải liều với sông." Theo Hậu Hán thư, sự kiện này diễn ra vào tháng 4 năm Kiến Vũ thứ 19, tức khoảng tháng 5 năm 43. Trong trận Cấm Khê – trận chiến cuối cùng chống quân xâm lược Hán – rất nhiều tướng lĩnh của Hai Bà Trưng đã anh dũng hy sinh. Riêng trong vùng Hà Nội ngày nay, có thể thống kê được một số vị nữ tướng như sau: tại Đan Phượng có Ả Tú, Ả Huyền, À Cát và Hải Diệu; Hoài Đức có À Lã, Nàng Đê và Nguyễn An; Từ Liêm (Thượng Cát) có Quách Lâng; Gia Lâm có Thành Công; Đông Anh có vợ chồng Đào Kỳ và Phương Dung; Phúc Thọ có Tạ Cẩn Nương; Yên Lãng có Chàng Hối; và tại Sóc Sơn có Đồng Nghị. Sau khi Hai Bà hy sinh, các tướng lĩnh của Hai Bà vẫn không chịu khuất phục, họ tản ra khắp các vùng rừng núi để tiếp tục cuộc kháng chiến. Theo sách Thủy kinh chú, lúc này nhà Hán vẫn tiếp tục cho một số quân Tây Thục sang tiếp viện cho quân Mã Viện ở Giao Chi. Một bộ phận của nghĩa quân Hai Bà do hai vị tướng Đô Dương và Chu Bá đã dẫn quân chạy vào vùng Cửu Chân tiếp tục cuộc chiến đấu.',
    description: 'Vào khoảng tháng 5 năm 43, Hai Bà Trưng đã chiến đấu trận cuối cùng chống quân Hán tại Cấm Khê. Mặc dù sách sử ghi Hai Bà chiến đấu đến cùng, truyền thuyết dân gian kể rằng Hai Bà đã tuẫn tiết tại cửa sông Hát sau khi thất thế. Trận Cấm Khê chứng kiến sự hy sinh của nhiều tướng lĩnh, bao gồm các nữ tướng như Ả Tú, Ả Huyền (Đan Phượng), À Lã (Hoài Đức). Sau sự hy sinh của Hai Bà, cuộc kháng chiến vẫn tiếp tục. Các tướng lĩnh còn lại tản ra các vùng rừng núi. Hai tướng Đô Dương và Chu Bá đã lãnh đạo một bộ phận nghĩa quân rút vào Cửu Chân để tiếp tục chiến đấu. Nhà Hán cũng tăng cường viện binh từ Tây Thục cho Mã Viện ở Giao Chi.',
    period: 'period_1',
    characters: ['Hai Bà Trưng', 'Ả Tú', 'Ả Huyền', 'À Cát', 'Hải Diệu', 'À Lã', 'Nàng Đê', 'Nguyễn An', 'Quách Lâng', 'Thành Công', 'Đào Kỳ', 'Phương Dung', 'Tạ Cẩn Nương', 'Chàng Hối', 'Đồng Nghị', 'Mã Viện', 'Đô Dương', 'Chu Bá'],
    locations: ['Cấm Khê', 'Sông Hát', 'Hà Nội', 'Đan Phượng', 'Hoài Đức', 'Từ Liêm (Thượng Cát)', 'Gia Lâm', 'Đông Anh', 'Phúc Thọ', 'Yên Lãng', 'Sóc Sơn', 'Tây Thục', 'Giao Chi', 'Cửu Chân'],
    questions: [
      {
        question: 'Trận chiến cuối cùng của Hai Bà Trưng chống quân xâm lược Hán được ghi nhận diễn ra ở đâu?',
        options: ['Sông Hát', 'Cửu Chân', 'Cấm Khê', 'Mê Linh'],
        correctAnswer: 2,
        explanation: 'Các sách sử đều chép rằng Hai Bà Trưng đã chiến đấu đến cùng trong trận Cấm Khê.'
      },
      {
        question: 'Theo Hậu Hán thư, sự kiện Hai Bà Trưng thất thế và hy sinh diễn ra vào khoảng thời gian nào?',
        options: ['Tháng 4 năm 42 SCN', 'Tháng 5 năm 43 SCN', 'Tháng 3 năm 43 SCN', 'Tháng 6 năm 44 SCN'],
        correctAnswer: 1,
        explanation: 'Theo Hậu Hán thư, sự kiện này diễn ra vào tháng 4 năm Kiến Vũ thứ 19, tức khoảng tháng 5 năm 43.'
      },
      {
        question: 'Sau khi Hai Bà Trưng hy sinh, hai vị tướng nào đã dẫn một bộ phận nghĩa quân vào vùng Cửu Chân để tiếp tục cuộc chiến đấu?',
        options: ['Đào Kỳ và Phương Dung', 'Ả Tú và Ả Huyền', 'Đô Dương và Chu Bá', 'Tạ Cẩn Nương và Chàng Hối'],
        correctAnswer: 2,
        explanation: 'Một bộ phận của nghĩa quân Hai Bà do hai vị tướng Đô Dương và Chu Bá đã dẫn quân chạy vào vùng Cửu Chân tiếp tục cuộc chiến đấu.'
      },
      {
        question: 'Theo sách Thủy kinh chú, nhà Hán đã cử quân từ đâu sang tiếp viện cho quân Mã Viện ở Giao Chi sau trận Cấm Khê?',
        options: ['Trường An', 'Lạc Dương', 'Tây Thục', 'Bách Việt'],
        correctAnswer: 2,
        explanation: 'Theo sách Thủy kinh chú, lúc này nhà Hán vẫn tiếp tục cho một số quân Tây Thục sang tiếp viện cho quân Mã Viện ở Giao Chi.'
      },
      {
        question: 'Trong các nữ tướng của Hai Bà Trưng được liệt kê, Ả Tú và Ả Huyền là những nữ tướng ở vùng nào?',
        options: ['Hoài Đức', 'Đan Phượng', 'Từ Liêm', 'Gia Lâm'],
        correctAnswer: 1,
        explanation: 'Riêng trong vùng Hà Nội ngày nay, có thể thống kê được một số vị nữ tướng như sau: tại Đan Phượng có Ả Tú, Ả Huyền, À Cát và Hải Diệu.'
      }
    ],
    rewards: {
      experience: 250,
      coins: 125
    }
  },
  {
    id: 'event_ma_vien_tien_danh_cuu_chan_43',
    heading: 'Mã Viện tiến quân vào Cửu Chân, đào Tạc Sơn, Tạc Khẩu (Tháng 11, 43)',
    year: 43,
    type: 'battle',
    context: 'Tháng 11 năm 43, Mã Viện đã tổ chức một cuộc hành quân lớn vào đất Cửu Chân, quyết tiêu diệt quân khởi nghĩa. Đại quân của Mã Viện gồm 20.000 lính bộ cùng 2.000 lâu thuyền lớn nhỏ theo hai đường thủy và bộ tiến vào phía nam. Theo sông Đáy và vùng lưu vực sông Đáy, quân Mã Viện đến cửa Thần Phù. Đẻ tránh sóng to gió lớn, quân Hán đã phải tiến hành đào sông thông qua dải núi Cửu Chân và xếp đá làm đê ngăn sóng biển để đi từ Giao Chỉ vào Cửu Chân. Chỗ núi đào đó gọi là Tạc Sơn, chỗ cửa biển ngăn sông gọi là Tạc Khẩu.',
    description: 'Vào tháng 11 năm 43, Mã Viện chỉ huy một đại quân gồm 20.000 lính bộ và 2.000 lâu thuyền tiến vào Cửu Chân với mục tiêu tiêu diệt lực lượng nghĩa quân còn lại. Quân Hán di chuyển theo cả đường thủy và đường bộ, đi dọc sông Đáy và vùng lưu vực sông này để đến cửa Thần Phù. Để thuận lợi cho việc di chuyển từ Giao Chỉ vào Cửu Chân và tránh điều kiện thời tiết bất lợi, quân Hán đã thực hiện công trình đào núi (gọi là Tạc Sơn) và đắp đê ngăn sóng biển ở cửa sông (gọi là Tạc Khẩu).',
    period: 'period_1',
    characters: ['Mã Viện'],
    locations: ['Cửu Chân', 'Sông Đáy', 'Cửa Thần Phù', 'Giao Chỉ', 'Tạc Sơn', 'Tạc Khẩu'],
    questions: [
      {
        question: 'Mã Viện tổ chức cuộc hành quân lớn vào đất Cửu Chân vào thời gian nào?',
        options: ['Tháng 5 năm 43', 'Tháng 11 năm 43', 'Tháng 1 năm 44', 'Tháng 10 năm 43'],
        correctAnswer: 1,
        explanation: 'Tháng 11 năm 43, Mã Viện đã tổ chức một cuộc hành quân lớn vào đất Cửu Chân.'
      },
      {
        question: 'Lực lượng của Mã Viện khi tiến vào Cửu Chân bao gồm bao nhiêu quân?',
        options: ['10.000 lính bộ, 1.000 thuyền', '20.000 lính bộ, 2.000 lâu thuyền', '30.000 lính bộ, 500 thuyền', '5.000 lính bộ, 5.000 lâu thuyền'],
        correctAnswer: 1,
        explanation: 'Đại quân của Mã Viện gồm 20.000 lính bộ cùng 2.000 lâu thuyền lớn nhỏ.'
      },
      {
        question: 'Quân Hán đã đào núi và làm đê để đi từ Giao Chỉ vào Cửu Chân, những địa danh này được gọi là gì?',
        options: ['Thiên Sơn và Vạn Khẩu', 'Thạch Sơn và Thạch Khẩu', 'Tạc Sơn và Tạc Khẩu', 'Cửu Chân Sơn và Cửu Chân Khẩu'],
        correctAnswer: 2,
        explanation: 'Chỗ núi đào đó gọi là Tạc Sơn, chỗ cửa biển ngăn sông gọi là Tạc Khẩu.'
      },
      {
        question: 'Quân Mã Viện đã theo con sông nào để đến cửa Thần Phù?',
        options: ['Sông Hồng', 'Sông Mã', 'Sông Đuống', 'Sông Đáy'],
        correctAnswer: 3,
        explanation: 'Theo sông Đáy và vùng lưu vực sông Đáy, quân Mã Viện đến cửa Thần Phù.'
      },
      {
        question: 'Mục đích chính của Mã Viện khi tổ chức cuộc hành quân vào Cửu Chân là gì?',
        options: ['Mở rộng giao thương với Cửu Chân', 'Xây dựng thêm các thành lũy phòng thủ', 'Tiêu diệt quân khởi nghĩa còn lại của Hai Bà Trưng', 'Tìm kiếm và khai thác tài nguyên'],
        correctAnswer: 2,
        explanation: 'Mã Viện đã tổ chức một cuộc hành quân lớn vào đất Cửu Chân, quyết tiêu diệt quân khởi nghĩa.'
      }
    ],
    rewards: {
      experience: 200,
      coins: 100
    }
  },
  {
    id: 'event_ma_vien_dan_ap_cuu_chan_43_44',
    heading: 'Mã Viện đàn áp nghĩa quân ở Cửu Chân và cuộc tàn sát (cuối 43 - đầu 44)',
    year: 43,
    type: 'battle',
    context: 'Tại huyện Vô Công (vùng Ninh Bình), thủ lĩnh nghĩa quân đầu hàng. Đến huyện Dư Phát, quân Mã Viện tấn công thành lũy ở đây. Trước sức tấn công mạnh mẽ của quân địch, quân của thủ lĩnh Chu Bá phải rút vào rừng sâu. Đến Cư Phong (Thiệu Hóa, Triệu Sơn) bây giờ, quân Ma Viện đã vấp phái sự kháng cự quyết liệt của nghĩa quân Hai Bà. Tại vùng núi Trịnh, các nhà khảo cổ đã phát hiện một di chi trên triền núi, tại đây có rất nhiều mũi tên đồng và các di cốt, tàn tích của một trận giao tranh ác liệt. Trận chiến này có thể Mã Viện đã phài đối đầu với đội quân Hai Bà do tướng Đô Dương chỉ huy. Các tài liệu ở dạng thần tích, thần phả cho thấy có khá nhiều các tướng lĩnh từ phía bắc tham gia cuộc chiến đấu ở vùng Cửu Chân như Nàng Tía ở làng Vĩnh Ninh (Thanh Trì, Hà Nội) hy sinh ở trận chiến bên cửa Thần Phù; Chàng Hối người ở Thịnh Kỳ (Mê Linh, Hà Nội) đã chiến đấu dũng cảm bên cạnh tướng Đô Dương không tiếc thân mình; Tướng Thành Công ở Gia Lâm từ cấm Khê rút lui về Cửu Chân và hy sinh ở trang Tâm Quy (Tống Sơn)...\n\nCác tài liệu ở dạng thần tích, thần phả cho thấy có khá nhiều các tướng lĩnh từ phía bắc tham gia cuộc chiến đấu ở vùng Cửu Chân như Nàng Tía ở làng Vĩnh Ninh (Thanh Trì, Hà Nội) hy sinh ở trận chiến bên cửa Thần Phù; Chàng Hối người ở Thịnh Kỳ (Mê Linh, Hà Nội) đã chiến đấu dũng cảm bên cạnh tướng Đô Dương không tiếc thân mình; Tướng Thành Công ở Gia Lâm từ cấm Khê rút lui Sử nhà Hán ghi rằng trong cuộc chinh phạt các dư đảng của khởi nghĩa Hai Bà ở Cu Phong chúng đã "giết và bắt bớ hơn 5.000 người". Thủy kinh chú còn cho biết riêng "tướng giặc không hàng đều bị chém tới hàng trăm người". Hơn 300 (Cừ súy) thủ lĩnh khác bị bắt đưa đi đày ở vùng Linh Lăng (Hồ Nam). Đây là cuộc tàn sát đẫm máu của chính quyền Hán tộc, thực hiện quyết tâm tiêu diệt đến cùng sự phản kháng của người dân Giao Chi.',
    description: 'Trong cuộc hành quân vào Cửu Chân, quân Mã Viện đã gặp phải sự kháng cự của nghĩa quân. Tại huyện Vô Công (Ninh Bình), thủ lĩnh nghĩa quân địa phương đã đầu hàng. Ở huyện Dư Phát, quân của thủ lĩnh Chu Bá sau khi bị tấn công đã rút vào rừng sâu. Tại Cư Phong (vùng Thiệu Hóa, Triệu Sơn ngày nay), quân Mã Viện vấp phải sự kháng cự quyết liệt, có thể là từ đội quân do tướng Đô Dương chỉ huy, bằng chứng là nhiều di vật khảo cổ như mũi tên đồng và di cốt được tìm thấy ở núi Trịnh. Nhiều tướng lĩnh từ phía Bắc như Nàng Tía, Chàng Hối, Thành Công cũng tham gia chiến đấu và hy sinh tại Cửu Chân. Sử nhà Hán ghi lại rằng tại Cư Phong, quân Hán đã "giết và bắt bớ hơn 5.000 người", chém hàng trăm tướng không chịu đầu hàng và đày hơn 300 thủ lĩnh (Cừ súy) đến Linh Lăng (Hồ Nam). Đây là một cuộc đàn áp và tàn sát đẫm máu của quân Hán nhằm dập tắt hoàn toàn sự phản kháng của người dân Giao Chỉ.',
    period: 'period_1',
    characters: ['Mã Viện', 'Chu Bá', 'Đô Dương', 'Nàng Tía', 'Chàng Hối', 'Thành Công', 'Cừ súy'],
    locations: ['Vô Công (Ninh Bình)', 'Dư Phát', 'Cư Phong (Thiệu Hóa, Triệu Sơn)', 'Núi Trịnh', 'Cửu Chân', 'Làng Vĩnh Ninh (Thanh Trì, Hà Nội)', 'Cửa Thần Phù', 'Thịnh Kỳ (Mê Linh, Hà Nội)', 'Gia Lâm', 'Cấm Khê', 'Trang Tâm Quy (Tống Sơn)', 'Linh Lăng (Hồ Nam)', 'Giao Chi'],
    questions: [
      {
        question: 'Tại huyện Vô Công (vùng Ninh Bình), điều gì đã xảy ra với thủ lĩnh nghĩa quân khi quân Mã Viện tiến đến?',
        options: ['Chiến đấu anh dũng và hy sinh', 'Rút lui vào rừng sâu', 'Đầu hàng quân Mã Viện', 'Tổ chức phục kích thành công'],
        correctAnswer: 2,
        explanation: 'Tại huyện Vô Công (vùng Ninh Bình), thủ lĩnh nghĩa quân đầu hàng.'
      },
      {
        question: 'Quân của thủ lĩnh Chu Bá đã phải làm gì khi quân Mã Viện tấn công thành lũy ở huyện Dư Phát?',
        options: ['Đầu hàng ngay lập tức', 'Chiến thắng và đẩy lui quân địch', 'Rút vào rừng sâu để bảo toàn lực lượng', 'Cầu viện từ các nơi khác'],
        correctAnswer: 2,
        explanation: 'Trước sức tấn công mạnh mẽ của quân địch, quân của thủ lĩnh Chu Bá phải rút vào rừng sâu.'
      },
      {
        question: 'Tại Cư Phong, quân Mã Viện đã vấp phải sự kháng cự quyết liệt của nghĩa quân Hai Bà, có thể do ai chỉ huy?',
        options: ['Chu Bá', 'Nàng Tía', 'Đô Dương', 'Thành Công'],
        correctAnswer: 2,
        explanation: 'Đến Cư Phong (Thiệu Hóa, Triệu Sơn) bây giờ, quân Ma Viện đã vấp phái sự kháng cự quyết liệt của nghĩa quân Hai Bà. Trận chiến này có thể Mã Viện đã phài đối đầu với đội quân Hai Bà do tướng Đô Dương chỉ huy.'
      },
      {
        question: 'Theo ghi chép của sử nhà Hán, trong cuộc chinh phạt ở Cư Phong, quân Mã Viện đã gây ra tổn thất như thế nào cho nghĩa quân?',
        options: ['Bắt sống toàn bộ và tha bổng', 'Chỉ bắt được một số ít tù binh', 'Giết và bắt bớ hơn 5.000 người', 'Buộc nghĩa quân phải nộp cống phẩm'],
        correctAnswer: 2,
        explanation: 'Sử nhà Hán ghi rằng trong cuộc chinh phạt các dư đảng của khởi nghĩa Hai Bà ở Cu Phong chúng đã "giết và bắt bớ hơn 5.000 người".'
      },
      {
        question: 'Hơn 300 thủ lĩnh (Cừ súy) của nghĩa quân bị bắt đã bị Mã Viện đưa đi đày ở đâu?',
        options: ['Trường An (Trung Quốc)', 'Giao Chỉ', 'Linh Lăng (Hồ Nam)', 'Đảo Hải Nam'],
        correctAnswer: 2,
        explanation: 'Hơn 300 (Cừ súy) thủ lĩnh khác bị bắt đưa đi đày ở vùng Linh Lăng (Hồ Nam).'
      }
    ],
    rewards: {
      experience: 300,
      coins: 150
    }
  },
  {
    id: 'event_ket_thuc_khoi_nghia_hai_ba_trung_44',
    heading: 'Kết thúc khởi nghĩa Hai Bà Trưng và ý nghĩa lịch sử (44)',
    year: 44,
    type: 'rebellion',
    context: 'Cuộc kháng chiến dưới sự lãnh đạo của Hai Bà Trưng đã thất bại, đất nước ta lại rơi vào vòng thống trị của chính quyền phong kiến Hán tộc. Đầu năm 44, Mã Viện rút quân về nước. Sau 2 năm tiến hành cuộc chiến tranh xâm lược tàn bạo, đàn áp dã man sự phản kháng của người dân Giao Chỉ, hơn một nửa số quân đã phải bỏ mạng trên mảnh đất này. Sử nhà Hán đã xác nhận: quân đi mười phần thì chỉ còn lại bốn, năm phần. Cuộc khởi nghĩa Hai Bà Trưng là cuộc khởi nghĩa đầu tiên dưới thời thuộc Hán. Nổ ra trên đất Mê Linh, làn sóng khởi nghĩa đã nhanh chóng lan rộng nhằm lật đổ ách thống trị của triều đình phương Bắc. Sau khi đánh đuổi được quân Đông Hán, Trưng Trắc đã xưng vương và đóng đô ở Mê Linh, đây chính là hành động khẳng định quyền độc lập tự chủ của người dân Giao Chỉ. Cuộc khởi nghĩa của Hai Bà đã chứng minh vai trò, khả năng to lớn của người phụ nữ trong cuộc đấu tranh chống ngoại xâm, là một dấu son đầu tiên và sáng chói trong lịch sử đấu tranh của dân tộc Việt.',
    description: 'Cuộc kháng chiến do Hai Bà Trưng lãnh đạo cuối cùng đã thất bại, và đất nước một lần nữa rơi vào ách đô hộ của nhà Hán. Đầu năm 44, Mã Viện rút quân về nước. Chiến dịch xâm lược và đàn áp kéo dài 2 năm này đã khiến quân Hán chịu tổn thất nặng nề, với hơn một nửa quân số bỏ mạng tại Giao Chỉ (sử Hán ghi "quân đi mười phần thì chỉ còn lại bốn, năm phần"). Khởi nghĩa Hai Bà Trưng, nổ ra tại Mê Linh, là cuộc khởi nghĩa đầu tiên của người Việt dưới thời Bắc thuộc, lan rộng và lật đổ ách thống trị của nhà Đông Hán. Việc Trưng Trắc xưng vương và đóng đô ở Mê Linh là một tuyên bố mạnh mẽ về quyền độc lập, tự chủ. Cuộc khởi nghĩa này có ý nghĩa lịch sử to lớn, minh chứng cho vai trò và sức mạnh của phụ nữ Việt Nam trong công cuộc chống ngoại xâm, và là một trang sử vàng son trong lịch sử dân tộc.',
    period: 'period_1',
    characters: ['Hai Bà Trưng', 'Mã Viện', 'Trưng Trắc'],
    locations: ['Giao Chỉ', 'Mê Linh'],
    questions: [
      {
        question: 'Mã Viện rút quân về nước vào thời điểm nào, chính thức kết thúc chiến dịch đàn áp cuộc khởi nghĩa Hai Bà Trưng?',
        options: ['Cuối năm 43', 'Giữa năm 44', 'Đầu năm 44', 'Đầu năm 45'],
        correctAnswer: 2,
        explanation: 'Đầu năm 44, Mã Viện rút quân về nước.'
      },
      {
        question: 'Theo sử nhà Hán, tổn thất của quân Mã Viện sau 2 năm chiến tranh xâm lược ở Giao Chỉ là bao nhiêu?',
        options: ['Không đáng kể, chỉ mất một phần nhỏ', 'Khoảng một phần ba quân số', 'Hơn một nửa số quân, chỉ còn lại bốn, năm phần', 'Toàn bộ quân bị tiêu diệt hoặc bị bắt'],
        correctAnswer: 2,
        explanation: 'Sử nhà Hán đã xác nhận: quân đi mười phần thì chỉ còn lại bốn, năm phần, nghĩa là hơn một nửa số quân đã phải bỏ mạng.'
      },
      {
        question: 'Cuộc khởi nghĩa Hai Bà Trưng có vị trí như thế nào trong lịch sử các cuộc đấu tranh của người Việt thời Bắc thuộc?',
        options: ['Cuộc khởi nghĩa có quy mô lớn nhất', 'Cuộc khởi nghĩa duy nhất thành công tạm thời', 'Cuộc khởi nghĩa đầu tiên dưới thời thuộc Hán', 'Cuộc khởi nghĩa kéo dài nhất'],
        correctAnswer: 2,
        explanation: 'Cuộc khởi nghĩa Hai Bà Trưng là cuộc khởi nghĩa đầu tiên dưới thời thuộc Hán.'
      },
      {
        question: 'Sau khi đánh đuổi được quân Đông Hán, Trưng Trắc đã làm gì để khẳng định quyền độc lập tự chủ của người dân Giao Chỉ?',
        options: ['Xin nhà Hán công nhận làm An Nam Quốc Vương', 'Xưng vương và đóng đô ở Mê Linh', 'Cử sứ giả sang các nước lân cận cầu phong', 'Tiếp tục mở rộng lãnh thổ về phía Nam'],
        correctAnswer: 1,
        explanation: 'Sau khi đánh đuổi được quân Đông Hán, Trưng Trắc đã xưng vương và đóng đô ở Mê Linh, đây chính là hành động khẳng định quyền độc lập tự chủ của người dân Giao Chỉ.'
      },
      {
        question: 'Một trong những ý nghĩa lịch sử quan trọng của cuộc khởi nghĩa Hai Bà Trưng là gì?',
        options: ['Mở ra một kỷ nguyên độc lập kéo dài hàng thế kỷ', 'Chứng minh vai trò, khả năng to lớn của người phụ nữ trong đấu tranh chống ngoại xâm', 'Buộc nhà Hán phải thay đổi hoàn toàn chính sách cai trị ở Giao Chỉ', 'Dẫn đến sự suy yếu và sụp đổ của nhà Đông Hán'],
        correctAnswer: 1,
        explanation: 'Cuộc khởi nghĩa của Hai Bà đã chứng minh vai trò, khả năng to lớn của người phụ nữ trong cuộc đấu tranh chống ngoại xâm, là một dấu son đầu tiên và sáng chói trong lịch sử đấu tranh của dân tộc Việt.'
      }
    ],
    rewards: {
      experience: 350,
      coins: 175
    }
  },
  // Giao Chau Event
  {
    id: 'event_giao_chau_cuoi_dong_han_tranh_gianh_quyen_luc_186',
    heading: 'Giao Châu cuối thời Đông Hán: Tranh giành quyền lực và Sĩ Nhiếp (Sau 186)',
    year: 186,
    type: 'dynasty',
    context: 'Cuối thời Đông Hán, khoảng từ sau năm 88, tình hình Trung Quốc lại trở nên rối loạn, cục diện Tam quốc hình thành. Ba thế lực Đông Hán, Lưu Biểu và Tôn Quyền không chỉ chia sẻ quyền lực ở Trung Hoa mà còn tranh giành ảnh hưởng ở Giao Châu. Thứ sử Đông Hán lôi kéo anh em họ hàng cùng làm quan ở Giao Châu. Chúng ra sức vơ vét của cải, bóc lột tàn khốc người dân bản xứ. Sau Chu Phù là Trương Tân được cử làm Thứ sử. Giao Châu lại liên tục bị lôi kéo vào cuộc chiến tranh giành quyền lực với thế lực Lưu Biểu ở Kinh Châu. Từ năm 186, Sĩ Nhiếp được nhà Hán cho kiêm chức Thứ sử Giao Châu.',
    description: 'Vào cuối thời Đông Hán (sau năm 88), Trung Quốc rơi vào hỗn loạn với sự hình thành của cục diện Tam quốc. Các thế lực như Đông Hán, Lưu Biểu và Tôn Quyền tranh giành ảnh hưởng, kể cả tại Giao Châu. Các Thứ sử Đông Hán tại Giao Châu như Chu Phù và sau đó là Trương Tân, đã ra sức vơ vét, bóc lột người dân. Giao Châu cũng bị cuốn vào cuộc chiến giữa các phe phái, đặc biệt là với Lưu Biểu ở Kinh Châu. Từ năm 186, Sĩ Nhiếp được nhà Hán bổ nhiệm làm Thứ sử Giao Châu, mở đầu một thời kỳ quan trọng cho vùng đất này.',
    period: 'period_1',
    characters: ['Lưu Biểu', 'Tôn Quyền', 'Chu Phù', 'Trương Tân', 'Sĩ Nhiếp'],
    locations: ['Trung Quốc', 'Giao Châu', 'Kinh Châu'],
    questions: [
      {
        question: 'Vào cuối thời Đông Hán, những thế lực nào ở Trung Hoa tranh giành ảnh hưởng ở Giao Châu?',
        options: ['Nhà Tấn, Nhà Tề, Nhà Lương', 'Đông Hán, Lưu Biểu, Tôn Quyền', 'Nhà Ngô, Nhà Thục, Nhà Ngụy', 'Cao Câu Ly, Bách Tế, Tân La'],
        correctAnswer: 1,
        explanation: 'Ba thế lực Đông Hán, Lưu Biểu và Tôn Quyền không chỉ chia sẻ quyền lực ở Trung Hoa mà còn tranh giành ảnh hưởng ở Giao Châu.'
      },
      {
        question: 'Ai được cử làm Thứ sử Giao Châu sau Chu Phù?',
        options: ['Sĩ Nhiếp', 'Lưu Biểu', 'Trương Tân', 'Tôn Quyền'],
        correctAnswer: 2,
        explanation: 'Sau Chu Phù là Trương Tân được cử làm Thứ sử.'
      },
      {
        question: 'Sĩ Nhiếp được nhà Hán cho kiêm chức Thứ sử Giao Châu từ năm nào?',
        options: ['Năm 88', 'Năm 180', 'Năm 186', 'Năm 200'],
        correctAnswer: 2,
        explanation: 'Từ năm 186, Sĩ Nhiếp được nhà Hán cho kiêm chức Thứ sử Giao Châu.'
      },
      {
        question: 'Giao Châu liên tục bị lôi kéo vào cuộc chiến tranh giành quyền lực với thế lực nào ở Kinh Châu?',
        options: ['Tôn Quyền', 'Đông Hán', 'Lưu Biểu', 'Tào Tháo'],
        correctAnswer: 2,
        explanation: 'Giao Châu lại liên tục bị lôi kéo vào cuộc chiến tranh giành quyền lực với thế lực Lưu Biểu ở Kinh Châu.'
      },
      {
        question: 'Tình hình chung ở Trung Quốc cuối thời Đông Hán được mô tả như thế nào?',
        options: ['Ổn định và thịnh vượng', 'Rối loạn, cục diện Tam quốc hình thành', 'Thống nhất dưới một triều đại mạnh', 'Bị ngoại tộc xâm chiếm'],
        correctAnswer: 1,
        explanation: 'Cuối thời Đông Hán, khoảng từ sau năm 88, tình hình Trung Quốc lại trở nên rối loạn, cục diện Tam quốc hình thành.'
      }
    ],
    rewards: {
      experience: 200,
      coins: 100
    }
  },
  {
    id: 'event_si_nhiep_cat_cu_nha_ngo_chiem_giao_chau_dao_hoang_226_271',
    heading: 'Sĩ Nhiếp cát cứ, nhà Ngô chiếm Giao Châu và cải cách của Đào Hoàng (226-271)',
    year: 226, // Death of Si Nhiep
    type: 'dynasty',
    context: 'Sĩ Nhiếp là con Sĩ Tứ, Thái thú quận Nhật Nam từ thời Hán Hoàn đế. Đến đời Sĩ Nhiếp, 3 anh em đều được nhà Hán cho cai quản các quận của châu Giao. Sĩ Nhất làm Thái thú Hợp Phố, Sĩ Vĩ làm Thái thú Cửu Chân, Sĩ Vũ làm Thái thú ở trong tay họ Sĩ. Sĩ Nhiếp đã gần như cai quản một triều đình riêng biệt ở Giao Châu, duy trì tình trạng hòa bình, phát triển về kinh tế và văn hóa trong giai đoạn Trung Quốc nội chiến liên miên. Tuy tồn tại độc lập nhưng Sĩ Nhiếp vẫn khéo léo và mềm dẻo trong ứng xử với triều đình trung ương, thể hiện ở việc giữ lệ triều cống đều đặn. Năm 226, Sĩ Nhiếp chết, con là Sĩ Huy tự lên thay cha chống lại thế lực của Ngô Tôn Quyền, bấy giờ đã làm chủ vùng Giang Đông và Giang Nam. Nhà Ngô muốn khống chế Giao Châu. Quảng Châu bao gồm các quận Hợp Phố, Thương Ngô, Uất Lâm, Nam Hải. Giao Châu bao gồm các quận: Giao Chỉ, Cửu Chân, Nhật Nam. Lữ Đại làm Thứ sử Quảng Châu, còn Đái Lương được cử làm Thứ sử Giao Châu. Trần Thời được nhà Ngô chỉ định thay vị trí của Sĩ Nhiếp, còn Sĩ Huy cho làm Thái thú Cửu Chân. Sĩ Huy muốn thay cha cát cứ ở Giao Châu bèn đem quân chống lại Đái Lương, Trần Thời. Nhà Ngô sai Lữ Đại sang diệt được Huy. Lữ Đại lĩnh luôn chức châu mục.\n\nNhưng sau đó, tình hình Giao Châu không ổn định. Lữ Đại đem quân chinh phạt đất Cửu Chân, tàn sát hàng vạn người. Nhà Ngô lại cho sát nhập Quảng Châu và Giao Châu. Dưới ách thống trị của nhà Ngô, người dân Giao Châu bị đàn áp, bóc lột nặng nề. Năm 264, chính quyền họ Ngô lại một lần nữa tách Quảng Châu và Giao Châu (có vẻ như bạn muốn nói điều này). Lỵ sở của Quảng Châu đóng ở Phiên Ngung còn lỵ sở Giao Châu đóng ở Long Biên. Trong khoảng thời gian từ năm 264 đến năm 271, Ngụy Tấn tranh giành đất Giao Châu với nhà Ngô. Người dân Lạc Việt đã phải chịu nhiều đau khổ do những cuộc chinh chiến liên miên của hai thế lực. Kết thúc, nhà Ngô lại giành được đất Giao Châu. Đào Hoàng được nhà Ngô cử sang làm Thứ sử Giao Châu. Đào Hoàng đã mở rộng phạm vi thống trị và tổ chức lại việc hành chính ở Giao Châu, tiến hành việc chia nhỏ các đơn vị cấp quận, thay đổi tên gọi các huyện ở Giao Châu. Chắc chắn về địa giới, diện cách các quận, huyện cũng có những thay đổi nhưng ngày nay không có tư liệu để khảo sát. Quận Giao Chỉ đã được tách ra thành 3 quận là Giao Chỉ, Tân Xương và Vũ Bình. Quận Cửu Chân tách làm 2 quận là Cửu Chân và Cửu Đức.',
    description: 'Gia tộc Sĩ Nhiếp (con Sĩ Tứ) cai quản Giao Châu gần như độc lập, duy trì hòa bình và phát triển kinh tế, văn hóa trong bối cảnh Trung Quốc loạn lạc, vẫn giữ lệ triều cống. Năm 226, Sĩ Nhiếp mất, con là Sĩ Huy tự lên thay nhưng bị nhà Ngô (Tôn Quyền) đánh bại. Lữ Đại được cử sang, đàn áp Cửu Chân, tàn sát hàng vạn người. Nhà Ngô nhiều lần thay đổi hành chính, sáp nhập rồi lại tách Giao Châu với Quảng Châu. Từ 264-271, Ngụy Tấn tranh giành Giao Châu với Ngô. Cuối cùng, Ngô thắng thế, cử Đào Hoàng làm Thứ sử. Đào Hoàng tổ chức lại hành chính, chia nhỏ quận: Giao Chỉ thành Giao Chỉ, Tân Xương, Vũ Bình; Cửu Chân thành Cửu Chân, Cửu Đức.',
    period: 'period_1',
    characters: ['Sĩ Nhiếp', 'Sĩ Tứ', 'Sĩ Nhất', 'Sĩ Vĩ', 'Sĩ Vũ', 'Sĩ Huy', 'Tôn Quyền', 'Lữ Đại', 'Đái Lương', 'Trần Thời', 'Đào Hoàng'],
    locations: ['Quận Nhật Nam', 'Châu Giao', 'Hợp Phố', 'Cửu Chân', 'Trung Quốc', 'Giang Đông', 'Giang Nam', 'Quảng Châu', 'Thương Ngô', 'Uất Lâm', 'Nam Hải', 'Quận Giao Chỉ', 'Phiên Ngung', 'Long Biên', 'Tân Xương', 'Vũ Bình', 'Cửu Đức'],
    questions: [
      {
        question: 'Sĩ Nhiếp đã duy trì tình trạng nào ở Giao Châu trong giai đoạn Trung Quốc nội chiến?',
        options: ['Hỗn loạn và chiến tranh', 'Hòa bình, phát triển kinh tế và văn hóa', 'Bị chia cắt thành nhiều tiểu quốc', 'Bị các nước láng giềng xâm chiếm'],
        correctAnswer: 1,
        explanation: 'Sĩ Nhiếp đã gần như cai quản một triều đình riêng biệt ở Giao Châu, duy trì tình trạng hòa bình, phát triển về kinh tế và văn hóa trong giai đoạn Trung Quốc nội chiến liên miên.'
      },
      {
        question: 'Ai đã tự lên thay Sĩ Nhiếp sau khi ông mất và chống lại thế lực của Ngô Tôn Quyền?',
        options: ['Sĩ Nhất', 'Sĩ Vĩ', 'Sĩ Vũ', 'Sĩ Huy'],
        correctAnswer: 3,
        explanation: 'Năm 226, Sĩ Nhiếp chết, con là Sĩ Huy tự lên thay cha chống lại thế lực của Ngô Tôn Quyền.'
      },
      {
        question: 'Nhà Ngô đã cử ai sang Giao Châu để dẹp Sĩ Huy?',
        options: ['Đái Lương', 'Trần Thời', 'Lữ Đại', 'Đào Hoàng'],
        correctAnswer: 2,
        explanation: 'Nhà Ngô sai Lữ Đại sang diệt được Huy.'
      },
      {
        question: 'Đào Hoàng, sau khi được nhà Ngô cử làm Thứ sử Giao Châu, đã chia quận Giao Chỉ thành những quận nào?',
        options: ['Giao Chỉ và Long Biên', 'Giao Chỉ, Tân Xương và Vũ Bình', 'Giao Chỉ, Cửu Chân và Nhật Nam', 'Giao Chỉ và Cửu Đức'],
        correctAnswer: 1,
        explanation: 'Quận Giao Chỉ đã được tách ra thành 3 quận là Giao Chỉ, Tân Xương và Vũ Bình.'
      },
      {
        question: 'Năm 264, nhà Ngô đã có sự thay đổi hành chính nào đối với Giao Châu và Quảng Châu?',
        options: ['Sáp nhập Giao Châu vào Quảng Châu', 'Tách Quảng Châu và Giao Châu thành hai đơn vị riêng biệt', 'Sáp nhập Quảng Châu vào Giao Châu', 'Giải thể cả hai châu'],
        correctAnswer: 1,
        explanation: 'Năm 264, chính quyền họ Ngô lại một lần nữa tách Quảng Châu và Giao Châu.'
      }
    ],
    rewards: {
      experience: 250,
      coins: 125
    }
  },
  {
    id: 'event_giao_chau_thoi_tan_luc_trieu_cat_cu_phan_chia_280_502',
    heading: 'Giao Châu thời Tấn và Lục triều: Cát cứ, phân chia hành chính và xung đột (280-502)',
    year: 280, // Dao Hoang dau hang Tan
    type: 'dynasty',
    context: 'Toàn bộ Giao Châu lúc này bao gồm 6 quận: Giao Chi, Tân Xương, Vũ Bình, Cừu Chân, Cửu Đức, Nhật Nam. Năm 280, nhà Tấn lại tấn công và giành lại được Giao Châu. Đào Hoàng sau khi đầu hàng nhà Tấn vẫn tiếp tục được ở lại làm Thứ sử Giao Châu. Tuy vậy, do tình trạng phân liệt, rối ren ở Trung Quốc, chính quyền nhà Tấn hầu như không kiểm soát được vùng Giao Châu. Chính vì vậy, trong khoảng thời gian từ thời Tấn đến thời Lục triều, chính quyền Giao Châu thực sự là chính quyền cát sáu đời. Từ Đào Hoàng, Đào Uy, Đào Thục, Đào Tuy. Sau đó, chức Thử sử chuyển sang họ cố và cũng truyền lại đến 3 đời: cố Bí, cố Tham, cố Thọ.\n\nSau này, họ Đỗ cũng làm Thứ sử ở Giao Châu đến 3 đời. Chính sự lỏng lẻo trong quan hệ với chính quyền Giao Châu càng làm cho tình hình chính trị Giao Châu bất ổn bởi sự tranh giành quyền lực của các Thái thú đã có thế lực với các Thứ sử do triều đình cử đến. Tình trạng tranh chấp quyền lực dẫn đến việc chính quyền đô hộ nhiều khi phải chấp nhận trao quyền cai quản cho những kẻ mạnh nhất. Thậm chí, khi nhà Lương cướp ngôi nhà Tề vào năm 502, Thứ sử Giao Châu là Lý Khải còn ra mặt chống lại nhà Lương. Vào thời kỳ Tam Quốc, châu Giao được chia thành nhiều quận, mỗi quận gồm một số huyện trực thuộc. Cụ thể, quận Giao Chỉ có tổng cộng 14 huyện, bao gồm: Long Biên, Câu Lậu, Vọng Hải, Liên Lâu, Tây Vu, Vũ Ninh, Chu Diên, Khúc Dương, Ngô Hưng, Bắc Đới, Kê Từ, An Định, Vũ An và Quân Bình. Quận Tân Xương gồm 6 huyện: Mê Linh, Gia Hưng, Ngô Định, Phong Sơn, Lâm Tây và Tây Đạo. Quận Vũ Bình có 7 huyện: Vũ Linh, Vũ Hưng, Tiến Sơn, Căn Ninh, Vũ Định, Phù Yên và Phong Khê. Quận Cửu Chân gồm 6 huyện: Tư Phố, Di Phong, Trạm Ngô, Kiến Sơ, Thường Lạc và Phù Lạc. Quận Cửu Đức có 7 huyện: Cửu Đức, Hàm Hoan, Nam Lăng, Dương Thành, Phù Linh, Khúc Tư và Đô Hào. Cuối cùng, quận Nhật Nam bao gồm 5 huyện: Tượng Lâm, Lô Dung, Chu Ngô, Tây Quyển và Tỳ Ảnh. \n\nNhư vậy, trong giai đoạn lịch sử từ thời Đông Hán đến Lục triều, Giao Châu đối với Trung Quốc chi là miền "ngoại địa", bị ràng buộc yếu ớt bởi chính quyền trung ương. Các Thứ sử ở Giao Châu có toàn quyền cai quản theo chế độ cát cứ. Đây cũng là thời kỳ chính quyền Giao Châu có nhiều lần xung đột với nước Lâm Ảp láng giềng.',
    description: 'Sau khi Đào Hoàng chia Giao Châu thành 6 quận (Giao Chỉ, Tân Xương, Vũ Bình, Cửu Chân, Cửu Đức, Nhật Nam), nhà Tấn giành lại Giao Châu vào năm 280. Đào Hoàng đầu hàng và được giữ chức. Do Trung Quốc rối ren, nhà Tấn không kiểm soát chặt Giao Châu, dẫn đến tình trạng cát cứ của các dòng họ Thứ sử như họ Đào (4 đời: Hoàng, Uy, Thục, Tuy), họ Cố (3 đời: Bí, Tham, Thọ), và họ Đỗ (3 đời). Tình hình bất ổn do tranh giành quyền lực. Năm 502, Thứ sử Lý Khải còn chống lại nhà Lương. Thời Tam Quốc, Giao Chỉ có 14 huyện (Long Biên, Câu Lậu,...), Tân Xương 6 huyện, Vũ Bình 7 huyện, Cửu Chân 6 huyện, Cửu Đức 7 huyện, Nhật Nam 5 huyện. Giao Châu thời này như "ngoại địa", thường xuyên xung đột với Lâm Ấp.',
    period: 'period_1',
    characters: ['Đào Hoàng', 'Đào Uy', 'Đào Thục', 'Đào Tuy', 'Cố Bí', 'Cố Tham', 'Cố Thọ', 'Lý Khải', 'Họ Đỗ'],
    locations: ['Giao Châu', 'Quận Giao Chỉ', 'Quận Tân Xương', 'Quận Vũ Bình', 'Quận Cửu Chân', 'Quận Cửu Đức', 'Quận Nhật Nam', 'Trung Quốc', 'Lâm Ấp', 'Long Biên', 'Câu Lậu', 'Vọng Hải', 'Liên Lâu', 'Tây Vu', 'Vũ Ninh', 'Chu Diên', 'Khúc Dương', 'Ngô Hưng', 'Bắc Đới', 'Kê Từ', 'An Định', 'Vũ An', 'Quân Bình', 'Mê Linh', 'Gia Hưng', 'Ngô Định', 'Phong Sơn', 'Lâm Tây', 'Tây Đạo', 'Vũ Linh', 'Vũ Hưng', 'Tiến Sơn', 'Căn Ninh', 'Vũ Định', 'Phù Yên', 'Phong Khê', 'Tư Phố', 'Di Phong', 'Trạm Ngô', 'Kiến Sơ', 'Thường Lạc', 'Phù Lạc', 'Hàm Hoan', 'Nam Lăng', 'Dương Thành', 'Phù Linh', 'Khúc Tư', 'Đô Hào', 'Tượng Lâm', 'Lô Dung', 'Chu Ngô', 'Tây Quyển', 'Tỳ Ảnh'],
    questions: [
      {
        question: 'Sau khi nhà Tấn giành lại Giao Châu năm 280, Đào Hoàng đã làm gì?',
        options: ['Chống cự đến cùng', 'Đầu hàng và tiếp tục làm Thứ sử', 'Trốn sang Lâm Ấp', 'Tự sát'],
        correctAnswer: 1,
        explanation: 'Đào Hoàng sau khi đầu hàng nhà Tấn vẫn tiếp tục được ở lại làm Thứ sử Giao Châu.'
      },
      {
        question: 'Những dòng họ nào đã thay nhau cát cứ ở Giao Châu trong thời Tấn đến Lục triều?',
        options: ['Họ Lý, họ Trần, họ Lê', 'Họ Đào, họ Cố, họ Đỗ', 'Họ Sĩ, họ Triệu, họ Ngô', 'Họ Trưng, họ Phạm, họ Tôn'],
        correctAnswer: 1,
        explanation: 'Chính quyền Giao Châu thực sự là chính quyền cát cứ... Từ Đào Hoàng... Sau đó, chức Thứ sử chuyển sang họ Cố... Sau này, họ Đỗ cũng làm Thứ sử ở Giao Châu.'
      },
      {
        question: 'Năm 502, Thứ sử Giao Châu Lý Khải đã có hành động gì khi nhà Lương cướp ngôi nhà Tề?',
        options: ['Đầu hàng nhà Lương', 'Cầu viện nhà Tề', 'Ra mặt chống lại nhà Lương', 'Tuyên bố Giao Châu độc lập'],
        correctAnswer: 2,
        explanation: 'Khi nhà Lương cướp ngôi nhà Tề vào năm 502, Thứ sử Giao Châu là Lý Khải còn ra mặt chống lại nhà Lương.'
      },
      {
        question: 'Vào thời kỳ Tam Quốc, quận Giao Chỉ có tổng cộng bao nhiêu huyện?',
        options: ['10 huyện', '12 huyện', '14 huyện', '16 huyện'],
        correctAnswer: 2,
        explanation: 'Quận Giao Chỉ có tổng cộng 14 huyện, bao gồm: Long Biên, Câu Lậu, Vọng Hải,...'
      },
      {
        question: 'Ngoài tình trạng cát cứ, Giao Châu trong giai đoạn này còn thường xuyên có xung đột với nước nào?',
        options: ['Champa', 'Phù Nam', 'Lâm Ấp', 'Ai Lao'],
        correctAnswer: 2,
        explanation: 'Đây cũng là thời kỳ chính quyền Giao Châu có nhiều lần xung đột với nước Lâm Ảp láng giềng.'
      }
    ],
    rewards: {
      experience: 280,
      coins: 140
    }
  },
  {
    id: 'event_phan_khang_cua_nguoi_giao_chau_thoi_bac_thuoc',
    heading: 'Sự áp bức và phản kháng của người dân Giao Châu thời Bắc thuộc',
    year: 300, // Representative year for ongoing situation
    type: 'rebellion',
    context: 'Người dân Giao Châu không những bị các quan lại Trung Hoa bóc lột ngay trên đất nước mình mà còn luôn phải chịu cảnh chiến tranh tranh giành ảnh hưởng của các thế lực. Những áp lực này đã gây nên sự phản kháng mạnh mẽ, bởi thế nhiều đời Thứ sử thường tâu về chính quyền trung ương ở Trung Quốc về thói quen "thường hay phản loạn" của người dân Giao Châu (Hà Nội, 1997). Chính sự ly tâm của chính quyền Giao Châu cũng là cơ hội cho các phong trào đấu tranh giành độc lập của người dân bản xứ. Tình hình kinh tế và chính sách khai thác, bóc lột của chính quyền đô hộ ở Giao Châu. ',
    description: 'Dưới ách đô hộ của các triều đại phong kiến phương Bắc, người dân Giao Châu phải chịu đựng sự bóc lột nặng nề từ quan lại Trung Hoa và liên miên gánh chịu hậu quả của các cuộc chiến tranh tranh giành quyền lực. Những áp bức này đã hun đúc tinh thần phản kháng mạnh mẽ trong nhân dân. Các Thứ sử cai trị Giao Châu thường xuyên báo cáo về triều đình trung ương về tình trạng "thường hay phản loạn" của người dân địa phương. Bên cạnh đó, sự quản lý lỏng lẻo và tình trạng cát cứ của chính quyền đô hộ tại Giao Châu cũng tạo điều kiện thuận lợi cho các phong trào đấu tranh giành độc lập của người Việt nổi lên.',
    period: 'period_1',
    characters: [],
    locations: ['Giao Châu', 'Trung Quốc'],
    questions: [
      {
        question: 'Nguyên nhân chính nào gây nên sự phản kháng mạnh mẽ của người dân Giao Châu?',
        options: ['Thiên tai liên miên', 'Bị bóc lột và chịu cảnh chiến tranh tranh giành ảnh hưởng', 'Bị cấm buôn bán với nước ngoài', 'Bị ép buộc thay đổi tôn giáo'],
        correctAnswer: 1,
        explanation: 'Người dân Giao Châu không những bị các quan lại Trung Hoa bóc lột ngay trên đất nước mình mà còn luôn phải chịu cảnh chiến tranh tranh giành ảnh hưởng của các thế lực. Những áp lực này đã gây nên sự phản kháng mạnh mẽ.'
      },
      {
        question: 'Các Thứ sử Trung Quốc thường tâu về triều đình điều gì về người dân Giao Châu?',
        options: ['Lòng trung thành tuyệt đối', 'Khả năng canh tác nông nghiệp giỏi', 'Thói quen "thường hay phản loạn"', 'Nhu cầu được học chữ Hán'],
        correctAnswer: 2,
        explanation: 'Nhiều đời Thứ sử thường tâu về chính quyền trung ương ở Trung Quốc về thói quen "thường hay phản loạn" của người dân Giao Châu.'
      },
      {
        question: 'Yếu tố nào từ phía chính quyền đô hộ đã tạo cơ hội cho các phong trào đấu tranh giành độc lập của người dân bản xứ?',
        options: ['Chính sách cai trị hà khắc', 'Việc tăng cường quân đội đồn trú', 'Sự ly tâm (quản lý lỏng lẻo, cát cứ) của chính quyền Giao Châu', 'Việc xây dựng nhiều trường học'],
        correctAnswer: 2,
        explanation: 'Chính sự ly tâm của chính quyền Giao Châu cũng là cơ hội cho các phong trào đấu tranh giành độc lập của người dân bản xứ.'
      },
      {
        question: 'Ngoài việc bị quan lại bóc lột, người dân Giao Châu còn phải chịu đựng điều gì?',
        options: ['Nạn đói do mất mùa kéo dài', 'Dịch bệnh hoành hành', 'Cảnh chiến tranh tranh giành ảnh hưởng của các thế lực', 'Thuế khóa nhẹ nhàng'],
        correctAnswer: 2,
        explanation: 'Người dân Giao Châu... còn luôn phải chịu cảnh chiến tranh tranh giành ảnh hưởng của các thế lực.'
      },
      {
        question: 'Thái độ chung của người dân Giao Châu trước ách đô hộ được mô tả là gì?',
        options: ['Cam chịu và phục tùng', 'Hợp tác để cùng phát triển', 'Phản kháng mạnh mẽ', 'Thờ ơ và không quan tâm'],
        correctAnswer: 2,
        explanation: 'Những áp lực này đã gây nên sự phản kháng mạnh mẽ.'
      }
    ],
    rewards: {
      experience: 180,
      coins: 90
    }
  },
  {
    id: 'event_kinh_te_thu_cong_giao_chau_dong_han_luc_trieu',
    heading: 'Kinh tế và Thủ công nghiệp Giao Châu thời Đông Hán đến Lục triều',
    year: 200, // Representative year for the described period
    type: 'cultural',
    context: 'Tình hình kinh tế. Kinh tế nông nghiệp: Nghề trồng lúa nước ở Giao Chỉ đã xuất hiện từ rất sớm. Đây là nền nông nghiệp thâm canh, đến thế kỷ I SCN, người Giao Chỉ đã biết trồng lúa nước 2 mùa, hè và đông. Khi nhận xét về tình hình trồng lúa ở Tượng Lâm (Quảng Nam) khoảng đầu thế kỷ VI, sách Thủy kinh chú viết: "Nơi gọi là Thạch điền thì trồng lúa trắng, tháng 7 làm thì tháng 10 lúa chín.\nNơi gọi là Xích điền thì trồng lúa đỏ, tháng 12 làm thì tháng 4 lúa chín". Bấy giờ người Giao Châu đã biết trồng lúa nếp (nhu) và dùng lúa đó để nấu rượu. Ngoài lúa, bấy giờ người dân Giao Châu còn trồng thêm rất nguồn lương thực. Bên cạnh nghề làm ruộng, ở châu Giao, nghề làm vườn cũng khá phát triển. Theo các thư tịch Trung Quốc, ở đây đã có những ruộng riêng trồng rau gọi ỉà sơ phố. Các loại rau được trồng ở thời kỳ này ỉà rau muống, cà, hành và gừng. Rau muổng còn được các sách mô tả ừồng theo bè thả trên mặt nước. Ngoài ra còn có những vườn trồng quả riêng.Các loại quả như chuối, vải, nhãn, cam, quýt, cống triều đình phương Bắc. Theo sách Nam phương thảo mộc trạng, người Giao Châu đã biết đến phương pháp chiết cành để gây giống quả. Cũng theo sách này, người Giao Châu đã biết dùng phương pháp sử dụng côn trùng để bảo vệ cây quà. Thí dụ như nuôi tổ kiến trên cây cam, để kiến diệt hết các loài sâu bọ. Cây cau được trồng ở khắp vùng từ Giao Chi đến Nhật Nam, bởi người dân ở đây có tục ăn trầu với vôi nung từ vỏ con hàu. và khai thác để phục vụ đời sống như làm giấy, dệt vải, dệt chiếu, phục vụ nhu cầu khi có chiến tranh như làm giáo mác, đan thuyền, về chăn nuôi gia súc, thòi kỳ này người ta đã biết chăn nuôi trâu bò để giải quyết vấn đề sức kéo và giết thịt. Các loại gia súc nhỏ như chó lợn, gà vịt đã được nuôi phổ biến.\n\nTrong các mộ táng thuộc giai đoạn này có nhiều tượng lợn và mô hình chuồng lợn Từ thời Mã Viện, việc đào sông đắp đê, làm thủy lợi đã được cầu tưới tiêu trong canh tác nông nghiệp. Việc sử dụng phân bón ở Giao Châu xưa, chủ yếu nhờ vào việc đốt cỏ thành than để bón Giao Chỉ đã biết dùng phân để bón ruộng, khiến cho năng suất được tăng cao. Đầu thời Bắc thuộc, nhà Hán còn phải chở lúa gạo từ Trung Quốc sang Giao Chi để nuôi quan lại và quân lính, nhưng tới khoảng đầu Công nguyên, số thóc thuế nhà Hán thu được ở Giao Chỉ đã đủ nuôi quan lại và binh lính. Kỹ thuật cày bừa bằng trâu bò, kết hợp với việc sử dụng những công cụ lao động bàng sát đã khiến cho việc canh tác nông nghiệp ở Giao Châu năng suất và có hiệu quả hơn nhiều. Thủ công nghiệp Giai đoạn lịch sử từ thời Đông Hán đến Lục triều theo như sự phát hiện của khảo cổ học Việt Nam, ứng với thời kỳ đồ sắt ra đời và phát triển. Đây là giai đoạn các nghề thủ công nghiệp đã có những bước tiến dài. - Nghề đúc đồng và rèn sắt Đây là thời kỳ nghề đúc đồng vẫn tiếp tục phát triển với các sản Nhung các loại trống đồng đúc ra ở thời kỳ này không có được nét tinh xảo và hoành tráng như ở thời kỳ trước đó.\n\nCông cụ bằng sắt tìm thấy ở thời kỳ này rất nhiều. Đó là các loại công cụ sản xuất Các loại dụng cụ như nồi, đèn, đinh xuất hiện ngày càng nhiều. - Nghề gốm tiếp tục phát triển ở thời kỳ này. Kỹ thuật gốm đã được nâng lên nhờ những kinh nghiệm cổ truyền cùng sự tiếp thu kinh nghiệm của người Trung Quốc. Khảo cổ học đã phát hiện nhiều lò gổm có niên đại ở thời kỳ này trên địa bàn Thanh Hóa, tìm thấy trong các mộ cổ có niên đại từ thời Đông Hán trở về sau cho thấy gốm của ta có chịu ảnh hưởng ít nhiều kỹ thuật chế tác của Trung Quốc. Cùng phát triển với nghề gốm là nghề làm gạch ngói phục vụ các công trình xây dựng, thành quách, chùa tháp, mộ - Nghề dệt: Nghề nuôi tằm và ươm tơ khá phát triển đã cung cấp nguyên liệu cho nghề dệt. Thủy kinh chú chép nghề nuôi tằm ở Giao Châu cho năng suất là 1 năm 8 lứa.\n\nBông và gai cũng là những sản phẩm nông nghiệp được bồng và thu lượm ở thời kỳ này. Trong các di chỉ đã phát hiện, các nhà khảo cổ tìm ra được nhiều mảnh vải, lụa. Vải Cát bá và loại vải dệt từ tơ chuối được gọi là vải Tiêu cát chính là cống phẩm đặc biệt của châu Giao cho triều đình phương Bắc. Sách An Nam chí đã dẫn từ Tây Việt ngoại kỳ khi viết về các sản phẩm lụa ở Giao Châu: "vải lụa thì có sa cát liễu, sa binh văn tảo tâm, hợp sa, láng, bông, ỷ, lăng, giầy bằng tơ, các thứ này cũng khá tốt. Tơ đay, tơ chuối, có thể kéo sợi làm vải mỏng như bằng nguyên liệu là các loại cây phương Nam. Sách Nam phương thào mộc trạng nói người Giao Chỉ đã dùng cây Vang (cây Tô phương) để nhuộm vải thành màu đỏ sẫm. - Nghề làm đường Sách Dị vật chí của Trung Quốc viết về cây mía ở Giao Châu: "cây mía có chu vi vài tấc, dài hơn 1 trượng, giống như cây tre, đem đẵn ăn rất ngọt, ép lấy nước làm thành đường".',
    description: 'Thời Đông Hán đến Lục triều, kinh tế Giao Châu có nhiều bước phát triển. Nông nghiệp: Người Giao Chỉ trồng lúa nước 2 mùa/năm từ thế kỷ I SCN, biết trồng lúa nếp nấu rượu. Nghề làm vườn phát triển với các loại rau (muống, cà, hành, gừng), quả (chuối, vải, nhãn, cam, quýt). Kỹ thuật chiết cành, dùng kiến diệt sâu bọ được áp dụng. Chăn nuôi trâu bò, lợn, gà, vịt phổ biến. Thủy lợi được chú trọng từ thời Mã Viện, biết dùng phân bón. Thủ công nghiệp: Đồ sắt phát triển mạnh, nghề đúc đồng tiếp tục nhưng trống đồng không tinh xảo bằng trước. Nghề gốm tiến bộ, làm gạch ngói phát triển. Nghề dệt rất phát triển, nuôi tằm 8 lứa/năm, có vải Cát bá, vải Tiêu cát (tơ chuối) làm cống phẩm; biết dùng cây Vang nhuộm vải đỏ. Nghề làm đường từ mía cũng xuất hiện.',
    period: 'period_1',
    characters: ['Mã Viện'],
    locations: ['Giao Chỉ', 'Tượng Lâm (Quảng Nam)', 'Châu Giao', 'Nhật Nam', 'Thanh Hóa'],
    questions: [
      {
        question: 'Đến thế kỷ I SCN, người Giao Chỉ đã biết trồng lúa nước mấy mùa một năm?',
        options: ['Một mùa', 'Hai mùa (hè và đông)', 'Ba mùa', 'Bốn mùa'],
        correctAnswer: 1,
        explanation: 'Đến thế kỷ I SCN, người Giao Chỉ đã biết trồng lúa nước 2 mùa, hè và đông.'
      },
      {
        question: 'Theo sách Nam phương thảo mộc trạng, người Giao Châu đã biết dùng phương pháp nào để bảo vệ cây cam khỏi sâu bọ?',
        options: ['Phun thuốc trừ sâu hóa học', 'Dùng bẫy dính', 'Nuôi tổ kiến trên cây cam', 'Bao trái cam bằng túi giấy'],
        correctAnswer: 2,
        explanation: 'Cũng theo sách này, người Giao Châu đã biết dùng phương pháp sử dụng côn trùng để bảo vệ cây quà. Thí dụ như nuôi tổ kiến trên cây cam, để kiến diệt hết các loài sâu bọ.'
      },
      {
        question: 'Trong thời kỳ đồ sắt phát triển ở Giao Châu, nghề thủ công nào vẫn tiếp tục dù sản phẩm không tinh xảo bằng trước?',
        options: ['Nghề rèn sắt', 'Nghề đúc đồng (đặc biệt là trống đồng)', 'Nghề làm gốm', 'Nghề dệt vải'],
        correctAnswer: 1,
        explanation: 'Đây là thời kỳ nghề đúc đồng vẫn tiếp tục phát triển... Nhung các loại trống đồng đúc ra ở thời kỳ này không có được nét tinh xảo và hoành tráng như ở thời kỳ trước đó.'
      },
      {
        question: 'Theo Thủy kinh chú, nghề nuôi tằm ở Giao Châu cho năng suất bao nhiêu lứa một năm?',
        options: ['4 lứa', '6 lứa', '8 lứa', '10 lứa'],
        correctAnswer: 2,
        explanation: 'Thủy kinh chú chép nghề nuôi tằm ở Giao Châu cho năng suất là 1 năm 8 lứa.'
      },
      {
        question: 'Sách Dị vật chí của Trung Quốc mô tả người Giao Châu làm đường từ loại cây nào?',
        options: ['Cây thốt nốt', 'Củ cải đường', 'Cây mía', 'Hoa cỏ ngọt'],
        correctAnswer: 2,
        explanation: 'Sách Dị vật chí của Trung Quốc viết về cây mía ở Giao Châu... ép lấy nước làm thành đường".'
      }
    ],
    rewards: {
      experience: 300,
      coins: 150
    }
  },
  {
    id: 'event_bac_thuoc_lan_hai_bat_dau_43',
    heading: 'Bắt đầu Giai đoạn Bắc thuộc lần thứ hai (Sau 43)',
    year: 43,
    type: 'dynasty',
    context: 'Cuộc khởi nghĩa Hai Bà Trưng bị đàn áp, đất nước ta lại bị đô hộ lần thứ hai bởi chính quyền phong kiến phương Bắc. Đây là giai đoạn mà các nhà nghiên cứu vẫn gọi là "Bắc thuộc lần thứ hai". Giai đoạn này tương đương với thời kỳ tồn tại của các triều đại phong kiến ở Trung Quốc như sau: Đông Hán (từ năm 25 đến năm 220), Tam quốc: Ngụy, Thục, Ngô (từ năm 220 đến năm 280), Lưỡng Tấn: Tây Tấn, Đông Tấn (từ năm 265 đến năm 420), Nam Bắc triều: Tống, Tề, Lương, Trần (từ năm 420 đến năm 581). Từ Lưỡng Tấn đến Nam Bắc triều, các sách sử gọi chung là thời Lục triều.',
    description: 'Sau khi cuộc khởi nghĩa Hai Bà Trưng bị đàn áp vào năm 43, đất nước ta bước vào giai đoạn bị đô hộ lần thứ hai bởi các triều đại phong kiến phương Bắc. Giai đoạn này, được gọi là "Bắc thuộc lần thứ hai", kéo dài qua nhiều triều đại Trung Quốc, bao gồm Đông Hán (25-220), Tam quốc (Ngụy, Thục, Ngô; 220-280), Lưỡng Tấn (Tây Tấn, Đông Tấn; 265-420), và Nam Bắc triều (Tống, Tề, Lương, Trần; 420-581). Thời kỳ từ Lưỡng Tấn đến Nam Bắc triều còn được gọi chung là thời Lục triều.',
    period: 'period_1',
    characters: ['Hai Bà Trưng'],
    locations: ['Trung Quốc'],
    questions: [
      {
        question: 'Giai đoạn "Bắc thuộc lần thứ hai" bắt đầu sau sự kiện nào?',
        options: ['Nhà Triệu sụp đổ', 'Khởi nghĩa Lý Bí thành công', 'Cuộc khởi nghĩa Hai Bà Trưng bị đàn áp', 'Nhà Ngô thành lập'],
        correctAnswer: 2,
        explanation: 'Context cho biết: "Cuộc khởi nghĩa Hai Bà Trưng bị đàn áp, đất nước ta lại bị đô hộ lần thứ hai bởi chính quyền phong kiến phương Bắc."'
      },
      {
        question: 'Triều đại nào của Trung Quốc tồn tại trong giai đoạn đầu của "Bắc thuộc lần thứ hai" (từ năm 25 đến năm 220)?',
        options: ['Tam quốc', 'Đông Hán', 'Lưỡng Tấn', 'Nam Bắc triều'],
        correctAnswer: 1,
        explanation: 'Giai đoạn này tương đương với thời kỳ tồn tại của các triều đại phong kiến ở Trung Quốc, trong đó có Đông Hán (từ năm 25 đến năm 220).'
      },
      {
        question: 'Thời kỳ nào ở Trung Quốc bao gồm các triều đại Tống, Tề, Lương, Trần (từ năm 420 đến năm 581)?',
        options: ['Đông Hán', 'Tam quốc', 'Lưỡng Tấn', 'Nam Bắc triều'],
        correctAnswer: 3,
        explanation: 'Nam Bắc triều bao gồm các triều đại Tống, Tề, Lương, Trần, kéo dài từ năm 420 đến năm 581.'
      },
      {
        question: 'Các sách sử gọi chung thời kỳ từ Lưỡng Tấn đến Nam Bắc triều là gì?',
        options: ['Thời Xuân Thu', 'Thời Chiến Quốc', 'Thời Lục triều', 'Thời Ngũ Đại'],
        correctAnswer: 2,
        explanation: 'Từ Lưỡng Tấn đến Nam Bắc triều, các sách sử gọi chung là thời Lục triều.'
      },
      {
        question: 'Giai đoạn Tam quốc ở Trung Quốc (Ngụy, Thục, Ngô) kéo dài từ năm nào đến năm nào?',
        options: ['25 - 220', '220 - 280', '265 - 420', '420 - 581'],
        correctAnswer: 1,
        explanation: 'Tam quốc: Ngụy, Thục, Ngô tồn tại từ năm 220 đến năm 280.'
      }
    ],
    rewards: {
      experience: 150,
      coins: 75
    }
  },
  {
    id: 'event_ma_vien_thiet_lap_thong_tri_43',
    heading: 'Mã Viện thiết lập lại nền thống trị và đàn áp quý tộc Việt (Sau 43)',
    year: 43,
    type: 'cultural',
    context: 'Từ năm 43, sau khi tiêu diệt được chính quyền của Trưng Vương, nhà Hán một lần nữa thiết lập nền thống trị trên đất nước ta. Mã Viện thay mặt chính quyền nhà Hán tiến hành một số cải cách về chính trị và hành chính để có thể kiểm soát được tình hình ở Giao Châu. Cuộc khởi nghĩa của Hai Bà Trưng đã chứng tỏ sự bất hợp tác của tầng lớp quý tộc Việt với chính quyền đô hộ phương Bắc, bằng sự tham gia của các Lạc hầu, Lạc tướng với vai trò các tướng lĩnh của Hai Bà. Họ không chỉ tham gia trên danh nghĩa cá nhân mà còn đem theo các lực lượng quân sự ở địa phương để góp sức cho phong trào. Chính vì thế, các Lạc hầu, Lạc tướng cũng trở thành đối tượng bị đàn áp dã man. Ngoài những người hy sinh trong trận mạc, đã có 300 tướng lĩnh bị bắt và đi đày ở vùng Linh Lăng (Hồ Nam, Trung Quốc).',
    description: 'Sau khi dập tắt cuộc khởi nghĩa của Trưng Vương vào năm 43, nhà Hán tái thiết lập ách thống trị tại Giao Châu. Mã Viện, đại diện cho nhà Hán, đã thực hiện các cải cách chính trị và hành chính nhằm củng cố quyền kiểm soát. Cuộc khởi nghĩa trước đó cho thấy sự chống đối mạnh mẽ từ tầng lớp quý tộc Lạc Việt (Lạc hầu, Lạc tướng), những người đã đóng vai trò quan trọng trong hàng ngũ của Hai Bà Trưng và huy động lực lượng địa phương. Do đó, Mã Viện đã tiến hành đàn áp tàn bạo tầng lớp này. Bên cạnh những người đã hy sinh, khoảng 300 tướng lĩnh Lạc Việt đã bị bắt và lưu đày đến Linh Lăng (Hồ Nam, Trung Quốc).',
    period: 'period_1',
    characters: ['Mã Viện', 'Trưng Vương (Hai Bà Trưng)', 'Lạc hầu', 'Lạc tướng'],
    locations: ['Giao Châu', 'Linh Lăng (Hồ Nam, Trung Quốc)'],
    questions: [
      {
        question: 'Sau khi tiêu diệt chính quyền Trưng Vương, ai đã thay mặt nhà Hán tiến hành cải cách ở Giao Châu?',
        options: ['Tô Định', 'Tích Quang', 'Mã Viện', 'Nhâm Diên'],
        correctAnswer: 2,
        explanation: 'Mã Viện thay mặt chính quyền nhà Hán tiến hành một số cải cách về chính trị và hành chính để có thể kiểm soát được tình hình ở Giao Châu.'
      },
      {
        question: 'Cuộc khởi nghĩa Hai Bà Trưng đã chứng tỏ điều gì về thái độ của tầng lớp quý tộc Việt?',
        options: ['Sự hợp tác chặt chẽ với nhà Hán', 'Sự thờ ơ với tình hình đất nước', 'Sự bất hợp tác với chính quyền đô hộ phương Bắc', 'Mong muốn được nhà Hán phong tước'],
        correctAnswer: 2,
        explanation: 'Cuộc khởi nghĩa của Hai Bà Trưng đã chứng tỏ sự bất hợp tác của tầng lớp quý tộc Việt với chính quyền đô hộ phương Bắc.'
      },
      {
        question: 'Đối tượng nào trở thành mục tiêu đàn áp dã man của Mã Viện sau cuộc khởi nghĩa?',
        options: ['Nông dân nghèo', 'Thương nhân giàu có', 'Các Lạc hầu, Lạc tướng', 'Các nhà sư Phật giáo'],
        correctAnswer: 2,
        explanation: 'Chính vì thế, các Lạc hầu, Lạc tướng cũng trở thành đối tượng bị đàn áp dã man.'
      },
      {
        question: 'Bao nhiêu tướng lĩnh của Hai Bà Trưng bị bắt và đi đày ở vùng Linh Lăng sau cuộc khởi nghĩa?',
        options: ['Khoảng 100', 'Khoảng 200', '300', 'Hơn 500'],
        correctAnswer: 2,
        explanation: 'Đã có 300 tướng lĩnh bị bắt và đi đày ở vùng Linh Lăng (Hồ Nam, Trung Quốc).'
      },
      {
        question: 'Lý do chính khiến Mã Viện thực hiện các cải cách chính trị và hành chính ở Giao Châu là gì?',
        options: ['Để phát triển kinh tế Giao Châu', 'Để truyền bá văn hóa Hán', 'Để kiểm soát được tình hình ở Giao Châu', 'Để chuẩn bị cho các cuộc chinh phạt mới'],
        correctAnswer: 2,
        explanation: 'Mã Viện...tiến hành một số cải cách về chính trị và hành chính để có thể kiểm soát được tình hình ở Giao Châu.'
      }
    ],
    rewards: {
      experience: 200,
      coins: 100
    }
  },
  {
    id: 'event_ma_vien_cai_cach_hanh_chinh_sau_43',
    heading: 'Mã Viện cải cách hành chính, xóa bỏ Lạc tướng (Sau 43)',
    year: 43,
    type: 'cultural',
    context: 'Nếu như trước kia chính quyền đô hộ vẫn sử dụng các Lạc hầu, Lạc tướng cai quản ở cấp quận, huyện theo tục lệ cha truyền con nối của người bản địa, thì nay Mã Viện cho xóa bỏ hoàn toàn danh hiệu Lạc tướng. Chế độ Huyện lệnh bị bãi bỏ hoàn toàn, thay vào đó là chức Lệnh trường do quan lại người Trung Hoa được triều đình phương Băc bổ nhiệm. chỉ còn rất ít người Việt được sử dụng. Chức Đô úy chuyên coi việc quân sự cũng bị bãi bỏ. Như vậy, quyền lực ở Giao Châu vẫn do một viên Thứ sử đứng đầu. Giúp việc cho Thứ sừ có các quan lại tòng sự. Đứng đầu quận là một viên Thái thú, kiêm cả việc chính quyền và quân sự.\n\nBên cạnh Thái thú có các quan chuyên trách trông coi các mặt về kinh tế và xã hội như Thiết quan (trông coi việc về kim khí như khai thác hoặc chế tạo các công cụ đồng, sắt), Công quan (trông coi các công việc về thủ công nghiệp), hay Thủy quan (trông coi các nghề thủy sản). Như vậy, chính quyền đô hộ ở giai đoạn này đã với tới cấp huyện chứ không phải chi dừng ở cấp quận như trước kia. Mã Viện đã thực hiện việc phân chia lại một số các đơn vị hành chính, với hai ý đồ. Thứ nhất, phân chia dân theo khu vực để dễ bề quản lý. Thứ hai, dùng cách chia nhỏ các huyện để triệt Số huyện lớn như huyện Tây Vu, có số dân đến 32.000 hộ đã bị chia nhỏ ra thành 3 huyện là Tây Vu (vùng Tiên Du ngày nay), Phong Khê (trung tâm là c ổ Loa, ở giữa sông Thiếp và sông Đuống), Vọng Hải (phía bắc sông Cà Lồ, miền Thái Nguyên, Tuyên Quang ngày nay). Khi sắp xếp lại các đơn vị hành chính như vậy, 3 quận Giao Chỉ, Cửu Chân, Nhật Nam được chia thành 22 huyện.',
    description: 'Sau năm 43, Mã Viện tiến hành những thay đổi lớn trong cơ cấu hành chính Giao Châu. Khác với trước đây khi nhà Hán còn sử dụng Lạc hầu, Lạc tướng bản địa cai quản theo tập tục cha truyền con nối, Mã Viện đã xóa bỏ hoàn toàn danh hiệu Lạc tướng và chế độ Huyện lệnh. Thay vào đó, chức Lệnh trường do quan lại người Hán được bổ nhiệm cai trị cấp huyện, hạn chế tối đa việc sử dụng người Việt. Chức Đô úy (coi quân sự) cũng bị bãi bỏ. Quyền lực tập trung vào Thứ sử Giao Châu, dưới là Thái thú đứng đầu quận (kiêm cả chính trị và quân sự). Các cơ quan chuyên trách như Thiết quan (kim khí), Công quan (thủ công), Thủy quan (thủy sản) được lập ra. Chính quyền đô hộ đã vươn tầm kiểm soát xuống tận cấp huyện. Mã Viện còn chia nhỏ các huyện lớn như Tây Vu (thành Tây Vu, Phong Khê, Vọng Hải) để dễ quản lý và làm suy yếu các thế lực địa phương. Sau cải cách, 3 quận Giao Chỉ, Cửu Chân, Nhật Nam được chia thành 22 huyện.',
    period: 'period_1',
    characters: ['Mã Viện', 'Lạc hầu', 'Lạc tướng'],
    locations: ['Giao Châu', 'Tây Vu (Tiên Du)', 'Phong Khê (Cổ Loa)', 'Sông Thiếp', 'Sông Đuống', 'Vọng Hải', 'Sông Cà Lồ', 'Thái Nguyên', 'Tuyên Quang', 'Quận Giao Chỉ', 'Quận Cửu Chân', 'Quận Nhật Nam'],
    questions: [
      {
        question: 'Mã Viện đã có thay đổi quan trọng nào đối với danh hiệu của người cai quản bản địa?',
        options: ['Nâng Lạc tướng lên làm Thứ sử', 'Xóa bỏ hoàn toàn danh hiệu Lạc tướng', 'Cho Lạc tướng kiêm nhiệm chức Thái thú', 'Giữ nguyên chế độ Lạc tướng'],
        correctAnswer: 1,
        explanation: 'Mã Viện cho xóa bỏ hoàn toàn danh hiệu Lạc tướng.'
      },
      {
        question: 'Chức vụ nào được Mã Viện thiết lập để thay thế Huyện lệnh, và thường do ai đảm nhiệm?',
        options: ['Đô úy, do người Việt đảm nhiệm', 'Lệnh trường, do quan lại người Trung Hoa đảm nhiệm', 'Thái thú, do Lạc tướng cũ đảm nhiệm', 'Thiết quan, do thợ thủ công giỏi đảm nhiệm'],
        correctAnswer: 1,
        explanation: 'Chế độ Huyện lệnh bị bãi bỏ hoàn toàn, thay vào đó là chức Lệnh trường do quan lại người Trung Hoa được triều đình phương Băc bổ nhiệm.'
      },
      {
        question: 'Cấp hành chính nào mà chính quyền đô hộ dưới thời Mã Viện đã vươn tới kiểm soát, khác với trước kia?',
        options: ['Cấp xã', 'Cấp làng', 'Cấp huyện', 'Cấp tỉnh'],
        correctAnswer: 2,
        explanation: 'Như vậy, chính quyền đô hộ ở giai đoạn này đã với tới cấp huyện chứ không phải chi dừng ở cấp quận như trước kia.'
      },
      {
        question: 'Huyện Tây Vu, một huyện lớn, đã bị Mã Viện chia thành bao nhiêu huyện nhỏ?',
        options: ['2 huyện', '3 huyện', '4 huyện', '5 huyện'],
        correctAnswer: 1,
        explanation: 'Số huyện lớn như huyện Tây Vu... đã bị chia nhỏ ra thành 3 huyện là Tây Vu, Phong Khê, Vọng Hải.'
      },
      {
        question: 'Sau khi Mã Viện sắp xếp lại các đơn vị hành chính, 3 quận Giao Chỉ, Cửu Chân, Nhật Nam có tổng cộng bao nhiêu huyện?',
        options: ['15 huyện', '20 huyện', '22 huyện', '25 huyện'],
        correctAnswer: 2,
        explanation: 'Khi sắp xếp lại các đơn vị hành chính như vậy, 3 quận Giao Chỉ, Cửu Chân, Nhật Nam được chia thành 22 huyện.'
      }
    ],
    rewards: {
      experience: 220,
      coins: 110
    }
  },
  {
    id: 'event_giao_chau_hanh_chinh_thoi_hbt_nghien_cuu',
    heading: 'Phân chia hành chính Giao Châu thời Hai Bà Trưng (Theo nghiên cứu)',
    year: 40, // Representative year during Hai Ba Trung's uprising
    type: 'cultural',
    context: 'Thông qua việc khảo cứu các thư tịch cổ, áp dụng phương pháp địa lý học lịch sử và kết hợp với các đợt điền dã tại nhiều địa phương, một số nhà nghiên cứu – tiêu biểu là Đinh Văn Nhật – đã đưa ra nhận định rằng vào thời kỳ Hai Bà Trưng khởi nghĩa, Giao Châu có thể bao gồm 21 huyện, phân bố trong ba quận chính. Quận Giao Chỉ có 12 huyện gồm: Mê Linh, Chu Diên, Long Biên, Liên Lâu, Khúc Dương, An Định, Câu Lậu, Bắc Đới, Kê Từ, Tây Vu, Vọng Hải và Phong Khê, với trung tâm quận đặt tại Long Biên. Quận Cửu Chân gồm 4 huyện là Tư Phố, Cư Phong, Hàm Hoan và Vô Biên, trung tâm đặt tại Tư Phố. Quận Nhật Nam có 5 huyện là Chu Ngô, Tỳ Ảnh, Lô Dung, Tây Quyển và Tượng Lâm. Ban đầu ở Chu Ngô, sau chuyển về Tây Quyển. Việc xác định địa danh cụ thể của từng huyện cũng như trung tâm của các huyện ở thời điểm này trong điều kiện thiếu sự chỉ dẫn của các nguồn thư tịch là việc làm hết sức khó khăn, cần phải có thời gian cũng như sự đầu tư công sức của nhiều ngành khoa học. Bởi vậy, chúng tôi chỉ coi đây là một ý kiến để các nhà nghiên cứu tiếp tục tham khảo. Dư Phát thời Tây Hán đã bị sáp nhập vào các huyện khác nên trong thống kê chỉ còn 4 huyện và như vậy con số các huyện ở Giao Châu chỉ có 21 huyện chứ không phải 22 huyện.',
    description: 'Dựa trên các nghiên cứu thư tịch cổ, địa lý lịch sử và điền dã, nhà nghiên cứu Đinh Văn Nhật và một số người khác cho rằng vào thời kỳ khởi nghĩa Hai Bà Trưng, Giao Châu có 3 quận chính với tổng cộng 21 huyện. Quận Giao Chỉ có 12 huyện (Mê Linh, Chu Diên, Long Biên, Liên Lâu, Khúc Dương, An Định, Câu Lậu, Bắc Đới, Kê Từ, Tây Vu, Vọng Hải, Phong Khê) với trung tâm tại Long Biên. Quận Cửu Chân có 4 huyện (Tư Phố, Cư Phong, Hàm Hoan, Vô Biên) với trung tâm tại Tư Phố. Quận Nhật Nam có 5 huyện (Chu Ngô, Tỳ Ảnh, Lô Dung, Tây Quyển, Tượng Lâm) với trung tâm ban đầu ở Chu Ngô, sau chuyển về Tây Quyển. Huyện Dư Phát thời Tây Hán có thể đã bị sáp nhập, dẫn đến con số 21 huyện. Tuy nhiên, việc xác định chính xác địa danh và trung tâm các huyện thời kỳ này vẫn còn nhiều khó khăn.',
    period: 'period_1',
    characters: ['Đinh Văn Nhật', 'Hai Bà Trưng'],
    locations: ['Giao Châu', 'Quận Giao Chỉ', 'Mê Linh', 'Chu Diên', 'Long Biên', 'Liên Lâu', 'Khúc Dương', 'An Định', 'Câu Lậu', 'Bắc Đới', 'Kê Từ', 'Tây Vu', 'Vọng Hải', 'Phong Khê', 'Quận Cửu Chân', 'Tư Phố', 'Cư Phong', 'Hàm Hoan', 'Vô Biên', 'Quận Nhật Nam', 'Chu Ngô', 'Tỳ Ảnh', 'Lô Dung', 'Tây Quyển', 'Tượng Lâm', 'Dư Phát'],
    questions: [
      {
        question: 'Theo nghiên cứu của Đinh Văn Nhật, Giao Châu vào thời Hai Bà Trưng khởi nghĩa có thể bao gồm bao nhiêu huyện?',
        options: ['20 huyện', '21 huyện', '22 huyện', '25 huyện'],
        correctAnswer: 1,
        explanation: 'Một số nhà nghiên cứu – tiêu biểu là Đinh Văn Nhật – đã đưa ra nhận định rằng vào thời kỳ Hai Bà Trưng khởi nghĩa, Giao Châu có thể bao gồm 21 huyện.'
      },
      {
        question: 'Quận Giao Chỉ thời Hai Bà Trưng có trung tâm đặt tại đâu?',
        options: ['Mê Linh', 'Chu Diên', 'Long Biên', 'Liên Lâu'],
        correctAnswer: 2,
        explanation: 'Quận Giao Chỉ có 12 huyện... với trung tâm quận đặt tại Long Biên.'
      },
      {
        question: 'Quận Cửu Chân thời Hai Bà Trưng gồm bao nhiêu huyện?',
        options: ['3 huyện', '4 huyện', '5 huyện', '6 huyện'],
        correctAnswer: 1,
        explanation: 'Quận Cửu Chân gồm 4 huyện là Tư Phố, Cư Phong, Hàm Hoan và Vô Biên.'
      },
      {
        question: 'Trung tâm của quận Nhật Nam ban đầu được đặt ở đâu, trước khi chuyển về Tây Quyển?',
        options: ['Tượng Lâm', 'Lô Dung', 'Tỳ Ảnh', 'Chu Ngô'],
        correctAnswer: 3,
        explanation: 'Quận Nhật Nam có 5 huyện... Ban đầu ở Chu Ngô, sau chuyển về Tây Quyển.'
      },
      {
        question: 'Theo nghiên cứu, huyện nào thời Tây Hán đã bị sáp nhập vào các huyện khác, dẫn đến số lượng huyện ở Giao Châu là 21?',
        options: ['Mê Linh', 'Tây Vu', 'Dư Phát', 'Chu Diên'],
        correctAnswer: 2,
        explanation: 'Dư Phát thời Tây Hán đã bị sáp nhập vào các huyện khác nên trong thống kê chỉ còn 4 huyện và như vậy con số các huyện ở Giao Châu chỉ có 21 huyện.'
      }
    ],
    rewards: {
      experience: 180,
      coins: 90
    }
  },
  {
    id: 'event_ma_vien_xay_thanh_quach_sau_43',
    heading: 'Mã Viện củng cố thành quách, trụ sở hành chính ở Giao Châu (Sau 43)',
    year: 43,
    type: 'cultural',
    context: 'Sau cuộc khởi nghĩa của Hai Bà Trưng, việc củng cố các trụ sở hành chính tại các trung tâm quận, huyện cũng được Mã Viện đặc biệt chú ý. Sử nhà Hán đã chép về việc Mã Viện đi qua nơi nào đều xây thành quách cho các quận huyện. Cứ mỗi huyện đều có một thành. Trụ sở hành chính cũng đồng thời là căn cứ quân sự. Sách An Nam chí cũng ghi về nền cũ Kiền Thành và thành Vọng Hải ở châu Tam Đái (Đới). Đi đôi với việc chia đặt lại các đơn vị hành chính và củng cố các căn cứ quân sự, Mã Viện còn có một số cải cách về mặt kinh tế và xã hội ở Giao Châu.\n\nMiền đất thuộc thung lũng sông Hồng từ phía Lào Cai, Yên Bái về Việt Trì, thông ra sông Đáy, sông Đà, sông Lô, phía nam đến Nho Quan. Sau cuộc khởi nghĩa của Hai Bà Trưng, việc củng cố các trụ sở hành chính tại các trung tâm quận, huyện cũng được Mã Viện đặc biệt chú ý. Sử nhà Hán đã chép về việc Mã Viện đi qua nơi nào đều xây thành quách cho các quận huyện. Cứ mỗi huyện đều có một thành. Trụ sở hành chính cũng đồng thời là căn cứ quân sự. Sách An Nam chí cũng ghi về nền cũ Kiền Thành và thành Vọng Hải ở châu Tam Đái (Đới). Đi đôi với việc chia đặt lại các đơn vị hành chính và củng cố các căn cứ quân sự, Mã Viện còn có một số cải cách về mặt kinh tế và xã hội ở Giao Châu.',
    description: 'Sau khi đàn áp cuộc khởi nghĩa Hai Bà Trưng, Mã Viện đã chú trọng củng cố hệ thống hành chính và quân sự ở Giao Châu. Sử sách ghi lại rằng Mã Viện đã cho xây dựng thành quách ở các quận, huyện nơi ông đi qua; mỗi huyện đều có một thành. Các trụ sở hành chính này cũng đóng vai trò là căn cứ quân sự. Sách "An Nam chí" có đề cập đến nền cũ của Kiền Thành và thành Vọng Hải tại châu Tam Đái (Đới). Những biện pháp này được tiến hành song song với việc tái tổ chức đơn vị hành chính và các cải cách kinh tế, xã hội khác nhằm ổn định và kiểm soát Giao Châu. Việc này diễn ra trên một vùng rộng lớn, bao gồm cả thung lũng sông Hồng.',
    period: 'period_1',
    characters: ['Mã Viện', 'Hai Bà Trưng'],
    locations: ['Giao Châu', 'Kiền Thành', 'Thành Vọng Hải', 'Châu Tam Đái (Đới)', 'Thung lũng sông Hồng', 'Lào Cai', 'Yên Bái', 'Việt Trì', 'Sông Đáy', 'Sông Đà', 'Sông Lô', 'Nho Quan'],
    questions: [
      {
        question: 'Sau khởi nghĩa Hai Bà Trưng, Mã Viện đã làm gì để củng cố các trụ sở hành chính?',
        options: ['Giảm số lượng quận huyện', 'Phá bỏ các thành cũ', 'Xây thành quách cho các quận huyện', 'Chuyển trụ sở về Trung Quốc'],
        correctAnswer: 2,
        explanation: 'Sử nhà Hán đã chép về việc Mã Viện đi qua nơi nào đều xây thành quách cho các quận huyện.'
      },
      {
        question: 'Theo sử nhà Hán, mỗi đơn vị hành chính nào đều được Mã Viện cho xây một thành?',
        options: ['Mỗi quận', 'Mỗi làng', 'Mỗi huyện', 'Mỗi châu'],
        correctAnswer: 2,
        explanation: 'Cứ mỗi huyện đều có một thành.'
      },
      {
        question: 'Ngoài vai trò là trụ sở hành chính, các công trình do Mã Viện xây dựng còn có chức năng gì?',
        options: ['Trung tâm thương mại', 'Nơi thờ cúng', 'Căn cứ quân sự', 'Trường học'],
        correctAnswer: 2,
        explanation: 'Trụ sở hành chính cũng đồng thời là căn cứ quân sự.'
      },
      {
        question: 'Sách nào đã ghi chép về nền cũ Kiền Thành và thành Vọng Hải ở châu Tam Đái (Đới)?',
        options: ['Đại Việt sử ký toàn thư', 'Hậu Hán thư', 'An Nam chí', 'Thủy kinh chú'],
        correctAnswer: 2,
        explanation: 'Sách An Nam chí cũng ghi về nền cũ Kiền Thành và thành Vọng Hải ở châu Tam Đái (Đới).'
      },
      {
        question: 'Việc củng cố các căn cứ quân sự của Mã Viện diễn ra song song với hoạt động nào khác?',
        options: ['Khuyến khích người Việt nổi dậy', 'Chia đặt lại các đơn vị hành chính', 'Giảm thuế cho dân Giao Châu', 'Trao trả quyền lực cho Lạc tướng'],
        correctAnswer: 1,
        explanation: 'Đi đôi với việc chia đặt lại các đơn vị hành chính và củng cố các căn cứ quân sự, Mã Viện còn có một số cải cách về mặt kinh tế và xã hội ở Giao Châu.'
      }
    ],
    rewards: {
      experience: 190,
      coins: 95
    }
  },
  {
    id: 'event_ma_vien_kinh_te_van_hoa_phap_luat_43_44',
    heading: 'Cải cách kinh tế, đồng hóa văn hóa và áp đặt pháp luật của Mã Viện (43-44)',
    year: 44, // Year he departed after implementing measures
    type: 'cultural',
    context: 'Kinh tế nông nghiệp được chú trọng để tăng cường cơ sở vật chất cho chính quyền phong kiến. Mã Viện đã tiến hành việc đào đắp các kênh mương làm thủy lợi. Việc đào sông thông qua các dải núi ở vùng Cửu Chân không những giải quyết được việc tưới tiêu mà còn đem lại lợi ích trong giao thông, vận chuyển của cải khai thác được ở vùng đất này. Sách Giao Châu ký nói ở huyện Phong Khê (Cổ Loa) có đê phòng lụt. Sách Nam Việt chí mô tả con đê ngăn nước biển ở vùng Tạc Khẩu (Ninh Bình): Mã Viện "chất đá làm thành đê để ngăn sóng biển". Việc chuyển quân hay điều động binh lính trấn áp các cuộc nổi dậy của người bản xứ nhờ những con sông đào cũng sẽ dễ dàng hơn. Trong lĩnh vực văn hóa, người Việt vẫn lưu giữ được những phong tục thuần hậu, chất phác của thời kỳ công xã.\n\nLà đại biểu của chính quyền đô hộ, Mã Viện tiếp tục đường lối đồng hóa mà các Thái thú của nhà Hán đã tiến hành. Việc quảng bá và ép buộc người Việt phải theo lối sống và phong tục của người Hán trong ma chay, cưới xin vẫn được duy trì. Đặc biệt, Mã Viện quan tâm đến việc thi hành pháp chế phong kiến ở giai đoạn này nhằm xiết chặt ách thống trị của chính quyền nhà Hán ở Giao Châu. Hậu Hán thư ghi lại lời tâu trình của Mã Viện gửi về triều đình phương Bắc: "Viện tâu rằng luật Việt và luật Hán khác nhau hơn 10 việc, (nay) xin làm sáng tỏ cựu chế đối với người Việt để ước thúc họ". Như vậy có thể khẳng định, trước thời điểm này trên đất nước ta đã có pháp chế. Theo ý kiến của các nhà nghiên cứu, "luật Việt" mà Mã Viện nói đến có thể đã được lưu hành từ xa xưa. Đó là một hệ thống các quy định của cộng đồng về tổ chức, tục lệ và quan hệ giữa các luật Hán và có thể chi được truyền miệng.\n\nLà đại biểu của chính quyền đô hộ, Mã Viện tiếp tục đường lối đồng hóa mà các Thái thú của nhà Hán đã tiến hành. Việc quảng bá và ép buộc người Việt phải theo lối sống và phong tục của người Hán trong ma chay, cưới xin vẫn được duy trì. Đặc biệt, Mã Viện quan tâm đến việc thi hành pháp chế phong kiến ở giai đoạn này nhằm siết chặt ách thống trị của chính quyền nhà Hán ở Giao Châu. Hậu Hán thư ghi lại lời tâu trình của Mã Viện gửi về triều đình phương Bắc: "Viện tâu rằng luật Việt và luật Hán khác nhau hơn 10 việc, (nay) xin làm sáng tỏ cựu chế đối với người Việt để ước thúc họ". Như vậy có thể khẳng định, trước thời điểm này trên đất nước ta đã có pháp chế. Theo ý kiến của các nhà nghiên cứu, "luật Việt" mà Mã Viện nói đến có thể đã được lưu hành từ xa xưa. Đó là một hệ thống các quy định của cộng đồng về tổ chức, tục lệ và quan hệ giữa các thành viên, khác với luật Hán và có thể chỉ được truyền miệng.\n\nRõ ràng, việc áp dụng luật Trung Quốc vào chế độ cai trị ở Giao Châu là nhằm mục đích tăng cường việc quản lý hành chính và trấn áp sự phản kháng của tầng lớp quý tộc và nhân dân Lạc Việt. Tuy vậy, kể từ thời Mã Viện trở về sau, trong thực tế, chính quyền đô hộ cũng không thể áp dụng hoàn toàn các điều luật của ngoại tộc trên đất nước ta. Tại các địa phương, luật Việt vẫn được duy trì bởi sức sống trường tồn của nó, thể hiện qua câu "Phép vua thua lệ làng". Mùa thu năm 44, sau một năm tiến hành nhiều biện pháp chấn chỉnh nhằm ổn định tình hình chính trị và kinh tế ở Giao Châu, Mã Viện đưa đại quân trở về nước. Ngoài rất nhiều xe chở nặng các sản vật của Giao Chỉ, Mã Viện còn đem theo một con ngựa lớn đúc bằng đồng. Sử cũ Trung Hoa nói rõ Mã Viện đã phá rất nhiều trống đồng Lạc Việt để đúc nên con ngựa này.',
    description: 'Mã Viện đã thực hiện nhiều biện pháp nhằm củng cố ách đô hộ. Về kinh tế, ông chú trọng nông nghiệp, cho đào kênh mương thủy lợi ở Cửu Chân, xây đê phòng lụt ở Phong Khê và đê ngăn biển ở Tạc Khẩu, vừa phục vụ tưới tiêu, giao thông, vừa thuận lợi cho việc quân sự. Về văn hóa, Mã Viện tiếp tục chính sách đồng hóa, ép buộc người Việt theo phong tục Hán trong ma chay, cưới xin. Đặc biệt, ông chú trọng áp đặt pháp chế phong kiến Hán. Hậu Hán thư ghi Mã Viện tâu về triều đình rằng "luật Việt và luật Hán khác nhau hơn 10 việc" và xin "làm sáng tỏ cựu chế đối với người Việt để ước thúc họ", cho thấy sự tồn tại của "luật Việt" từ trước. Tuy nhiên, "luật Việt" vẫn tồn tại bền bỉ ở các địa phương ("Phép vua thua lệ làng"). Mùa thu năm 44, Mã Viện về nước, mang theo nhiều sản vật và một con ngựa đồng lớn, được cho là đúc từ việc phá trống đồng Lạc Việt.',
    period: 'period_1',
    characters: ['Mã Viện'],
    locations: ['Cửu Chân', 'Phong Khê (Cổ Loa)', 'Tạc Khẩu (Ninh Bình)', 'Giao Châu', 'Giao Chỉ'],
    questions: [
      {
        question: 'Mã Viện đã tiến hành biện pháp kinh tế nào ở vùng Cửu Chân để giải quyết việc tưới tiêu và giao thông?',
        options: ['Khai thác mỏ sắt', 'Trồng cây công nghiệp', 'Đào sông thông qua các dải núi', 'Xây dựng chợ lớn'],
        correctAnswer: 2,
        explanation: 'Việc đào sông thông qua các dải núi ở vùng Cửu Chân không những giải quyết được việc tưới tiêu mà còn đem lại lợi ích trong giao thông.'
      },
      {
        question: 'Trong lĩnh vực văn hóa, Mã Viện đã làm gì để thực hiện chính sách đồng hóa?',
        options: ['Khuyến khích người Việt giữ gìn bản sắc', 'Dịch sách Hán sang chữ Nôm', 'Ép buộc người Việt theo lối sống và phong tục Hán trong ma chay, cưới xin', 'Xây dựng đền thờ các vị thần Việt'],
        correctAnswer: 2,
        explanation: 'Việc quảng bá và ép buộc người Việt phải theo lối sống và phong tục của người Hán trong ma chay, cưới xin vẫn được duy trì.'
      },
      {
        question: 'Theo lời tâu của Mã Viện trong Hậu Hán thư, "luật Việt" và "luật Hán" khác nhau bao nhiêu điểm?',
        options: ['Khoảng 5 việc', 'Đúng 10 việc', 'Hơn 10 việc', 'Không có sự khác biệt'],
        correctAnswer: 2,
        explanation: 'Hậu Hán thư ghi lại lời tâu trình của Mã Viện gửi về triều đình phương Bắc: "Viện tâu rằng luật Việt và luật Hán khác nhau hơn 10 việc..."'
      },
      {
        question: 'Mã Viện đã làm gì với trống đồng Lạc Việt khi trở về nước vào mùa thu năm 44?',
        options: ['Mang về trưng bày ở triều đình Hán', 'Phân phát cho các tướng lĩnh', 'Phá nhiều trống đồng để đúc một con ngựa đồng lớn', 'Chôn cất để bảo tồn'],
        correctAnswer: 2,
        explanation: 'Sử cũ Trung Hoa nói rõ Mã Viện đã phá rất nhiều trống đồng Lạc Việt để đúc nên con ngựa này.'
      },
      {
        question: 'Câu tục ngữ nào thể hiện sức sống trường tồn của "luật Việt" tại các địa phương dù bị chính quyền đô hộ áp đặt luật Hán?',
        options: ['Đi một ngày đàng học một sàng khôn', 'Ăn quả nhớ kẻ trồng cây', 'Phép vua thua lệ làng', 'Gần mực thì đen gần đèn thì rạng'],
        correctAnswer: 2,
        explanation: 'Tại các địa phương, luật Việt vẫn được duy trì bởi sức sống trường tồn của nó, thể hiện qua câu "Phép vua thua lệ làng".'
      }
    ],
    rewards: {
      experience: 280,
      coins: 140
    }
  },
  {
    id: 'event_giao_chau_nghe_lam_giay_the_ky_3',
    heading: 'Nghề làm giấy ở Giao Châu và giấy từ trầm hương (Thế kỷ III)',
    year: 201, // Early 3rd century
    type: 'cultural',
    context: 'Người Giao Châu biết dùng mía ép ra, đun, rồi phơi để làm đường cát và đường phèn (Thạch mật). Đây là những loại cống phẩm của Giao Châu. - Nghề làm giấy Nghề làm giấy đã xuất hiện đàu tiên ở Trung Quốc và được du nhập vào Giao Châu vào thế kỷ III. Tiếp thu kỹ thuật của người Trung Quốc, người Giao Châu đã chế tạo nên những loại giấy từ các nguồn nguyên liệu sẵn có như vỏ cây dó và rêu biển. Trong giai đoạn này đã xuất hiện một loại giấy có mùi thơm đặc biệt được làm ra từ lá và vỏ cây trầm hương, một hương liệu được coi là đặc sản của phương Nam. Sử Trung Quốc đã ghi nhân sự kiện các lái buôn nước Đại Tần đã mua 3 vạn tờ giấy này ở Giao Chì để dâng lên cho vua Tần. Ngoài những nghề thủ công khá phát triển như đã điểm qua, ở Giao Châu thời kỳ này còn nhiều nghề thủ công khác như nghề phong phú, đa dạng của các nghề thủ công đã chứng tỏ người dân Lạc Việt cần cù và khéo léo.',
    description: 'Vào thế kỷ III, nghề làm giấy từ Trung Quốc du nhập vào Giao Châu. Người Giao Châu đã tiếp thu kỹ thuật này và sử dụng các nguyên liệu địa phương như vỏ cây dó và rêu biển để sản xuất giấy. Đặc biệt, họ còn tạo ra một loại giấy thơm độc đáo từ lá và vỏ cây trầm hương, một đặc sản của phương Nam. Loại giấy này nổi tiếng đến mức sử sách Trung Quốc ghi lại việc lái buôn nước Đại Tần đã mua 3 vạn tờ giấy trầm hương ở Giao Chỉ để dâng lên vua Tần. Sự phát triển của nghề làm giấy cùng nhiều nghề thủ công khác cho thấy sự cần cù và khéo léo của người Lạc Việt. Trước đó, người Giao Châu cũng đã biết làm đường cát và đường phèn (Thạch mật) từ mía để làm cống phẩm.',
    period: 'period_1',
    characters: [],
    locations: ['Giao Châu', 'Trung Quốc', 'Giao Chỉ', 'Đại Tần'],
    questions: [
      {
        question: 'Nghề làm giấy được du nhập vào Giao Châu từ Trung Quốc vào thế kỷ nào?',
        options: ['Thế kỷ I', 'Thế kỷ II', 'Thế kỷ III', 'Thế kỷ IV'],
        correctAnswer: 2,
        explanation: 'Nghề làm giấy đã xuất hiện đầu tiên ở Trung Quốc và được du nhập vào Giao Châu vào thế kỷ III.'
      },
      {
        question: 'Người Giao Châu đã sử dụng những nguyên liệu nào để làm giấy, ngoài kỹ thuật từ Trung Quốc?',
        options: ['Lá sen và tre', 'Vỏ cây dó và rêu biển', 'Xơ dừa và bã mía', 'Bông gòn và tơ tằm'],
        correctAnswer: 1,
        explanation: 'Người Giao Châu đã chế tạo nên những loại giấy từ các nguồn nguyên liệu sẵn có như vỏ cây dó và rêu biển.'
      },
      {
        question: 'Loại giấy đặc biệt nào có mùi thơm được làm từ đặc sản của phương Nam ở Giao Châu?',
        options: ['Giấy dó', 'Giấy từ rêu biển', 'Giấy từ lá và vỏ cây trầm hương', 'Giấy mật'],
        correctAnswer: 2,
        explanation: 'Đã xuất hiện một loại giấy có mùi thơm đặc biệt được làm ra từ lá và vỏ cây trầm hương.'
      },
      {
        question: 'Sử Trung Quốc ghi nhận lái buôn nước nào đã mua một số lượng lớn giấy trầm hương ở Giao Chỉ?',
        options: ['Ấn Độ', 'Ba Tư', 'Đại Tần (Đông La Mã)', 'Nhật Bản'],
        correctAnswer: 2,
        explanation: 'Sử Trung Quốc đã ghi nhân sự kiện các lái buôn nước Đại Tần đã mua 3 vạn tờ giấy này ở Giao Chì để dâng lên cho vua Tần.'
      },
      {
        question: 'Trước khi có nghề làm giấy, người Giao Châu đã biết làm sản phẩm nào từ mía để làm cống phẩm?',
        options: ['Rượu mía', 'Mật ong', 'Đường cát và đường phèn (Thạch mật)', 'Giấm mía'],
        correctAnswer: 2,
        explanation: 'Người Giao Châu biết dùng mía ép ra, đun, rồi phơi để làm đường cát và đường phèn (Thạch mật). Đây là những loại cống phẩm của Giao Châu.'
      }
    ],
    rewards: {
      experience: 180,
      coins: 90
    }
  },
  {
    id: 'event_giao_chau_thuong_mai_giao_thong_dong_han_luc_trieu',
    heading: 'Phát triển thủ công, giao thông và thương nghiệp Giao Châu (Đông Hán - Lục triều)',
    year: 300, // Representative year
    type: 'cultural',
    context: 'Chính sách đồng hóa của các triều đại Trung Quốc cũng tạo nên cơ hội cho các thợ thủ công tiếp thu, học hỏi được kinh nghiệm bên ngoài để cải tiến kỹ thuật và tạo nên những ngành nghề mới. Qua các tài liệu thư tịch ở Trung Quốc, có thể thấy rất nhiều sản phẩm thủ công độc đáo của Giao Châu đã được thu gom đem về Trung Quốc như vải Trúc sơ (vải dệt bằng tơ của cây Đàm trúc ở miền Cửu Chân) hay vải Tiêu cát (dệt bằng tơ của cây chuối tiêu ở Giao Chi), Thạch mật làm từ mía, hoặc giấy Những người thợ thủ công tài khéo ở các quận Giao Châu cũng bị chính quyền đô hộ đưa về phương Bắc để làm các công trình Nam Kinh ngày nay) được xây dựng vào thời Ngô, Thái thú Giao Chi là Tôn Tú đã bắt hơn 1.000 thợ khéo ở Giao Chi mang sang để làm việc. Sự kỉm hãm, bóc lột vẻ nguồn nguyên liộu và sản phẩm, việc chính quyền đô hộ không thể khiến các nghề thủ công ở Giao Châu bị mai một. Sự phát triển của các ngành nghề thủ công qua cả nghìn năm Bắc thuộc đã khẳng định sức sống trường tồn của dân tộc Việt. Giao thông vận tải và thương nghiệp Trong giai đoạn từ thời Đông Hán đến Lục triều, Giao Châu đã có sự phát triển về nông nghiệp và thủ công nghiệp.\n\nĐây chính là nền tảng kinh tế cho sự phát triển thương nghiệp ở Giao Châu. Nhung việc trao đổi buôn bán phải có một điều kiện cần thiết đó là sự phát triển của hệ thống giao thông. Giao Châu với vị trí địa lý giáp biển và mạng lưới sông ngòi tự nhiên đã tạo điều kiện thuận lợi cho sự phát triển kinh tế thương nghiệp thời cổ. Việc trao đổi, liên hệ giữa các vùng ở Giao Châu ngoài đường biển còn phụ thuộc vào những con sông lớn. Ở phía bắc sông Hồng, vùng trung tâm như Luy Lâu, Long Biên. Những con sông đã giúp người dân Giao Châu ngược xuôi các ngả ở vùng châu thổ sông Hệ thống đường bộ từ thời xa xưa vẫn được sử dụng để liên hệ và vận chuyển hàng hóa giữa các vùng.',
    description: 'Dù bị kìm hãm và bóc lột, các nghề thủ công ở Giao Châu vẫn phát triển mạnh mẽ suốt thời Bắc thuộc, khẳng định sức sống dân tộc. Các sản phẩm độc đáo như vải Trúc sơ (tơ Đàm trúc), vải Tiêu cát (tơ chuối tiêu), Thạch mật (đường mía), giấy được đưa về Trung Quốc. Thợ thủ công Giao Châu cũng bị bắt sang phương Bắc, như hơn 1.000 thợ bị Tôn Tú (Thái thú Giao Chỉ thời Ngô) bắt sang Nam Kinh. Sự phát triển nông nghiệp và thủ công nghiệp là nền tảng cho thương nghiệp. Giao Châu có lợi thế về vị trí giáp biển và mạng lưới sông ngòi (sông Hồng, Luy Lâu, Long Biên) thuận lợi cho giao thông thủy. Đường bộ cũng được sử dụng để kết nối các vùng.',
    period: 'period_1',
    characters: ['Tôn Tú'],
    locations: ['Giao Châu', 'Trung Quốc', 'Cửu Chân', 'Giao Chỉ', 'Nam Kinh', 'Sông Hồng', 'Luy Lâu', 'Long Biên'],
    questions: [
      {
        question: 'Vải Trúc sơ, một sản phẩm thủ công độc đáo của Giao Châu, được dệt bằng tơ của cây gì và ở vùng nào?',
        options: ['Tơ tằm ở Giao Chỉ', 'Tơ cây Đàm trúc ở Cửu Chân', 'Tơ chuối tiêu ở Nhật Nam', 'Tơ bông ở Hợp Phố'],
        correctAnswer: 1,
        explanation: 'Vải Trúc sơ (vải dệt bằng tơ của cây Đàm trúc ở miền Cửu Chân).'
      },
      {
        question: 'Thái thú Giao Chỉ Tôn Tú thời Ngô đã bắt bao nhiêu thợ khéo ở Giao Chỉ mang sang Nam Kinh làm việc?',
        options: ['Khoảng 100 người', 'Khoảng 500 người', 'Hơn 1.000 người', 'Khoảng 2.000 người'],
        correctAnswer: 2,
        explanation: 'Thái thú Giao Chi là Tôn Tú đã bắt hơn 1.000 thợ khéo ở Giao Chi mang sang để làm việc.'
      },
      {
        question: 'Yếu tố nào là nền tảng kinh tế cho sự phát triển thương nghiệp ở Giao Châu trong giai đoạn Đông Hán đến Lục triều?',
        options: ['Sự phát triển của nông nghiệp và thủ công nghiệp', 'Sự hỗ trợ từ chính quyền trung ương Trung Quốc', 'Việc phát hiện các mỏ vàng lớn', 'Sự suy yếu của các nước láng giềng'],
        correctAnswer: 0,
        explanation: 'Trong giai đoạn từ thời Đông Hán đến Lục triều, Giao Châu đã có sự phát triển về nông nghiệp và thủ công nghiệp. Đây chính là nền tảng kinh tế cho sự phát triển thương nghiệp ở Giao Châu.'
      },
      {
        question: 'Ngoài đường biển, việc trao đổi và liên hệ giữa các vùng ở Giao Châu còn phụ thuộc vào yếu tố nào?',
        options: ['Hệ thống đường sắt', 'Những con sông lớn', 'Đường hàng không', 'Việc sử dụng ngựa trạm'],
        correctAnswer: 1,
        explanation: 'Việc trao đổi, liên hệ giữa các vùng ở Giao Châu ngoài đường biển còn phụ thuộc vào những con sông lớn.'
      },
      {
        question: 'Vải Tiêu cát, một cống phẩm đặc biệt, được dệt từ tơ của loại cây nào?',
        options: ['Cây gai', 'Cây bông', 'Cây chuối tiêu', 'Cây đay'],
        correctAnswer: 2,
        explanation: 'Vải Tiêu cát (dệt bằng tơ của cây chuối tiêu ở Giao Chi).'
      }
    ],
    rewards: {
      experience: 230,
      coins: 115
    }
  },
  {
    id: 'event_giao_chau_trung_tam_thuong_mai_va_duong_xa_co',
    heading: 'Giao Châu: Trung tâm thương mại, đường sá và chợ cổ (Thời Bắc thuộc)',
    year: 350, // Representative year
    type: 'cultural',
    context: 'Chính quyền đô hộ trong quá trình khai thác bóc lột của cải ở Giao Châu cũng phải tiến hành đào vét sông ngòi và mờ mang, sửa chữa hệ thống đường thiên lý cũ. Đó là những con đường chính như: - Đường từ vùng Kinh Bắc đến Phả Lại, Đông Triều, Quảng Ninh ngày nay. Đây là con đường mà các đội quân xâm lược phương Bắc từ Triệu Đà, Mã Viện cho tới các triều đại sau này, thường dùng để tấn công Giao Châu. - Con đường thứ hai xuôi về phía nam, tới Từ Hồ (Thuận Thành), Yên Vĩ gần Khoái Châu, ngược lên sông Đuống, sau đó nối với thổ (Chu Diên) với miền hạ châu thổ (Vô Công). Từ sau khi Mã Viện cho đào sông ở vùng Tạc Khẩu, việc giao thông đi lại giữa hai quận Giao Chi và Cửu Chân được dễ dàng hơn. Cũng giống như mô hỉnh các thành thị phương Đông thời cổ đại và trung đại, thời kỳ này ở Giao Châu, các trung tâm chính trị, trụ sờ chính của chính quyền đô hộ cũng đồng thời là các trung tâm kinh tế. Tại các thành thị nhu Long Biên, Luy Lâu (Bắc Ninh), Tư Phố (Thanh Hóa) đã xuất hiện các phường.\n\nSách An Nam chí lược của Lê Tắc có nhắc đến địa danh phường Hàng Thịt ở Long Biên. Ở những thành thị lớn đã xuất hiện những ngoại kiều như người Hồ (Trung Á), người Ấn Độ, người Khơ Me. Họ qua lại hoặc trú ngụ tại đây với tư cách là những thương nhân hoặc nhà truyền giáo. bán của người dân trong vùng, phục vụ cho nhu cầu thiết yếu hàng ngày. Thư tịch Trung Quốc có nhắc đến các chợ ngọc, chợ cam, chợ san hô, chợ hương liệu ở các miền khác nhau thuộc châu Giao. Những chợ buôn bán các loại đặc sản như thế này chắc chắn có mặt những thương nhân nước ngoài, bởi đây không phải những mặt hàng dùng cho cuộc sống hàng ngày của người Việt. Người mua bán trao đổi những mặt hàng có giá trị cao như vậy phải là những thương nhân có vốn lớn, thu gom hàng vượt biên giới để bán thu lãi suất cao.\n\nCho đến nay chưa tìm được những nguồn tư liệu cho biết về việc buôn bán, trao đổi giữa các vùng miền trên đất Giao Châu. Nhưng việc sản xuất nông nghiệp ở các quận trên đất Giao Chỉ không đồng đều. Quận Giao Chi được coi là vựa lúa, hàng năm đã cung cấp nhiều lương thực cho các quận khác như Cửu Chân, Hợp Phố. Quận Hợp Phố lại lànơi chuyên sản xuất và bán các loại châu báu. Người vùng này đã bán châu báu để mua thóc từ Giao Chi về. Riêng các loại hàng hóa đặc biệt như muối và sắt thì Nhà nước độc quyền quản lý, không cho mua bán tự do. Việc giao thông và buôn bán giữa Giao Chỉ và các miền nội địa của Trung Quốc được thực hiện chủ yếu bàng đường biển và đường bộ ven biển, ven sông ở vùng Đông Bắc.',
    description: 'Chính quyền đô hộ đã cải tạo hệ thống giao thông Giao Châu, bao gồm các đường bộ chính như từ Kinh Bắc qua Phả Lại, Đông Triều (Quảng Ninh) - tuyến đường xâm lược quen thuộc; và tuyến đường phía Nam qua Từ Hồ, Yên Vĩ, sông Đuống nối Chu Diên với Vô Công. Việc Mã Viện đào sông Tạc Khẩu giúp giao thông giữa Giao Chỉ và Cửu Chân thuận lợi hơn. Các trung tâm chính trị như Long Biên, Luy Lâu (Bắc Ninh), Tư Phố (Thanh Hóa) cũng là trung tâm kinh tế, có các phường (ví dụ: phường Hàng Thịt ở Long Biên). Người ngoại quốc (Hồ, Ấn Độ, Khơ Me) đến đây buôn bán, truyền giáo. Các chợ chuyên bán đặc sản (ngọc, cam, san hô, hương liệu) thu hút thương nhân nước ngoài. Giao Chỉ là vựa lúa cung cấp cho Cửu Chân, Hợp Phố (nơi bán châu báu). Muối và sắt do nhà nước độc quyền. Giao thương với Trung Quốc chủ yếu qua đường biển và đường bộ ven biển Đông Bắc.',
    period: 'period_1',
    characters: ['Triệu Đà', 'Mã Viện', 'Lê Tắc'],
    locations: ['Giao Châu', 'Kinh Bắc', 'Phả Lại', 'Đông Triều', 'Quảng Ninh', 'Từ Hồ (Thuận Thành)', 'Yên Vĩ', 'Khoái Châu', 'Sông Đuống', 'Chu Diên', 'Vô Công', 'Tạc Khẩu', 'Quận Giao Chỉ', 'Quận Cửu Chân', 'Long Biên', 'Luy Lâu (Bắc Ninh)', 'Tư Phố (Thanh Hóa)', 'Trung Á', 'Ấn Độ', 'Khơ Me', 'Quận Hợp Phố'],
    questions: [
      {
        question: 'Con đường nào từ vùng Kinh Bắc thường được các đội quân xâm lược phương Bắc dùng để tấn công Giao Châu?',
        options: ['Đường Trường Sơn', 'Đường từ Kinh Bắc đến Phả Lại, Đông Triều, Quảng Ninh', 'Đường qua Lào sang Nghệ An', 'Đường biển từ Quảng Đông'],
        correctAnswer: 1,
        explanation: 'Đường từ vùng Kinh Bắc đến Phả Lại, Đông Triều, Quảng Ninh ngày nay. Đây là con đường mà các đội quân xâm lược phương Bắc... thường dùng để tấn công Giao Châu.'
      },
      {
        question: 'Việc Mã Viện cho đào sông ở vùng Tạc Khẩu đã giúp giao thông giữa hai quận nào trở nên dễ dàng hơn?',
        options: ['Giao Chỉ và Nhật Nam', 'Cửu Chân và Hợp Phố', 'Giao Chỉ và Cửu Chân', 'Nhật Nam và Cửu Chân'],
        correctAnswer: 2,
        explanation: 'Từ sau khi Mã Viện cho đào sông ở vùng Tạc Khẩu, việc giao thông đi lại giữa hai quận Giao Chi và Cửu Chân được dễ dàng hơn.'
      },
      {
        question: 'Sách "An Nam chí lược" của Lê Tắc có nhắc đến địa danh phường nào ở Long Biên?',
        options: ['Phường Hàng Đào', 'Phường Hàng Bạc', 'Phường Hàng Trống', 'Phường Hàng Thịt'],
        correctAnswer: 3,
        explanation: 'Sách An Nam chí lược của Lê Tắc có nhắc đến địa danh phường Hàng Thịt ở Long Biên.'
      },
      {
        question: 'Quận nào ở Giao Châu được coi là vựa lúa, cung cấp lương thực cho các quận khác như Cửu Chân và Hợp Phố?',
        options: ['Quận Nhật Nam', 'Quận Giao Chỉ', 'Quận Cửu Chân', 'Quận Hợp Phố'],
        correctAnswer: 1,
        explanation: 'Quận Giao Chi được coi là vựa lúa, hàng năm đã cung cấp nhiều lương thực cho các quận khác như Cửu Chân, Hợp Phố.'
      },
      {
        question: 'Những loại hàng hóa nào ở Giao Châu do Nhà nước độc quyền quản lý, không cho mua bán tự do?',
        options: ['Gạo và vải lụa', 'Trâu bò và ngựa', 'Muối và sắt', 'Hương liệu và ngọc trai'],
        correctAnswer: 2,
        explanation: 'Riêng các loại hàng hóa đặc biệt như muối và sắt thì Nhà nước độc quyền quản lý, không cho mua bán tự do.'
      }
    ],
    rewards: {
      experience: 260,
      coins: 130
    }
  },
  {
    id: 'event_giao_thuong_giao_chau_trung_quoc_quoc_te_duong_bo_bien',
    heading: 'Giao thương Giao Châu với Trung Quốc và quốc tế (Đường bộ, đường biển)',
    year: 400, // Representative year
    type: 'cultural',
    context: 'Đường bể chính là đường giao thương giữa Giao Chi với hai vùng Quảng Châu và Phúc Kiến của Trung Quốc, con đường hàng hải quốc tế. Theo đường sông Hồng có thể đi sang Trung Quốc, từ Mê Linh (Hà Nội) đến vùng Bôn Cổ (thuộc huyện Kiến Thủy, Vân Nam, Trung Quốc), đây là con đường đã được Mã Viện gọi là gọi là "con đường binh xa vận tải". Sử Trung Quốc ghi sự kiện vào năm 83, niên hiệu Kiến Sơ, Đại Tư nông Trịnh Hoằng đã xin phép được mở một con đường bộ xuyên qua núi ở quận Linh Lăng và quận Quế Dương (Hồ Nam) để tránh việc 7 quận Giao Châu đưa đồ cống phải vượt bể theo đường Phúc Kiến không an toàn. Con đường này chắc chắn được mở rộng từ con đường mòn đã có sẵn trước đó. Như vậy, từ cuối thế kỷ I đã hỉnh thành con đường bộ từ Giao Châu sang Trung Quốc.\n\nBắt đầu từ đường bộ dọc thung lũng sông Thương ở nước ta qua Bằng Tường, Quế Lâm, vượt Ngũ Lĩnh đến đất Hồ Nam. Cũng theo Hậu Hán thư, con đường này được đặt các trạm dịch, 5 dặm cỏ 1 quán, 10 dặm có 1 trạm dịch. Con đường ngày càng đóng vai trò quan trọng bởi việc vận chuyển văn thư, cống phẩm và những sản vật mà chính quyền đô hộ vơ vét đem về từ Giao Châu. Đây cũng là con đường chỉnh để quân đội của chính quyền đô hộ phương Bắc tiến sang đất Giao Châu, đàn áp các cuộc nổi dậy. Song cũng chính con đường này đã đóng vai trò quan trọng trong việc giao thương hàng hóa, sản phảm giữa Trung Quốc và Giao Châu. Các lái buôn Trung Quốc mang đến Giao Châu các loại hàng các loại ngọc, châu, sừng tê, ngà voi. Sự giao thương của quận Hợp Phố với quận Giao Chi cũng được Ngô Thì Sĩ nhắc đến qua tài liệu của Hán Thư: vào cuối đời Hán, khi Mạnh Thường làm Thái thú ở Hợp Phố, "quận không sản xuất thóc lúa, nhưng có nhiều châu báu, sát địa giới với Giao Chỉ, buôn bán, mua lương thực với Giao Chi".',
    description: 'Giao thương giữa Giao Chỉ với Quảng Châu và Phúc Kiến (Trung Quốc) chủ yếu qua đường biển, một tuyến hàng hải quốc tế. Đường sông Hồng, từ Mê Linh (Hà Nội) đến Bôn Cổ (Vân Nam), được Mã Viện gọi là "con đường binh xa vận tải". Năm 83, Trịnh Hoằng xin mở đường bộ qua Linh Lăng và Quế Dương (Hồ Nam) để vận chuyển đồ cống an toàn hơn đường biển. Con đường bộ này, từ thung lũng sông Thương qua Bằng Tường, Quế Lâm đến Hồ Nam, có trạm dịch (5 dặm/quán, 10 dặm/trạm), phục vụ vận chuyển cống phẩm, quân đội và giao thương hàng hóa. Lái buôn Trung Quốc mang hàng hóa sang Giao Châu, đổi lấy đặc sản như ngọc, sừng tê, ngà voi. Hợp Phố cũng buôn bán, mua lương thực từ Giao Chỉ.',
    period: 'period_1',
    characters: ['Mã Viện', 'Trịnh Hoằng', 'Ngô Thì Sĩ', 'Mạnh Thường'],
    locations: ['Giao Chỉ', 'Quảng Châu', 'Phúc Kiến', 'Trung Quốc', 'Sông Hồng', 'Mê Linh (Hà Nội)', 'Bôn Cổ (Kiến Thủy, Vân Nam)', 'Linh Lăng (Hồ Nam)', 'Quế Dương (Hồ Nam)', 'Sông Thương', 'Bằng Tường', 'Quế Lâm', 'Ngũ Lĩnh', 'Hồ Nam', 'Quận Hợp Phố'],
    questions: [
      {
        question: 'Con đường sông nào từ Mê Linh (Hà Nội) đến vùng Bôn Cổ (Vân Nam) được Mã Viện gọi là "con đường binh xa vận tải"?',
        options: ['Sông Đà', 'Sông Lô', 'Sông Hồng', 'Sông Mã'],
        correctAnswer: 2,
        explanation: 'Theo đường sông Hồng có thể đi sang Trung Quốc, từ Mê Linh (Hà Nội) đến vùng Bôn Cổ... đây là con đường đã được Mã Viện gọi là "con đường binh xa vận tải".'
      },
      {
        question: 'Năm 83, Đại Tư nông Trịnh Hoằng xin mở con đường bộ xuyên núi ở quận nào để vận chuyển đồ cống từ Giao Châu?',
        options: ['Quận Nam Hải và Thương Ngô', 'Quận Linh Lăng và Quế Dương (Hồ Nam)', 'Quận Uất Lâm và Hợp Phố', 'Quận Giao Chỉ và Cửu Chân'],
        correctAnswer: 1,
        explanation: 'Đại Tư nông Trịnh Hoằng đã xin phép được mở một con đường bộ xuyên qua núi ở quận Linh Lăng và quận Quế Dương (Hồ Nam).'
      },
      {
        question: 'Theo Hậu Hán thư, con đường bộ từ Giao Châu sang Trung Quốc được đặt trạm dịch với khoảng cách như thế nào?',
        options: ['3 dặm có 1 quán, 5 dặm có 1 trạm', '5 dặm có 1 quán, 10 dặm có 1 trạm', '10 dặm có 1 quán, 20 dặm có 1 trạm', 'Mỗi dặm có 1 trạm'],
        correctAnswer: 1,
        explanation: 'Cũng theo Hậu Hán thư, con đường này được đặt các trạm dịch, 5 dặm cỏ 1 quán, 10 dặm có 1 trạm dịch.'
      },
      {
        question: 'Lái buôn Trung Quốc thường mang những loại hàng hóa nào đến Giao Châu để trao đổi?',
        options: ['Gạo, muối, sắt', 'Vải lụa, đồ gốm, trà', 'Các loại ngọc, châu, sừng tê, ngà voi', 'Công cụ nông nghiệp, vũ khí'],
        correctAnswer: 2,
        explanation: 'Các lái buôn Trung Quốc mang đến Giao Châu các loại hàng các loại ngọc, châu, sừng tê, ngà voi.'
      },
      {
        question: 'Theo Ngô Thì Sĩ, quận Hợp Phố có đặc điểm gì trong giao thương với Giao Chỉ vào cuối đời Hán?',
        options: ['Sản xuất nhiều thóc lúa để bán cho Giao Chỉ', 'Không sản xuất thóc lúa, nhưng có nhiều châu báu và mua lương thực từ Giao Chỉ', 'Cấm buôn bán hoàn toàn với Giao Chỉ', 'Chỉ trao đổi các mặt hàng thủ công mỹ nghệ'],
        correctAnswer: 1,
        explanation: 'Vào cuối đời Hán, khi Mạnh Thường làm Thái thú ở Hợp Phố, "quận không sản xuất thóc lúa, nhưng có nhiều châu báu, sát địa giới với Giao Chỉ, buôn bán, mua lương thực với Giao Chi".'
      }
    ],
    rewards: {
      experience: 270,
      coins: 135
    }
  },
  {
    id: 'event_giao_chau_tram_trung_chuyen_hang_hai_quoc_te_bac_thuoc',
    heading: 'Giao Châu - Trạm trung chuyển trên Con đường Tơ lụa trên biển (Bắc thuộc)',
    year: 450, // Representative year
    type: 'cultural',
    context: 'Người ta tìm được rất nhiều loại tiền tệ Trung Quốc có niên đại thuộc giai đoạn lịch sù từ thời Đông Hán đến Lục triều như tiền thời Vương Mãng (Hóa tuyền, Đại tuyền ngũ thập, tiền bó), Từ thời xa xưa, Trung Quốc buôn bán, trao đổi với các bộ lạc vùng Trung Á, Ấn Độ và Ba Tư qua "con đường tơ lụa" truyền thống. Nhưng từ giữa thời Đông Hán, các bộ lạc Tây Vực nổi dậy, chống đối nên con đường tơ lụa đã trở ngại, nguy hiểm. Khi kỹ thuật hàng hải đã có những bước phát triển, việc giao thương qua đường biển trở nên thuận lợi hơn. Giao Châu với vị trí địa lý thuận lợi đã trở thành một trạm trên đường hàng hải ven biển Trung Quốc. Thư tịch Trung Quốc đều ghi nhận rằng các nước ở phương Nam và phương Tây (Trung Quốc) muốn giao thiệp với Trung Quốc "đều phải đi theo con đường Giao Chỉ".\n\nĐiều đó có nghĩa là, từ các sử giả làm nhiệm vụ ngoại giao hoặc các thương nhân ở Diệp Điều (Gia va), Thiện (Miến Điện), Thiên Trúc (Ấn độ), An Tức (I Ran) hay Đại Tần (Đông La Mã) đều phải dừng chân ở Giao Châu trước khi đến Trung Quốc. Giao Châu lại có lợi thế vi có các cảng biển SÂU, kín gió, thuận lợi cho việc tiép té nước ngọt và nco đậu thuyền bẻ. Giao Châu lại ỉà nơi có khá nhiều đặc sản phương Nam quý các sản phẩm thủ công độc đáo của Giao Châu như vải, lụa, giấy, bán để đem tới những miền đất xa xôi của thế giới. Khi đến Giao Châu, các lái buôn nước ngoài cũng mang theo hàng hóa để trao đổi, buôn bán. Những cổ vật được phát hiện ngày một nhiều trong một sổ di chỉ, mộ táng... đã chúng minh sự có mặt của các hàng hóa ngoại quốc ở Giao Châu.. Hoạt động thương nghiệp ở Giao Châu trong giai đoạn lịch sử từ thời Đông Hán đến Lục triều, kéo dài khoảng 6 thế kỷ, đã có những bước phát triển nhờ sự khôi phục, củng cố hệ thống giao thông và sự phát triển của nông nghiệp và thủ công nghiệp. Chính sách bóc lột, tận thu các nguồn lợi về của cải ở Giao Châu cùng sự áp đật về thuế khóa của chính quyền đô hộ phương Bắc chính là trở ngại lớn nhất đối với thương nghiệp.',
    description: 'Khi "con đường tơ lụa" trên bộ gặp trở ngại từ giữa thời Đông Hán do bất ổn ở Tây Vực, giao thương đường biển phát triển. Giao Châu, với vị trí địa lý thuận lợi và cảng biển sâu, kín gió, trở thành một trạm trung chuyển quan trọng trên tuyến hàng hải ven biển Trung Quốc. Các nước phương Nam và phương Tây (như Diệp Điều/Java, Thiện/Miến Điện, Thiên Trúc/Ấn Độ, An Tức/Iran, Đại Tần/Đông La Mã) muốn giao thiệp với Trung Quốc đều phải qua Giao Chỉ. Thương nhân nước ngoài mang hàng hóa đến trao đổi và mua các đặc sản, sản phẩm thủ công độc đáo của Giao Châu (vải, lụa, giấy) để đưa đi nơi khác. Nhiều tiền cổ Trung Quốc (thời Vương Mãng) và cổ vật ngoại quốc được tìm thấy ở Giao Châu minh chứng cho hoạt động thương mại sôi động này, dù bị cản trở bởi chính sách bóc lột của chính quyền đô hộ.',
    period: 'period_1',
    characters: ['Vương Mãng'],
    locations: ['Giao Châu', 'Trung Quốc', 'Trung Á', 'Ấn Độ', 'Ba Tư', 'Tây Vực', 'Giao Chỉ', 'Diệp Điều (Java)', 'Thiện (Miến Điện)', 'Thiên Trúc (Ấn Độ)', 'An Tức (Iran)', 'Đại Tần (Đông La Mã)'],
    questions: [
      {
        question: 'Lý do chính khiến con đường tơ lụa trên bộ truyền thống gặp trở ngại từ giữa thời Đông Hán là gì?',
        options: ['Thiên tai tàn phá', 'Các bộ lạc Tây Vực nổi dậy, chống đối', 'Sự cạnh tranh từ các tuyến đường mới', 'Chiến tranh giữa Trung Quốc và Ấn Độ'],
        correctAnswer: 1,
        explanation: 'Từ giữa thời Đông Hán, các bộ lạc Tây Vực nổi dậy, chống đối nên con đường tơ lụa đã trở ngại, nguy hiểm.'
      },
      {
        question: 'Giao Châu có vai trò gì trên tuyến đường hàng hải ven biển Trung Quốc khi giao thương đường biển phát triển?',
        options: ['Điểm xuất phát chính', 'Một trạm trung chuyển quan trọng', 'Nơi sản xuất tàu thuyền lớn nhất', 'Khu vực cấm tàu bè qua lại'],
        correctAnswer: 1,
        explanation: 'Giao Châu với vị trí địa lý thuận lợi đã trở thành một trạm trên đường hàng hải ven biển Trung Quốc.'
      },
      {
        question: 'Theo thư tịch Trung Quốc, các nước nào ở phương Nam và phương Tây muốn giao thiệp với Trung Quốc đều phải đi qua Giao Chỉ?',
        options: ['Chỉ có các nước Đông Nam Á', 'Chỉ có các nước Trung Á', 'Các nước như Diệp Điều, Thiện, Thiên Trúc, An Tức, Đại Tần', 'Chỉ có các nước châu Âu'],
        correctAnswer: 2,
        explanation: 'Thư tịch Trung Quốc đều ghi nhận rằng các nước ở phương Nam và phương Tây... muốn giao thiệp với Trung Quốc "đều phải đi theo con đường Giao Chỉ". Ví dụ bao gồm Diệp Điều, Thiện, Thiên Trúc, An Tức, Đại Tần.'
      },
      {
        question: 'Những loại cổ vật nào được tìm thấy ở Giao Châu chứng minh sự có mặt của hàng hóa ngoại quốc?',
        options: ['Chỉ có đồ gốm Trung Quốc', 'Tiền tệ Trung Quốc và các cổ vật ngoại quốc khác', 'Vũ khí của quân đội La Mã', 'Tượng Phật từ Thái Lan'],
        correctAnswer: 1,
        explanation: 'Người ta tìm được rất nhiều loại tiền tệ Trung Quốc... Những cổ vật được phát hiện ngày một nhiều trong một sổ di chỉ, mộ táng... đã chúng minh sự có mặt của các hàng hóa ngoại quốc ở Giao Châu.'
      },
      {
        question: 'Yếu tố nào là trở ngại lớn nhất đối với sự phát triển thương nghiệp ở Giao Châu trong giai đoạn này?',
        options: ['Thiếu cảng biển tốt', 'Kỹ thuật hàng hải kém phát triển', 'Chính sách bóc lột, thuế khóa của chính quyền đô hộ', 'Sự cạnh tranh từ các trung tâm thương mại khác'],
        correctAnswer: 2,
        explanation: 'Chính sách bóc lột, tận thu các nguồn lợi về của cải ở Giao Châu cùng sự áp đật về thuế khóa của chính quyền đô hộ phương Bắc chính là trở ngại lớn nhất đối với thương nghiệp.'
      }
    ],
    rewards: {
      experience: 290,
      coins: 145
    }
  },
  {
    id: 'event_chinh_sach_boc_lot_don_dien_thoi_bac_thuoc_sau_43',
    heading: 'Chính sách bóc lột và sự ra đời đồn điền ở Giao Châu (Sau 43)',
    year: 100, // Representative year of early policies
    type: 'cultural',
    context: 'Sử Trung Quốc ở thời Ngụy Tấn ghi chép nhiều về việc các quan lại Trung Quốc đã thu được nguồn lợi từ những thuyền buôn nước ngoài đến Giao Châu. Tan thư chép: "Xưa các nước ngoài cõi thường đem báu vật đi đường bể đến buôn bán. Nhưng Thứ sử Giao Châu và Thái thú Nhật Nam Tuy các nguồn buôn bán chính trong và ngoài nước ở thời kỳ này đều bị lũng đoạn bởi các lái buôn Trung Quốc, nhung sự phát triển của thương nghiệp trong thời kỳ này đã có tác dụng kích thích sự phát triển của nông nghiệp và thủ công nghiệp ở Giao Châu. Hàng hóa Giao Châu đã được xuất cảng tới thị trường ngoại quốc. Qua sự trao đổi buôn bán với các thương nhân nước ngoài, dân ta có điều kiện đề tiếp nhận những tiến bộ về khoa học kỹ thuật tiến tiến. Việc giao lưu. tiếp xúc về văn Hóa giữa người dân Giao Châu với thế giới cũng được mở mang.\n\nChính sách khai thác bóc lột của chính quyển đô hộ Sau khi đã dẹp xong khởi nghĩa Hai Bà Trung - cuộc phản kháng lớn nhất của người dân Giao Chi thời thuộc Hán, chính quyền Đông Hán lại tiếp tục chế độ đô hộ trên đất nước ta. Ke từ đó đến thời Lục triều, tiếp 5 thế kỷ, chính quyền đô hộ phương Bắc luôn thi hành chính sách khai thác bóc lột tàn bạo đối với người dân trên mảnh đất này. - Sự ra đời của những đồn điển thời Bắc thuộc Để củng cố cơ sở vật chất cho chính quyền đô hộ và tăng cường sự bóc lột đối với người dân, ngay từ thời Mã Viện cai quản Giao Đây là những quan, lại Trung Quốc đã định cư lâu dài và "địa chủ định sinh cơ lập nghiệp ở Giao Châu thường mang theo rất nhiều thuộc hạ mà người ta gọi là các "gia nô", "gia khách" hay "bộ nông dân bị phá sản phải phụ thuộc vào chủ nhân là những quan lại, quý tộc. Với lực lượng sẵn có, lại dựa vào sự ủng hộ của chính quyền thống trị ở Giao Châu, bọn quan lại, quý tộc Trung Quốc đã tiến hành chiếm đoạt ruộng đất của nông dân bản xứ, đồng thời mang dáng dấp đồn điền. Từ thời Thái thú Nhâm Diên đã có việc khai khẩn ruộng đất, giảm bớt binh lính, bắt họ làm ruộng để nộp tô cho chính quyền.',
    description: 'Sau khi đàn áp khởi nghĩa Hai Bà Trưng, nhà Đông Hán và các triều đại sau đó tiếp tục chính sách đô hộ và bóc lột tàn bạo người dân Giao Châu suốt 5 thế kỷ. Một trong những hình thức củng cố quyền lực và bóc lột là việc thành lập các đồn điền. Ngay từ thời Mã Viện, các quan lại, quý tộc Trung Quốc định cư ở Giao Châu, mang theo thuộc hạ ("gia nô", "gia khách", "bộ khúc") và chiếm đoạt ruộng đất của nông dân bản xứ để lập đồn điền. Trước đó, Thái thú Nhâm Diên cũng đã cho khai khẩn ruộng, bắt lính làm ruộng nộp tô. Thương mại dù phát triển và mang lại lợi ích cho quan lại, nhưng nguồn lợi chính vẫn bị lái buôn Trung Quốc lũng đoạn, dù người dân cũng có cơ hội tiếp xúc văn hóa, kỹ thuật mới.',
    period: 'period_1',
    characters: ['Hai Bà Trưng', 'Mã Viện', 'Nhâm Diên'],
    locations: ['Giao Châu', 'Nhật Nam'],
    questions: [
      {
        question: 'Sau khi dẹp xong khởi nghĩa Hai Bà Trưng, chính quyền đô hộ phương Bắc đã thi hành chính sách gì đối với Giao Châu trong 5 thế kỷ tiếp theo?',
        options: ['Nới lỏng cai trị và giảm thuế', 'Khai thác bóc lột tàn bạo', 'Trao quyền tự trị cho người Việt', 'Khuyến khích phát triển văn hóa bản địa'],
        correctAnswer: 1,
        explanation: 'Chính quyền đô hộ phương Bắc luôn thi hành chính sách khai thác bóc lột tàn bạo đối với người dân trên mảnh đất này.'
      },
      {
        question: 'Hình thức nào được chính quyền đô hộ sử dụng để củng cố cơ sở vật chất và tăng cường bóc lột người dân Giao Châu, bắt đầu từ thời Mã Viện?',
        options: ['Xây dựng các công trình thủy lợi lớn', 'Phát triển mạng lưới chợ búa', 'Sự ra đời của những đồn điền', 'Mở các trường học dạy chữ Hán'],
        correctAnswer: 2,
        explanation: 'Sự ra đời của những đồn điển thời Bắc thuộc Để củng cố cơ sở vật chất cho chính quyền đô hộ và tăng cường sự bóc lột đối với người dân, ngay từ thời Mã Viện cai quản Giao...'
      },
      {
        question: 'Quan lại, quý tộc Trung Quốc ở Giao Châu thường mang theo những đối tượng nào để làm việc trong các đồn điền?',
        options: ['Thợ thủ công lành nghề', 'Thương nhân giàu có', 'Các "gia nô", "gia khách" hay "bộ khúc"', 'Các nhà sư Phật giáo'],
        correctAnswer: 2,
        explanation: 'Những quan, lại Trung Quốc đã định cư lâu dài... thường mang theo rất nhiều thuộc hạ mà người ta gọi là các "gia nô", "gia khách" hay "bộ khúc".'
      },
      {
        question: 'Trước thời Mã Viện, Thái thú nào đã có việc khai khẩn ruộng đất và bắt binh lính làm ruộng nộp tô?',
        options: ['Tô Định', 'Tích Quang', 'Sĩ Nhiếp', 'Nhâm Diên'],
        correctAnswer: 3,
        explanation: 'Từ thời Thái thú Nhâm Diên đã có việc khai khẩn ruộng đất, giảm bớt binh lính, bắt họ làm ruộng để nộp tô cho chính quyền.'
      },
      {
        question: 'Dù thương nghiệp phát triển, ai là người chủ yếu lũng đoạn các nguồn buôn bán chính ở Giao Châu?',
        options: ['Thương nhân Ấn Độ', 'Thương nhân Ba Tư', 'Lái buôn Trung Quốc', 'Quan lại địa phương Giao Châu'],
        correctAnswer: 2,
        explanation: 'Tuy các nguồn buôn bán chính trong và ngoài nước ở thời kỳ này đều bị lũng đoạn bởi các lái buôn Trung Quốc.'
      }
    ],
    rewards: {
      experience: 240,
      coins: 120
    }
  },
  {
    id: 'event_don_dien_nong_no_thoi_ngo_giao_chau',
    heading: 'Đồn điền và thân phận nông nô ở Giao Châu (Thời Ngô)',
    year: 250, // Representative year for Ngo period
    type: 'cultural',
    context: 'Đến thời Mã Viện tiếp tục mở ra những ấp trại, đồn điền. Ở thời kỳ này có nhiều binh lính người Hán ở hẳn đất Giao Chi và sau này sử nhà Hán gọi là người "Mã lưu". Những tù nhân chiến tranh cùng những người dân mất ruộng đất chính là nguồn nông nô, theo hình thức cưỡng bức lao động với thân phận thấp kém. Nhiều dưới dạng đồ tùy táng trong những ngôi mộ Hán trên đất nước ta. dọc, vựa lúa, chuồng trâu, chuồng bò, chuồng lợn, giếng nước, cối Do bị mất ruộng đất và bị bóc lột nặng nề, cuối thế kỷ II, ở Giao Châu đã xuất hiện ngày càng nhiều "dân lưu tán" tức những người phải bỏ quê hương đi tha phương cầu thực. Cuối thế kỳ V, sù cũng ghi hiện tượng xuất hiện nhiều những người "dân vong mệnh", tức những người nông dân phá sản phải lưu vong. Chính trại, lập nên những đồn điền.\n\nĐồn điền là một loại ruộng công gọi là "ruộng Quốc khố" do Nhà nước trực tiếp quản lý. Các tội nhân và những người dân công xã bị phá sản ở chính quốc cũng được đưa sang làm việc trong những đồn điền này. Những người lao động trong đồn điền dù là người Việt hay người Hán, thân phận đều bị trói buộc như một thứ nông nô của chính quyền đô hộ. Đến thời Ngô, có lê hình thức đồn điền đã rất phát triển nên chính quyền ở Giao Châu đã đặt ra chức quan gọi là "Điền nông Đô úy" hay "Đô úy" để chuyên trách việc cai quản đồn điền. - Bóc lột bang hình thức cống nạp và tô, thuế Phương thức bóc lột chủ yếu của chính quyền đô hộ Trung Quốc với những miền "ngoại vực" như Giao Châu là cống nạp. Việc cống nạp có những ưu thế là không cần sự điều hành trực tiếp của chính quyền trung ương mà được giao cho Thứ sử và các quan thái thú trong bộ máy chính quyền địa phương đảm nhiệm. Các quan lại địa phương muốn được trìèu đinh trung ương chiếu cố đẻ có thể tự tung tự tác ở phương xa, phải tự nguyện và hết lòng cống nạp.\n\nGiao Châu lại là nơi có nhiều sản vật quý, hoa quả lạ, sản phẩm của miền nhiệt đới khiến người phương Bắc khao khát. Hình thức cống nạp trong giai đoạn này chưa được quy định rõ ràng về định mức mà nó phụ thuộc vào tình hình thực tế ở địa phương. Chính vì vậy, bọn quan lại cấp châu, quận nhân cơ hội cần phải thu gom các sản vật tiến cống mà mặc sức vơ vét, chiếm đoạt của cải của người dân. Hậu Hán thư đã cho biết về tình trạng này: "Xưa đất Giao Chỉ có nhiều sản vật quý, ngọc minh cơ, lông trả, sừng tê, ngà voi, đồi mồi, hương lạ, gỗ đẹp, thứ gì cũng có. Các quyền quý, dưới thì thu vét của cải của dân, đến khi đầy túi tiền thì xin dời đổi". Cũng theo Hậu Hán thư thời Đông Hán, Giao Châu luôn phải cống vải, nhãn cùng các thứ đồ tươi sống. Thời Sĩ Nhiếp: "thường sai sứ sang nước Ngô, đem cống những thứ hương quý, vải nhò, kể có hàng nghìn, các của quý như ngọc trai, ốc lớn, lưu ly, lông trả, đồi mồi, sừng tê, ngà voi và các thứ quả lạ như chuối, dừa, long nhãn, không năm nào không tiến".',
    description: 'Sau Mã Viện, các ấp trại, đồn điền tiếp tục được mở rộng. Binh lính Hán định cư (gọi là "Mã lưu"), tù nhân chiến tranh và dân mất ruộng trở thành nông nô lao động cưỡng bức. Cuối thế kỷ II, xuất hiện "dân lưu tán", cuối thế kỷ V là "dân vong mệnh". Đồn điền ("ruộng Quốc khố") do nhà nước quản lý, sử dụng cả tội nhân và dân phá sản từ Trung Quốc. Lao động trong đồn điền, dù Việt hay Hán, đều có thân phận nông nô. Thời Ngô, đồn điền phát triển mạnh, có chức "Điền nông Đô úy" chuyên trách. Hình thức bóc lột chính là cống nạp sản vật quý (ngọc, lông trả, sừng tê, ngà voi, hương liệu, gỗ đẹp, vải, nhãn, hoa quả lạ) mà không có định mức rõ ràng, tạo điều kiện cho quan lại vơ vét.',
    period: 'period_1',
    characters: ['Mã Viện', 'Sĩ Nhiếp'],
    locations: ['Giao Chỉ', 'Giao Châu', 'Trung Quốc'],
    questions: [
      {
        question: 'Những binh lính người Hán ở lại đất Giao Chỉ sau thời Mã Viện được sử nhà Hán gọi là gì?',
        options: ['Lạc Việt', 'Mã lưu', 'Giao nhân', 'Hán Việt'],
        correctAnswer: 1,
        explanation: 'Ở thời kỳ này có nhiều binh lính người Hán ở hẳn đất Giao Chi và sau này sử nhà Hán gọi là người "Mã lưu".'
      },
      {
        question: 'Nguồn lao động chính trong các đồn điền ở Giao Châu là ai?',
        options: ['Thợ thủ công lành nghề', 'Thương nhân ngoại quốc', 'Tù nhân chiến tranh và người dân mất ruộng đất', 'Quan lại địa phương'],
        correctAnswer: 2,
        explanation: 'Những tù nhân chiến tranh cùng những người dân mất ruộng đất chính là nguồn nông nô.'
      },
      {
        question: 'Đến thời Ngô, chức quan nào được đặt ra để chuyên trách việc cai quản đồn điền ở Giao Châu?',
        options: ['Thái thú', 'Thứ sử', 'Điền nông Đô úy (hoặc Đô úy)', 'Huyện lệnh'],
        correctAnswer: 2,
        explanation: 'Đến thời Ngô, có lê hình thức đồn điền đã rất phát triển nên chính quyền ở Giao Châu đã đặt ra chức quan gọi là "Điền nông Đô úy" hay "Đô úy" để chuyên trách việc cai quản đồn điền.'
      },
      {
        question: 'Phương thức bóc lột chủ yếu của chính quyền đô hộ Trung Quốc đối với Giao Châu là gì?',
        options: ['Thuế thân', 'Lao dịch nặng nề', 'Cống nạp sản vật', 'Bắt đi lính'],
        correctAnswer: 2,
        explanation: 'Phương thức bóc lột chủ yếu của chính quyền đô hộ Trung Quốc với những miền "ngoại vực" như Giao Châu là cống nạp.'
      },
      {
        question: 'Thời Sĩ Nhiếp, những loại sản vật quý nào thường được đem cống cho nước Ngô?',
        options: ['Vũ khí và ngựa chiến', 'Lúa gạo và muối', 'Hương quý, vải nhỏ, ngọc trai, sừng tê, ngà voi, hoa quả lạ', 'Đồ đồng và đồ gốm'],
        correctAnswer: 2,
        explanation: 'Thời Sĩ Nhiếp: "thường sai sứ sang nước Ngô, đem cống những thứ hương quý, vải nhò, kể có hàng nghìn, các của quý như ngọc trai, ốc lớn, lưu ly, lông trả, đồi mồi, sừng tê, ngà voi và các thứ quả lạ như chuối, dừa, long nhãn, không năm nào không tiến".'
      }
    ],
    rewards: {
      experience: 260,
      coins: 130
    }
  },
  {
    id: 'event_giao_chau_cong_nap_vat_pham_lao_dich_bac_thuoc',
    heading: 'Giao Châu: Cống nạp vật phẩm và lao dịch thời Bắc thuộc',
    year: 480, // Representative late period for Tống, Tề
    type: 'cultural',
    context: 'Các mặt hàng thủ công Giao Châu với nguồn nguyên liệu lạ luôn là thứ đồ ưa thích của các vua chúa và quan lại Trung Quốc. Giao Châu đã từng phải cống loại vải dệt bằng tơ chuối, tơ tre, giấy làm từ vỏ và lá trầm hương, v.v... Đời Tống, Tề, Giao Châu vài năm lại phải cống mũ Đâu mâu bằng bạc. Các loại súc vật phương Nam cũng nằm trong danh sách đồ tiến cống. Thời Tam Quốc, Sĩ Nhất em trai của Sĩ Nhiếp đã cống cho vua Ngô mấy trăm con ngựa. Các loại voi đã được thuần phục gọi là thuần tượng cũng được đem cống cho Trung Quốc. Thậm chí, ở Giao Chi và vùng Cửu Chân có loại gà gáy tiếng dài vào buổi sáng gọi là "Trường kê minh" cũng phải đem nộp cho các vua từ thời Thánh đế đến thời Ngô. Người dân Giao Châu không những phải nộp cống phẩm mà còn phải đi lao dịch để chuyên chở những cống phẩm đó về triều đình Trung Quốc.\n\nCác mặt hàng thủ công Giao Châu với nguồn nguyên liệu lạ luôn là thứ đồ ưa thích của các vua chúa và quan lại Trung Quốc. Giao Châu đã từng phải cống loại vải dệt bằng tơ chuối, tơ ừe, giấy làm từ vỏ Đời Tống, Tề, Giao Châu vài năm lại phải cống mũ Đâu mâu bằng bạc. Các loại súc vật phương Nam cũng nằm trong danh sách đồ tiến cống. Thời Tam Quốc, Sĩ Nhất em trai của Sĩ Nhiếp đã cống cho vua Ngô mấy trăm con ngựa. Các loại voi đã được thuần phục gọi là thuần tượng cũng được đem cống cho Trung Quốc. Thậm chí, ở Giao Chi và vùng Cửu Chân có loại gà gáy tiếng dài vào buổi sáng gọi là "Trường kê minh" cũng phải đem nộp cho các vua từ thời Thánh đế đến thời Ngô. Người dân Giao Châu không những phải nộp cống phẩm mà còn phải đi lao dịch để chuyên chở những cống phẩm đó về triều đình Trung Quốc.',
    description: 'Các sản phẩm thủ công độc đáo của Giao Châu như vải tơ chuối, tơ tre, giấy trầm hương rất được vua chúa và quan lại Trung Quốc ưa chuộng. Đời Tống, Tề, Giao Châu còn phải cống mũ Đâu mâu bằng bạc. Súc vật phương Nam cũng là cống phẩm, ví dụ Sĩ Nhất (em Sĩ Nhiếp) cống vua Ngô hàng trăm con ngựa, voi thuần dưỡng ("thuần tượng") cũng bị đem cống. Ngay cả loại gà "Trường kê minh" (gà gáy dài) ở Giao Chỉ và Cửu Chân cũng phải nộp. Ngoài việc nộp cống phẩm, người dân Giao Châu còn phải chịu lao dịch nặng nề để vận chuyển những vật phẩm này về Trung Quốc.',
    period: 'period_1',
    characters: ['Sĩ Nhất', 'Sĩ Nhiếp'],
    locations: ['Giao Châu', 'Trung Quốc', 'Giao Chỉ', 'Cửu Chân'],
    questions: [
      {
        question: 'Những loại vải đặc biệt nào của Giao Châu phải cống nạp cho Trung Quốc?',
        options: ['Vải lụa tơ tằm và vải gấm', 'Vải dệt bằng tơ chuối và tơ tre', 'Vải len và vải dạ', 'Vải bông và vải gai'],
        correctAnswer: 1,
        explanation: 'Giao Châu đã từng phải cống loại vải dệt bằng tơ chuối, tơ tre.'
      },
      {
        question: 'Đời Tống, Tề, Giao Châu phải cống loại mũ đặc biệt nào bằng bạc?',
        options: ['Mũ bình thiên', 'Mũ cánh chuồn', 'Mũ Đâu mâu', 'Mũ ô sa'],
        correctAnswer: 2,
        explanation: 'Đời Tống, Tề, Giao Châu vài năm lại phải cống mũ Đâu mâu bằng bạc.'
      },
      {
        question: 'Thời Tam Quốc, Sĩ Nhất đã cống cho vua Ngô loại súc vật nào với số lượng lớn?',
        options: ['Trâu nước', 'Ngựa', 'Dê núi', 'Hươu sao'],
        correctAnswer: 1,
        explanation: 'Thời Tam Quốc, Sĩ Nhất em trai của Sĩ Nhiếp đã cống cho vua Ngô mấy trăm con ngựa.'
      },
      {
        question: 'Loại gà đặc biệt nào ở Giao Chỉ và Cửu Chân cũng phải đem nộp làm cống phẩm?',
        options: ['Gà Đông Tảo', 'Gà ác', 'Gà tre', 'Trường kê minh (gà gáy tiếng dài)'],
        correctAnswer: 3,
        explanation: 'Ở Giao Chi và vùng Cửu Chân có loại gà gáy tiếng dài vào buổi sáng gọi là "Trường kê minh" cũng phải đem nộp cho các vua.'
      },
      {
        question: 'Ngoài việc nộp cống phẩm, người dân Giao Châu còn phải chịu hình thức bóc lột nào liên quan đến việc cống nạp?',
        options: ['Phải mua lại cống phẩm với giá cao', 'Phải đi lao dịch để chuyên chở cống phẩm về Trung Quốc', 'Phải xây dựng kho chứa cống phẩm', 'Phải trồng các loại cây đặc biệt để làm cống phẩm'],
        correctAnswer: 1,
        explanation: 'Người dân Giao Châu không những phải nộp cống phẩm mà còn phải đi lao dịch để chuyên chở những cống phẩm đó về triều đình Trung Quốc.'
      }
    ],
    rewards: {
      experience: 220,
      coins: 110
    }
  },
  {
    id: 'event_giao_chau_to_thue_nang_ne_dong_han_luc_trieu',
    heading: 'Giao Châu: Gánh nặng tô thuế từ Đông Hán đến Lục triều',
    year: 500, // Representative end of period
    type: 'cultural',
    context: 'Sử gia Ngô Thì Sĩ từng viết, ở thời đó: "vật quý giá như châu báu phải đóng sọt tiến hằng năm, vật nhỏ nhen như hoa quả cũng chạy trạm hàng ngàn dặm". Bên cạnh hình thức bóc lột bằng cống nạp, từ thời Đông Hán đến thời Lục triều, Giao Châu còn phải chịu sự bóc lột bằng tô, thuế của chính quyền đô hộ phương Bắc. Theo ý kiến của các nhà nghiên cứu, có thể phương thức bóc lột bằng tô thuế đã xuất hiện vào cuối thời Tây Hán, bởi đầu thời Tây Hán theo Hán thư, ở Giao Châu vẫn chưa có thuế, nhưng khi Hai Bà Trưng khởi nghĩa vào năm 40 (thời Đông Hán), đã xá thuế 2 năm cho dân. Sau khi nhà Đông Hán bình định được đất Giao Châu, việc bóc lột tô thuế ngày càng tăng, từ chỗ nhà Hán vẫn phải chở lương thực đến để nuôi quân sĩ ở đây, đến thời điểm này số thóc do bóc lột được bằng tô thuế đã đủ để nuôi toàn bộ quan lại, quân sĩ ở Giao Châu. Sử cũ chép rằng số thóc thuế mà chính quyền đô hộ thu được ở Giao Châu thời Đông Hán lên tới 13.600.000 hộc, tương đương với 272.000 tấn thóc.\n\nSử gia Ngô Thì Sĩ từng viết, ở thời đó: "vật quý giá như châu báu phải đóng sọt tiến hằng năm, vật nhỏ nhen như hoa quả cũng chạy trạm hàng ngàn dặm". Bên cạnh hình thức bóc lột bằng cống nạp, từ thời Đông Hán đến thời Lục triều, Giao Châu còn phải chịu sự bóc lột bằng tô, thuế của chính quyền đô hộ phương Bắc. Theo ý kiến của các nhà nghiên cứu, có thể phương thức bóc lột bằng tô thuế đã xuất hiện vào cuối thời Tây Hán, bởi đầu thời Tây Hán theo Hán thư, ở Giao Châu vẫn chưa có thuế, nhưng khi Hai Bà Trưng khởi nghĩa vào năm 40 (thời Đông Hán), đã xá thuế 2 năm cho dân. Sau khi nhà Đông Hán đã bình định được đất Giao Châu, việc bóc lột tô thuế ngày càng tăng, từ chỗ nhà Hán vẫn phải chở lương thực đến để nuôi quân sĩ ở đây, đến thời điểm này số thóc do bóc lột được bằng tô thuế đã đủ để nuôi toàn bộ quan lại, quân sĩ ở Giao Châu. Sử cũ chép rằng số thóc thuế mà chính quyền đô hộ thu được ở Giao Châu thời Đông Hán lên tới 13.600.000 hộc tương đương với 272.000 tấn thóc.',
    description: 'Ngoài cống nạp, Giao Châu còn chịu sự bóc lột nặng nề bằng tô, thuế từ thời Đông Hán đến Lục triều. Sử gia Ngô Thì Sĩ mô tả việc cống nạp rất cực khổ. Có thể tô thuế xuất hiện cuối Tây Hán, vì đầu Tây Hán Giao Châu chưa có thuế, nhưng Hai Bà Trưng đã xá thuế 2 năm khi khởi nghĩa (năm 40). Sau khi nhà Đông Hán đàn áp khởi nghĩa, tô thuế tăng mạnh, đủ nuôi toàn bộ máy cai trị ở Giao Châu. Thời Đông Hán, số thóc thuế thu được lên tới 13.600.000 hộc (khoảng 272.000 tấn).',
    period: 'period_1',
    characters: ['Ngô Thì Sĩ', 'Hai Bà Trưng'],
    locations: ['Giao Châu'],
    questions: [
      {
        question: 'Theo sử gia Ngô Thì Sĩ, việc cống nạp ở Giao Châu thời đó diễn ra như thế nào?',
        options: ['Chỉ cống nạp những vật phẩm có giá trị thấp', 'Vật quý giá phải đóng sọt tiến hằng năm, vật nhỏ như hoa quả cũng phải chạy trạm hàng ngàn dặm', 'Chỉ cống nạp một lần mỗi năm vào dịp lễ lớn', 'Cống nạp là tự nguyện, không bắt buộc'],
        correctAnswer: 1,
        explanation: 'Sử gia Ngô Thì Sĩ từng viết, ở thời đó: "vật quý giá như châu báu phải đóng sọt tiến hằng năm, vật nhỏ nhen như hoa quả cũng chạy trạm hàng ngàn dặm".'
      },
      {
        question: 'Phương thức bóc lột bằng tô thuế ở Giao Châu có thể đã xuất hiện vào thời kỳ nào?',
        options: ['Đầu thời Đông Hán', 'Giữa thời Lục triều', 'Cuối thời Tây Hán', 'Thời Tam Quốc'],
        correctAnswer: 2,
        explanation: 'Theo ý kiến của các nhà nghiên cứu, có thể phương thức bóc lột bằng tô thuế đã xuất hiện vào cuối thời Tây Hán.'
      },
      {
        question: 'Khi Hai Bà Trưng khởi nghĩa vào năm 40, hai bà đã có chính sách gì về thuế cho dân?',
        options: ['Tăng thuế để có kinh phí khởi nghĩa', 'Giữ nguyên mức thuế cũ', 'Xá thuế 2 năm cho dân', 'Chỉ thu thuế đối với người giàu'],
        correctAnswer: 2,
        explanation: 'Khi Hai Bà Trưng khởi nghĩa vào năm 40 (thời Đông Hán), đã xá thuế 2 năm cho dân.'
      },
      {
        question: 'Số thóc thuế mà chính quyền đô hộ thu được ở Giao Châu thời Đông Hán được ghi nhận là bao nhiêu?',
        options: ['Khoảng 1.000.000 hộc', 'Khoảng 5.000.000 hộc', '13.600.000 hộc (tương đương 272.000 tấn)', 'Trên 20.000.000 hộc'],
        correctAnswer: 2,
        explanation: 'Sử cũ chép rằng số thóc thuế mà chính quyền đô hộ thu được ở Giao Châu thời Đông Hán lên tới 13.600.000 hộc, tương đương với 272.000 tấn thóc.'
      },
      {
        question: 'Sau khi nhà Đông Hán bình định Giao Châu, tình hình tô thuế như thế nào?',
        options: ['Giảm bớt để yên dân', 'Việc bóc lột tô thuế ngày càng tăng', 'Chỉ thu thuế đối với thương nhân', 'Bãi bỏ hoàn toàn tô thuế'],
        correctAnswer: 1,
        explanation: 'Sau khi nhà Đông Hán bình định được đất Giao Châu, việc bóc lột tô thuế ngày càng tăng.'
      }
    ],
    rewards: {
      experience: 250,
      coins: 125
    }
  },
  {
    id: 'event_giao_chau_boc_lot_hau_qua_di_dan_dong_hoa_thoi_bac_thuoc',
    heading: 'Hậu quả bóc lột, chính sách di dân và đồng hóa ở Giao Châu (Bắc thuộc)',
    year: 189, // Death of Linh De, start of increased migration
    type: 'cultural',
    context: 'Thóc lúa mà chính quyền Giao Châu có được là do thu thuế các hộ làm nông nghiệp, còn ở vùng biển, các hộ đánh bắt cá cũng phải nộp thuế bằng sản vật. Sử nhà Hán và sử của ta đều nhắc đến việc Thứ sử Chu Phù "tàn bạo với dân chúng, cưỡng bức thu thuế của dân. Một con cá vàng (hoàng ngư) thu thuế một hộc lúa, dân chúng oán giận". Thời Nam Triều có hàng trăm thứ thuế, dân nghèo phải bán cả vợ con để nộp thuế. Chính sách vơ vét, bóc lột nặng nề của chính quyền đô hộ ở Giao Châu đã khiến người dân lâm vào cảnh bần cùng, cực khổ mà sử cũ đã phản ánh: "trăm họ xác xơ". Những người dân bị cướp ruộng đất phải phiêu tán khỏi quê hương. Ruộng đất bị tập trung vào tay của những địa chủ người Hán và người Việt.\n\nNhư một quy luật tất yếu, người dân Giao Châu lại vùng lên trong phong trào đấu tranh giành quyền sống, giành độc lập. Chính sách di dân và đồng hóa dân tộc Hán, đầu thời Tam Quốc, một trào lưu di dân xuống phương Nam đã diễn ra. Ban đầu chỉ là những dòng họ quý tộc, sĩ phu bất đồng chính kiến với triều đại mới hoặc đom giản chỉ đi lánh nạn binh đao mà kéo cả họ hàng con cái sang đất Giao Châu. Sau này, chính quyền đô hộ đã lợi dụng trào lưu này để thực hiện chính sách di dân đồng hóa dân tộc ở đất Giao Châu. Hồ Cương "Thái phó nhà Hán ở Hồ Quảng, là người thanh cao có khí tiết gặp lúc Vương Mãng soán ngôi, treo mũ áo ở cửa phủ mà đi, lưu lạc ở Giao Chỉ". Thời Sĩ Nhiếp đang làm Thứ sử Giao Châu, sĩ phu Trung Quốc sang Giao Chi lánh nạn, nương tựa Sĩ Nhiếp có hàng trăm người. Nguyên nhân của luồng di cư này đã được ghi lại trong lời tựa của sách Mâu Tử "Sau khi Linh đế chết (năm 189) thiên hạ đại loạn, chỉ có đất Giao Chi khá yên ổn, các sĩ đại phu miền Bắc chạy cả sang đó".',
    description: 'Việc thu thuế ở Giao Châu rất nặng nề, ví dụ Thứ sử Chu Phù thu thuế một con cá vàng bằng một hộc lúa, khiến dân oán giận. Thời Nam Triều, có hàng trăm thứ thuế, dân nghèo phải bán vợ con. Hậu quả là "trăm họ xác xơ", dân phiêu tán, ruộng đất tập trung vào tay địa chủ Hán và Việt, dẫn đến các cuộc đấu tranh. Đầu thời Tam Quốc, diễn ra làn sóng di dân từ phương Bắc xuống Giao Châu, ban đầu là quý tộc, sĩ phu lánh nạn (như Hồ Cương thời Vương Mãng, hay hàng trăm người nương tựa Sĩ Nhiếp sau khi Hán Linh Đế mất năm 189 do "thiên hạ đại loạn, chỉ có đất Giao Chi khá yên ổn"). Chính quyền đô hộ sau đó lợi dụng điều này để thực hiện chính sách di dân đồng hóa.',
    period: 'period_1',
    characters: ['Chu Phù', 'Vương Mãng', 'Hồ Cương', 'Sĩ Nhiếp', 'Linh Đế', 'Mâu Tử'],
    locations: ['Giao Châu', 'Giao Chỉ', 'Hồ Quảng'],
    questions: [
      {
        question: 'Thứ sử Chu Phù đã áp đặt mức thuế như thế nào đối với một con cá vàng, khiến dân chúng oán giận?',
        options: ['Một đồng tiền', 'Nửa hộc lúa', 'Một hộc lúa', 'Hai hộc lúa'],
        correctAnswer: 2,
        explanation: 'Thứ sử Chu Phù "tàn bạo với dân chúng, cưỡng bức thu thuế của dân. Một con cá vàng (hoàng ngư) thu thuế một hộc lúa, dân chúng oán giận".'
      },
      {
        question: 'Thời Nam Triều, tình hình thuế khóa ở Giao Châu như thế nào?',
        options: ['Chỉ có một vài loại thuế nhẹ', 'Thuế được giảm đáng kể', 'Có hàng trăm thứ thuế, dân nghèo phải bán vợ con', 'Không thu thuế đối với nông dân'],
        correctAnswer: 2,
        explanation: 'Thời Nam Triều có hàng trăm thứ thuế, dân nghèo phải bán cả vợ con để nộp thuế.'
      },
      {
        question: 'Hậu quả của chính sách bóc lột nặng nề ở Giao Châu là gì?',
        options: ['Kinh tế phát triển vượt bậc', 'Dân chúng giàu có, sung túc', 'Trăm họ xác xơ, dân phiêu tán, ruộng đất bị tập trung', 'Chính quyền đô hộ được lòng dân'],
        correctAnswer: 2,
        explanation: 'Chính sách vơ vét, bóc lột nặng nề... đã khiến người dân lâm vào cảnh bần cùng, cực khổ mà sử cũ đã phản ánh: "trăm họ xác xơ". Những người dân bị cướp ruộng đất phải phiêu tán khỏi quê hương. Ruộng đất bị tập trung vào tay của những địa chủ người Hán và người Việt.'
      },
      {
        question: 'Ai là người đã "treo mũ áo ở cửa phủ mà đi, lưu lạc ở Giao Chỉ" khi Vương Mãng soán ngôi?',
        options: ['Sĩ Nhiếp', 'Mâu Tử', 'Chu Phù', 'Hồ Cương'],
        correctAnswer: 3,
        explanation: 'Hồ Cương "Thái phó nhà Hán ở Hồ Quảng... gặp lúc Vương Mãng soán ngôi, treo mũ áo ở cửa phủ mà đi, lưu lạc ở Giao Chỉ".'
      },
      {
        question: 'Theo lời tựa sách Mâu Tử, lý do chính khiến các sĩ đại phu miền Bắc chạy sang Giao Chỉ sau khi Linh Đế mất (năm 189) là gì?',
        options: ['Giao Chỉ có nhiều cơ hội làm giàu', 'Thiên hạ đại loạn, chỉ có đất Giao Chỉ khá yên ổn', 'Chính quyền Giao Chỉ mời gọi nhân tài', 'Để truyền bá Nho giáo'],
        correctAnswer: 1,
        explanation: 'Sau khi Linh đế chết (năm 189) thiên hạ đại loạn, chỉ có đất Giao Chi khá yên ổn, các sĩ đại phu miền Bắc chạy cả sang đó.'
      }
    ],
    rewards: {
      experience: 270,
      coins: 135
    }
  },
  {
    id: 'event_chinese_migration_giao_chi_late_2nd_century',
    heading: 'Luồng di cư của sĩ phu và quan lại Trung Hoa sang Giao Chỉ (cuối thế kỷ 2 - đầu thế kỷ 3)',
    year: 190,
    type: 'cultural',
    context: 'Nguyên nhân của luồng di cư này đã được ghi lại trong lời tựa của sách Mâu Tử: "Sau khi Linh đế chết (năm 189) thiên hạ đại loạn, chỉ có đất Giao Chỉ khá yên ổn, các sĩ đại phu miền Bắc chạy cả sang đó". Trong số này có Hoàn Diệp, khoảng năm 190 đến 193 vì thiên hạ loạn lạc, Diệp chạy đến Cối Kê rồi từ đó vượt bể sang Giao Chỉ. Viên Trung cũng vượt biển đến Giao Chỉ lúc Tôn Sách phá vỡ Cối Kê. Hứa Tĩnh vì tránh loạn Đổng Trác mà chạy đến Cối Kê, rồi chạy sang Giao Chỉ cũng được Sĩ Nhiếp "tiếp đãi rất hậu". Cuộc loạn Ngũ Hồ cũng khiến người dân và các sĩ tộc Trung Hoa chạy sang Giao Chỉ rất nhiều. Trong làn sóng di cư này, quan lại và sĩ phu Trung Quốc đã đến và lập nghiệp ở đất này. Nhiều người đã được thu nạp vào tầng lớp quan liêu ở Giao Châu, đặc biệt ở thời Sĩ Nhiếp làm Thái thú.\n\nChính tổ tiên Sĩ Nhiếp cũng đã từng sang lánh nạn ở Giao Chỉ vào thời loạn Vương Mãng, đến cha Sĩ Nhiếp là đời thứ sáu. Sĩ Nhiếp đã thu nạp Trình Binh, một sĩ phu người quận Nhữ Nam "học rộng thông hiểu Ngũ kinh", sang Giao Châu lánh nạn, cho làm chức Trường sử. Việc tham gia của các sĩ phu Trung Hoa vào hàng ngũ quan lại đã củng cố bộ máy của chính quyền đô hộ ở Giao Châu. Một số quan lại được chính quyền Trung Hoa phái sang Giao Châu cũng ở lại sinh cơ lập nghiệp lâu dài. Không chỉ dòng họ Sĩ, tổ của Sĩ Nhiếp, mà còn rất nhiều dòng họ khác sau này con cháu vẫn tham gia hàng ngũ quan lại. Thí dụ như Thái thú Giao Chỉ đời Hán là Lại Tiên, con cháu sau này là Lại Ích Quý, làm An phủ sứ đời Trần; họ Đào ở đời Ngô; họ Cố ở đời Tấn.',
    description: 'Do tình hình loạn lạc ở Trung Hoa sau cái chết của Linh Đế (189) và các cuộc biến động như loạn Đổng Trác, loạn Ngũ Hồ, Giao Chỉ trở thành một nơi tương đối yên ổn, thu hút nhiều sĩ phu và quan lại từ miền Bắc Trung Quốc đến lánh nạn và lập nghiệp. Các nhân vật như Hoàn Diệp, Viên Trung, Hứa Tĩnh đã di cư sang Giao Chỉ. Sĩ Nhiếp, Thái thú Giao Châu, đã tiếp đãi và trọng dụng nhiều người trong số họ, ví dụ như Trình Binh được Sĩ Nhiếp cho làm Trường sử. Sự tham gia của các sĩ phu này vào bộ máy hành chính đã củng cố chính quyền đô hộ ở Giao Châu. Nhiều dòng họ Trung Hoa, bao gồm cả tổ tiên của Sĩ Nhiếp (lánh nạn từ thời Vương Mãng), đã định cư lâu dài và con cháu họ tiếp tục tham gia vào tầng lớp quan lại qua nhiều thế hệ.',
    period: 'period_1',
    characters: ['Linh Đế', 'Hoàn Diệp', 'Viên Trung', 'Tôn Sách', 'Hứa Tĩnh', 'Đổng Trác', 'Sĩ Nhiếp', 'Vương Mãng', 'Trình Binh', 'Lại Tiên', 'Lại Ích Quý'],
    locations: ['Giao Chỉ', 'Miền Bắc (Trung Quốc)', 'Cối Kê', 'Giao Châu', 'Quận Nhữ Nam', 'Trung Hoa'],
    questions: [
      {
        question: 'Nguyên nhân chính khiến các sĩ đại phu miền Bắc Trung Quốc di cư sang Giao Chỉ sau năm 189 là gì?',
        options: ['Do Giao Chỉ có nhiều cơ hội kinh doanh mới', 'Do thiên hạ đại loạn ở Trung Quốc, trong khi Giao Chỉ khá yên ổn', 'Do chính sách khuyến khích nhập cư của Sĩ Nhiếp', 'Do nạn đói và thiên tai ở miền Bắc Trung Quốc'],
        correctAnswer: 1,
        explanation: 'Lời tựa sách Mâu Tử ghi: "Sau khi Linh đế chết (năm 189) thiên hạ đại loạn, chỉ có đất Giao Chỉ khá yên ổn, các sĩ đại phu miền Bắc chạy cả sang đó".'
      },
      {
        question: 'Ai trong số các nhân vật sau được Sĩ Nhiếp "tiếp đãi rất hậu" khi chạy sang Giao Chỉ tránh loạn Đổng Trác?',
        options: ['Hoàn Diệp', 'Viên Trung', 'Hứa Tĩnh', 'Trình Binh'],
        correctAnswer: 2,
        explanation: 'Hứa Tĩnh vì tránh loạn Đổng Trác mà chạy đến Cối Kê, rồi chạy sang Giao Chỉ cũng được Sĩ Nhiếp "tiếp đãi rất hậu".'
      },
      {
        question: 'Sĩ Nhiếp đã bổ nhiệm Trình Binh, một sĩ phu từ quận Nhữ Nam, vào chức vụ gì?',
        options: ['Thái thú', 'Trường sử', 'Huyện lệnh', 'Cố vấn'],
        correctAnswer: 1,
        explanation: 'Sĩ Nhiếp đã thu nạp Trình Binh... cho làm chức Trường sử.'
      },
      {
        question: 'Tổ tiên của Sĩ Nhiếp đã sang lánh nạn ở Giao Chỉ vào thời kỳ nào?',
        options: ['Loạn Đổng Trác', 'Loạn Ngũ Hồ', 'Thời Linh Đế mất', 'Thời loạn Vương Mãng'],
        correctAnswer: 3,
        explanation: 'Chính tổ tiên Sĩ Nhiếp cũng đã từng sang lánh nạn ở Giao Chỉ vào thời loạn Vương Mãng.'
      }
    ],
    rewards: {
      experience: 200,
      coins: 100
    }
  },
  {
    id: 'event_giao_chau_exile_assimilation_policy',
    heading: 'Giao Châu: Nơi lưu đày và chính sách đồng hóa của các triều đại Trung Hoa (từ thế kỷ 1 SCN)',
    year: 61,
    type: 'cultural',
    context: 'Nguyễn Phu, Thứ sử Giao Chỉ đời Tấn là tổ tiên Lê Tắc đời Trần, Thái thú Giao Chỉ đời Tấn là Đỗ Châu đã làm đủ mọi nghề từ lao động phổ thông đến buôn bán, Giao Châu sau khi đã bị thôn tính, cũng là nơi chính quyền phong kiến các triều đại đày ải các phạm nhân, không chỉ vì đây là nơi xa Trung nguyên nên bị coi là rừng thiêng nước độc, mà hành động này còn ẩn chứa ý đồ sâu xa: đồng hóa dân tộc. Có thể kể ra rất nhiều trường hợp mà các sách sử Trung Quốc đã nhắc đến như: vào năm Vĩnh Hòa đời vua Minh đế (năm 61), Lương "Túng viết sách chê bai chính sự nên cả họ bị đày sang đất Cửu Chân. Năm 102, hai người em của Âm Hoàng hậu là Âm Dật và Âm Xưởng cũng bị đày sang vùng Nhật Nam. Năm 178, Thái thú họ Lưu bị cũng bị đày sang Giao Chỉ. Sách An Nam chí lược cũng ghi về trường hợp Cố Đàm, Thượng thư nước Ngô có tội bị Tôn Quyền đày sang Giao Chỉ. Còn có các nhân vật khác như Trương Hưu, tội bị đày sang đất Giao Châu. Đó là những người đi đày thuộc hàng ngũ quý tộc, họ thường mang theo gia đình, con cháu.\n\nHọ ra đi và ở lại vĩnh viễn trên đất Giao Châu. Nhưng có lẽ, còn có số đông những người bình dân bị trọng tội phải đày ải đến những vùng xa xôi hoang vu, không ai biết đến ở Giao Châu, nếu may mắn sống sót thi con cháu họ sẽ hòa huyết với người Việt và sinh sôi trên mảnh đất này. Là chủ một đế quốc lớn, chính quyền phong kiến Trung Quốc vẫn coi những tộc người xung quanh là Di, Địch. Những quốc gia nhỏ bị phụ thuộc hoặc bị đô hộ bởi chính quyền phương Bắc là mục tiêu cho chính sách xâm lược và đồng hóa lâu dài. Từ vùng châu thổ sông Hoàng Hà, người Hán đã từng rất thành công trong việc tiến dần xuống phương Nam để mở mang bờ cõi. Việc cộng cư diễn ra trong suốt thời Tây Hán, khi mà hàng vạn người Trung Quốc đã bị đày sang Giao Chi. Nhưng đến đầu Công nguyên, chính sách di dân và đồng hóa dân tộc ở Giao Châu đã không đem lại hiệu quả như chính quyền nhà Hán mong đợi.',
    description: 'Giao Châu, sau khi bị các triều đại phong kiến Trung Quốc thôn tính, không chỉ là một vùng đất xa xôi bị coi là "rừng thiêng nước độc" mà còn trở thành nơi lưu đày các phạm nhân. Chính sách này không chỉ nhằm mục đích trừng phạt mà còn ẩn chứa ý đồ đồng hóa dân tộc Việt. Nhiều trường hợp quý tộc và quan lại Trung Hoa bị đày đến Giao Châu được ghi lại, như Lương Túng (năm 61) bị đày đến Cửu Chân, Âm Dật và Âm Xưởng (năm 102) bị đày đến Nhật Nam, và Cố Đàm bị Tôn Quyền đày đến Giao Chỉ. Những người này thường mang theo gia đình, con cháu và nhiều người ở lại vĩnh viễn, góp phần vào sự cộng cư. Tuy nhiên, bất chấp những nỗ lực này và việc hàng vạn người Trung Quốc bị đày sang Giao Chỉ từ thời Tây Hán, chính sách đồng hóa dân tộc ở Giao Châu vào đầu Công nguyên không đạt hiệu quả như nhà Hán kỳ vọng.',
    period: 'period_1',
    characters: ['Nguyễn Phu', 'Lê Tắc', 'Đỗ Châu', 'Minh Đế (Hán)', 'Lương Túng', 'Âm Hoàng hậu', 'Âm Dật', 'Âm Xưởng', 'Thái thú họ Lưu', 'Cố Đàm', 'Tôn Quyền', 'Trương Hưu'],
    locations: ['Giao Chỉ', 'Giao Châu', 'Trung Nguyên', 'Cửu Chân', 'Nhật Nam', 'Nước Ngô', 'Sông Hoàng Hà'],
    questions: [
      {
        question: 'Ngoài việc là nơi xa xôi, lý do sâu xa nào khiến chính quyền Trung Hoa đày phạm nhân đến Giao Châu?',
        options: ['Để khai phá đất đai hoang vu', 'Để trừng phạt và đồng hóa dân tộc bản địa', 'Để xây dựng các công trình quân sự', 'Để giảm bớt gánh nặng dân số ở Trung Nguyên'],
        correctAnswer: 1,
        explanation: 'Hành động này còn ẩn chứa ý đồ sâu xa: đồng hóa dân tộc.'
      },
      {
        question: 'Ai đã bị đày sang đất Cửu Chân vào năm 61 (Vĩnh Hòa đời vua Minh Đế) vì viết sách chê bai chính sự?',
        options: ['Cố Đàm', 'Trương Hưu', 'Lương Túng', 'Âm Dật'],
        correctAnswer: 2,
        explanation: 'Vào năm Vĩnh Hòa đời vua Minh đế (năm 61), Lương Túng viết sách chê bai chính sự nên cả họ bị đày sang đất Cửu Chân.'
      },
      {
        question: 'Thượng thư Cố Đàm của nước Ngô bị ai đày sang Giao Chỉ?',
        options: ['Vua Minh Đế', 'Tôn Sách', 'Tôn Quyền', 'Thái thú họ Lưu'],
        correctAnswer: 2,
        explanation: 'Sách An Nam chí lược cũng ghi về trường hợp Cố Đàm, Thượng thư nước Ngô có tội bị Tôn Quyền đày sang Giao Chỉ.'
      },
      {
        question: 'Theo đoạn văn, chính sách di dân và đồng hóa dân tộc ở Giao Châu của nhà Hán vào đầu Công nguyên có kết quả như thế nào?',
        options: ['Rất thành công, đồng hóa hoàn toàn người Việt', 'Không đem lại hiệu quả như mong đợi', 'Gặp phải sự phản kháng quyết liệt và thất bại', 'Chỉ thành công ở một vài vùng nhỏ'],
        correctAnswer: 1,
        explanation: 'Nhưng đến đầu Công nguyên, chính sách di dân và đồng hóa dân tộc ở Giao Châu đã không đem lại hiệu quả như chính quyền nhà Hán mong đợi.'
      }
    ],
    rewards: {
      experience: 220,
      coins: 110
    }
  },
  {
    id: 'event_viet_hoa_nho_giao_du_nhap_dong_han_luc_trieu',
    heading: 'Việt hóa, văn hóa Việt và sự du nhập Nho giáo (Đông Hán - Lục triều)',
    year: 100,
    type: 'cultural',
    context: 'Dù xuất thân từ tầng lớp nào trên đất Trung Hoa, trải qua nhiều đời sống trên đất Việt, giữa một cộng đồng cư dân có sức sinh tồn mạnh mẽ, họ đã dần Việt hóa, trở thành một bộ phận của dân tộc Việt. Trường hợp Lý Bí, tổ tiên là người Hán lánh nạn sang Giao Châu, sau 9 đời trở thành người Việt, là một thí dụ về sức mạnh chống Hán hóa của người Việt. Sự phát triển văn hóa, xã hội Trong hơn 5 thế kỷ từ thời Đông Hán đến Lục triều, đất nước ta bị đô hộ bởi nhiều triều đại phong kiến Trung Quốc. Những biến đổi về chính trị và kinh tế đã diễn ra và tất yếu trong lĩnh vực văn hóa, xã hội cũng có những thay đổi quan trọng. Nét đặc trung nhất của thời kỳ này là sự duy tri nền văn hóa Việt trong xu thế xã hội phát triển với sự tiếp thu nhiều yếu tố phù hợp của văn hóa Hán và một số nền văn hóa khác. Sự du nhập và truyền bá Nho giáo Cho đến nay chưa có tài liệu nào đủ sức thuyết phục chứng minh người Việt đã có văn tự trước khi chữ Hán du nhập vào Giao Châu. Trong khi tiếp xúc với ngôn ngữ Hán, ngôn ngữ Việt dần dần tiếp thu những yếu tố của ngôn ngữ Hán và ngày càng phát triển.\n\nTuy nhiên vẫn có rất nhiều từ vay mượn của Hán ngữ nhưng lại được đọc theo âm Việt và ngữ pháp Việt vẫn khác xa với ngữ pháp Hán. Văn tự Trung Hoa đầu tiên được lưu hành trong tầng lớp quý tộc bản địa, sau mới lan dần ra trong các giai tầng xã hội khác, nó không những phục vụ cho nhu cầu hành chính của chính quyền thực dân mà còn là công cụ để truyền bá Nho giáo, Phật giáo và Đạo giáo. Nho giáo, còn được gọi là Khổng giáo, là một hệ thống tư tưởng, chính trị, triết học, luân lý, đạo đức và giáo dục quan trọng nhất ở Trung Quốc. Người đặt cơ sở đầu tiên cho Nho giáo là Khổng Tử (551 TCN - 479 TCN), sống ở thời Xuân Thu. về sau Mạnh Tử thời Chiến Quốc và Đổng Trọng Thư thời Tây Hán đã phát triển thêm học thuyết này làm cho nó ngày càng hoàn chỉnh. Kinh điển Nho gia của Trung Quốc bao gồm Ngũ kinh (Thi, Thư, Dịch, Lễ, Xuân Thu) và Tứ thư (Luận ngữ, Đại học, Trung dung, Mạnh Tử). Từ thời Hán trở về sau, Nho giáo đã được coi là hệ tư tưởng chính thống của giai cấp thống trị ở Trung Hoa.',
    description: 'Trong suốt hơn 5 thế kỷ từ thời Đông Hán đến Lục triều, dù bị đô hộ, người Việt vẫn thể hiện sức sống văn hóa mạnh mẽ. Nhiều người Hán di cư sang đã dần bị Việt hóa, như trường hợp tổ tiên Lý Bí. Đặc trưng của thời kỳ này là sự duy trì văn hóa Việt song song với việc tiếp thu có chọn lọc yếu tố văn hóa Hán. Chữ Hán được du nhập, ban đầu lưu hành trong tầng lớp quý tộc bản địa, phục vụ nhu cầu hành chính và truyền bá các hệ tư tưởng như Nho giáo, Phật giáo, Đạo giáo. Ngôn ngữ Việt cũng tiếp thu yếu tố Hán ngữ nhưng vẫn giữ bản sắc riêng về phát âm và ngữ pháp. Nho giáo, do Khổng Tử khởi xướng và được Mạnh Tử, Đổng Trọng Thư phát triển, với các kinh điển như Ngũ kinh và Tứ thư, đã trở thành hệ tư tưởng chính thống ở Trung Hoa và bắt đầu được truyền bá vào Giao Châu.',
    period: 'period_1',
    characters: ['Lý Bí', 'Khổng Tử', 'Mạnh Tử', 'Đổng Trọng Thư'],
    locations: ['Trung Hoa', 'Đất Việt', 'Giao Châu', 'Trung Quốc'],
    questions: [
      {
        question: 'Ai là một ví dụ điển hình cho quá trình Việt hóa của người Hán sau nhiều đời sống trên đất Việt?',
        options: ['Khổng Tử', 'Sĩ Nhiếp', 'Lý Bí', 'Đổng Trọng Thư'],
        correctAnswer: 2,
        explanation: 'Trường hợp Lý Bí, tổ tiên là người Hán lánh nạn sang Giao Châu, sau 9 đời trở thành người Việt, là một thí dụ về sức mạnh chống Hán hóa của người Việt.'
      },
      {
        question: 'Nét đặc trưng nhất của văn hóa Việt Nam trong hơn 5 thế kỷ từ Đông Hán đến Lục triều là gì?',
        options: ['Hoàn toàn bị Hán hóa', 'Loại bỏ mọi ảnh hưởng văn hóa Hán', 'Duy trì văn hóa Việt và tiếp thu có chọn lọc yếu tố văn hóa Hán', 'Phát triển một nền văn hóa hoàn toàn mới, không liên quan đến văn hóa cũ'],
        correctAnswer: 2,
        explanation: 'Nét đặc trung nhất của thời kỳ này là sự duy tri nền văn hóa Việt trong xu thế xã hội phát triển với sự tiếp thu nhiều yếu tố phù hợp của văn hóa Hán và một số nền văn hóa khác.'
      },
      {
        question: 'Văn tự Trung Hoa ban đầu được lưu hành chủ yếu trong tầng lớp nào ở Giao Châu?',
        options: ['Nông dân', 'Thương nhân', 'Quý tộc bản địa', 'Binh lính'],
        correctAnswer: 2,
        explanation: 'Văn tự Trung Hoa đầu tiên được lưu hành trong tầng lớp quý tộc bản địa, sau mới lan dần ra trong các giai tầng xã hội khác.'
      },
      {
        question: 'Ai được coi là người đặt cơ sở đầu tiên cho Nho giáo?',
        options: ['Mạnh Tử', 'Đổng Trọng Thư', 'Hán Vũ Đế', 'Khổng Tử'],
        correctAnswer: 3,
        explanation: 'Người đặt cơ sở đầu tiên cho Nho giáo là Khổng Tử (551 TCN - 479 TCN).'
      },
      {
        question: 'Đâu KHÔNG phải là một trong Ngũ kinh của Nho gia?',
        options: ['Thi', 'Thư', 'Dịch', 'Luận ngữ'],
        correctAnswer: 3,
        explanation: 'Kinh điển Nho gia của Trung Quốc bao gồm Ngũ kinh (Thi, Thư, Dịch, Lễ, Xuân Thu) và Tứ thư (Luận ngữ, Đại học, Trung dung, Mạnh Tử). Luận ngữ thuộc Tứ thư.'
      }
    ],
    rewards: {
      experience: 250,
      coins: 125
    }
  },
  {
    id: 'event_nho_giao_tenets_spread_vietnam_tay_han',
    heading: 'Chủ trương Nho giáo và sự thâm nhập vào xã hội Việt cổ (Thời Tây Hán - đầu Công nguyên)',
    year: 1,
    type: 'cultural',
    context: 'Nho giáo chủ tnrơng: "tôn quân, đại thống" với ba rường mối "tam cương" cơ bản là đạo: "vua - tôi", " cha - con", " vợ - chồng". Cùng với "tam cương" là "ngũ thường" tức năm phép ứng xử luân lý và đạo đức là: nhân, nghĩa, lễ, trí, tín, về đường lối chính trị là tu - tề - trị - bình (tu thân, tề gia, trị quốc, bình thiên hạ). Ngay từ thời Tây Hán, trong chừng mực nhất định, Nho giáo đã bắt đầu thâm nhập vào xã hội Việt cổ để làm công cụ nô dịch nhân dân ta về tư tưởng và tinh thần. Nho giáo du nhập vào Việt Nam thời Bắc thuộc, không còn là Nho giáo nguyên sơ nữa mà là Nho giáo được Hán Nho trước nhất là Đổng Trọng Thư cải tạo cho thích hợp này, ban đầu có lẽ chỉ dành cho đổi tượng là người Hán ở Giao Châu, chứ không được phổ biến rộng rãi. Dần dần do cần sự trợ giúp của các quý tộc Lạc Việt, cũng nằm trong ý đồ đồng hóa dân tộc, Nho giáo đã được chính quyền chủ động truyền bá ở phạm vi hẹp.\n\nSách Khâm định Việt sử thông giám cương mục đã chép lại bức thư của Thái thú Hợp Phố gửi cho vua Ngô cho biết: Thời Hán Vũ đế đã: "Đặt quan Thứ sử để trấn thủ và cai quản, rồi đua người Trung Quốc sang ở lẫn với dân bản thổ, cho dân bản thổ học viết qua loa và võ vẽ biết được ngôn ngữ Trung Quốc; lại có sứ thần thường đi lại, (họ) trông thấy lễ nghi mà tự thay đổi theo". Đến buổi đầu Công nguyên, Nho giáo đã được truyền bá trong các trường học ở Giao Châu.',
    description: 'Nho giáo, với các chủ trương cốt lõi như "tôn quân, đại thống", "tam cương" (vua-tôi, cha-con, vợ-chồng) và "ngũ thường" (nhân, nghĩa, lễ, trí, tín), cùng đường lối "tu thân, tề gia, trị quốc, bình thiên hạ", đã bắt đầu thâm nhập vào xã hội Việt cổ từ thời Tây Hán. Mục đích ban đầu của việc truyền bá này là làm công cụ nô dịch về tư tưởng. Nho giáo du nhập vào Việt Nam không phải ở dạng nguyên sơ mà đã qua sự cải tạo của Hán Nho, tiêu biểu là Đổng Trọng Thư. Ban đầu, nó chủ yếu phổ biến trong cộng đồng người Hán ở Giao Châu, sau đó dần được chính quyền chủ động truyền bá hạn chế cho quý tộc Lạc Việt nhằm mục đích đồng hóa. Thời Hán Vũ Đế, đã có những nỗ lực đưa người Trung Quốc sang ở lẫn và dạy chữ, ngôn ngữ cho dân bản địa. Đến đầu Công nguyên, Nho giáo đã được dạy trong các trường học ở Giao Châu.',
    period: 'period_1',
    characters: ['Đổng Trọng Thư', 'Hán Vũ Đế', 'Thái thú Hợp Phố', 'vua Ngô'],
    locations: ['Việt Nam (Xã hội Việt cổ)', 'Giao Châu', 'Hợp Phố', 'Trung Quốc'],
    questions: [
      {
        question: 'Đâu là ba mối quan hệ cơ bản trong "tam cương" của Nho giáo?',
        options: ['Thầy-trò, bạn-bè, anh-em', 'Vua-tôi, cha-con, vợ-chồng', 'Chủ-tớ, quan-dân, nước-nhà', 'Trời-đất, người-vật, âm-dương'],
        correctAnswer: 1,
        explanation: 'Nho giáo chủ trương "tam cương" cơ bản là đạo: "vua - tôi", " cha - con", " vợ - chồng".'
      },
      {
        question: '"Ngũ thường" của Nho giáo bao gồm những phẩm chất nào?',
        options: ['Cầm, kỳ, thi, họa, tửu', 'Trung, hiếu, tiết, nghĩa, dũng', 'Nhân, nghĩa, lễ, trí, tín', 'Công, dung, ngôn, hạnh'],
        correctAnswer: 2,
        explanation: 'Cùng với "tam cương" là "ngũ thường" tức năm phép ứng xử luân lý và đạo đức là: nhân, nghĩa, lễ, trí, tín.'
      },
      {
        question: 'Theo đoạn văn, mục đích ban đầu của việc Nho giáo thâm nhập vào xã hội Việt cổ từ thời Tây Hán là gì?',
        options: ['Nâng cao dân trí cho người Việt', 'Làm công cụ nô dịch về tư tưởng và tinh thần', 'Thúc đẩy giao lưu văn hóa', 'Chuẩn bị cho người Việt tự quản'],
        correctAnswer: 1,
        explanation: 'Ngay từ thời Tây Hán... Nho giáo đã bắt đầu thâm nhập vào xã hội Việt cổ để làm công cụ nô dịch nhân dân ta về tư tưởng và tinh thần.'
      },
      {
        question: 'Ai là người có vai trò cải tạo Nho giáo trước khi nó được truyền bá rộng rãi hơn vào Việt Nam thời Bắc thuộc?',
        options: ['Khổng Tử', 'Mạnh Tử', 'Hán Vũ Đế', 'Đổng Trọng Thư'],
        correctAnswer: 3,
        explanation: 'Nho giáo du nhập vào Việt Nam thời Bắc thuộc... là Nho giáo được Hán Nho trước nhất là Đổng Trọng Thư cải tạo cho thích hợp này.'
      },
      {
        question: 'Theo thông tin từ Thái thú Hợp Phố, biện pháp nào đã được áp dụng thời Hán Vũ Đế để tác động văn hóa lên dân bản xứ?',
        options: ['Cấm sử dụng tiếng mẹ đẻ', 'Bắt buộc mặc trang phục Hán', 'Đưa người Trung Quốc sang ở lẫn và dạy chữ, ngôn ngữ', 'Phá hủy các đền thờ địa phương'],
        correctAnswer: 2,
        explanation: 'Thời Hán Vũ đế đã: "Đặt quan Thứ sử để trấn thủ và cai quản, rồi đua người Trung Quốc sang ở lẫn với dân bản thổ, cho dân bản thổ học viết qua loa và võ vẽ biết được ngôn ngữ Trung Quốc..."'
      }
    ],
    rewards: {
      experience: 230,
      coins: 115
    }
  },
  {
    id: 'event_nho_hoc_giao_chi_si_nhiep_phat_trien',
    heading: 'Phát triển Nho học ở Giao Chỉ: Tích Quang, Nhâm Diên và vai trò của Sĩ Nhiếp (thế kỷ 1 - 3 SCN)',
    year: 187,
    type: 'cultural',
    context: 'Hai Thái thú Tích Quang, Nhâm Diên đã "dựng học hiệu để dạy lễ nghĩa" ở Giao Chi, Cửu Chân. Sách Đại Việt sử ký toàn thư đã ghi về hai nhân vật này: "Tích Quang là người quận Hán Trung, khi ở Giao Chi lấy lễ nghĩa dạy dân", còn Nhâm Diên khi ở Cửu Chân đã dạy dân lễ nghĩa: "dân không biết lễ phép giá thú, bèn dạy cho biết trai gái tuổi ngang nhau thì kết làm vợ chồng, dân nghèo không có sính lễ thi Diên bảo các Trưởng lại trở xuống bớt bổng lộc ra để giúp đỡ, cùng một lúc lấy vợ có đến các sách chi thấy nhắc đến hai quyển là Thượng thư và Xuân Thu Tả thị truyện, nhưng có thể còn nhiều loại sách khác nữa. Cuối đời Tây Hán, khi Vương Mãng khởi loạn cướp ngôi, một làn sóng sĩ phu di cư sang Giao Chi. Đây là lực lượng không chỉ giúp chính quyền Giao Châu trong việc quản lý, hành chính mà còn Ở thời Hán, trong số các sĩ phu người Giao Chi học hành thành đạt, một số đã được chính quyền đô hộ bổ nhiệm vào các vị trí ở châu, quận. Thí dụ như Trương Trọng, người Giao Châu, vào đời Hán Minh đế (năm 58 - 75 SCN) do chăm học, lại có tài ăn nói nên được cử làm Kế lại quận Nhật Nam, sau được cử làm Thái thú Kim Thành.\n\nLý Tiến, người Giao Chi, được bổ vào chức Công tào (phụ trách một bộ phận thủ công nghiệp), sau dần được thăng chức đến năm (184 -189) được bổ làm Thứ sử Giao Châu. Vào thời điểm này, Lý Tiến đã đề nghị triều đình Hán cho một số người đỗ Hiếu liêm (tương tự như Cử nhân), Mậu tài (tương tự như Tú tài), được giữ chức Trưởng lại ở Giao Châu.\n\nSau này, một số quan lại người Giao Chi như Lý cầm, Bốc Long làm Túc vệ ở Kinh thành Lạc Dương và một số người khác đã tâu xin triều đình cho phép những người dân Giao Châu đã đỗ Hiếu liêm và Mậu tài được làm quan ở Trung nguyên, nhưng triều đình Hán chi bổ nhiệm Khi Sĩ Nhiếp làm Thái thú ở Giao Chì, Nho học đã được phổ biến rộng rãi hơn trong tầng lớp quý tộc. Năm 187, Sĩ Nhiếp đang làm Huyện lệnh ở Vu Dương thì được vua Hán cử sang làm Thái thú quận Giao Chỉ. Sĩ Nhiếp đã nắm toàn bộ quyền hành ở Giao Chi như một chính quyền cát cứ, đóng trị sờ ở Luy Lâu, xây dựng Luy Lâu thành một trung tôm chính trị, kinh tế và văn hón trong hơn 40 năm. Sĩ Nhiếp là người được các sách sử Trung Quốc và Việt Nam đánh giá cao. Viên Huy, người nước Trần lúc bấy giờ dẫn truyện Sĩ Nhiếp trong Ngô chí như sau : "Nhiếp tên tự là Nghiện Uy, người đất Quảng Tín, quận Thương Ngô. Tiên tổ Sĩ Nhiếp gốc người đất Vấn Dương nước Lỗ", Nhiếp đã đỗ Hiếu liêm và Mậu tài.',
    description: 'Việc truyền bá Nho học ở Giao Châu được thúc đẩy bởi các Thái thú như Tích Quang (ở Giao Chỉ) và Nhâm Diên (ở Cửu Chân), những người đã lập trường dạy lễ nghĩa và cải thiện phong tục hôn nhân. Sự học hành phát triển giúp một số người Giao Chỉ như Trương Trọng (Thái thú Kim Thành) và Lý Tiến (Thứ sử Giao Châu) được bổ nhiệm vào các chức vụ quan trọng. Lý Tiến còn đề nghị cho người Giao Châu đỗ đạt được làm quan. Đến thời Sĩ Nhiếp làm Thái thú Giao Chỉ (từ năm 187), Nho học càng được phổ biến rộng rãi trong tầng lớp quý tộc. Sĩ Nhiếp, người gốc Quảng Tín, đã xây dựng Luy Lâu thành một trung tâm chính trị, kinh tế và văn hóa quan trọng, cai quản Giao Chỉ như một chính quyền cát cứ trong hơn 40 năm và được đánh giá cao trong sử sách.',
    period: 'period_1',
    characters: ['Tích Quang', 'Nhâm Diên', 'Vương Mãng', 'Trương Trọng', 'Hán Minh Đế', 'Lý Tiến', 'Lý Cầm', 'Bốc Long', 'Sĩ Nhiếp (Nghiện Uy)', 'Viên Huy'],
    locations: ['Giao Chỉ', 'Cửu Chân', 'Quận Hán Trung', 'Quận Nhật Nam', 'Kim Thành', 'Giao Châu', 'Kinh thành Lạc Dương', 'Trung Nguyên', 'Vu Dương', 'Luy Lâu', 'Quảng Tín', 'Quận Thương Ngô', 'Nước Lỗ', 'Nước Trần'],
    questions: [
      {
        question: 'Hai Thái thú nào đã có công "dựng học hiệu để dạy lễ nghĩa" ở Giao Chỉ và Cửu Chân?',
        options: ['Lý Tiến và Trương Trọng', 'Sĩ Nhiếp và Vương Mãng', 'Tích Quang và Nhâm Diên', 'Lý Cầm và Bốc Long'],
        correctAnswer: 2,
        explanation: 'Hai Thái thú Tích Quang, Nhâm Diên đã "dựng học hiệu để dạy lễ nghĩa" ở Giao Chi, Cửu Chân.'
      },
      {
        question: 'Nhâm Diên đã dạy dân Cửu Chân về lễ nghĩa giá thú như thế nào?',
        options: ['Khuyến khích tảo hôn', 'Cấm kết hôn với người ngoại tộc', 'Dạy trai gái tuổi ngang nhau thì kết hôn và giúp đỡ người nghèo làm sính lễ', 'Chỉ cho phép quý tộc kết hôn'],
        correctAnswer: 2,
        explanation: 'Nhâm Diên khi ở Cửu Chân đã dạy dân lễ nghĩa: "dân không biết lễ phép giá thú, bèn dạy cho biết trai gái tuổi ngang nhau thì kết làm vợ chồng, dân nghèo không có sính lễ thi Diên bảo các Trưởng lại trở xuống bớt bổng lộc ra để giúp đỡ".'
      },
      {
        question: 'Lý Tiến, một người Giao Chỉ, đã được bổ nhiệm làm chức vụ gì trong khoảng năm 184-189?',
        options: ['Thái thú Kim Thành', 'Công tào', 'Thứ sử Giao Châu', 'Trưởng lại ở Giao Châu'],
        correctAnswer: 2,
        explanation: 'Lý Tiến... đến năm (184 -189) được bổ làm Thứ sử Giao Châu.'
      },
      {
        question: 'Sĩ Nhiếp được vua Hán cử làm Thái thú quận Giao Chỉ vào năm nào?',
        options: ['Năm 58 SCN', 'Năm 184', 'Năm 187', 'Năm 190'],
        correctAnswer: 2,
        explanation: 'Năm 187, Sĩ Nhiếp đang làm Huyện lệnh ở Vu Dương thì được vua Hán cử sang làm Thái thú quận Giao Chỉ.'
      },
      {
        question: 'Sĩ Nhiếp đã xây dựng địa điểm nào thành một trung tâm chính trị, kinh tế và văn hóa quan trọng ở Giao Chỉ?',
        options: ['Vu Dương', 'Kim Thành', 'Cửu Chân', 'Luy Lâu'],
        correctAnswer: 3,
        explanation: 'Sĩ Nhiếp... đóng trị sở ở Luy Lâu, xây dựng Luy Lâu thành một trung tâm chính trị, kinh tế và văn hóa trong hơn 40 năm.'
      }
    ],
    rewards: {
      experience: 280,
      coins: 140
    }
  },
  {
    id: 'event_si_nhiep_nho_hoc_legacy_lan_truyen_giao_chau',
    heading: 'Sĩ Nhiếp, di sản Nho học và sự truyền bá ở Giao Châu (thế kỷ 2-3 SCN)',
    year: 200,
    type: 'cultural',
    context: 'Một số sử gia phong kiến chính thống, trong đó có Ngô Sĩ Liên, đánh giá rất cao Sĩ Nhiếp, gọi ông là Sĩ Vương, sánh ngang với các bậc vương giả, đồng thời coi Sĩ Nhiếp là ông tổ của Nho học ở Việt Nam. Tuy nhiên, các sử gia triều Nguyễn khi soạn sách Khám định Việt sử thông giám cương mục lại cho ràng: "Sĩ Nhiếp theo lệnh triều đình Trung Quốc phái sang làm Thái thú, không từng xưng vương bao giờ, the mà sử cũ cũng chép riêng đang ngụ ở Giao Châu đã viết: "Ông Sĩ Nhiếp ở quận Giao Chi đã mà Sĩ Nhiếp thường nghiên cứu và chú giải tường tận đều là những kỉnh điển của Nho gia như Xuân Thu Tả thị truyện, Thượng thư. Sách Việt sử thông giám cương mục còn cho biết: "Sĩ Nhiếp tính nết khoan hậu khiêm tổn, nhã nhặn, trọng đãi nhân sĩ, nên những đội ngũ sĩ phu này đã củng Sĩ Nhiếp khuếch trương Nho học ở đất Giao Châu. Trong số đó, có các nhân vật như Hứa Tĩnh, người quận Nhữ Nam, đậu Hiếu liêm, làm Thượng thư lang, tránh loạn Đổng Trác đến Giao Châu. Ông từng được khen là "bậc anh tài sỹ vĩ, từ ngày lưu lạc đến nơi rừng núi xa xôi vẫn được các nhân sĩ đi theo". Lưu Hy người Bắc Hải tỵ nạn sang Giao Châu vào đời Kiến An (196 - 219). Theo sách Bách Việt tiên hiền chí, ông là người: "học rộng biết nhiều, tiếng tăm lừng lẫy".\n\nTrên đất Giao Châu, ông đào tạo được rất nhiều học trò giỏi, ông còn là một nhà ngôn ngữ học. Có 3 môn đệ đã theo Lưu Hy sang đất Giao Châu và cũng trở nên nổi tiếng trong giới Nho học phương Nam là Hứa Từ, Trình Binh, Tiết Tông. Chữ Hán lúc này đã trở thành công cụ chuyển tải tri thức, không chỉ riêng Nho giáo mà cả Phật giáo và Đạo giáo trên đất Giao Châu. Các nhà nghiên cứu sau này cho rằng Sĩ Nhiếp là người có công trong việc truyền bá Nho học vào Giao Châu. Ông đã xây dựng, tổ chức nên một hệ thống trường học để đào tạo, chuẩn bị cho đội ngũ trí thức làm quan lại ở châu Giao, nơi Sĩ Nhiếp có ý đồ hùng cứ, tách khỏi nhà Hán.\n\nĐiều này cho thấy mục tiêu tuyên truyền Nho học của chính quyền đô hộ chi nhàm đào tạo một tầng lớp quan lại hạ cấp, phục vụ cho mưu đồ thống trị của người Hán trên đất Giao Châu. Lúc này ở Trung Quốc, Nho giáo đang tạm thời thất thế, Phật giáo và Đạo giáo đang thịnh hành hơn, nhưng ở Giao Châu, Nho giáo vẫn đang được truyền bá mạnh mẽ. Sách Tam quốc chí của Trần Thọ cho hay vào thời Tôn Quyền, Ngu Phiên bị đày sang Giao Châu; "tuy thân tù tội, nhưng giảng học không biết mệt mỏi, môn đồ thường có vài trăm người". Các sách mà ông dùng để giảng dạy đều là kinh điển của Nho gia như Luận ngữ, Quốc ngữ, Kinh dịch. Ngoài ra, ông còn thuyết giảng mang nhiều trường học à Giao Châu. Các sĩ phu truyền giảng Nho giáo ở thời kỳ này chú trọng truyền bá Kinh lễ, cũng như phong tục tín ngưỡng cổ truyền của người Việt. Trong quá trình du nhập, tồn tại và phát triển ở Việt Nam, cho đến thời Lục triều, Nho giáo - một trường phái tư tưởng, triết học lớn ở Trung Quốc đã được truyền bá trong một chừng mực nhất định ở Giao Châu.',
    description: 'Sĩ Nhiếp được các sử gia như Ngô Sĩ Liên tôn vinh là "Sĩ Vương" và "ông tổ Nho học Việt Nam", dù sử gia Nguyễn có cái nhìn khác. Ông nổi tiếng khoan hậu, trọng đãi nhân sĩ như Hứa Tĩnh, Lưu Hy (nhà ngôn ngữ học, thầy của Hứa Từ, Trình Binh, Tiết Tông), giúp khuếch trương Nho học ở Giao Châu thông qua nghiên cứu kinh điển (Xuân Thu Tả thị truyện, Thượng thư) và xây dựng trường học, có thể với ý đồ hùng cứ. Dù Nho giáo thất thế ở Trung Quốc, nó vẫn mạnh mẽ ở Giao Châu, được các nhân vật như Ngu Phiên (bị đày thời Tôn Quyền) tiếp tục giảng dạy (Luận ngữ, Quốc ngữ, Kinh dịch) cho hàng trăm môn đồ. Chữ Hán trở thành công cụ truyền bá tri thức, bao gồm cả Phật giáo và Đạo giáo. Các sĩ phu cũng chú trọng truyền bá Kinh lễ và phong tục Việt.',
    period: 'period_1',
    characters: ['Ngô Sĩ Liên', 'Sĩ Nhiếp (Sĩ Vương)', 'Hứa Tĩnh', 'Đổng Trác', 'Lưu Hy', 'Hứa Từ', 'Trình Binh', 'Tiết Tông', 'Trần Thọ', 'Tôn Quyền', 'Ngu Phiên'],
    locations: ['Việt Nam', 'Trung Quốc', 'Giao Châu (Quận Giao Chi)', 'Quận Nhữ Nam', 'Bắc Hải'],
    questions: [
      {
        question: 'Sử gia Ngô Sĩ Liên đã tôn Sĩ Nhiếp là gì?',
        options: ['Nam Đế', 'Sĩ Vương', 'Vua Giao Chỉ', 'Đại Nho'],
        correctAnswer: 1,
        explanation: 'Một số sử gia phong kiến chính thống, trong đó có Ngô Sĩ Liên, đánh giá rất cao Sĩ Nhiếp, gọi ông là Sĩ Vương.'
      },
      {
        question: 'Hai kinh điển Nho gia nào được Sĩ Nhiếp thường xuyên nghiên cứu và chú giải?',
        options: ['Luận ngữ và Đại học', 'Kinh Dịch và Kinh Lễ', 'Xuân Thu Tả thị truyện và Thượng thư', 'Trung Dung và Mạnh Tử'],
        correctAnswer: 2,
        explanation: 'Sĩ Nhiếp thường nghiên cứu và chú giải tường tận đều là những kinh điển của Nho gia như Xuân Thu Tả thị truyện, Thượng thư.'
      },
      {
        question: 'Ai là một nhà ngôn ngữ học, tỵ nạn sang Giao Châu đời Kiến An, đào tạo nhiều học trò giỏi và có 3 môn đệ nổi tiếng là Hứa Từ, Trình Binh, Tiết Tông?',
        options: ['Hứa Tĩnh', 'Ngu Phiên', 'Lưu Hy', 'Sĩ Nhiếp'],
        correctAnswer: 2,
        explanation: 'Lưu Hy người Bắc Hải tỵ nạn sang Giao Châu vào đời Kiến An... Trên đất Giao Châu, ông đào tạo được rất nhiều học trò giỏi, ông còn là một nhà ngôn ngữ học. Có 3 môn đệ đã theo Lưu Hy sang đất Giao Châu và cũng trở nên nổi tiếng... là Hứa Từ, Trình Binh, Tiết Tông.'
      },
      {
        question: 'Ngu Phiên, bị Tôn Quyền đày sang Giao Châu, đã làm gì dù thân tù tội?',
        options: ['Nổi dậy chống lại chính quyền', 'Giảng học không biết mệt mỏi, có hàng trăm môn đồ', 'Viết sách chỉ trích Tôn Quyền', 'Trở thành một thương gia giàu có'],
        correctAnswer: 1,
        explanation: 'Sách Tam quốc chí của Trần Thọ cho hay vào thời Tôn Quyền, Ngu Phiên bị đày sang Giao Châu; "tuy thân tù tội, nhưng giảng học không biết mệt mỏi, môn đồ thường có vài trăm người".'
      },
      {
        question: 'Mục tiêu của Sĩ Nhiếp khi xây dựng hệ thống trường học và đào tạo trí thức ở Giao Châu, theo một số nhà nghiên cứu, là gì?',
        options: ['Phục vụ cho triều đình Hán', 'Chuẩn bị lực lượng chống lại Phật giáo và Đạo giáo', 'Nâng cao dân trí thuần túy', 'Chuẩn bị cho ý đồ hùng cứ, tách khỏi nhà Hán'],
        correctAnswer: 3,
        explanation: 'Ông đã xây dựng, tổ chức nên một hệ thống trường học để đào tạo, chuẩn bị cho đội ngũ trí thức làm quan lại ở châu Giao, nơi Sĩ Nhiếp có ý đồ hùng cứ, tách khỏi nhà Hán.'
      }
    ],
    rewards: {
      experience: 300,
      coins: 150
    }
  },
  {
    id: 'event_nho_giao_phat_giao_du_nhap_va_tiep_bien_van_hoa_viet',
    heading: 'Nho giáo thời đô hộ, sự tiếp biến văn hóa Việt và du nhập Phật giáo (đầu Công nguyên)',
    year: 100,
    type: 'cultural',
    context: 'Sự phát triển của Nho giáo ở thời kỳ này là một phần trong chính sách của chính quyền đô hộ Trung Quốc nhằm đào tạo nên một lớp quan lại cấp thấp ở bản xứ, phục vụ cho chính sách khai thác, bóc lột. Việc truyền bá Nho giáo cũng nằm trong ý đồ quảng bá văn hóa Hán để đồng hóa dân tộc. Tuy nhiên, việc tiếp thu những giá trị văn hóa này của một bộ phận quý tộc, Nho sĩ chủ yếu ở các trung tâm như châu trị, quận trị cũng không gây ảnh hưởng nhiều đến sự phát triển của văn hóa Việt ở thời kỳ này. Trong suốt tiến trình lịch sử, văn hóa Hán và Nho giáo được người Việt tiếp biến có chọn lọc, thể hiện ở sự bảo tồn giống nòi và văn hóa Việt. Trong tiếng Việt, người ta thấy có nhiều yếu tố của ngôn ngữ Hán. Nhiều từ gốc Hán xuất hiện cả trong vốn từ vựng cơ bản, nhưng những từ ngữ ấy đã được Việt hóa trong cách dùng, cách đọc để tạo thành một lớp từ mới mà người ta gọi là từ Hán - Việt. Như vậy, qua lăng kính của người Việt, Nho giáo đã "khúc xạ" để mang đậm bộ mặt văn hóa Việt Nam.\n\nSự du nhập của Phật giáo. Đạo Phật là một trong những dòng tư tưởng xuất hiện ở Ấn Độ vào giữa thiên niên kỷ I TCN. Người sáng lập ra đạo Phật là Tất-đạt-đa Cồ-đàm (Siddhartha Gautama), sau khi thành Phật được đệ tử tôn xưng là Sakya Muni (Thích Ca Mâu Ni). Trong vòng hai thế kỷ đầu Công nguyên, đạo Phật đã du nhập vào nước ta theo hai con đường: từ Ấn Độ và từ Trung Quốc. Con đường thứ nhất là đường biển. Xuất phát từ các cảng vùng Nam Á rồi qua các ngả Sri Lanka, Java, Phù Nam, Champa, Giao Châu rồi sang miền Giang Nam, Trung Quốc. Những thương nhân Ấn Độ đã tới các vùng này để buôn bán bằng những con thuyền buồm. Trong các chuyến đi viễn dương này, các thương nhân thường cung thỉnh một hay hai vị tăng để cầu nguyện cho thủy thủ đoàn và các vị tăng này nhờ đó mà đến truyền bá đạo Phật vào các dân tộc ở Đông Nam Á.',
    description: 'Nho giáo được chính quyền đô hộ Trung Quốc truyền bá nhằm đào tạo quan lại cấp thấp và đồng hóa dân tộc, tuy nhiên người Việt đã tiếp biến có chọn lọc, thể hiện qua sự Việt hóa các yếu tố Hán, tạo ra từ Hán-Việt và làm cho Nho giáo "khúc xạ" mang màu sắc văn hóa Việt. Cùng thời gian này, Phật giáo, do Tất-đạt-đa Cồ-đàm (Thích Ca Mâu Ni) sáng lập ở Ấn Độ, đã du nhập vào Việt Nam trong hai thế kỷ đầu Công nguyên. Phật giáo đến Việt Nam qua hai con đường chính: đường biển từ Ấn Độ qua các nước Đông Nam Á (nhờ các thương nhân Ấn Độ mang theo tăng sĩ) và đường bộ từ Trung Quốc.',
    period: 'period_1',
    characters: ['Tất-đạt-đa Cồ-đàm (Siddhartha Gautama)', 'Sakya Muni (Thích Ca Mâu Ni)'],
    locations: ['Trung Quốc', 'Việt Nam', 'Ấn Độ', 'Nam Á', 'Sri Lanka', 'Java', 'Phù Nam', 'Champa', 'Giao Châu', 'Giang Nam', 'Đông Nam Á'],
    questions: [
      {
        question: 'Mục đích chính của chính quyền đô hộ Trung Quốc khi truyền bá Nho giáo ở Việt Nam là gì?',
        options: ['Nâng cao dân trí và phát triển văn hóa Việt', 'Đào tạo quan lại cấp thấp và đồng hóa dân tộc', 'Thúc đẩy giao thương với Trung Quốc', 'Giúp người Việt xây dựng nhà nước tự chủ'],
        correctAnswer: 1,
        explanation: 'Context nêu rõ: "Sự phát triển của Nho giáo ở thời kỳ này là một phần trong chính sách của chính quyền đô hộ Trung Quốc nhằm đào tạo nên một lớp quan lại cấp thấp ở bản xứ, phục vụ cho chính sách khai thác, bóc lột. Việc truyền bá Nho giáo cũng nằm trong ý đồ quảng bá văn hóa Hán để đồng hóa dân tộc."'
      },
      {
        question: 'Sự tiếp biến văn hóa Hán của người Việt trong ngôn ngữ thể hiện rõ qua việc hình thành lớp từ nào?',
        options: ['Từ thuần Việt', 'Từ Nôm', 'Từ Hán - Việt', 'Từ mượn phương Tây'],
        correctAnswer: 2,
        explanation: 'Context cho biết: "...những từ ngữ ấy đã được Việt hóa trong cách dùng, cách đọc để tạo thành một lớp từ mới mà người ta gọi là từ Hán - Việt."'
      },
      {
        question: 'Ai là người sáng lập ra đạo Phật?',
        options: ['Khổng Tử', 'Lão Tử', 'Tất-đạt-đa Cồ-đàm', 'Vua A Dục'],
        correctAnswer: 2,
        explanation: 'Context ghi: "Người sáng lập ra đạo Phật là Tất-đạt-đa Cồ-đàm (Siddhartha Gautama), sau khi thành Phật được đệ tử tôn xưng là Sakya Muni (Thích Ca Mâu Ni)."'
      },
      {
        question: 'Đạo Phật du nhập vào nước ta theo hai con đường chính trong khoảng thời gian nào?',
        options: ['Thiên niên kỷ I TCN', 'Hai thế kỷ đầu Công nguyên', 'Thế kỷ V - VI SCN', 'Thời kỳ Bắc thuộc lần thứ ba'],
        correctAnswer: 1,
        explanation: 'Context nói: "Trong vòng hai thế kỷ đầu Công nguyên, đạo Phật đã du nhập vào nước ta theo hai con đường: từ Ấn Độ và từ Trung Quốc."'
      },
      {
        question: 'Con đường biển đưa Phật giáo vào Việt Nam có sự tham gia tích cực của đối tượng nào từ Ấn Độ?',
        options: ['Các nhà sư đi hành hương', 'Quân đội viễn chinh', 'Thương nhân Ấn Độ', 'Các nhà ngoại giao'],
        correctAnswer: 2,
        explanation: 'Context đề cập: "Những thương nhân Ấn Độ đã tới các vùng này để buôn bán bằng những con thuyền buồm. Trong các chuyến đi viễn dương này, các thương nhân thường cung thỉnh một hay hai vị tăng... nhờ đó mà đến truyền bá đạo Phật..."'
      }
    ],
    rewards: {
      experience: 200,
      coins: 100
    }
  },
  {
    id: 'event_phat_giao_du_nhap_hinh_thanh_viet_nam_luy_lau',
    heading: 'Sự du nhập và hình thành Phật giáo ở Việt Nam: Luy Lâu và vai trò các sư tăng Ấn Độ (thế kỷ II-V)',
    year: 168,
    type: 'cultural',
    context: 'Giao Châu, tiêu biểu bấy giờ là trung tâm Luy Lâu, là nơi tụ điểm nghỉ chân, giao lưu của các thương thuyền. Con đường thứ hai là đường bộ. Các sư tăng Ấn Độ đã theo "con đường tơ lụa" nối liền Trung Quốc với Ấn Độ để tới truyền giáo ở Bắc Trung Quốc, rồi từ đó truyền bá xuống Giao Châu. Căn cứ vào ghi chép của Thủy kinh chú và một số sách sử Trung Quốc, nhiều nhà nghiên cứu đã đưa ra ý kiến rằng vào năm 240 TCN, Mahoda - con vua A Dục (Asoka) ở Ấn Độ đã đưa đạo Phật vào Việt Nam. Tại thành Nê Lê ở Đồ Sơn (Hải Phòng) còn có bảo tháp của vua Asoka. Theo Lĩnh Nam chích quái thì từ thời Hùng Vương, Chử Đồng Tử đã theo một thương nhân nước ngoài đi thuyền ra một hòn đảo, gặp một nhà sư Ấn Độ. Ông ở đó học đạo Phật, khi về được nhà sư cho một cái nón và cây gậy có phép lạ.\n\nBỏ qua những yếu tố huyền thoại, có thể nghĩ đến một giả thuyết về sự hiện diện của đạo Phật ở Việt Nam trong giai đoạn này. Theo ý kiến của các nhà nghiên cứu, giai đoạn từ thế kỷ II đến thế kỷ V được coi là thời kỳ du nhập và hình thành của Phật giáo Việt Nam. Sau khi đã truyền vào đất Việt, nhờ sự hoạt động tích cực của các sư tăng Ấn Độ, Luy Lâu - thủ phủ của đất Giao Chỉ đã nhanh chóng trở thành một trong ba trung tâm Phật giáo ở khu vực. Vị sư nổi tiếng với những hoạt động hoằng pháp ở khu vực này là Khâu Đà La (Ksudra). Ông là người Ấn Độ đã đến Luy Lâu vào khoảng năm 168 - 169. Truyền thuyết về Thạch Quang Phật và Man Nương Phật Mầu ở vùng Thuận Thành ngày nay đã thể hiện sự du nhập và Việt Nam hóa đạo Phật trên vùng đất cổ này.',
    description: 'Phật giáo du nhập vào Giao Châu không chỉ qua đường biển mà còn qua đường bộ, khi các sư tăng Ấn Độ theo "con đường tơ lụa" đến Trung Quốc rồi xuống Giao Châu. Có những giả thuyết cho rằng Phật giáo đến Việt Nam sớm hơn, từ thời vua A Dục (Mahoda, 240 TCN) hoặc thời Hùng Vương (Chử Đồng Tử). Giai đoạn từ thế kỷ II đến thế kỷ V được coi là thời kỳ hình thành Phật giáo Việt Nam. Luy Lâu, thủ phủ Giao Chỉ, trở thành một trung tâm Phật giáo quan trọng nhờ hoạt động của các sư tăng Ấn Độ, nổi bật là Khâu Đà La (đến Luy Lâu khoảng 168-169). Sự Việt Nam hóa đạo Phật được thể hiện qua các truyền thuyết như Thạch Quang Phật và Man Nương Phật Mầu.',
    period: 'period_1',
    characters: ['Mahoda', 'Vua A Dục (Asoka)', 'Chử Đồng Tử', 'Khâu Đà La (Ksudra)', 'Thạch Quang Phật', 'Man Nương Phật Mầu'],
    locations: ['Giao Châu', 'Luy Lâu', 'Trung Quốc', 'Ấn Độ', 'Bắc Trung Quốc', 'Thành Nê Lê (Đồ Sơn, Hải Phòng)', 'Giao Chỉ', 'Thuận Thành'],
    questions: [
      {
        question: 'Trung tâm nào ở Giao Châu đã trở thành một trong ba trung tâm Phật giáo quan trọng trong khu vực nhờ sự hoạt động của các sư tăng Ấn Độ?',
        options: ['Thăng Long', 'Hoa Lư', 'Luy Lâu', 'Phố Hiến'],
        correctAnswer: 2,
        explanation: 'Context cho biết: "...Luy Lâu - thủ phủ của đất Giao Chỉ đã nhanh chóng trở thành một trong ba trung tâm Phật giáo ở khu vực."'
      },
      {
        question: 'Theo một số nhà nghiên cứu, ai là người có thể đã đưa đạo Phật vào Việt Nam từ năm 240 TCN?',
        options: ['Khâu Đà La', 'Mahoda', 'Chử Đồng Tử', 'Vua Hùng'],
        correctAnswer: 1,
        explanation: 'Context ghi: "...vào năm 240 TCN, Mahoda - con vua A Dục (Asoka) ở Ấn Độ đã đưa đạo Phật vào Việt Nam."'
      },
      {
        question: 'Giai đoạn nào được các nhà nghiên cứu coi là thời kỳ du nhập và hình thành của Phật giáo Việt Nam?',
        options: ['Thế kỷ I TCN - Thế kỷ I SCN', 'Thế kỷ II đến thế kỷ V SCN', 'Thế kỷ VI - Thế kỷ VIII SCN', 'Thời kỳ Hùng Vương'],
        correctAnswer: 1,
        explanation: 'Context nêu: "Theo ý kiến của các nhà nghiên cứu, giai đoạn từ thế kỷ II đến thế kỷ V được coi là thời kỳ du nhập và hình thành của Phật giáo Việt Nam."'
      },
      {
        question: 'Vị sư Ấn Độ nào nổi tiếng với những hoạt động hoằng pháp ở Luy Lâu vào khoảng năm 168 - 169?',
        options: ['Mahoda', 'Asoka', 'Khâu Đà La', 'Đạt-Ma-Đề-Bà'],
        correctAnswer: 2,
        explanation: 'Context viết: "Vị sư nổi tiếng với những hoạt động hoằng pháp ở khu vực này là Khâu Đà La (Ksudra). Ông là người Ấn Độ đã đến Luy Lâu vào khoảng năm 168 - 169."'
      },
      {
        question: 'Truyền thuyết nào ở vùng Thuận Thành thể hiện sự du nhập và Việt Nam hóa đạo Phật?',
        options: ['Sơn Tinh - Thủy Tinh', 'Thánh Gióng', 'Bánh chưng - Bánh giầy', 'Thạch Quang Phật và Man Nương Phật Mầu'],
        correctAnswer: 3,
        explanation: 'Context đề cập: "Truyền thuyết về Thạch Quang Phật và Man Nương Phật Mầu ở vùng Thuận Thành ngày nay đã thể hiện sự du nhập và Việt Nam hóa đạo Phật trên vùng đất cổ này."'
      }
    ],
    rewards: {
      experience: 220,
      coins: 110
    }
  },
  {
    id: 'event_luy_lau_trung_tam_phat_giao_som_va_cac_cao_tang',
    heading: 'Luy Lâu - Trung tâm Phật giáo sớm, các cao tăng và sự phát triển Thiền học ở Giao Châu (cuối TK II - TK V)',
    year: 190,
    type: 'cultural',
    context: 'Ba trung tâm Phật giáo ở thời Hán là trung tâm Lạc Dương ở Hà Nam (Kinh đô của nhà Đông Hán) trung tâm Bành Thành ở Giang Tô, thuộc hạ lưu sông Trường Giang và trung tâm Luy Lâu ở Giao Chi. Theo ý kiến của các nhà nghiên cứu trung tâm Luy Lâu có thể ra đời sớm nhất. Phật giáo vào Giao Châu đã hòa đồng với các tín ngưỡng dân gian để tồn tại và phát triển. Bốn chùa Tứ Pháp ở Luy Lâu chắc chắn là sự kết hợp việc thờ các nữ thần nông nghiệp gồm mây - có ghi lại cuộc trao đổi giữa Thái hậu Linh Nhân với Thiền sư Thông Biện ở thòi Lý về nguồn gốc của đạo Phật ở Việt Nam. Thiền sư đã dẫn ra lời sư Đàm Thiên trả lời vua Tùy Văn đế như sau: "Xứ Giao Châu có đường thông sang Thiên Trúc. Phật giáo vào Trung Quốc, chưa phổ cập đến Giang Đông mà xứ ấy đã xây ở Luy Lâu hơn 20 bảo tháp, độ được hơn 500 vị tăng và dịch được 15 bộ Kinh rồi. Thế là xứ ấy theo đạo Phật trước ta". Cũng theo lời sư Đàm Thiên, thời điểm đó các vị cao tăng nổi tiếng như Ma-la-kỳ-vực (Marajivaka) người Ấn Độ; Khương Tăng Hội người vùng Khương Cư (Sogdiane); Chi Cương Lương người nước Nhục Chi và Mâu Bác đang truyền đạo ở Giao Châu. Bằng chữ Hán, tác phẩm mang tên Lý hoặc luận đã được viết ở Giao Châu vào cuối thế kỷ II. Tác giả là Mâu Tử, người gốc Thương Ngô, sinh khoảng năm 165 đến 170, theo mẹ sang Giao Châu vào đời Hán Linh đế. Ông đã học Phật ở đất Giao Châu, nghiên cứu cả các kinh sách của đạo Nho và đạo Lão. Thời kỳ sau, có hai vị thiền sư ở Giao Châu được nhắc đến trong sách Tục cao tăng truyện là Đạt-Ma-Đề-Bà và sư Huệ Thắng. Hai ông chuyên giảng về các phương pháp thực hành Thiền học. Đạt-Ma-Đề-Bà là người Ấn Độ, ông đến Giao Châu vào khoảng thế kỷ V. Sư Huệ Thắng tu ở chùa trên núi Tiên Du, ông là học trò xuất sắc của Đạt-Ma-Đề-Bà. Ông đã vân du khắp các miền trong nước để giảng đạo và đã từng được mời sang Trung Quốc. Viện Sử học coi ông là tổ của phái Thiền Việt.',
    description: 'Luy Lâu ở Giao Chỉ là một trong ba trung tâm Phật giáo lớn thời Hán, có thể là trung tâm ra đời sớm nhất, nơi Phật giáo hòa quyện với tín ngưỡng dân gian (ví dụ: chùa Tứ Pháp). Theo sư Đàm Thiên, Giao Châu tiếp nhận Phật giáo trước cả vùng Giang Đông của Trung Quốc, với nhiều tháp được xây, tăng sĩ tu hành và kinh sách được dịch. Nhiều cao tăng như Ma-la-kỳ-vực, Khương Tăng Hội, Chi Cương Lương, Mâu Bác đã truyền đạo tại đây. Mâu Tử, người gốc Thương Ngô, đã viết tác phẩm "Lý hoặc luận" ở Giao Châu vào cuối thế kỷ II. Sau đó, Thiền học phát triển với các thiền sư như Đạt-Ma-Đề-Bà (người Ấn Độ, đến Giao Châu thế kỷ V) và học trò ông là sư Huệ Thắng (được coi là tổ phái Thiền Việt).',
    period: 'period_1',
    characters: ['Thái hậu Linh Nhân', 'Thiền sư Thông Biện', 'Sư Đàm Thiên', 'Vua Tùy Văn đế', 'Ma-la-kỳ-vực (Marajivaka)', 'Khương Tăng Hội', 'Chi Cương Lương', 'Mâu Bác', 'Mâu Tử', 'Hán Linh đế', 'Đạt-Ma-Đề-Bà', 'Sư Huệ Thắng'],
    locations: ['Lạc Dương (Hà Nam)', 'Bành Thành (Giang Tô)', 'Sông Trường Giang', 'Luy Lâu (Giao Chỉ)', 'Giao Châu', 'Thiên Trúc (Ấn Độ)', 'Trung Quốc', 'Giang Đông', 'Khương Cư (Sogdiane)', 'Nước Nhục Chi', 'Thương Ngô', 'Núi Tiên Du'],
    questions: [
      {
        question: 'Theo lời sư Đàm Thiên, xứ nào đã theo đạo Phật trước cả vùng Giang Đông của Trung Quốc và có nhiều cơ sở Phật giáo phát triển?',
        options: ['Lạc Dương', 'Bành Thành', 'Giao Châu', 'Thiên Trúc'],
        correctAnswer: 2,
        explanation: 'Thiền sư Thông Biện dẫn lời sư Đàm Thiên: "Xứ Giao Châu... Phật giáo vào Trung Quốc, chưa phổ cập đến Giang Đông mà xứ ấy đã xây ở Luy Lâu hơn 20 bảo tháp, độ được hơn 500 vị tăng và dịch được 15 bộ Kinh rồi. Thế là xứ ấy theo đạo Phật trước ta."'
      },
      {
        question: 'Tác phẩm Phật giáo nổi tiếng nào được Mâu Tử viết ở Giao Châu vào cuối thế kỷ II?',
        options: ['Kim Cang Kinh', 'Pháp Hoa Kinh', 'Lý hoặc luận', 'Đại Đường Tây Vực Ký'],
        correctAnswer: 2,
        explanation: 'Context ghi: "Bằng chữ Hán, tác phẩm mang tên Lý hoặc luận đã được viết ở Giao Châu vào cuối thế kỷ II. Tác giả là Mâu Tử..."'
      },
      {
        question: 'Thiền sư Ấn Độ nào đã đến Giao Châu vào khoảng thế kỷ V và chuyên giảng về các phương pháp thực hành Thiền học?',
        options: ['Khâu Đà La', 'Ma-la-kỳ-vực', 'Đạt-Ma-Đề-Bà', 'Khương Tăng Hội'],
        correctAnswer: 2,
        explanation: 'Context cho biết: "Đạt-Ma-Đề-Bà là người Ấn Độ, ông đến Giao Châu vào khoảng thế kỷ V. Hai ông (Đạt-Ma-Đề-Bà và Huệ Thắng) chuyên giảng về các phương pháp thực hành Thiền học."'
      },
      {
        question: 'Ai được Viện Sử học coi là tổ của phái Thiền Việt?',
        options: ['Mâu Tử', 'Đạt-Ma-Đề-Bà', 'Sư Huệ Thắng', 'Khương Tăng Hội'],
        correctAnswer: 2,
        explanation: 'Context nói: "Sư Huệ Thắng... Viện Sử học coi ông là tổ của phái Thiền Việt."'
      },
      {
        question: 'Sự hòa đồng giữa Phật giáo và tín ngưỡng dân gian ở Luy Lâu được thể hiện qua việc thờ cúng nào?',
        options: ['Thờ Tứ Bất Tử', 'Bốn chùa Tứ Pháp thờ các nữ thần nông nghiệp', 'Thờ Mẫu Tam Phủ', 'Thờ Thành Hoàng Làng'],
        correctAnswer: 1,
        explanation: 'Context đề cập: "Phật giáo vào Giao Châu đã hòa đồng với các tín ngưỡng dân gian để tồn tại và phát triển. Bốn chùa Tứ Pháp ở Luy Lâu chắc chắn là sự kết hợp việc thờ các nữ thần nông nghiệp..."'
      }
    ],
    rewards: {
      experience: 250,
      coins: 125
    }
  },
  {
    id: 'event_phat_giao_hoa_nhap_dao_giao_du_nhap_viet_nam',
    heading: 'Sự hòa nhập của Phật giáo và du nhập Đạo giáo vào Việt Nam (TK III TCN - TK V SCN)',
    year: 200,
    type: 'cultural',
    context: 'Tâm Phật giáo Bành Thành ở vùng Giang Đông để truyền giảng. Cũng do có con đường truyền trực tiếp từ Ấn Độ sang từ đầu Công nguyên, nên trong các truyện cổ tích Việt Nam xuất hiện từ Bụt, đây được coi là danh xưng Buddha (Bậc Giác ngộ) trong tiếng Phạn, phiên âm trực tiếp sang tiếng Việt (người Trung Quốc dịch là Phật). Trong con mắt của người Việt, Đức Phật được ví như một vị thần toàn năng có mặt ở khắp nơi, sẵn sàng chở che và cứu giúp mọi người. Như vậy, trong khoảng từ thế kỷ III TCN đến thế kỷ V, Phật giáo đã du nhập vào đất Việt một cách hòa bình, nó đã tiếp xúc với các tín ngưỡng bản địa trong xu thế dung hòa, hội nhập để tồn tại và mang thêm bản sắc văn hóa Việt. Sự du nhập của Đạo giáo: Từ thời cổ đại, trong xã hội Trung Quốc đã tồn tại các hình thức mê tín như cúng tế quỷ thần, phù phép, đồng bóng, bói toán, đặc biệt là tư tưởng tin vào thần tiên. Đến thời Đông Hán, những hình thức mê tín ấy kết hợp với học thuyết Đạo gia, dẫn đến sự ra đời của Đạo giáo. Nếu như Nho giáo chủ trương những phương châm ứng xử (nhập thế) thì Đạo giáo lại chủ trương xuất thế, chủ trương con người phải sống thoát tục vô vi, cởi bỏ mọi ràng buộc với xã hội để hòa quyện với thiên nhiên.\n\nSau này, với sự ra đời của Đạo Kim Đan mà đại biểu là Vu Cát, Đạo giáo đã khai thác những khía cạnh thần bí và xuất thế để biến thành một thứ đạo thần tiên, tôn Lão Tử làm Thái thượng Lão quân với những phương pháp luyện đan, tịch cốc, đi tìm những vị thuốc trường sinh. Bên cạnh đó, ở Trung Quốc cũng có một trường phái Đạo giáo mang tính chất dân gian, người ta thường gọi là đạo Phù thủy. Đây cũng là một học phái của Đạo gia, tôn thờ Hoàng đế và Lão Tử.',
    description: 'Phật giáo, du nhập vào Việt Nam từ khoảng thế kỷ III TCN đến thế kỷ V, đã hòa nhập một cách hòa bình với tín ngưỡng bản địa, thể hiện qua hình ảnh "Bụt" (phiên âm từ Buddha) gần gũi trong văn hóa dân gian. Song song đó, Đạo giáo hình thành ở Trung Quốc thời Đông Hán, từ sự kết hợp các tín ngưỡng mê tín cổ đại với học thuyết Đạo gia, chủ trương "xuất thế", sống vô vi hòa hợp với thiên nhiên, trái ngược với chủ trương "nhập thế" của Nho giáo. Các phái Đạo giáo như Đạo Kim Đan (do Vu Cát đại diện, tôn Lão Tử) và Đạo Phù thủy (tôn Hoàng Đế và Lão Tử) cũng dần xuất hiện.',
    period: 'period_1',
    characters: ['Đức Phật (Bụt)', 'Vu Cát', 'Lão Tử (Thái thượng Lão quân)', 'Hoàng đế'],
    locations: ['Bành Thành', 'Giang Đông', 'Ấn Độ', 'Việt Nam', 'Trung Quốc'],
    questions: [
      {
        question: 'Từ "Bụt" trong truyện cổ tích Việt Nam được coi là phiên âm trực tiếp từ danh xưng nào trong tiếng Phạn?',
        options: ['Bodhisattva', 'Arhat', 'Buddha', 'Dharma'],
        correctAnswer: 2,
        explanation: 'Context cho biết: "...trong các truyện cổ tích Việt Nam xuất hiện từ Bụt, đây được coi là danh xưng Buddha (Bậc Giác ngộ) trong tiếng Phạn, phiên âm trực tiếp sang tiếng Việt..."'
      },
      {
        question: 'Đạo giáo ra đời ở Trung Quốc vào thời kỳ nào, từ sự kết hợp của những yếu tố nào?',
        options: ['Thời Xuân Thu, từ học thuyết của Lão Tử', 'Thời Tây Hán, từ các trường phái triết học', 'Thời Đông Hán, từ tín ngưỡng mê tín và học thuyết Đạo gia', 'Thời Đường, từ Phật giáo và Nho giáo'],
        correctAnswer: 2,
        explanation: 'Context nêu: "Đến thời Đông Hán, những hình thức mê tín ấy kết hợp với học thuyết Đạo gia, dẫn đến sự ra đời của Đạo giáo."'
      },
      {
        question: 'Trái ngược với chủ trương "nhập thế" của Nho giáo, Đạo giáo chủ trương điều gì?',
        options: ['Tích cực tham gia chính trị', 'Tuân theo lễ nghi nghiêm ngặt', 'Xuất thế, sống thoát tục vô vi', 'Xây dựng xã hội quân chủ tập quyền'],
        correctAnswer: 2,
        explanation: 'Context viết: "Nếu như Nho giáo chủ trương những phương châm ứng xử (nhập thế) thì Đạo giáo lại chủ trương xuất thế, chủ trương con người phải sống thoát tục vô vi..."'
      },
      {
        question: 'Ai là đại biểu của Đạo Kim Đan, một phái Đạo giáo tôn Lão Tử làm Thái thượng Lão quân?',
        options: ['Trương Đạo Lăng', 'Vu Cát', 'Cát Hồng', 'Trương Giác'],
        correctAnswer: 1,
        explanation: 'Context đề cập: "...với sự ra đời của Đạo Kim Đan mà đại biểu là Vu Cát, Đạo giáo đã khai thác những khía cạnh thần bí và xuất thế để biến thành một thứ đạo thần tiên, tôn Lão Tử làm Thái thượng Lão quân..."'
      },
      {
        question: 'Đạo Phù thủy, một trường phái Đạo giáo mang tính chất dân gian ở Trung Quốc, tôn thờ những ai?',
        options: ['Ngọc Hoàng Thượng Đế và các vị tiên', 'Phật Thích Ca và Bồ Tát', 'Khổng Tử và các bậc thánh hiền Nho gia', 'Hoàng đế và Lão Tử'],
        correctAnswer: 3,
        explanation: 'Context ghi: "Đây cũng là một học phái của Đạo gia, tôn thờ Hoàng đế và Lão Tử."'
      }
    ],
    rewards: {
      experience: 210,
      coins: 105
    }
  },
  {
    id: 'event_dao_giao_du_nhap_giao_chau_cuoi_tk2',
    heading: 'Sự du nhập Đạo giáo vào Giao Châu và các biểu hiện ban đầu (cuối thế kỷ II)',
    year: 190,
    type: 'cultural',
    context: 'Đạo có nguồn gốc từ những tín ngưỡng sa-man giáo và ma thuật của núi, kết hợp với nhiều hình thức cầu cúng mang tính chất mê tín trong dân gian và cả ở cung đình như xem sao, bói rùa, cúng quỷ thần, đồng cốt, cầu tiên, thánh, chữa bệnh bằng bùa phép, bói toán. Đạo giáo là luồng tư tưởng và tín ngưỡng truyền vào nước ta từ khoảng cuối thế kỷ II. Sau khi vua Hán Linh đế băng hà, "Thiên hạ nhiễu nhương, chỉ có đất Giao Châu tương đối yên ổn, người nhiều đều có học". Nhiều quan lại Trung Hoa sang cai trị nước ta, cũng dùng những phương thuật ấy. Trương Tân, Thứ sử Giao Châu thích việc lễ bái quỷ thần, thường trùm một khăn tím và gảy đàn, đốt hương, đọc sách Đạo giáo. Tấn thư chép việc Cát Hồng kể lại là Sĩ Nhiếp đã từng mắc bệnh chết đến 3 ngày, sau được một đạo sĩ là Đổng Phụng cho một viên thuốc ngậm uống sau tỉnh lại ngay. Đạo giáo có hai phái là phái Thần tiên và phái Phù thủy. Đạo giáo Thần tiên dạy tu tiên, luyện thuốc trường sinh bất tử.',
    description: 'Đạo giáo, bắt nguồn từ các tín ngưỡng sa-man giáo, ma thuật và các hình thức cúng bái mê tín, đã truyền vào Việt Nam (Giao Châu) khoảng cuối thế kỷ II. Trong bối cảnh Trung Hoa loạn lạc sau khi Hán Linh Đế mất, Giao Châu trở thành nơi tương đối yên ổn, thu hút người có học. Nhiều quan lại Trung Hoa cai trị tại đây, như Thứ sử Trương Tân, đã thực hành các phương thuật của Đạo giáo. Sách Tấn thư cũng ghi lại việc đạo sĩ Đổng Phụng dùng thuốc cứu sống Sĩ Nhiếp. Đạo giáo có hai phái chính là phái Thần tiên (dạy tu tiên, luyện thuốc trường sinh) và phái Phù thủy.',
    period: 'period_1',
    characters: ['Hán Linh đế', 'Trương Tân', 'Cát Hồng', 'Sĩ Nhiếp', 'Đổng Phụng'],
    locations: ['Giao Châu', 'Trung Hoa'],
    questions: [
      {
        question: 'Đạo giáo bắt đầu truyền vào nước ta từ khoảng thời gian nào?',
        options: ['Đầu Công nguyên', 'Giữa thế kỷ I', 'Cuối thế kỷ II', 'Đầu thế kỷ III'],
        correctAnswer: 2,
        explanation: 'Context cho biết: "Đạo giáo là luồng tư tưởng và tín ngưỡng truyền vào nước ta từ khoảng cuối thế kỷ II."'
      },
      {
        question: 'Vị Thứ sử Giao Châu nào được mô tả là người thích việc lễ bái quỷ thần và thực hành các nghi lễ Đạo giáo?',
        options: ['Sĩ Nhiếp', 'Tích Quang', 'Nhâm Diên', 'Trương Tân'],
        correctAnswer: 3,
        explanation: 'Context ghi: "Trương Tân, Thứ sử Giao Châu thích việc lễ bái quỷ thần, thường trùm một khăn tím và gảy đàn, đốt hương, đọc sách Đạo giáo."'
      },
      {
        question: 'Theo Tấn thư, ai đã cứu Sĩ Nhiếp khi ông bị bệnh nặng tưởng chết bằng một viên thuốc?',
        options: ['Cát Hồng', 'Trương Tân', 'Một đạo sĩ tên Đổng Phụng', 'Một thầy lang người Việt'],
        correctAnswer: 2,
        explanation: 'Context kể lại: "Tấn thư chép việc Cát Hồng kể lại là Sĩ Nhiếp đã từng mắc bệnh chết đến 3 ngày, sau được một đạo sĩ là Đổng Phụng cho một viên thuốc ngậm uống sau tỉnh lại ngay."'
      },
      {
        question: 'Hai phái chính của Đạo giáo được đề cập trong đoạn văn là gì?',
        options: ['Phái Chính Nhất và phái Toàn Chân', 'Phái Thần tiên và phái Phù thủy', 'Phái Nội đan và phái Ngoại đan', 'Phái Thanh Đàm và phái Huyền Học'],
        correctAnswer: 1,
        explanation: 'Context nêu: "Đạo giáo có hai phái là phái Thần tiên và phái Phù thủy."'
      },
      {
        question: 'Phái Thần tiên của Đạo giáo chủ yếu dạy điều gì?',
        options: ['Thực hành nghi lễ cúng bái', 'Tu tiên, luyện thuốc trường sinh bất tử', 'Sử dụng bùa phép chữa bệnh', 'Nghiên cứu kinh sách Đạo gia'],
        correctAnswer: 1,
        explanation: 'Context nói: "Đạo giáo Thần tiên dạy tu tiên, luyện thuốc trường sinh bất tử."'
      }
    ],
    rewards: {
      experience: 190,
      coins: 95
    }
  },
  {
    id: 'event_dao_giao_than_tien_phu_thuy_viet_nam',
    heading: 'Đạo giáo Thần tiên, Phù thủy và sự hòa nhập với tín ngưỡng Việt (thế kỷ IV và sau)',
    year: 320,
    type: 'cultural',
    context: 'Sau khi xuất hiện ở Nam Trung Hoa, phái này du nhập vào nước ta, có thể vì hầu hết các nguyên liệu mà các Đạo sĩ dùng để chế Kim Đan như Thần sa là sản phẩm của các đảo ở phía bắc và vùng Cù Lao Chàm (Quảng Nam). Những dược liệu này trước đó đã được các thương nhân Trung Quốc mang về từ Giao Chỉ. Theo ghi chép của sách sử Trung Quốc, Mã Viện khi sang đánh dẹp cuộc khởi nghĩa Hai Bà Trưng cũng đã từng cho quân đi tìm các mỏ Thần sa. Đời Đông Tấn (316 - 334), Cát Hồng đang làm quan ở triều đình Trung Hoa, xin đi làm Tri huyện ở Câu Lậu để có dịp đi tìm Thần sa luyện thuốc trường sinh cho riêng mình. Phái Thần tiên vào nước ta chỉ hạn chế ở tầng lớp trên gồm các quan lại đô hộ và tầng lớp quý tộc bản địa. Những hình tượng của các vị thần sông núi và nhân thần đã gắn bó với các truyền thuyết về quá trình hình thành dân tộc, cương giới, địa vực chống ngoại xâm như Thánh Gióng, Tản Viên Sơn Thánh, Phù Đổng Thiên Vương đều được thần tiên hóa. Đạo giáo Phù thủy dùng pháp thuật trừ tà, trị bệnh giúp người.\n\nTrước đó, người Việt đã từng sùng bái ma thuật, phù phép. Họ tin rằng những lá bùa, những câu thần chú có thể chữa được bệnh tật và trị được tà ma. Tương truyền, Hùng Vương vì giỏi phù phép nên có uy tín thu phục được 15 bộ để lập nên nước Văn Lang. Cũng theo các ghi chép của sử Trung Quốc, bấy giờ ở vùng Giao Châu ngoài các chùa tháp thờ Phật còn có các loại đền thờ khác mà bị gán chung là "Dâm từ". Đạo giáo đi vào Việt Nam, đặc biệt là Đạo giáo Phù thủy tìm thấy ngay rất nhiều điểm tương đồng với tín ngưỡng ma thuật của người dân Việt nên ăn sâu vào người Việt rất dễ. Nó đã hòa quyện với những đền miếu và những tín ngưỡng bản địa. Các cuộc khởi nghĩa nông dân ở Trung Quốc mang màu sắc Đạo giáo cũng nhiều lần tác động đến phong trào khởi nghĩa chống đô hộ trên đất nước ta (có dư đảng Hoàng Cân (Đảng Khăn vàng) sang hoạt động ở Giao Chỉ). Tóm lại, các luồng tư tưởng như Nho giáo, các tôn giáo như Phật giáo, Đạo giáo từ nhiều ngả đường truyền bá vào đất nước ta trong thời điểm này.',
    description: 'Phái Thần tiên của Đạo giáo du nhập vào Việt Nam từ Nam Trung Hoa, một phần do Giao Chỉ có Thần sa - nguyên liệu luyện Kim Đan. Mã Viện và Cát Hồng (thời Đông Tấn) đều từng tìm kiếm Thần sa. Phái này chủ yếu ảnh hưởng tầng lớp quan lại và quý tộc, đồng thời thần tiên hóa các vị thần Việt như Thánh Gióng. Ngược lại, Đạo giáo Phù thủy dễ dàng hòa nhập với tín ngưỡng ma thuật, phù phép sẵn có của người Việt, ăn sâu vào đời sống dân gian và hòa quyện với các đền miếu (bị gọi là "Dâm từ"). Các cuộc khởi nghĩa Đạo giáo ở Trung Quốc như Hoàng Cân cũng có ảnh hưởng đến Giao Chỉ.',
    period: 'period_1',
    characters: ['Mã Viện', 'Cát Hồng', 'Thánh Gióng', 'Tản Viên Sơn Thánh', 'Phù Đổng Thiên Vương', 'Hùng Vương'],
    locations: ['Nam Trung Hoa', 'Cù Lao Chàm (Quảng Nam)', 'Giao Chỉ', 'Câu Lậu', 'Nước Văn Lang', 'Trung Quốc'],
    questions: [
      {
        question: 'Nguyên liệu quan trọng nào có ở Giao Chỉ mà các Đạo sĩ phái Thần tiên dùng để chế Kim Đan?',
        options: ['Ngọc trai', 'Trầm hương', 'Thần sa', 'Sừng tê giác'],
        correctAnswer: 2,
        explanation: 'Context nêu: "...các nguyên liệu mà các Đạo sĩ dùng để chế Kim Đan như Thần sa là sản phẩm của các đảo ở phía bắc và vùng Cù Lao Chàm (Quảng Nam)."'
      },
      {
        question: 'Vào đời Đông Tấn, ai đã xin đi làm Tri huyện ở Câu Lậu để tìm Thần sa luyện thuốc trường sinh?',
        options: ['Mã Viện', 'Trương Tân', 'Đổng Phụng', 'Cát Hồng'],
        correctAnswer: 3,
        explanation: 'Context ghi: "Đời Đông Tấn (316 - 334), Cát Hồng... xin đi làm Tri huyện ở Câu Lậu để có dịp đi tìm Thần sa luyện thuốc trường sinh cho riêng mình."'
      },
      {
        question: 'Phái Đạo giáo nào dễ dàng hòa quyện với tín ngưỡng ma thuật của người dân Việt và ăn sâu vào đời sống dân gian?',
        options: ['Phái Thần tiên', 'Phái Chính Nhất', 'Đạo giáo Phù thủy', 'Phái Toàn Chân'],
        correctAnswer: 2,
        explanation: 'Context cho biết: "Đạo giáo Phù thủy tìm thấy ngay rất nhiều điểm tương đồng với tín ngưỡng ma thuật của người dân Việt nên ăn sâu vào người Việt rất dễ."'
      },
      {
        question: 'Các đền thờ tín ngưỡng bản địa ở Giao Châu, ngoài chùa tháp Phật, bị sử sách Trung Quốc thời đó gán chung là gì?',
        options: ['Miếu thờ tổ tiên', 'Đình làng', 'Am thờ Mẫu', '"Dâm từ"'],
        correctAnswer: 3,
        explanation: 'Context đề cập: "...bấy giờ ở vùng Giao Châu ngoài các chùa tháp thờ Phật còn có các loại đền thờ khác mà bị gán chung là "Dâm từ"."'
      },
      {
        question: 'Cuộc khởi nghĩa nông dân nào ở Trung Quốc mang màu sắc Đạo giáo có dư đảng sang hoạt động ở Giao Chỉ?',
        options: ['Khởi nghĩa Khăn Vàng (Hoàng Cân)', 'Khởi nghĩa Thái Bình Thiên Quốc', 'Khởi nghĩa Bạch Liên Giáo', 'Khởi nghĩa Xích My'],
        correctAnswer: 0,
        explanation: 'Context nói: "...(có dư đảng Hoàng Cân (Đảng Khăn vàng) sang hoạt động ở Giao Chỉ)."'
      }
    ],
    rewards: {
      experience: 230,
      coins: 115
    }
  },
  {
    id: 'event_khoi_nghia_cham_tuong_lam_100_136',
    heading: 'Khởi nghĩa người Chăm ở Tượng Lâm (năm 100) và các biện pháp của nhà Hán',
    year: 100,
    type: 'rebellion',
    context: 'Để có được sức sống lâu bền, phát triển ở đất nước ta, các tôn giáo, các luồng tư tưởng phải tuân theo một quy luật hòa đồng với các tín ngưỡng dân gian bản địa và ở một mức độ nhất định phải trung hòa với nhau. Trong quá trình phát triển này, các tôn giáo, các luồng tư tưởng đều có những mặt tích cực được phát huy và có những mặt tiêu cực ảnh hưởng đến tâm lý cũng như sự phát triển của xã hội người Việt ở Giao Châu. Các cuộc khởi nghĩa nhỏ lẻ trong những năm đầu thế kỷ II. Cuộc khởi nghĩa của người Chăm ở quận Tượng Lâm và sự thành lập nước Lâm Ấp: Thời Đông Hán, sau khi đã dẹp yên được cuộc khởi nghĩa Hai Bà Trưng, chính quyền đô hộ tăng cường củng cố chế độ cai trị, bóc lột trong thời điểm phong trào đấu tranh của nhân dân đang tạm lắng xuống. Qua ghi chép của sử cũ Trung Quốc, tình hình Giao Châu có vẻ yên ổn nên các quan lại trị nhậm ở đây ra sức vơ vét của cải, Thái thú Giao Chỉ là Trương Khôi đã bị tố cáo: "ăn hối lộ một nghìn vàng, sự việc quá lộ liễu nên Khôi phải triệu về Kinh chịu tội, của cải tịch thu". Lớp hào trưởng bản xứ lúc này bị chèn ép nhiều bởi các quan lại và địa chủ Trung Hoa nên rất bất bình.\n\nMùa Hè năm 100, tại huyện Tượng Lâm, quận Nhật Nam đã nổ ra cuộc khời nghĩa của người dân Chăm. Đầu thế kỷ II, huyện Tượng Lâm nằm ở điểm cực Nam của quận Nhật Nam. Nhân dân Chăm đã tập hợp một lực lượng khoảng hơn 2.000 người nổi dậy, đốt phá chùa công và nhà cửa, dinh thự của bọn quan lại. Chính quyền đô hộ đã phải huy động quân ở các quận, huyện lân cận đến Tượng Lâm để đàn áp. Chúng tàn sát dã man ở huyện Tượng Lâm, lãnh tụ khời nghĩa bị bắt chém đầu. Cuộc khởi nghĩa đầu tiên ở Giao Châu trong thế kỷ II bị dập tắt.\n\nSau cuộc khởi nghĩa lớn của người Chăm, vùng đất phía nam của Giao Châu đã khiến chính quyền đô hộ phải chú ý. Chính sách áp bức bóc lột của bọn quan lại nhà Hán cộng với những biến đổi thất thường và sự khắc nghiệt của thời tiết trong giai đoạn này, đã khiến hàng loạt người dân ở quận Nhật Nam bị rơi vào tình trạng bần cùng phá sản. Chính quyền nhà Hán phải thực thi hàng loạt biện pháp vỗ về. Hậu Hán thư chép việc tháng 3 và tháng 8 năm 101 phải phát chẩn cho người dân ở vùng trồng dâu nuôi tằm ở Tượng Lâm vì họ bị "mất nghiệp". Nãm 102, lại có lệnh tha phủ thuế, tô ruộng trong 2 năm cho dân huyện Tượng Lâm. Đi đôi với việc vỗ về để trấn an tinh thần dân chúng, chính quyền đô hộ còn đặt thêm chức Tướng binh, Trưởng sử để đề phòng sự phản kháng, nổi dậy ở vùng đất này. Cuối năm 136, người Chăm ở Tượng Lâm nổi dậy khởi nghĩa.',
    description: 'Sau khởi nghĩa Hai Bà Trưng, chính quyền Đông Hán tăng cường cai trị và bóc lột ở Giao Châu. Sự tham nhũng của quan lại như Thái thú Trương Khôi và việc chèn ép hào trưởng bản xứ gây bất bình. Mùa Hè năm 100, người Chăm ở huyện Tượng Lâm (quận Nhật Nam) với khoảng hơn 2.000 người đã nổi dậy, đốt phá dinh thự quan lại. Cuộc khởi nghĩa bị đàn áp tàn bạo. Sau đó, nhà Hán vừa thực hiện các biện pháp "vỗ về" như phát chẩn (năm 101), tha thuế (năm 102) cho dân Tượng Lâm, vừa tăng cường kiểm soát bằng cách đặt thêm chức Tướng binh và Trưởng sử. Tuy nhiên, cuối năm 136, người Chăm ở Tượng Lâm lại tiếp tục nổi dậy.',
    period: 'period_1',
    characters: ['Trương Khôi'],
    locations: ['Giao Châu', 'Quận Tượng Lâm (Huyện Tượng Lâm)', 'Quận Nhật Nam', 'Trung Quốc (Kinh)'],
    questions: [
      {
        question: 'Cuộc khởi nghĩa của người dân Chăm ở huyện Tượng Lâm, quận Nhật Nam nổ ra vào thời gian nào?',
        options: ['Cuối thế kỷ I TCN', 'Mùa Hè năm 100 SCN', 'Đầu thế kỷ III SCN', 'Năm 136 SCN'],
        correctAnswer: 1,
        explanation: 'Context ghi: "Mùa Hè năm 100, tại huyện Tượng Lâm, quận Nhật Nam đã nổ ra cuộc khời nghĩa của người dân Chăm."'
      },
      {
        question: 'Thái thú Giao Chỉ nào bị tố cáo ăn hối lộ một nghìn vàng, sự việc góp phần làm tăng sự bất bình của dân chúng?',
        options: ['Tô Định', 'Sĩ Nhiếp', 'Trương Khôi', 'Mã Viện'],
        correctAnswer: 2,
        explanation: 'Context nêu: "...Thái thú Giao Chỉ là Trương Khôi đã bị tố cáo: "ăn hối lộ một nghìn vàng..." Lớp hào trưởng bản xứ lúc này bị chèn ép... nên rất bất bình."'
      },
      {
        question: 'Lực lượng nghĩa quân Chăm trong cuộc khởi nghĩa năm 100 có khoảng bao nhiêu người?',
        options: ['Khoảng 500 người', 'Khoảng 1.000 người', 'Khoảng hơn 2.000 người', 'Khoảng 5.000 người'],
        correctAnswer: 2,
        explanation: 'Context cho biết: "Nhân dân Chăm đã tập hợp một lực lượng khoảng hơn 2.000 người nổi dậy..."'
      },
      {
        question: 'Sau khi dập tắt cuộc khởi nghĩa năm 100, một trong những biện pháp "vỗ về" của nhà Hán đối với dân Tượng Lâm là gì?',
        options: ['Cho phép tự trị', 'Giảm một nửa tô thuế vĩnh viễn', 'Tha phủ thuế, tô ruộng trong 2 năm (năm 102)', 'Bổ nhiệm hào trưởng bản xứ làm quan'],
        correctAnswer: 2,
        explanation: 'Context ghi: "Nãm 102, lại có lệnh tha phủ thuế, tô ruộng trong 2 năm cho dân huyện Tượng Lâm."'
      },
      {
        question: 'Ngoài các biện pháp vỗ về, chính quyền đô hộ còn đặt thêm các chức quan nào ở Tượng Lâm để đề phòng sự phản kháng?',
        options: ['Tri châu và Tri huyện', 'Thái thú và Huyện lệnh', 'Tướng binh và Trưởng sử', 'Đô hộ và Thứ sử'],
        correctAnswer: 2,
        explanation: 'Context nói: "...chính quyền đô hộ còn đặt thêm chức Tướng binh, Trưởng sử để đề phòng sự phản kháng, nổi dậy ở vùng đất này."'
      }
    ],
    rewards: {
      experience: 240,
      coins: 120
    }
  },
  {
    id: 'event_khoi_nghia_khu_lien_137',
    heading: 'Cuộc khởi nghĩa Khu Liên ở Tượng Lâm và Nhật Nam (năm 137)',
    year: 137,
    type: 'rebellion',
    context: 'Tháng 5 năm 137, một cuộc khởi nghĩa lớn đã nổ ra ở Tượng Lâm, sau đó lan ra toàn quận Nhật Nam. Lãnh đạo cuộc khởi nghĩa này là Khu Liên, một hào trường bản xứ, con viên Công tào huyện Tượng Lâm. Theo Hậu Hán thư ghi lại: "Man Di ở ngoài cõi Tượng Lâm quận Nhật Nam là bọn Khu Liên vài nghìn người đánh huyện Tượng Lâm, đốt thành, chùa, giết Trường lại". Thứ sử Giao Chi và Cừu Chân vào đánh dẹp. Nhưng việc điều động của chính quyền đô hộ đã vấp phải sự chống đối của các quân sĩ, họ không chịu đi xa và đánh lại các Trưởng quan. Cuối cùng chính quyền đô hộ phải nhượng bộ, cuộc binh biến này đã khiến cuộc nổi dậy ở Nhật Nam càng bùng phát trên diện rộng.\n\nTriều đình Trung Hoa phải cử Giả Xương, một viên quan đang đi sứ ở Nhật Nam, giúp sức cho chính quyền Giao Châu đàn áp cuộc khởi nghĩa. Quân Hán phản công nhưng bị nghĩa quân bao vây hon một năm trong tình thế rất khốn đốn. Cuộc khởi nghĩa của nhân dân Nhật Nam đã gây tiếng vang lớn ở Giao Châu khiến triều đình Trung Quốc lo lắng. Hán Thuận đế sách đầu tiên được đưa ra là huy động 4 vạn quân ở các châu Kinh, Duyên, Dương, Dự đi đàn áp để dập tắt cuộc khởi nghĩa. Nhưng sau khi bàn bạc, các quan lại ở triều đình Đông Hán cho rằng tình hình tại Trung Quốc lúc này không ổn định, có rất nhiều khó khăn, đặc biệt tại hai các châu Kinh, Dương cũng đang có phiến loạn.',
    description: 'Tháng 5 năm 137, Khu Liên, một hào trưởng ở Tượng Lâm, đã lãnh đạo một cuộc khởi nghĩa lớn, lan rộng ra toàn quận Nhật Nam. Nghĩa quân tấn công huyện Tượng Lâm, đốt phá và giết quan lại. Chính quyền đô hộ gặp khó khăn trong việc điều quân do binh lính chống đối. Triều đình Trung Hoa phải cử Giả Xương đến hỗ trợ đàn áp, nhưng quân Hán bị nghĩa quân bao vây hơn một năm. Nhà Hán dưới thời Hán Thuận Đế đã tính đến việc huy động 4 vạn quân từ các châu Kinh, Duyên, Dương, Dự, nhưng cuối cùng đã chần chừ do tình hình bất ổn ở Trung Quốc và những khó khăn của một cuộc viễn chinh.',
    period: 'period_1',
    characters: ['Khu Liên', 'Giả Xương', 'Hán Thuận Đế'],
    locations: ['Tượng Lâm', 'Quận Nhật Nam', 'Giao Chỉ', 'Cửu Chân', 'Giao Châu', 'Trung Hoa (Triều đình Trung Hoa, Triều đình Đông Hán)', 'Châu Kinh', 'Châu Duyên', 'Châu Dương', 'Châu Dự'],
    questions: [
      {
        question: 'Ai là người lãnh đạo cuộc khởi nghĩa lớn nổ ra ở Tượng Lâm vào tháng 5 năm 137 và sau đó lan ra toàn quận Nhật Nam?',
        options: ['Trương Khôi', 'Khu Liên', 'Chu Đạt', 'Lương Long'],
        correctAnswer: 1,
        explanation: 'Context ghi: "Lãnh đạo cuộc khởi nghĩa này là Khu Liên, một hào trường bản xứ, con viên Công tào huyện Tượng Lâm."'
      },
      {
        question: 'Khi chính quyền đô hộ điều động quân đi dẹp khởi nghĩa Khu Liên, họ đã gặp phải vấn đề gì?',
        options: ['Thiếu lương thực trầm trọng', 'Quân sĩ không quen địa hình', 'Sự chống đối của các quân sĩ không chịu đi xa', 'Nghĩa quân có vũ khí hiện đại hơn'],
        correctAnswer: 2,
        explanation: 'Context nêu: "Nhưng việc điều động của chính quyền đô hộ đã vấp phải sự chống đối của các quân sĩ, họ không chịu đi xa và đánh lại các Trưởng quan."'
      },
      {
        question: 'Viên quan nào được triều đình Trung Hoa cử đến Nhật Nam để giúp chính quyền Giao Châu đàn áp cuộc khởi nghĩa Khu Liên?',
        options: ['Lý Cố', 'Chúc Lương', 'Trương Kiểu', 'Giả Xương'],
        correctAnswer: 3,
        explanation: 'Context cho biết: "Triều đình Trung Hoa phải cử Giả Xương, một viên quan đang đi sứ ở Nhật Nam, giúp sức cho chính quyền Giao Châu đàn áp cuộc khởi nghĩa."'
      },
      {
        question: 'Lý do chính khiến triều đình Đông Hán cuối cùng lại chần chừ trong việc huy động 4 vạn quân đi đàn áp khởi nghĩa ở Nhật Nam là gì?',
        options: ['Không đủ kinh phí cho cuộc viễn chinh', 'Khu Liên đã đầu hàng', 'Tình hình tại Trung Quốc không ổn định và có nhiều khó khăn, phiến loạn', 'Các tướng lĩnh không muốn tham gia'],
        correctAnswer: 2,
        explanation: 'Context giải thích: "...các quan lại ở triều đình Đông Hán cho rằng tình hình tại Trung Quốc lúc này không ổn định, có rất nhiều khó khăn, đặc biệt tại hai các châu Kinh, Dương cũng đang có phiến loạn."'
      },
      {
        question: 'Theo Hậu Hán thư, nghĩa quân của Khu Liên đã làm gì khi tấn công huyện Tượng Lâm?',
        options: ['Chiếm kho lương và chia cho dân nghèo', 'Bắt sống Thứ sử Giao Chỉ', 'Đốt thành, chùa, giết Trường lại', 'Xây dựng căn cứ chống giặc lâu dài'],
        correctAnswer: 2,
        explanation: 'Context trích Hậu Hán thư: ""Man Di ở ngoài cõi Tượng Lâm quận Nhật Nam là bọn Khu Liên vài nghìn người đánh huyện Tượng Lâm, đốt thành, chùa, giết Trường lại"."'
      }
    ],
    rewards: {
      experience: 260,
      coins: 130
    }
  },
  {
    id: 'event_cac_khoi_nghia_lien_tiep_nhat_nam_cuu_chan_tk2_va_van_xuan_suy_yeu',
    heading: 'Các cuộc khởi nghĩa ở Nhật Nam, Cửu Chân (138-178) và sự suy yếu của Vạn Xuân',
    year: 144,
    type: 'rebellion',
    context: 'Việc điều động một số lượng quân viễn chinh lớn lại phải đi đường xa, không quen thủy thổ, mệt mỏi sê dẫn đến việc hao binh tổn tướng.... Tướng quân Lý cố đưa ra kế sách rời hết quân lính, quan lại Trung Hoa ở hai quận Nhật Nam và Cửu Chân về Giao Chỉ, sau đó dùng nội gián mua chuộc, chia rẽ để dẹp yên cuộc khởi nghĩa. Sự chần chừ cân nhắc của triều đình Đông Hán xuất phát từ những khó khăn của việc không giải quyết nổi ở chính quốc, đã tạo thời cơ cho sự phát triển của cuộc khởi nghĩa ở Nhật Nam. Nhà Hán cử hai viên quan là Chúc Lương làm Thái thú Cửu Chân và Tnrcmg Kiểu làm Thứ sử Giao chỉ thực hiện âm mưu ly gián, mua chuộc, phá hoại hàng ngũ nghĩa quân. Năm 138, sau hơn một năm tồn tại, cuộc khởi nghĩa đã bị tan rã. Vào năm 144, nhân dân Nhật Nam lại một lần nữa vùng lên khởi nghĩa. Cũng như những lần trước đây, quận Tượng Lâm lại trở thành tâm điểm của cuộc chiến. Hàng nghìn người dân đã kéo đến đập phá huyện trị, thành ấp của chính quyền địa phương.\n\nCuộc khởi nghĩa còn liên kết với phong trào nổi dậy ở quận Cửu Chân. Thứ sử Giao Chi là Hạ Phương phải dùng nhiều thủ đoạn mới đối phó được với phong trào. Những năm tiếp sau (từ 157 đến 160), người dân Nhật Nam lại ủng hộ cuộc khởi nghĩa của Chu Đạt khi họ bị đánh dạt sang địa phận Nhật Nam. Có lúc lực lượng nghĩa quân cả hai quận đã lên đến 2 vạn người, gây thế áp đảo với chính quyền đô hộ nhà Hán. Trong cuộc khởi nghĩa của Lương Long ở quận Giao Chỉ (năm 178) cũng có sự tham gia liên kết của người dân Nhật Nam. Cuối thế kỳ thứ II, đời Sơ Bình (190 - 193), chính quyền Đông Hán suy yếu. Trung Quốc biến động, bên ngoài biên giới thì bị Tây Khương đe dọa suốt gần chục năm chưa dứt.\n\nThất bại của Lý Phật Từ trước cuộc tấn công xâm lược của nhà Tùy thực chất bắt nguồn từ sự suy yếu của nước Vạn Xuân thời Hậu Lý Nam đế. Nước Vạn Xuân non trẻ, vừa kết thúc cuộc kháng chiến giữ nước lâu dài, gian khổ với quân Lương, lại lập tức rơi vào vòng xoáy của cuộc nội chiến tranh giành quyền lực. Tình trạng đó làm cho thế nước suy yếu. Vị quân vương là Lý Phật Tử lúc này của toàn dân tộc để tổ chức một cuộc chiến tranh chống lại cuộc xâm lược của nhà Tùy. Lịch sử lại đi vào khúc quanh co, lần thứ ba, đất nước ta lại rơi vào vòng đô hộ của phong kiến phương Bắc.',
    description: 'Sau khi khởi nghĩa Khu Liên bị dập tắt năm 138 do nhà Hán dùng âm mưu ly gián (thực hiện bởi Chúc Lương và Trương Kiểu), nhân dân Nhật Nam tiếp tục nổi dậy vào năm 144, tập trung ở Tượng Lâm và liên kết với Cửu Chân, buộc Thứ sử Hạ Phương phải vất vả đối phó. Giai đoạn 157-160, họ ủng hộ khởi nghĩa Chu Đạt, lực lượng có lúc lên đến 2 vạn người. Năm 178, họ tham gia khởi nghĩa Lương Long ở Giao Chỉ. Cuối thế kỷ II, nhà Đông Hán suy yếu. Đoạn văn cũng đề cập đến sự thất bại của Lý Phật Tử (nước Vạn Xuân) trước nhà Tùy là do nước Vạn Xuân suy yếu vì nội chiến sau cuộc kháng chiến chống Lương, dẫn đến đất nước rơi vào vòng đô hộ lần thứ ba.',
    period: 'period_1',
    characters: ['Lý Cố', 'Chúc Lương', 'Trương Kiểu', 'Hạ Phương', 'Chu Đạt', 'Lương Long', 'Lý Phật Tử', 'Hậu Lý Nam Đế'],
    locations: ['Nhật Nam', 'Cửu Chân', 'Giao Chỉ', 'Tượng Lâm', 'Trung Quốc', 'Tây Khương', 'Nước Vạn Xuân'],
    questions: [
      {
        question: 'Cuộc khởi nghĩa Khu Liên bị tan rã vào năm 138 do biện pháp chủ yếu nào của nhà Hán?',
        options: ['Đàn áp quân sự quy mô lớn', 'Khu Liên bị bắt và giết', 'Âm mưu ly gián, mua chuộc, phá hoại hàng ngũ nghĩa quân', 'Thiên tai, dịch bệnh làm suy yếu nghĩa quân'],
        correctAnswer: 2,
        explanation: 'Context cho biết: "Nhà Hán cử hai viên quan là Chúc Lương làm Thái thú Cửu Chân và Trương Kiểu làm Thứ sử Giao chỉ thực hiện âm mưu ly gián, mua chuộc, phá hoại hàng ngũ nghĩa quân. Năm 138... cuộc khởi nghĩa đã bị tan rã."'
      },
      {
        question: 'Vào năm 144, nhân dân Nhật Nam lại nổi dậy và cuộc khởi nghĩa này đã liên kết với phong trào ở quận nào?',
        options: ['Quận Giao Chỉ', 'Quận Tượng Lâm', 'Quận Hợp Phố', 'Quận Cửu Chân'],
        correctAnswer: 3,
        explanation: 'Context ghi: "Vào năm 144, nhân dân Nhật Nam lại một lần nữa vùng lên khởi nghĩa... Cuộc khởi nghĩa còn liên kết với phong trào nổi dậy ở quận Cửu Chân."'
      },
      {
        question: 'Thứ sử Giao Chỉ nào đã phải dùng nhiều thủ đoạn để đối phó với các cuộc nổi dậy của nhân dân Nhật Nam và Cửu Chân?',
        options: ['Chúc Lương', 'Trương Kiểu', 'Hạ Phương', 'Lý Cố'],
        correctAnswer: 2,
        explanation: 'Context nói: "Thứ sử Giao Chi là Hạ Phương phải dùng nhiều thủ đoạn mới đối phó được với phong trào."'
      },
      {
        question: 'Trong khoảng những năm 157 đến 160, người dân Nhật Nam đã ủng hộ cuộc khởi nghĩa của ai, khiến lực lượng có lúc lên đến 2 vạn người?',
        options: ['Khu Liên', 'Lương Long', 'Chu Đạt', 'Hạ Phương'],
        correctAnswer: 2,
        explanation: 'Context đề cập: "Những năm tiếp sau (từ 157 đến 160), người dân Nhật Nam lại ủng hộ cuộc khởi nghĩa của Chu Đạt... Có lúc lực lượng nghĩa quân cả hai quận đã lên đến 2 vạn người..."'
      },
      {
        question: 'Theo đoạn văn, nguyên nhân chính dẫn đến thất bại của Lý Phật Tử (nước Vạn Xuân) trước cuộc xâm lược của nhà Tùy là gì?',
        options: ['Nhà Tùy có quân đội quá mạnh', 'Thiếu sự ủng hộ của nhân dân', 'Nước Vạn Xuân suy yếu do nội chiến sau kháng chiến chống Lương', 'Lý Phật Tử không có tài cầm quân'],
        correctAnswer: 2,
        explanation: 'Context phân tích: "Thất bại của Lý Phật Từ trước cuộc tấn công xâm lược của nhà Tùy thực chất bắt nguồn từ sự suy yếu của nước Vạn Xuân thời Hậu Lý Nam đế... lại lập tức rơi vào vòng xoáy của cuộc nội chiến tranh giành quyền lực. Tình trạng đó làm cho thế nước suy yếu."'
      }
    ],
    rewards: {
      experience: 270,
      coins: 135
    }
  },
  // Ba Trieu Event
  {
    id: 'event_ba_trieu',
    heading: 'Khởi nghĩa Bà Triệu (năm 248)',
    year: 248,
    type: 'rebellion',
    context: 'Năm 248, Bà Triệu (Triệu Thị Trinh) lãnh đạo cuộc khởi nghĩa chống lại ách đô hộ của nhà Đông Ngô tại Giao Chỉ. Bà là con gái của Lạc tướng Triệu Quốc Đạt, có tài năng và sức mạnh phi thường. Sau khi cha bị giết, Bà Triệu quyết định đứng lên khởi nghĩa để trả thù cho cha và giành lại độc lập cho dân tộc.',
    description: 'Năm 248, Bà Triệu tập hợp nghĩa quân tại vùng núi Nưa (Thanh Hóa) và tuyên bố khởi nghĩa. Bà mặc áo giáp, cưỡi voi, cầm gươm, xưng là "Nữ Vương". Nghĩa quân nhanh chóng chiếm được nhiều thành trì và thu hút đông đảo nhân dân tham gia. Bà Triệu đã đánh bại nhiều đợt tấn công của quân Đông Ngô, nhưng cuối cùng do lực lượng quá chênh lệch, bà phải rút lui về núi Nưa. Trước khi bị bắt, Bà Triệu đã tự vẫn để bảo toàn danh dự.',
    period: 'period_1',
    characters: ['Bà Triệu', 'Triệu Quốc Đạt', 'Tôn Quyền'],
    locations: ['Núi Nưa', 'Giao Chỉ', 'Đông Ngô'],
    questions: [
      {
        question: 'Ai là người lãnh đạo cuộc khởi nghĩa chống lại nhà Đông Ngô tại Giao Chỉ vào năm 248?',
        options: ['Bà Triệu', 'Bà Trưng', 'Lạc Long Quân', 'Triệu Quốc Đạt'],
        correctAnswer: 0,
        explanation: 'Bà Triệu (Triệu Thị Trinh) là người lãnh đạo cuộc khởi nghĩa chống lại nhà Đông Ngô tại Giao Chỉ vào năm 248.'
      },
      {
        question: 'Nơi nào Bà Triệu tập hợp nghĩa quân và tuyên bố khởi nghĩa?',
        options: ['Núi Nưa', 'Cổ Loa', 'Mê Linh', 'Hát Môn'],
        correctAnswer: 0,
        explanation: 'Bà Triệu tập hợp nghĩa quân tại vùng núi Nưa (Thanh Hóa) và tuyên bố khởi nghĩa.'
      },
      {
        question: 'Bà Triệu đã tự vẫn trước khi bị bắt để bảo toàn danh dự. Điều này xảy ra ở đâu?',
        options: ['Núi Nưa', 'Cổ Loa', 'Hát Môn', 'Mê Linh'],
        correctAnswer: 0,
        explanation: 'Trước khi bị bắt, Bà Triệu đã tự vẫn để bảo toàn danh dự tại núi Nưa.'
      },
      {
        question: 'Ai là cha của Bà Triệu, người đã bị giết dẫn đến cuộc khởi nghĩa?',
        options: ['Triệu Quốc Đạt', 'Tôn Quyền', 'Lạc Long Quân', 'Tô Định'],
        correctAnswer: 0,
        explanation: 'Cha của Bà Triệu là Triệu Quốc Đạt, ông bị giết dẫn đến cuộc khởi nghĩa của Bà.'
      },
      {
        question: 'Cuộc khởi nghĩa của Bà Triệu diễn ra trong bối cảnh nào?',
        options: [
          'Nhà Đông Ngô đô hộ Giao Chỉ',
          'Nhà Hán đô hộ Giao Chỉ',
          'Nhà Tần đô hộ Giao Chỉ',
          'Nhà Lý đô hộ Giao Chỉ'
        ],
        correctAnswer: 0,
        explanation: 'Cuộc khởi nghĩa của Bà Triệu diễn ra trong bối cảnh nhà Đông Ngô đô hộ Giao Chỉ.'
      }
    ],
    rewards: {
      experience: 500,
      coins: 250
    }
  },
  // Ly Bi Events
  {
    id: 'event_ly_bi',
    heading: 'Khởi nghĩa Lý Bí: Nhà Lương phản công và sự chuẩn bị của nghĩa quân',
    year: 542,
    type: 'conflict',
    context: 'Sử nhà Lương ghi rằng Thứ sử Tiêu Tư quá sợ hãi đã cho ngtròri đem vàng bạc để đút lót cho Lý Bí, nhưng việc không thành phải bỏ chạy về Việt Châu (Quảng Đông). Bộ máy của chính quyền đô hộ tan rã hoàn toàn. * Quân Lương phản công Sau khi giành được thắng lợi, bộ chỉ huy quân khởi nghĩa vẫn đóng ở thành Long Biên và chuẩn bị đối phố với quân Lương, bởi thực chất quân khởi nghĩa mới thu phục được toàn bộ vùng Bắc Bộ. Từ vùng Ái Châu trở vào phía nam vẫn bị sự chi phối của nhà Lương. Thần tích làng Lưu Xá kể về việc Lý Bí cử người anh ruột của mình là Lý Thiên Bảo làm Giám quân, tổ chức bố phòng ở Tân Xương (Vĩnh Phú). Lý Phục Man làm Uy Viễn tướng công đóng vùng Nhật Nam". Ba tháng sau, nhà Lương chính thức mờ cuộc phản công.',
    description: 'Sau khi Thứ sử Giao Châu của nhà Lương là Tiêu Tư, do khiếp sợ trước sức mạnh của cuộc khởi nghĩa, đã cố gắng dùng vàng bạc hối lộ Lý Bí nhưng không thành và buộc phải bỏ chạy về Việt Châu (thuộc Quảng Đông, Trung Quốc), bộ máy đô hộ của nhà Lương tại Giao Châu gần như sụp đổ hoàn toàn. Quân khởi nghĩa dưới sự chỉ huy của Lý Bí tiếp tục đóng tại thành Long Biên, đồng thời khẩn trương chuẩn bị lực lượng để đối phó với cuộc phản công không thể tránh khỏi từ nhà Lương. Thực tế, nghĩa quân mới chỉ làm chủ được vùng Bắc Bộ, trong khi khu vực từ Ái Châu (Thanh Hóa) trở vào phía Nam vẫn còn nằm dưới sự chi phối của nhà Lương. Để củng cố quốc phòng, Lý Bí đã giao cho anh ruột của mình là Lý Thiên Bảo giữ chức Giám quân, tổ chức phòng thủ ở Tân Xương (nay thuộc Vĩnh Phú). Cùng lúc, Lý Phục Man được phong làm Uy Viễn tướng công, lãnh đạo quân đội trấn giữ vùng Nhật Nam (từ Quảng Bình vào Nam). Đúng như dự đoán, chỉ ba tháng sau thất bại của Tiêu Tư, nhà Lương chính thức phát động một cuộc phản công quy mô lớn nhằm tái chiếm Giao Châu.',
    period: 'period_1',
    characters: ['Lý Bí', 'Tiêu Tư', 'Lý Thiên Bảo', 'Lý Phục Man'],
    locations: ['Long Biên', 'Việt Châu (Quảng Đông)', 'Ái Châu', 'Tân Xương (Vĩnh Phú)', 'Nhật Nam'],
    questions: [
      {
        question: 'Thứ sử Giao Châu của nhà Lương, Tiêu Tư, đã có hành động gì khi đối mặt với sức mạnh của quân Lý Bí?',
        options: [
          'Kiên quyết tử thủ thành Long Biên.',
          'Xin thêm viện binh và chủ động tấn công.',
          'Đem vàng bạc đút lót Lý Bí và sau đó bỏ chạy về Việt Châu.',
          'Đầu hàng và giao nộp toàn bộ Giao Châu cho Lý Bí.'
        ],
        correctAnswer: 2,
        explanation: 'Sử nhà Lương ghi rằng Thứ sử Tiêu Tư quá sợ hãi đã cho người đem vàng bạc để đút lót cho Lý Bí, nhưng việc không thành phải bỏ chạy về Việt Châu (Quảng Đông).'
      },
      {
        question: 'Sau khi Tiêu Tư bỏ chạy, bộ chỉ huy quân khởi nghĩa của Lý Bí đóng quân ở đâu để chuẩn bị đối phó nhà Lương?',
        options: ['Tân Xương', 'Ái Châu', 'Thành Long Biên', 'Vùng Nhật Nam'],
        correctAnswer: 2,
        explanation: 'Sau khi giành được thắng lợi, bộ chỉ huy quân khởi nghĩa vẫn đóng ở thành Long Biên và chuẩn bị đối phó với quân Lương.'
      },
      {
        question: 'Nhà Lương chính thức mở cuộc phản công nhằm vào lực lượng của Lý Bí sau khoảng thời gian bao lâu kể từ khi Tiêu Tư thất bại?',
        options: ['Một tháng', 'Hai tháng', 'Ba tháng', 'Sáu tháng'],
        correctAnswer: 2,
        explanation: 'Ba tháng sau (khi Tiêu Tư bỏ chạy), nhà Lương chính thức mở cuộc phản công.'
      },
      {
        question: 'Lý Bí đã cử ai làm Giám quân, tổ chức bố phòng ở Tân Xương (Vĩnh Phú) để chuẩn bị chống quân Lương?',
        options: ['Lý Phục Man', 'Lý Thiên Bảo', 'Một tướng lĩnh địa phương', 'Triệu Túc'],
        correctAnswer: 1,
        explanation: 'Thần tích làng Lưu Xá kể về việc Lý Bí cử người anh ruột của mình là Lý Thiên Bảo làm Giám quân, tổ chức bố phòng ở Tân Xương (Vĩnh Phú).'
      },
      {
        question: 'Ai được Lý Bí giao nhiệm vụ làm Uy Viễn tướng công, đóng quân ở vùng Nhật Nam?',
        options: ['Lý Thiên Bảo', 'Phạm Tu', 'Tinh Thiều', 'Lý Phục Man'],
        correctAnswer: 3,
        explanation: 'Lý Phục Man làm Uy Viễn tướng công đóng vùng Nhật Nam.'
      }
    ],
    rewards: {
      experience: 500,
      coins: 250
    }
  },
  {
    id: 'event_ly_bi_chong_lam_ap_543',
    heading: 'Lý Bí đẩy lui cuộc xâm lược của Lâm Ấp (543)',
    year: 543,
    type: 'conflict',
    context: 'Nước Lâm Ấp (Champa) đang dưới thời Vua Rudravarman I, phía bắc phân cách với châu Giao bởi dải Hoành Sơn, nghĩa là tiếp giáp với châu Đức. Lợi dụng tình hình chính quyền đô hộ của Nhà Lương ở châu Giao đã sụp đổ, quân khởi nghĩa lại đang phải đối phó với cuộc tấn công của quân Lương ở phía bắc, tháng 5 - 543 Lâm Ấp đem quân đánh phá Đức Châu. Ngay lập tức, Lý Bí đã cử tướng Phạm Tu mang một lực lượng lớn tiến về phương Nam. Với khí thế đang lên, nghĩa quân đã đập tan đội quân Lâm Ấp tại châu Cửu Đức, vua Rudravarman I phải bỏ chạy về nước. Sự kiện này đã được Khâm định Việt sử thông giám cương mục ghi lại: "Quân nước Lâm Ấp xâm lấn quận Nhật Nam, Lý Bôn sai tướng Phạm Tu đi đánh và phá được ở Cừu Đức". Sách Việt điện u linh và truyền thuyết địa phương ở các vùng như Hoài Đức, Quốc Oai cho biết tướng Lý Phục Man đang đóng quân ở vùng Đỗ Động, cũng được Lý Bí cử đi phá tan cuộc xâm lấn của Lâm Áp. Ngọc phả đình Ngọc Than và Lưu Xá thì ghi ông được lệnh đem 5.000 quân vào giữ Nhật Nam.',
    description: 'Vào năm 543, trong khi Lý Bí và quân khởi nghĩa đang tập trung đối phó với các cuộc tấn công từ nhà Lương ở phía Bắc, nước Lâm Ấp (Champa) dưới thời Vua Rudravarman I đã nhân cơ hội này để mở rộng lãnh thổ. Lợi dụng sự suy yếu của chính quyền đô hộ Lương tại Giao Châu và việc quân khởi nghĩa đang bận rộn ở mặt trận phía Bắc, vào tháng 5 năm 543, quân Lâm Ấp đã tiến đánh Đức Châu (khu vực phía nam Hoành Sơn, tiếp giáp với Lâm Ấp). Trước tình hình khẩn cấp, Lý Bí đã nhanh chóng cử tướng Phạm Tu mang một đạo quân lớn tiến xuống phía Nam. Với tinh thần chiến đấu dũng mãnh, quân của Phạm Tu đã giành thắng lợi quyết định tại Cửu Đức (còn gọi là Cừu Đức), đập tan hoàn toàn cuộc xâm lược của Lâm Ấp và buộc Vua Rudravarman I phải tháo chạy về nước. Các nguồn sử liệu khác như sách Việt điện u linh và truyền thuyết địa phương còn ghi nhận tướng Lý Phục Man, đang đóng quân ở vùng Đỗ Động, cũng được Lý Bí cử đi tham gia vào chiến dịch này, có tài liệu ghi ông mang 5.000 quân vào giữ Nhật Nam, góp phần vào việc bảo vệ biên giới phía Nam.',
    period: 'period_1',
    characters: ['Lý Bí', 'Rudravarman I', 'Phạm Tu', 'Lý Phục Man'],
    locations: ['Lâm Ấp (Champa)', 'Châu Giao', 'Hoành Sơn', 'Đức Châu', 'Cửu Đức (Cừu Đức)', 'Quận Nhật Nam', 'Đỗ Động', 'Ngọc Than', 'Lưu Xá'],
    questions: [
      {
        question: 'Vua nào của nước Lâm Ấp đã chỉ huy quân đội tấn công Đức Châu vào tháng 5 năm 543?',
        options: ['Bhadravarman I', 'Sambhuvarman', 'Rudravarman I', 'Vikrantavarman I'],
        correctAnswer: 2,
        explanation: 'Nước Lâm Ấp (Champa) đang dưới thời Vua Rudravarman I, và chính ông đã cho quân đánh phá Đức Châu vào tháng 5 năm 543.'
      },
      {
        question: 'Lý Bí đã cử vị tướng nào mang quân chủ lực đi chống lại cuộc xâm lược của Lâm Ấp ở phía Nam?',
        options: ['Lý Thiên Bảo', 'Phạm Tu', 'Triệu Túc', 'Lý Phục Man'],
        correctAnswer: 1,
        explanation: 'Lý Bí đã cử tướng Phạm Tu mang một lực lượng lớn tiến về phương Nam để đối phó với quân Lâm Ấp.'
      },
      {
        question: 'Quân của Phạm Tu đã đánh tan quân Lâm Ấp tại địa điểm nào, buộc vua Rudravarman I phải bỏ chạy?',
        options: ['Hoành Sơn', 'Đức Châu', 'Long Biên', 'Cửu Đức (Cừu Đức)'],
        correctAnswer: 3,
        explanation: 'Nghĩa quân do Phạm Tu chỉ huy đã đập tan đội quân Lâm Ấp tại châu Cửu Đức (còn được ghi là Cừu Đức).'
      },
      {
        question: 'Lý do chính khiến Lâm Ấp tấn công Đức Châu vào năm 543 là gì?',
        options: [
          'Lâm Ấp muốn trả thù cho một cuộc tấn công trước đó của Giao Châu.',
          'Nhà Lương yêu cầu Lâm Ấp phối hợp tấn công Lý Bí.',
          'Lợi dụng việc chính quyền Lương ở Giao Châu sụp đổ và Lý Bí bận đối phó với Lương ở phía Bắc.',
          'Lý Bí đã chủ động tấn công Lâm Ấp trước.'
        ],
        correctAnswer: 2,
        explanation: 'Lâm Ấp lợi dụng tình hình chính quyền đô hộ của Nhà Lương ở châu Giao đã sụp đổ và quân khởi nghĩa của Lý Bí đang phải đối phó với cuộc tấn công của quân Lương ở phía bắc để đánh phá Đức Châu.'
      },
      {
        question: 'Ngoài Phạm Tu, sách Việt điện u linh và truyền thuyết địa phương còn nhắc đến vị tướng nào của Lý Bí cũng tham gia chống quân Lâm Ấp?',
        options: ['Tinh Thiều', 'Lý Nam Đế', 'Lý Thiên Bảo', 'Lý Phục Man'],
        correctAnswer: 3,
        explanation: 'Sách Việt điện u linh và truyền thuyết địa phương cho biết tướng Lý Phục Man, đang đóng quân ở vùng Đỗ Động, cũng được Lý Bí cử đi phá tan cuộc xâm lấn của Lâm Ấp. Ngọc phả còn ghi ông mang quân vào giữ Nhật Nam.'
      }
    ],
    rewards: {
      experience: 500,
      coins: 250
    }
  },
  // To Dinh Events
  {
    id: 'event_to_dinh',
    heading: 'Tô Định được bổ nhiệm Thái thú Giao Chỉ, cai trị tàn bạo (Năm 34)',
    year: 34,
    type: 'period_1', 
    context: 'Chính cơ sở kinh tế phong kiến nảy sinh và dần hoàn thiện cũng tạo điều kiện cho sự tiếp thu những yếu tố văn hóa mới. Bản lĩnh văn hóa cổ truyền của người dân bản địa qua đó cũng được va chạm, thử thách để chứng minh sức mạnh trường tồn. Những trường học phong kiến được các đại biểu của chính quyền đô hộ như Tích Quang, Nhâm Diên... lập ra nhằm vào con cháu các quan lại ở Giao Chi để đào tạo nên những thuộc viên phục vụ cho chính quyền đô hộ. Nho giáo theo đó được truyền bá vào xã hội Lạc Việt, thành cơ sở cho chính quyền phong kiến nhà Hán trên đất Giao Chỉ. * Nguyên nhân cuộc khởi nghĩa Năm 34, Thái thú Tô Định được cừ đến Giao Chi thay Tích Quang. Đây là một tên quan nổi tiếng gian tham và tàn bạo. Sách Lĩnh nam chích quái viết: "Bấy giờ Thứ sử Giao Châu là Tô Định tham lam tàn bạo, người trong châu quận khổ vì hắn".',
    description: 'Trong bối cảnh Giao Chỉ (thuộc Giao Châu) dưới thời nhà Hán đô hộ, cơ sở kinh tế phong kiến đang dần hình thành, cùng với đó là sự tiếp thu các yếu tố văn hóa mới từ phương Bắc. Chính quyền đô hộ, thông qua các quan cai trị như Tích Quang và Nhâm Diên, đã thiết lập các trường học phong kiến nhằm đào tạo con cháu quan lại bản địa thành thuộc viên phục vụ cho bộ máy cai trị. Nho giáo cũng được truyền bá, trở thành nền tảng tư tưởng cho chính quyền phong kiến nhà Hán tại Giao Chỉ. Tuy nhiên, tình hình trở nên tồi tệ hơn vào năm 34 khi Tô Định được cử đến Giao Chỉ để thay Tích Quang giữ chức Thái thú. Tô Định được ghi nhận là một viên quan vô cùng gian tham và tàn bạo. Sự cai trị hà khắc của ông đã khiến người dân trong châu quận phải chịu đựng nhiều khổ cực, và đây được xem là một trong những nguyên nhân chính châm ngòi cho các cuộc khởi nghĩa của người Việt sau này, điển hình là khởi nghĩa Hai Bà Trưng.',
    period: 'period_1', // Consistent with other period_1 events
    characters: ['Tô Định', 'Tích Quang', 'Nhâm Diên'],
    locations: ['Giao Chỉ', 'Giao Châu', 'Xã hội Lạc Việt'],
    questions: [
      {
        question: 'Ai đã được cử đến Giao Chỉ làm Thái thú thay Tích Quang vào năm 34?',
        options: ['Nhâm Diên', 'Tô Định', 'Sĩ Nhiếp', 'Mã Viện'],
        correctAnswer: 1,
        explanation: 'Vào năm 34, Thái thú Tô Định được cử đến Giao Chỉ thay Tích Quang, theo thông tin trong đoạn văn: "Năm 34, Thái thú Tô Định được cừ đến Giao Chi thay Tích Quang."'
      },
      {
        question: 'Tô Định được mô tả là một viên quan như thế nào trong thời gian cai trị Giao Chỉ?',
        options: ['Công minh và chính trực', 'Anh dũng và tài lược', 'Gian tham và tàn bạo', 'Nhu mì và dễ dãi'],
        correctAnswer: 2,
        explanation: 'Tô Định được mô tả là "một tên quan nổi tiếng gian tham và tàn bạo". Sách Lĩnh nam chích quái cũng viết: "Bấy giờ Thứ sử Giao Châu là Tô Định tham lam tàn bạo, người trong châu quận khổ vì hắn".'
      },
      {
        question: 'Mục đích chính của việc Tích Quang và Nhâm Diên lập ra các trường học phong kiến ở Giao Chỉ là gì?',
        options: [
          'Nâng cao dân trí cho người Lạc Việt.',
          'Truyền bá văn hóa bản địa của Giao Chỉ.',
          'Đào tạo thuộc viên phục vụ cho chính quyền đô hộ.',
          'Chuẩn bị lực lượng chống lại nhà Hán.'
        ],
        correctAnswer: 2,
        explanation: 'Đoạn văn cho biết: "Những trường học phong kiến được các đại biểu của chính quyền đô hộ như Tích Quang, Nhâm Diên... lập ra nhằm vào con cháu các quan lại ở Giao Chi để đào tạo nên những thuộc viên phục vụ cho chính quyền đô hộ."'
      },
      {
        question: 'Hệ tư tưởng nào đã được truyền bá vào xã hội Lạc Việt và trở thành cơ sở cho chính quyền phong kiến nhà Hán tại Giao Chỉ?',
        options: ['Phật giáo', 'Đạo giáo', 'Nho giáo', 'Pháp gia'],
        correctAnswer: 2,
        explanation: 'Theo đoạn văn: "Nho giáo theo đó được truyền bá vào xã hội Lạc Việt, thành cơ sở cho chính quyền phong kiến nhà Hán trên đất Giao Chỉ."'
      },
      {
        question: 'Sự kiện Tô Định được bổ nhiệm và cai trị Giao Chỉ được xem là gì theo ngữ cảnh của đoạn văn?',
        options: [
          'Một giai đoạn phát triển thịnh vượng của Giao Chỉ.',
          'Một nỗ lực cải cách hành chính thành công.',
          'Nguyên nhân của một cuộc khởi nghĩa.',
          'Sự khởi đầu của nền độc lập tự chủ.'
        ],
        correctAnswer: 2,
        explanation: 'Đoạn văn có ghi "* Nguyên nhân cuộc khởi nghĩa" ngay trước khi đề cập đến việc Tô Định được cử đến và sự tàn bạo của ông ta, cho thấy sự cai trị này là nguyên nhân dẫn đến khởi nghĩa.'
      }
    ],
    rewards: {
      experience: 150,
      coins: 75
    }
  },
  {
    id: 'event_to_dinh_2',
    heading: 'Chính sách cai trị áp bức của Tô Định và nhà Đông Hán tại Giao Chỉ (sau năm 34)',
    year: 34,
    type: 'other', // Consistent period ID
    context: 'Các sách sử Trung Quốc cũng khẳng định đây là một viên quan tàn ác và bạo ngược. Việt kiệu thưviết: "Thái thú Tô Định tham lam độc ác, dùng pháp luật trói buộc". Chính sách áp bức bóc lột của nhà Đông Hán đối với người dân Giao Chi ngày càng tàn tệ. Người dân không những bị cướp dưới hình thức nộp cống. Các quan lại cấp huyện dòng dõi các Lạc hầu, Lạc tướng bị thu hẹp về quyền lực chính trị và kinh tế, bị thúc ép, đè nén nên rất bất bình. Bất chấp sự khác biệt trong phong tục nhà Hán làm công cụ trấn áp, khủng bố sự phản kháng của các quan lại địa phương và người dân Giao Chỉ.',
    description: 'Sau khi được bổ nhiệm Thái thú Giao Chỉ vào năm 34, Tô Định đã thi hành một chính sách cai trị vô cùng tàn bạo, được ghi nhận cả trong các sách sử của Trung Quốc. Sách "Việt kiệu thư" mô tả Tô Định là kẻ "tham lam độc ác, dùng pháp luật trói buộc". Dưới sự cai trị của ông và nhà Đông Hán, chính sách áp bức và bóc lột người dân Giao Chỉ ngày càng trở nên khắc nghiệt. Dân chúng bị bóc lột nặng nề, một trong những hình thức là bị cướp bóc tài sản thông qua việc nộp cống vật. Không chỉ dân thường, mà cả các quan lại địa phương thuộc dòng dõi Lạc hầu, Lạc tướng cũng bị chèn ép; quyền lực chính trị và kinh tế của họ bị thu hẹp đáng kể, gây nên sự bất bình sâu sắc. Nhà Đông Hán, thông qua Tô Định, còn sử dụng việc coi thường, bất chấp sự khác biệt về phong tục tập quán của người Việt như một công cụ để đàn áp, khủng bố mọi sự phản kháng từ phía quan lại và nhân dân Giao Chỉ. Những chính sách này đã làm tăng thêm sự thống khổ và căm phẫn trong lòng người dân, góp phần châm ngòi cho các cuộc đấu tranh giành lại độc lập.',
    period: 'period_1', // Consistent period ID
    characters: ['Tô Định', 'Lạc hầu', 'Lạc tướng'],
    locations: ['Giao Chỉ', 'Trung Quốc', 'Nhà Đông Hán'],
    questions: [
      {
        question: 'Sách sử Trung Quốc nào đã ghi chép về sự tàn ác của Thái thú Tô Định với miêu tả "tham lam độc ác, dùng pháp luật trói buộc"?',
        options: ['Hậu Hán thư', 'Việt kiệu thư', 'Tư trị thông giám', 'Sử ký Tư Mã Thiên'],
        correctAnswer: 1,
        explanation: 'Context cho biết: "Việt kiệu thư viết: \'Thái thú Tô Định tham lam độc ác, dùng pháp luật trói buộc\'."'
      },
      {
        question: 'Chính sách của nhà Đông Hán đối với người dân Giao Chỉ dưới thời Tô Định được mô tả như thế nào?',
        options: ['Khoan dung và nhân ái', 'Áp bức bóc lột ngày càng tàn tệ', 'Khuyến khích phát triển kinh tế địa phương', 'Tôn trọng phong tục tập quán bản địa'],
        correctAnswer: 1,
        explanation: 'Context nêu rõ: "Chính sách áp bức bóc lột của nhà Đông Hán đối với người dân Giao Chi ngày càng tàn tệ."'
      },
      {
        question: 'Các quan lại địa phương như Lạc hầu, Lạc tướng ở Giao Chỉ bị ảnh hưởng như thế nào bởi chính sách của nhà Đông Hán?',
        options: ['Được tăng thêm quyền lực và bổng lộc', 'Bị thu hẹp quyền lực chính trị và kinh tế, bị đè nén', 'Được nhà Hán tin tưởng và giao trọng trách', 'Không bị ảnh hưởng gì đáng kể'],
        correctAnswer: 1,
        explanation: 'Context ghi: "Các quan lại cấp huyện dòng dõi các Lạc hầu, Lạc tướng bị thu hẹp về quyền lực chính trị và kinh tế, bị thúc ép, đè nén nên rất bất bình."'
      },
      {
        question: 'Nhà Hán đã sử dụng điều gì, ngoài luật pháp hà khắc, làm công cụ để trấn áp sự phản kháng của quan lại và người dân Giao Chỉ?',
        options: ['Hỗ trợ kinh tế và ban phát của cải', 'Tuyên truyền về sự ưu việt của văn hóa Hán', 'Bất chấp sự khác biệt trong phong tục', 'Trao quyền tự trị cho các địa phương'],
        correctAnswer: 2,
        explanation: 'Context đề cập: "Bất chấp sự khác biệt trong phong tục nhà Hán làm công cụ trấn áp, khủng bố sự phản kháng của các quan lại địa phương và người dân Giao Chỉ."'
      },
      {
        question: 'Một trong những hình thức bóc lột người dân Giao Chỉ mà Tô Định và nhà Đông Hán áp dụng là gì?',
        options: ['Bắt đi lính thú xa nhà', 'Cướp bóc dưới hình thức nộp cống', 'Ép buộc học chữ Hán', 'Phá hủy các đền thờ Lạc Việt'],
        correctAnswer: 1,
        explanation: 'Context viết: "Người dân không những bị cướp dưới hình thức nộp cống."'
      }
    ],
    rewards: {
      experience: 180,
      coins: 90
    }
  }
];