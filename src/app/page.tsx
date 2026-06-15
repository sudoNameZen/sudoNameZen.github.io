import Navbar from "../Component/shared/Navbar";
import Footer from "../Component/shared/Footer";
import Sidebar from "../Component/shared/Sidebar";

// sudozen logs
export default function Home() {
  return (
    <>
    {/* NAVBAR */}
    <Navbar />
    {/* COINTENT PAGE / MAIN PAGE */}
    <Sidebar/>
    {/* FOOTER */}
    <Footer/>
    </>
  );
}
