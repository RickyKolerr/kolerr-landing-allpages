export type Language = 'en' | 'vi';

export const languages = {
  en: {
    pricing: {
      title: "Choose your perfect plan",
      subtitle: "Simple, transparent pricing for everyone. All plans include access to our core features.",
      monthly: "Monthly",
      yearly: "Yearly (save 15%)",
      getStarted: "Get Started",
      perMonth: "/month",
      perYear: "/year",
      searchPacks: "Pay-Per-Search Plans (International)",
      searches: "Searches",
      singleSearch: "Single Search",
      features: {
        aiSearches: "AI Searches",
        activeSlots: "Active Slots",
        advancedFiltering: "Advanced Filtering",
        dataAnalytics: "Data Analytics",
        projectTracking: "Project Tracking",
        prioritySupport: "Priority Support",
        teamCollaboration: "Team Collaboration",
      }
    }
  },
  vi: {
    pricing: {
      title: "Chọn gói phù hợp",
      subtitle: "Giá cả đơn giản, minh bạch cho mọi người. Tất cả các gói đều bao gồm các tính năng cốt lõi.",
      monthly: "Hàng tháng",
      yearly: "Hàng năm (tiết kiệm 15%)",
      getStarted: "Bắt đầu",
      perMonth: "/tháng",
      perYear: "/năm",
      searchPacks: "Gói Tìm Kiếm (Quốc tế)",
      searches: "Lượt tìm",
      singleSearch: "Tìm kiếm đơn",
      features: {
        aiSearches: "Tìm kiếm AI",
        activeSlots: "Slot hoạt động",
        advancedFiltering: "Lọc nâng cao",
        dataAnalytics: "Phân tích dữ liệu",
        projectTracking: "Theo dõi dự án",
        prioritySupport: "Hỗ trợ ưu tiên",
        teamCollaboration: "Hợp tác nhóm",
      }
    }
  }
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