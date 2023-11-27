import { type NextPage } from "next";
import { About } from './components/sections/About'
import { Hero } from './components/sections/Hero'
import { Calc } from './components/sections/Calc'
import { LogIn } from "./components/sections/Login";
import { SignIn } from "./components/sections/SignUp";
import { Navbar } from "./components/modules/Navbar";



const Home: NextPage = () =>{
  return (
 
   
    <main className="bg-slate-300">
      <div >
        <Navbar/>
        <Hero/>
        <About/>
        <Calc/>
      </div>
    </main>
   
  )
}
export default Home;