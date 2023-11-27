'use client'
import { type NextPage } from "next";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Historic } from "../components/sections/Historic";
const Historico: NextPage = () =>{
    const router = useRouter()
    return (
      <main className="h-screen bg-slate-300">
            <Button className="w-35 max-w-[12rem] bg-blue-950 text-white"
           onClick={() => router.push('/')}>
            voltar
           </Button>
         <Historic/>
      </main>
     
    )
  }
  export default Historico;