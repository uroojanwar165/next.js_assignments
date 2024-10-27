import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import abooutStyle from "./about.module.css"

export default function AboutPage() {
    return (
       <div>
         <Header/>
         <div className= {abooutStyle.about}> <h2>About Page</h2>
         <p>This is the about page where we describe our visions.</p> </div>
         <Footer/>
       </div>
    )
}     