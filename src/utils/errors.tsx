import { message } from "antd";

export const showErrors = (errors: any) => {
  if (errors?.errors) {
    Object.keys(errors?.errors).forEach((key) => {
      const errorMessages = errors.errors[key];
      message.error({
        content: `${key}: ${errorMessages}`,
      });
    });
  } else if (errors?.message) {
    message.error({
      content: errors?.message,
    });
  }
};
