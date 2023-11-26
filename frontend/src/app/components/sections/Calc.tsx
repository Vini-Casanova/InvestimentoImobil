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

export function Contact() {
    return (
      <section
        className="mt-24 flex w-full flex-col items-center justify-center gap-9 px-20 max-[1234px]:flex-wrap max-md:px-4 md:justify-center"
        id="contato"
      >
        <Heading size="xl" className="w-fit max-md:text-center" color="text-black-900">
          Entre em contato conosco!
        </Heading>
  
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
          <div>
            <div className="mt-5">

          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="aluguel">Digite o valor do aluguel do imovel</Label>
      <Input id="aluguel" type="number" />
    </div>

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="compra">Digite o valor da compra do imovel</Label>
      <Input id="compra" type="number" />
    </div>

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="tempo">Digite o tempo, em meses, que você pretende ficar no imovel</Label>
      <Input id="tempo" type="number" />
    </div>
    <div className="mt-2 flex items-center space-x-2 text-gray-600">
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
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Escolha a forma de financiamento" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Financiamentos</SelectLabel>
          <SelectItem value="apple">cenário 1</SelectItem>
          <SelectItem value="banana">cenaário 2</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  
  <Button variant="secondary">Calcular</Button>


          </div>
        </div>
      </section>
    );
  }