import { useAppDispatch, useAppSelector } from "@/core/redux/hooks";
import { removeToast } from "@/core/redux/slices/ui/uiSlice";
import { useEffect } from "react";

const Toast = () => {
  const { show, text } = useAppSelector((state) => state.ui.toast);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(removeToast());
    }, 2500);
  });
  return (
    <div className="fixed z-50 flex items-center w-full bottom-16 left-10">
      {show && (
        <div className="flex items-center px-6 py-3 mx-4 text-sm text-center text-white bg-gray-900 shadow-md md:mx-0 w-max md:text-base rounded-md">
          <span>{text}</span>
          <button
            type="button"
            onClick={() => dispatch(removeToast())}
            className="flex items-center justify-center w-6 h-6 ml-4 bg-gray-800 cursor-pointer rounded-md"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Toast;
