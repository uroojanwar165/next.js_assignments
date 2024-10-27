import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import contactUsStyle from "./contact_us.module.css"

export default function ContactUs() {
  return (
     <div>
     <Header/>
     <div className= {contactUsStyle.contact_us}> <h1>Contact Us</h1>
      <p>This is a contact page where you can contact us.</p> </div>
     <Footer/>
     </div>
  );
}