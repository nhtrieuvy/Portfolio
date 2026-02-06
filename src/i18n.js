import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      brand: 'Portfolio',
      cta: 'Get in touch',
      lang: 'Language',
      light: 'Light Mode',
      dark: 'Dark Mode',
      nav: {
        home: 'Home',
        skills: 'Skills',
        projects: 'Projects',
        certificates: 'Certificates',
        about: 'About',
        contact: 'Contact',
      },
      hero: {
        badge: 'Hello, I am',
        name: 'Nguyen Hoang Trieu Vy',
        role: 'Information Technology student',
        intro: 'An IT student aspiring to become a professional Software Engineer. I build scalable and maintainable applications using React, Django, and Spring. Currently open to internship and fresher software engineering opportunities.',
        ctaPrimary: 'View My Work',
        ctaSecondary: 'Download CV',
      },
      skills: {
        title: 'My Skills',
        subtitle: 'A quick overview of my core competencies.',
      },
      projects: {
        title: 'My Projects',
        subtitle: 'Selected work that showcases my skills.',
        demo: 'Live Demo',
        download: 'Download App',
        github: 'GitHub',
      },
      certificates: {
        title: 'Certificates',
        subtitle: 'Professional courses and certifications I have completed.',
      },
      about: {
        title: 'About Me',
        bio: 'Final-year IT student with a strong foundation in software engineering and strengths in Python and Java',
        goal: 'My goal is to pursue a professional career as a Software Engineer, delivering effective solutions that create long-term value for companies and contribute positively to the IT community.',
      },
      contact: {
        title: 'Contact Me',
        subtitle: 'Have a project in mind? Let’s talk.',
        name: 'Your name',
        email: 'Your email',
        message: 'Your message',
        send: 'Send Message',
        success: 'Message sent successfully! I will kindly respond at your earliest convenience.',
        error: 'Failed to send. Try again later.',
      },
    },
  },
  vi: {
    translation: {
      brand: 'Hồ Sơ',
      cta: 'Liên hệ',
      lang: 'Ngôn ngữ',
      light: 'Chế độ sáng',
      dark: 'Chế độ tối',
      nav: {
        home: 'Trang chủ',
        skills: 'Kỹ năng',
        projects: 'Dự án',
        certificates: 'Chứng chỉ',
        about: 'Giới thiệu',
        contact: 'Liên hệ',
      },
      hero: {
        badge: 'Xin chào, tôi là',
        name: 'Nguyễn Hoàng Triệu Vỹ',
        role: 'Sinh viên công nghệ thông tin',
        intro: 'Một sinh viên CNTT khao khát trở thành Kỹ sư Phần mềm chuyên nghiệp. Tôi xây dựng các ứng dụng có khả năng mở rộng và dễ bảo trì sử dụng React, Django và Spring. Hiện đang tìm kiếm cơ hội thực tập và người mới ở vị trí kỹ sư phần mềm .',
        ctaPrimary: 'Xem dự án',
        ctaSecondary: 'Tải CV',
      },
      skills: {
        title: 'Kỹ năng',
        subtitle: 'Tổng quan các năng lực chính của tôi.',
      },
      projects: {
        title: 'Dự án',
        subtitle: 'Các dự án tiêu biểu thể hiện kỹ năng.',
        demo: 'Xem demo',
        download: 'Tải Ứng Dụng',
        github: 'GitHub',
      },
      certificates: {
        title: 'Chứng chỉ',
        subtitle: 'Các khóa học và chứng chỉ tôi đã hoàn thành.',
      },
      about: {
        title: 'Về tôi',
        bio: 'Sinh viên CNTT năm cuối với nền tảng vững chắc về kỹ thuật phần mềm và thế mạnh về Python và Java',
        goal: 'Mục tiêu là theo đuổi sự nghiệp chuyên nghiệp với vai trò Kỹ sư Phần mềm, cung cấp các giải pháp hiệu quả tạo giá trị lâu dài cho công ty và đóng góp tích cực cho cộng đồng CNTT.',
      },
      contact: {
        title: 'Liên hệ',
        subtitle: 'Bạn có ý tưởng? Hãy trao đổi nhé.',
        name: 'Họ tên',
        email: 'Email',
        message: 'Nội dung',
        send: 'Gửi',
        success: 'Gửi thành công! Tôi sẽ phản hồi bạn trong thời gian sớm nhất.',
        error: 'Gửi thất bại. Vui lòng thử lại.',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
