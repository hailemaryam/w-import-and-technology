import Hero from "./Hero/Hero";
import Box from "../Box/Box";
import About from "./About/About";

function Home() {

    return (

        <div>

            <Hero />
            <Box categoryName="adventure" />
            <Box categoryName="puzzle" />
            <Box categoryName="action" />
            <Box categoryName="reflex" />
            <Box categoryName="sports" />

            <About />
            
  


        </div>
    )
}

export default Home;
