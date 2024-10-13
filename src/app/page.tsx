import Clients from "@/Constans/Clients";
import Hero from "./components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden pt-24 lg:pt-28 antialiased">
        <Hero/>
        <section id="clients" 
          className="max-w-[62rem] mx-auto grid grid-cols-2 
          md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-4">
            {
              Clients.map((client,index)=>{
                return (
                  <Image
                  key={index}
                  src={client.imageUrl}
                  width={120}
                  height={80}
                  alt={client.alt}
                  className="w-40 md:w-full mx-auto "/>
    
                )
              })
            }
        </section>
    </main>
  );
}
