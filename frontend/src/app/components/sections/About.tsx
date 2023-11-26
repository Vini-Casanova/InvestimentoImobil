/* eslint-disable @next/next/no-img-element */
import {Text} from '../elements/Text'
import { Heading } from '../elements/Heading';

export function About() {
    return (
      <section className="relative flex w-full min-h-[calc(100vh_-_230px)] items-center justify-center gap-9 bg-[url('/static/textures/lines.webp')] p-20 max-[1234px]:flex-wrap max-md:px-4 max-md:py-16" id="sobre">
        <img
          src="/https://www.google.com/url?sa=i&url=https%3A%2F%2Fjovempan.com.br%2Fentretenimento%2Ftv-e-cinema%2Fapresentadores-de-irmaos-a-obra-devem-visitar-o-brasil.html&psig=AOvVaw0tCZm3_CMHsX461CbA-I14&ust=1701105488151000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODh_PeV4oIDFQAAAAAdAAAAABAD"
          alt="irmãos a obra"
          className="absolute -left-12 top-0 h-48 max-[1234px]:hidden xl:top-12"
        />
       
        <div className="flex flex-col gap-4 max-sm:items-center md:w-[40%]">
          <Heading
            size="xl"
            className=" w-fit bg-yellow-300"
            color="text-black-900"
          >
            Quem somos?
          </Heading>
  
          <Text className="text-white md:text-base">
            Você está em dúvida sobre qual é o melhor investimento imobiliário? Venha descobrir se é melhor alugar ou comprar
            o seu imóvel!
          </Text>
          <Text className="text-white md:text-base">
            Nosso compromisso com a sustentabilidade não se limita apenas aos
            produtos que desenvolvemos. Também buscamos incorporar práticas
            sustentáveis em todas as etapas do nosso negócio, desde a produção até
            a logística. Valorizamos a economia circular, o uso eficiente de
            recursos naturais e a redução do impacto ambiental.
          </Text>
        </div>
  
        
      </section>
    );
  }