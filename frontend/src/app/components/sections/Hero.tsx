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
      className="flex h-screen w-full flex-col items-center justify-center gap-8 bg-[url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hgtv.com%2Fshows%2Fproperty-brothers&psig=AOvVaw127Uq46vBO8_059qjyInx3&ust=1701107141999000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDZ3oqc4oIDFQAAAAAdAAAAABAD')] bg-cover bg-center px-20 transition-shadow max-md:gap-4 max-md:px-4 "
      id="inicio"
    >
      <Heading asChild size="6xl" className="text-white">
        <strong className="text-5xl max-md:text-center max-md:text-2xl">
          CONHEÇA O {" "}
          <span className="bg-yellow-300 text-black-900">MELHOR</span> {" "}
          <br /> INVESTIMENTO MOBILIÁRIO!
        </strong>
      </Heading>
      <Text className="text-center text-xl text-yellow-300 max-md:text-base">
        Vamos descobrir o que é melhor para você?
      </Text>

      <Button
        className="w-48 max-w-[12rem] bg-yellow-300 text-black-900"
        onClick={handleGoAbout}
      >
        Saiba mais
      </Button>
    </section>
  );
}