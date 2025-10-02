import Hero from "./Hero/Hero";
import Box from "../Box/Box";
import About from "./About/About";

function Home() {

    return (

        <div>

            <Hero />
            <Box categoryName="action" />
            <Box categoryName="adventure" />
            <Box categoryName="puzzle" />
            <Box categoryName="sports" />
      <Box categoryName="arcade" />
            <About />
            
  


        </div>
    )
}

export default Home;
