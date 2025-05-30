export interface FAQ {
  question: string;
  answer: string;
}

export const LEGAL_FAQS: FAQ[] = [
  {
    question: 'Khi nào cần công chứng hợp đồng mua bán nhà đất?',
    answer: 'Theo quy định của pháp luật Việt Nam, các giao dịch về bất động sản bắt buộc phải công chứng, bao gồm hợp đồng mua bán, chuyển nhượng, tặng cho, đổi, thừa kế bất động sản. Việc công chứng phải được thực hiện tại các tổ chức hành nghề công chứng có thẩm quyền.'
  },
  {
    question: 'Thời hiệu khởi kiện trong tranh chấp hợp đồng là bao lâu?',
    answer: 'Theo Bộ luật Dân sự 2015, thời hiệu khởi kiện để yêu cầu Tòa án giải quyết vụ án dân sự là 3 năm, kể từ ngày người có quyền yêu cầu biết hoặc phải biết quyền, lợi ích hợp pháp của mình bị xâm phạm.'
  },
  {
    question: 'Bảo hiểm xã hội bắt buộc gồm những loại nào?',
    answer: 'Bảo hiểm xã hội bắt buộc tại Việt Nam gồm 5 chế độ: ốm đau, thai sản, tai nạn lao động - bệnh nghề nghiệp, hưu trí và tử tuất. Người lao động tham gia đóng BHXH bắt buộc sẽ được hưởng các quyền lợi tương ứng với từng chế độ.'
  },
  {
    question: 'Quyền nuôi con sau khi ly hôn được quy định như thế nào?',
    answer: 'Theo Luật Hôn nhân và Gia đình, sau khi ly hôn, quyền nuôi con được quyết định dựa trên lợi ích tốt nhất của con. Tòa án sẽ xem xét nhiều yếu tố như điều kiện chăm sóc, giáo dục, độ tuổi của con, nguyện vọng của con nếu đủ 7 tuổi trở lên, và khả năng đảm bảo điều kiện vật chất, tinh thần của mỗi bên cha mẹ.'
  }
]; 