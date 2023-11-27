/* eslint-disable @next/next/no-img-element */
import {Text} from '../elements/Text'
import { Heading } from '../elements/Heading';

export function About() {
    return (
      <section className="relative flex w-full min-h-[calc(100vh_-_230px)] items-center justify-center gap-9 bg-[url('/lines.webp')] p-20 max-[1234px]:flex-wrap max-md:px-4 max-md:py-16" id="sobre">
       
        <div className="flex flex-col gap-4 max-sm:items-center md:w-[40%]">
          <Heading
            size="xl"
            className=" w-fit bg-slate-300"
            color="text-blue-950"
          >
            Quem somos?
          </Heading>
  
          <Text className="text-black md:text-base">
            Você está em dúvida sobre qual é o melhor investimento imobiliário? Venha descobrir se é melhor alugar ou comprar
            o seu imóvel!
          </Text>
          <Text className="text-black md:text-base">
          Aqui você ...

          </Text>
        </div>
  
        
      </section>
    );
  }