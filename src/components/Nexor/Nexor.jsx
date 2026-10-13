import All from "../../assets/NexorImg"
import About from "./About"
import Button from "./Button"
import CaseStudies from "./CaseStudies"
import CustomerStories from "./CustomerStor"
import FeatuerCard from "./FeatuerCard"
import Hero from "./Hero"
import InfinteLogo from "./InfinteLogo"
import Result from "./Result"
import Services from "./Services";
import Impact from "./Impact"
import Faq from "./Faq"
import Insights from "./Insights"
import Cta from "./Cta";
import Footer from "./Footer"
import Home from "./Home"
export default function Nexor() {
  return (
    <div>

<Home/>

<FeatuerCard img1={All.img3} img2={All.img4} />

<InfinteLogo />

<About />

<Services/>

<Impact/>
<CaseStudies/>

  <Result />
<CustomerStories/>

<Faq/>
<Insights/>
<Cta/>
<Footer/>
    </div>
  )
}
