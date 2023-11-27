import { type NextPage } from "next";
import { About } from './components/sections/About'
import { Hero } from './components/sections/Hero'
import { Calc } from './components/sections/Calc'
import { LogIn } from "./components/sections/Login";
import { SignIn } from "./components/sections/SignUp";



const Home: NextPage = () =>{
  return (
 
   
    <main className="bg-slate-300">
      <div >
        <Hero/>
        <About/>
        <Calc/>
        <LogIn/>
        <SignIn/>
      </div>
    </main>
   
  )
}
export default Home;