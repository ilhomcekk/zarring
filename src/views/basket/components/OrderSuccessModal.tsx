import { Modal } from "antd";
import { modalsStore } from "../../../store";
import { ASSETS } from "../../../assets/images";

const OrderSuccessModal = () => {
  const { modals, closeModal } = modalsStore();

  return (
    <Modal
      open={modals?.orderSuccess}
      footer={null}
      onCancel={() => closeModal("orderSuccess")}
      onClose={() => closeModal("orderSuccess")}
      title="Ваш заказ принят"
      centered
    >
      <img
        src={ASSETS.success}
        className="w-full h-[200px] object-contain mb-12"
        alt=""
      />
      <p className="font-[600] text-center">
        Ваш заказ успешно получен. Мы свяжемся с вами для получения информации.
        Спасибо за ваш заказ!
      </p>
    </Modal>
  );
};

export default OrderSuccessModal;
