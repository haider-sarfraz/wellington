import { Outlet } from "react-router-dom";
import { ContactForm } from "./containers/contact-form/root";

export const AppLayout = () => {
  return (
    <>
      <Outlet />
      <ContactForm />
    </>
  );
};