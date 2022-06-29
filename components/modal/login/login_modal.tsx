import { useAppDispatch, useAppSelector } from "@/core/redux/hooks";
import { useLoginMutation } from "@/core/redux/slices/auth/queries";
import { closeModal, setToast } from "@/core/redux/slices/ui/uiSlice";
import {
  Text,
  Modal,
  Input,
  Row,
  Checkbox,
  Button,
  Loading,
} from "@nextui-org/react";
import { useState } from "react";
import Mail from "./mail";
import Password from "./password";

const ModalLogin = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      username: email,
      password,
    }).then(() => {
      dispatch(closeModal());
      setEmail("johnd");
      setPassword("m38rmF$");
      dispatch(setToast("Login berhasil"));
    });
  };

  const closeHandler = () => {
    dispatch(closeModal());
  };
  const { modalLogin } = useAppSelector((state) => state.ui);

  return (
    <form onSubmit={handleSubmit}>
      <Modal
        blur
        aria-labelledby="modal-title"
        open={modalLogin}
        onClose={closeHandler}
        preventClose={isLoading}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to{" "}
            <Text b size={18} className="font-josef">
              binstore.
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            bordered
            fullWidth
            color="primary"
            size="lg"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            contentLeft={<Mail />}
          />
          <Input.Password
            bordered
            fullWidth
            label="Password"
            color="primary"
            size="lg"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            contentLeft={<Password />}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          {isLoading ? (
            <Button
              disabled
              auto
              bordered
              color="secondary"
              css={{ px: "$13" }}
            >
              <Loading type="spinner" color="currentColor" size="sm" />
            </Button>
          ) : (
            <>
              <Button auto ghost color="error" onClick={closeHandler}>
                Close
              </Button>
              <Button auto color="primary" type="submit" onClick={handleSubmit}>
                Sign In
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </form>
  );
};

export default ModalLogin;
