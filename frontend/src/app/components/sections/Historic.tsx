import { Heading } from "../elements/Heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function Historic() {
  const router = useRouter();
  return (
    <div
      className="mt-24 flex w-full relative  min-h-[calc(100vh_-_230px)] flex-col items-center justify-center gap-9 px-20 max-[1234px]:flex-wrap max-md:px-4 md:justify-center"
      id="Historics"
    >
 <Heading
            size="xl"
            className=" w-fit bg-slate-300"
            color="text-blue-950"
          >
            Quem somos?
          </Heading>
      
        </div>
   
     
  );
}
