import { Heading } from '../elements/Heading';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';
import { useRouter } from "next/navigation";
export  function LogIn() {
  const router = useRouter()
    return(
<div className='mt-24 flex w-full relative  min-h-[calc(100vh_-_230px)] flex-col items-center justify-center gap-9 px-20 max-[1234px]:flex-wrap max-md:px-4 md:justify-center'
id='LogIn'>
<Heading
            size="2xl"
            className=" w-fit bg-blue-950"
            color="text-white"
          >
            Log In
        </Heading>
<div className='flex w-180 flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow-md group'>
<div className="grid w-full max-w-sm items-center gap-1.5  text-black">
      <Label htmlFor="email">e-mail</Label>
      <Input id="email" type="email" />
    </div>

    <div className="grid w-full max-w-sm items-center gap-1.5 mt-5  text-black">
      <Label htmlFor="senha">Senha</Label>
      <Input id="senha" type="password" />
    <div className='flex justify-end text-blue-950'>
    <Button onClick={() => router.push('cadastro')} variant="ghost">Não tem conta? Faça seu cadastro</Button>
    </div>  
    </div>
    
</div>
<div className="flex w-20 h-10 mt-2 mb-10 justify-center bg-blue-950 text-white">
    <Button  onClick={() => router.push("historico")} variant="secondary">entrar</Button>
    </div>
</div>

    );
}