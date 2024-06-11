export const formData = (
  obj: any,
  form?: FormData,
  namespace?: string
): FormData => {
  const fd = form || new FormData();
  let formKey: string;

  for (const property in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, property)) {
      if (namespace) {
        formKey = namespace + "[" + property + "]";
      } else {
        formKey = property;
      }

      if (
        typeof obj[property] === "object" &&
        !(obj[property] instanceof File) &&
        !(obj[property] instanceof Blob)
      ) {
        formData(obj[property], fd, property);
      } else {
        fd.append(formKey, obj[property]);
      }
    }
  }
  return fd;
};

export const formatPhone = (value?: string) => {
  const cleaned = value?.replace(/\D/g, "");
  const match = cleaned?.match(/^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    return `+${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}`;
  }
  return value || "";
};

export const getStaticTextById = (arr: any, id: number) => {
  return arr?.find((item: any) => item?.id === id);
};
