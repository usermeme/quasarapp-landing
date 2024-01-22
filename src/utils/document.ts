export const isClientSide = () => {
  return typeof window !== "undefined";
};

export const changeHtmlAttribute = (qualifiedName: string, value: string) => {
  if (isClientSide()) {
    document.documentElement.setAttribute(qualifiedName, value);
  }
};
