import { ToastContainer as BaseToastContainer, Slide } from "react-toastify";

import "./Toast.css";
import typography from "../../design-token/typography";

export default function ToastContainer() {
  return (
    <BaseToastContainer
      position="top-center"
      autoClose={1000}
      closeButton={false}
      hideProgressBar
      pauseOnHover={false}
      draggable={false}
      limit={1}
      transition={Slide}
      bodyClassName={typography.$semantic.title4Bold}
    />
  );
}
