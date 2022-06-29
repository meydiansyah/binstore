import { useAppDispatch, useAppSelector } from "@/core/redux/hooks";
import { deleteUser } from "@/core/redux/slices/auth";
import { clearItems } from "@/core/redux/slices/cart/cartSlices";
import { closeModal } from "@/core/redux/slices/ui/uiSlice";
import { Text, Modal, Button } from "@nextui-org/react";

const ConfirmationModal = () => {
  const dispatch = useAppDispatch();
  const closeHandler = () => {
    dispatch(closeModal());
  };
  const { modalLogout } = useAppSelector((state) => state.ui);

  const logoutHandler = () => {
    dispatch(closeModal());
    dispatch(deleteUser());
    dispatch(clearItems());
  };
  return (
    <Modal
      blur
      preventClose
      aria-labelledby="modal-title"
      open={modalLogout}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Peringatan
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text>Apakah kamu yakin ingin keluar ?</Text>
      </Modal.Body>
      <Modal.Footer>
        <Button auto ghost color="primary" onClick={closeHandler}>
          Close
        </Button>
        <Button auto color="error" type="submit" onClick={logoutHandler}>
          Logout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
