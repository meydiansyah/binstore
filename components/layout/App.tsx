import { useAppSelector } from "@/core/redux/hooks";
import Head from "next/head";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setShowSidebar } from "@/core/redux/slices/ui/uiSlice";
import Footer from "../Footer";
import Navbar from "../Navbar";
import SideBar from "../Sidebar";
import ModalLogin from "../modal/login/login_modal";
import ConfirmationModal from "../modal/confirmation/confirmation_modal";

const MainLayout = ({ children }) => {
  const show = useAppSelector((state) => state.ui.showSidebar);
  const dispatch = useDispatch();

  useEffect(() => {
    if (show) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [show]);

  return (
    <>
      <Head>
        <title>binstore.</title>
      </Head>
      <Navbar />
      <ModalLogin />
      <ConfirmationModal />
      <SideBar />
      <div onClick={() => dispatch(setShowSidebar(false))}>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
