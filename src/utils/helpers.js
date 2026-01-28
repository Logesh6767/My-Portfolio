// Smooth scroll utility
export const smoothScrollTo = (e, elementId) => {
  if (e) {
    e.preventDefault();
  }
  
  const targetId = typeof elementId === 'string' ? elementId : e?.currentTarget?.getAttribute('href')?.substring(1);
  const element = document.getElementById(targetId);
  
  if (element) {
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - 80; // Account for fixed header
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Scroll to top utility
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// Check if element is in viewport
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Throttle function for scroll events
export const throttle = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};