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
        about: 'About',
        contact: 'Contact',
      },
      hero: {
        badge: 'Hello, I am',
        name: 'Nguyen Hoang Trieu Vy',
        role: 'Information Technology student',
        intro: 'An IT student aspiring to become a professional Software Engineer. I build scalable and maintainable applications using React, Django, and Spring. Currently open to internship and junior software engineering opportunities.',
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
        github: 'GitHub',
      },
      about: {
        title: 'About Me',
        bio: 'Passionate developer focused on building clean, scalable products.',
        goal: 'My goal is to deliver delightful user experiences and impactful solutions.',
      },
      contact: {
        title: 'Contact Me',
        subtitle: 'Have a project in mind? Let’s talk.',
        name: 'Your name',
        email: 'Your email',
        message: 'Your message',
        send: 'Send Message',
        success: 'Message sent successfully!',
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
        about: 'Giới thiệu',
        contact: 'Liên hệ',
      },
      hero: {
        badge: 'Xin chào, tôi là',
        name: 'Nguyễn Hoàng Triệu Vỹ',
        role: 'Sinh viên công nghệ thông tin',
        intro: 'Một sinh viên CNTT khao khát trở thành Kỹ sư Phần mềm chuyên nghiệp. Tôi xây dựng các ứng dụng có khả năng mở rộng và dễ bảo trì sử dụng React, Django và Spring. Hiện đang tìm kiếm cơ hội thực tập và vị trí kỹ sư phần mềm cấp junior.',
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
        github: 'GitHub',
      },
      about: {
        title: 'Về tôi',
        bio: 'Lập trình viên đam mê xây dựng sản phẩm sạch, dễ mở rộng.',
        goal: 'Mục tiêu là tạo trải nghiệm người dùng tuyệt vời và giải pháp hiệu quả.',
      },
      contact: {
        title: 'Liên hệ',
        subtitle: 'Bạn có ý tưởng? Hãy trao đổi nhé.',
        name: 'Họ tên',
        email: 'Email',
        message: 'Nội dung',
        send: 'Gửi',
        success: 'Gửi thành công!',
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
