import "./Kidopia.css"; 
import Header from "./Header/Header";
import Hero from "./Hero/Hero"; 
import Box from "./Box/Box"; 
import About from "./About/About";

function Kidopia() {

  return (
   
<div className="fullscreen">
   {/* Header */}
      <Header />
      <main>
      <Hero />
      <Box />
     
      </main>


</div>
  )
}

export default Kidopia;
