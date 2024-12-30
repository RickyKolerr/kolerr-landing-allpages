export const getOptimizedImageUrl = (url: string, width = 800) => {
  if (url.includes('unsplash.com')) {
    // Add width parameter to Unsplash URLs
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}w=${width}&q=75&fm=webp`;
  }
  return url;
};