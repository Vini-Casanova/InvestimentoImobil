'use client'
import { type NextPage } from "next";
import { LogIn } from "../components/sections/Login";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const Logar: NextPage = () =>{
    const router = useRouter()
    return (
      <main className="h-screen bg-slate-300">
            <Button className="w-35 max-w-[12rem] bg-blue-950 text-black-900"
           onClick={() => router.push('/')}>
            voltar
           </Button>
         <LogIn/>
      </main>
     
    )
  }
  export default Logar;