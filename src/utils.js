export const scrollTo = selector => {
  const element = document.querySelector(selector);
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

export const isInViewport = element => {
  if (!element) {
    return false;
  }

  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top >= -viewportHeight && rect.top < viewportHeight;
};
