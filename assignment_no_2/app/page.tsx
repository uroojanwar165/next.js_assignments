import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import Hero from "./Hero/Hero";
import pageStyle from "./page.module.css"
import Link from "next/link";

export default function Home() {
  return (
     <div>
      <h1 className= {pageStyle.page}>Welcome!</h1>
        <Header/><br />
        <ul className= {pageStyle.ul}>
          <li><Link href= "/about">About</Link></li>
          <li><Link href= "/contact_us">Contact Us</Link></li>
        </ul><br />
        <Hero/><br />
        <Footer/>
     </div>
  );
}
