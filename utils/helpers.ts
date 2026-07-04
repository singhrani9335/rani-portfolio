export const scrollToSection = (id: string) => {
  const el = document.querySelector(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export const formatDate = (date: Date) => {
  return new Date(date).getFullYear();
};