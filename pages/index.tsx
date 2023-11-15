import Footer from "@/components/Footer";
import Guess from "@/components/Guess";
import Hosting from "@/components/Hosting";
import Intro from "@/components/Intro";
import NavigationBar from "@/components/NavigationBar";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <>
    <NavigationBar/>
    <Intro/>
    <Box sx={{ my: 20 }}/>
    <Hosting/>
    <Box sx={{ my: 20 }}/>
    <Guess/>
    <Footer/>
    </>
  )
}

export default Home;
