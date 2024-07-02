import { Button, Form, Input, Modal, message } from "antd";
import { modalsStore, orderStore, productsStore } from "../../../store";
import { PhoneInput } from "../../../components";
import { useTranslation } from "react-i18next";

const OrderModal = () => {
  const { t } = useTranslation();
  const { modals, closeModal, openModal } = modalsStore();
  const { create, createLoading } = orderStore();
  const [form] = Form.useForm();
  const { basketCards } = productsStore();

  const handleSubmit = () => {
    form.validateFields().then(() => {
      const values = form.getFieldsValue();
      values["products"] = basketCards;
      create(values).then((res) => {
        if (res?.data?.id) {
          message.success({
            content: "Ваш заказ принят! Мы вам перезвоним",
          });
          closeModal("order");
          form.resetFields();
          openModal("orderSuccess");
          setTimeout(() => {
            closeModal("orderSuccess");
          }, 5000);
        }
      });
    });
  };

  const forms = [
    {
      label: t("name"),
      name: "user_name",
      required: true,
      message: t("required"),
      child: (
        <Input
          onChange={(e) => form.setFieldValue("user_name", e.target.value)}
        />
      ),
    },
    {
      label: t("phoneNumber"),
      name: "user_number",
      required: true,
      message: t("required"),
      child: (
        <PhoneInput onChange={(e) => form.setFieldValue("user_number", e)} />
      ),
    },
  ];

  return (
    <Modal
      open={modals?.order}
      footer={null}
      onCancel={() => closeModal("order")}
      onClose={() => closeModal("order")}
      title={`${t("design")} ${t("order")}`}
      centered
    >
      <Form form={form} layout="vertical" className="mt-12">
        {forms.map((item, idx) => (
          <Form.Item
            key={idx}
            label={item.label}
            name={item.name}
            rules={[{ required: item.required, message: item.message }]}
          >
            {item.child}
          </Form.Item>
        ))}
        <Button
          onClick={handleSubmit}
          disabled={createLoading}
          loading={createLoading}
          className="button w-full mt-12"
        >
          {t("design")}
        </Button>
      </Form>
    </Modal>
  );
};

export default OrderModal;
