import AppBar from "../AppBar/AppBar";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <AppBar />
      {children}
      <Footer />
    </>
  );
}
