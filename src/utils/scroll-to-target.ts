export const scrollToTop = (topOffset?: number) => {
  window.scrollTo({
    top: topOffset || 0,
    behavior: 'smooth',
  })
}

export const scrollToElement = (element: HTMLElement) => {
  element.scrollIntoView({ behavior: 'smooth' })
}
