import { Button } from "@/components/ui/button";
import {Text} from '../elements/Text'
import { Heading } from '../elements/Heading';

export function Hero() {
  const handleGoAbout = () => {
    const about = document.getElementById("sobre");
    about?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="flex h-screen w-full flex-col items-center justify-center gap-8 bg-[url('')] bg-cover bg-center px-20 transition-shadow max-md:gap-4 max-md:px-4 "
      id="inicio"
    >
      <Heading asChild size="6xl" className="text-black">
        <strong className="text-5xl max-md:text-center max-md:text-2xl">
          CONHEÇA O {" "}
          <span className="bg-blue-950 text-black-900">MELHOR</span> {" "}
          <br /> INVESTIMENTO MOBILIÁRIO!
        </strong>
      </Heading>
      <Text className="text-center text-xl text-black max-md:text-base">
        Vamos descobrir o que é melhor para você?
      </Text>

      <Button
        className="w-48 max-w-[12rem] bg-blue-950 text-black-900"
        
      >
        Saiba mais
      </Button>
    </section>
  );
}