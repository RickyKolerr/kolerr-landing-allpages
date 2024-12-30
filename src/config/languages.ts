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
    hero: {
      title: "Scale Your Influence with AI",
      subtitle: "Connect brands with the right influencers using advanced AI matching",
      description: "Leverage our comprehensive platform to manage campaigns, analyze performance, and grow your business",
    },
    pricing: {
      title: "Choose your perfect plan",
      subtitle: "Simple, transparent pricing for everyone",
      perMonth: "/month",
      perYear: "/year",
      yearly: "save 15%",
      getStarted: "Get Started",
      features: {
        aisearches: "AI Searches",
        activeslots: "Active Slots",
        advancedfiltering: "Advanced Filtering",
        dataanalytics: "Data Analytics",
        projecttracking: "Project Tracking",
        prioritysupport: "Priority Support",
        teamcollaboration: "Team Collaboration",
      },
      searchPacks: "Search Packs",
      searches: "searches",
      singleSearch: "Single Search",
    },
    chat: {
      newMessage: "New Message",
      typeMessage: "Type a message...",
      sendMessage: "Send",
      attachFile: "Attach File",
      online: "Online",
      offline: "Offline",
      typing: "typing...",
    },
    contracts: {
      createContract: "Create Contract",
      activeContracts: "Active Contracts",
      draftContracts: "Draft Contracts",
      signedContracts: "Signed Contracts",
      pendingContracts: "Pending Contracts",
      uploadDocument: "Upload Document",
      signContract: "Sign Contract",
      contractDetails: "Contract Details",
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
    hero: {
      title: "Phát Triển Tầm Ảnh Hưởng với AI",
      subtitle: "Kết nối thương hiệu với influencer phù hợp bằng AI thông minh",
      description: "Tận dụng nền tảng toàn diện để quản lý chiến dịch, phân tích hiệu suất và phát triển kinh doanh",
    },
    pricing: {
      title: "Chọn gói phù hợp",
      subtitle: "Giá cả đơn giản, minh bạch cho mọi người",
      perMonth: "/tháng",
      perYear: "/năm",
      yearly: "tiết kiệm 15%",
      getStarted: "Bắt Đầu",
      features: {
        aisearches: "Tìm Kiếm AI",
        activeslots: "Slot Hoạt Động",
        advancedfiltering: "Lọc Nâng Cao",
        dataanalytics: "Phân Tích Dữ Liệu",
        projecttracking: "Theo Dõi Dự Án",
        prioritysupport: "Hỗ Trợ Ưu Tiên",
        teamcollaboration: "Hợp Tác Nhóm",
      },
      searchPacks: "Gói Tìm Kiếm",
      searches: "lượt tìm",
      singleSearch: "Tìm Kiếm Đơn",
    },
    chat: {
      newMessage: "Tin Nhắn Mới",
      typeMessage: "Nhập tin nhắn...",
      sendMessage: "Gửi",
      attachFile: "Đính Kèm Tệp",
      online: "Trực Tuyến",
      offline: "Ngoại Tuyến",
      typing: "đang nhập...",
    },
    contracts: {
      createContract: "Tạo Hợp Đồng",
      activeContracts: "Hợp Đồng Đang Hoạt Động",
      draftContracts: "Hợp Đồng Nháp",
      signedContracts: "Hợp Đồng Đã Ký",
      pendingContracts: "Hợp Đồng Chờ Duyệt",
      uploadDocument: "Tải Lên Tài Liệu",
      signContract: "Ký Hợp Đồng",
      contractDetails: "Chi Tiết Hợp Đồng",
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