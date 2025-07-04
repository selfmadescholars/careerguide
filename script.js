const questions = [
  {
    question: "1. Khi làm việc nhóm, bạn thường là người:",
    options: ["A. Đưa ra ý tưởng mới và truyền cảm hứng", "B. Sắp xếp, phân chia công việc rõ ràng", "C. Nhẹ nhàng lắng nghe và kết nối mọi người", "D. Lặng lẽ làm nhưng luôn hoàn thành đúng hạn"]
  },
  {
    question: "2. Bạn xử lý áp lực bằng cách:",
    options: ["A. Chia sẻ với người khác hoặc viết ra", "B. Lập kế hoạch rõ ràng để kiểm soát", "C. Tập trung vào cảm xúc của bản thân và nghỉ ngơi", "D. Phân tích nguyên nhân và tìm giải pháp logic"]
  },
  {
    question: "3. Bạn thích dành thời gian cho việc nào nhất?",
    options: ["A. Viết lách, chia sẻ, làm video", "B. Tổ chức sự kiện hoặc làm việc có mục tiêu rõ", "C. Tham gia hoạt động xã hội, thiện nguyện", "D. Tìm hiểu công nghệ, nghiên cứu số liệu"]
  },
  {
    question: "4. Điều gì khiến bạn thấy công việc 'xứng đáng'?",
    options: ["A. Có ảnh hưởng tới người khác", "B. Thành tựu rõ ràng, thăng tiến nhanh", "C. Giúp đỡ người yếu thế hoặc lan tỏa yêu thương", "D. Giải quyết vấn đề khó và tạo ra giá trị thực tế"]
  },
  {
    question: "5. Trong tương lai bạn muốn:",
    options: ["A. Trở thành người truyền cảm hứng, có ảnh hưởng lớn", "B. Lãnh đạo một doanh nghiệp hoặc tổ chức", "C. Làm công việc giúp đỡ người khác sống tốt hơn", "D. Sáng tạo hoặc cải tiến công nghệ để thay đổi xã hội"]
  },
  {
    question: "6. Bạn muốn môi trường làm việc thế nào?",
    options: ["A. Năng động, nhiều con người", "B. Có quy trình rõ, hiệu suất cao", "C. Nhân văn, thân thiện", "D. Được tập trung chuyên môn sâu, ít bị làm phiền"]
  }
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');

function buildQuiz() {
  const output = [];
  questions.forEach((q, i) => {
    const options = q.options.map(opt => `
      <label>
        <input type="radio" name="question${i}" value="${opt.charAt(0)}" />
        ${opt}
      </label>
    `).join('');
    output.push(`<div class="question">${q.question}</div><div class="options">${options}</div>`);
  });
  quizContainer.innerHTML = output.join('');
}

function showResults() {
  const answers = quizContainer.querySelectorAll('.options');
  const scores = {
    "Người truyền cảm hứng": 0,
    "Người tổ chức": 0,
    "Người chữa lành": 0,
    "Người phân tích / Kỹ thuật": 0
  };

  questions.forEach((_, i) => {
    const selected = answers[i].querySelector('input:checked');
    if (!selected) return;
    const value = selected.value;
    if (value === "A") scores["Người truyền cảm hứng"]++;
    else if (value === "B") scores["Người tổ chức"]++;
    else if (value === "C") scores["Người chữa lành"]++;
    else if (value === "D") scores["Người phân tích / Kỹ thuật"]++;
  });

  const result = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  resultContainer.innerHTML = `🎉 Kết quả của bạn: <strong>${result}</strong>`;
}

buildQuiz();
submitButton.addEventListener('click', showResults);
