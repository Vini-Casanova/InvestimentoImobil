import { Heading } from "../elements/Heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
export function SignIn() {
  return (
    <div
      className=" flex w-full h-full flex-col items-center justify-center gap-9 px-20 max-[1234px]:flex-wrap max-md:px-4 md:justify-center"
      id="SignIn"
    >
      <Heading size="2xl" className=" w-fit bg-blue-950" color="text-white">
        Cadastro
      </Heading>
      <div className="flex w-180 flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow-md group">
        <div className="grid w-full max-w-sm items-center gap-1.5  text-black">
          <Label htmlFor="name">nome</Label>
          <Input id="name" type="text" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5  text-black">
          <Label htmlFor="lastname">sobrenome</Label>
          <Input id="lastname" type="text" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5  text-black">
          <Label htmlFor="email">e-mail</Label>
          <Input id="email" type="email" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5 mt-5  text-black">
          <Label htmlFor="senha">Senha</Label>
          <Input id="senha" type="password" />
          <div className="flex justify-end text-blue-950">
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-5  text-black">
              <Label htmlFor="senha">confirme a senha</Label>
              <Input id="senha" type="password" />
            </div>
          </div>
          <div className="flex w-20 h-10 mt-2 mb-10 justify-center bg-blue-950 ">
            <Button variant="secondary">entrar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
