import * as React from "react"
import { Heading } from '../elements/Heading';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Calc() {
    return (
      <section
        className="mt-24 flex w-full relative  min-h-[calc(100vh_-_230px)] flex-col items-center justify-center gap-9 px-20 max-[1234px]:flex-wrap max-md:px-4 md:justify-center"
        id="Calc"
      >
       <Heading
            size="2xl"
            className=" w-fit bg-blue-950"
            color="text-white"
          >
            Faça o cálculo!
        </Heading>
  
        <div className="flex w-180 flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow-md group">
          <div>
            <div className="mt-5">

          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-5  text-black">
      <Label htmlFor="aluguel">Digite o valor do aluguel do imovel</Label>
      <Input id="aluguel" type="number" />
    </div>

    <div className="grid w-full max-w-sm items-center gap-1.5 mt-5  text-black">
      <Label htmlFor="compra">Digite o valor do imovel</Label>
      <Input id="compra" type="number" />
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5 mt-5  text-black">
      <Label htmlFor="compra">Digite o valor da entrada</Label>
      <Input id="compra" type="number" />
    </div>

    <div className="grid w-full max-w-sm items-center gap-1.5 mt-5  text-black">
      <Label htmlFor="tempo">Digite o tempo, em meses, que você pretende ficar no imovel</Label>
      <Input id="tempo" type="number" />
    </div>
    <div className="mt-5 flex flex-col justify-start items-center space-x-2 text-black " >
    
              <span>
                Agora você deve escolher entre dois cenários:
              </span>
              <span>
                Cenário 1:
              </span>
              <span>
                Cenário 2: 
              </span>
            </div>
            <Select>
      <SelectTrigger className="w-[280px] bg-blue-950">
        <SelectValue placeholder="Escolha seu financiamento" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="bg-black">
          <SelectLabel>Financiamentos</SelectLabel>
          <SelectItem value="Cenario1">Cenário 1</SelectItem>
          <SelectItem value="Cenatio2">Cenário 2</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <div className="flex w-20 h-10 mt-5 mb-10 justify-center bg-blue-950 ">
    <Button variant="secondary">Calcular</Button>
    </div>
          </div>
        </div>
      </section>
    );
  }