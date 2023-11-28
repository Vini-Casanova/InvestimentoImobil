'use client'
import * as React from "react"
import { Heading } from '../elements/Heading';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AlertCircle } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function Calc() {
  
  const [compra, setCompra] = useState(" ");
  const [entrada, setEntrada] = useState(" ");
  const [alerta, setAlerta] = useState(false)
  function Comparar(){
    if(entrada>compra) return setAlerta(true)
  }  
 
  return (
      <section
        className="mt-24 flex w-full relative  min-h-[calc(100vh_-_230px)] flex-col items-center justify-center gap-9 px-20 max-[1234px]:flex-wrap max-md:px-4 md:justify-center"
        id="Calc"
      >
      
        
       <Heading
            size="2xl"
            className=" w-fit bg-blue-950"
            color="text-slate-300"
          >
            Faça uma simulação!
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
      <Label >Digite o valor do imovel</Label>
      <Input type="number" value={compra} onChange={(e) => setCompra(e.target.value)} />
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5 mt-5  text-black">
      <Label >Digite o valor da entrada</Label>
      <Input  type="number"  value={entrada} onChange={(e) => setEntrada(e.target.value)}/>
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
    {
          alerta&&(<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Erro!</strong>
          <span className="block sm:inline">O valor da entrada não pode ser maior que o valor do imóvel</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <button className="ml-3" onClick={function(){setAlerta(false)}}>
            <svg className="fill-current  h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </button>
          </span></div>)
        }
    <div className="flex w-20 h-10 mt-5 mb-10 justify-center max-w-[12rem] bg-blue-950 text-white">
    <Button onClick={Comparar} variant="secondary">Calcular</Button>
    </div>
          </div>
        </div>
      </section>
    );
  }