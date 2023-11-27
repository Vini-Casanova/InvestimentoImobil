'use client'
import { SignIn } from "../components/sections/SignUp";
import { Navbar } from "../components/modules/Navbar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Cadastrar(){
const router = useRouter()
    return (
      <main className="h-screen bg-slate-300">
           <Button className="w-35 max-w-[12rem] bg-blue-950 text-black-900"
           onClick={() => router.push('/')}>
            voltar
           </Button>
         <SignIn/>
      </main>
     
    )
  }

