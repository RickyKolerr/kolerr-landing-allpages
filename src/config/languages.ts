export type Language = 'en' | 'vi';

export const languages = {
  en: {
    common: {
      getStarted: "Get Started",
      learnMore: "Learn More",
      watchDemo: "Watch Demo",
      startFreeTrial: "Start Free Trial",
      bookDemo: "Book a Demo",
      signIn: "Sign In",
      signUp: "Sign Up",
      submit: "Submit",
      cancel: "Cancel",
      save: "Save",
      delete: "Delete",
      edit: "Edit",
      search: "Search",
    },
    navigation: {
      home: "Home",
      forKols: "For KOLs",
      forBrands: "For Brands",
      forAgencies: "For Agencies",
      pricing: "Pricing",
      features: "Features",
      chat: "Chat",
      contracts: "Contracts",
    },
    contact: {
      title: "Get in Touch",
      form: {
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        subjectPlaceholder: "Subject",
        messagePlaceholder: "Your Message",
        submit: "Send Message",
        successTitle: "Message Sent",
        successMessage: "Thank you for your message. We'll get back to you soon!",
      },
      info: {
        title: "Contact Information",
        description: "Have questions? We're here to help! Reach out to us through any of these channels.",
        address: "Address",
        phone: "Phone",
        email: "Email",
        hours: "Business Hours",
      },
    },
  },
  vi: {
    common: {
      getStarted: "Bắt Đầu",
      learnMore: "Tìm Hiểu Thêm",
      watchDemo: "Xem Demo",
      startFreeTrial: "Dùng Thử Miễn Phí",
      bookDemo: "Đặt Lịch Demo",
      signIn: "Đăng Nhập",
      signUp: "Đăng Ký",
      submit: "Xác Nhận",
      cancel: "Hủy Bỏ",
      save: "Lưu",
      delete: "Xóa",
      edit: "Sửa",
      search: "Tìm Kiếm",
    },
    navigation: {
      home: "Trang Chủ",
      forKols: "Dành Cho KOLs",
      forBrands: "Dành Cho Thương Hiệu",
      forAgencies: "Dành Cho Đại Lý",
      pricing: "Bảng Giá",
      features: "Tính Năng",
      chat: "Trò Chuyện",
      contracts: "Hợp Đồng",
    },
    contact: {
      title: "Liên Hệ",
      form: {
        namePlaceholder: "Họ và Tên",
        emailPlaceholder: "Email",
        subjectPlaceholder: "Tiêu Đề",
        messagePlaceholder: "Nội Dung",
        submit: "Gửi Tin Nhắn",
        successTitle: "Đã Gửi Tin Nhắn",
        successMessage: "Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất có thể!",
      },
      info: {
        title: "Thông Tin Liên Hệ",
        description: "Bạn có câu hỏi? Chúng tôi luôn sẵn sàng hỗ trợ! Hãy liên hệ qua các kênh sau.",
        address: "Địa Chỉ",
        phone: "Điện Thoại",
        email: "Email",
        hours: "Giờ Làm Việc",
      },
    },
  },
};

export const getLanguageString = (lang: Language, path: string) => {
  const keys = path.split('.');
  let current: any = languages[lang];
  
  for (const key of keys) {
    if (current[key] === undefined) {
      console.warn(`Missing translation for path: ${path} in language: ${lang}`);
      return path;
    }
    current = current[key];
  }
  
  return current;
};
