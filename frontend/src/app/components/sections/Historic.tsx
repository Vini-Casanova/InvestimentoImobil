import { Heading } from "../elements/Heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {Text} from '../elements/Text'

export function Historic() {
  const router = useRouter();
  return (
    <div
      className=" flex w-full  min-h-[calc(100vh_-_230px)] flex-col items-center  gap-9 px-20 max-[1234px]:flex-wrap max-md:px-4 "
      id="Historics"
    >
 <Heading
            size="xl"
            className=" w-fit bg-slate-300 mt-12"
            color="text-blue-950"
          >
            Histórico
          </Heading>
        
          <Text className="text-black md:text-base" color="text-blue-950">
          Aqui você poderá visualizar todos os cálculos antecedentes 

          </Text>
        </div>
   
     
  );
}
