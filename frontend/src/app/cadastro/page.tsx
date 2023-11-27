'use client'
import { SignIn } from "../components/sections/SignUp";
import { Navbar } from "../components/modules/Navbar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Cadastrar(){
const router = useRouter()
    return (
      <main className="h-screen bg-slate-300">
           <Button
           onClick={() => router.push('/')}>
            voltar
           </Button>
         <SignIn/>
      </main>
     
    )
  }

