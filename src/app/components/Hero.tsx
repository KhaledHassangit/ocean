import { ArrowRightCircle, MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Heading from "./Heading";
import Button from "./Button";

const Hero = () => {
    return (
        <div className="relative container">
            <Image className="absolute -z-50 w-full min-h-screen md:max-h-[670px] md-h-full lg:min-h-screen -top-20 left-0 opacity-10" src="/bg.png" width={1920} height={1080} alt="" />
            <section id="home" className="relative">
                <figure className="bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 -left-40" />
                <figure className="bubble w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 md:bottom-44  -right-20 md:right-20" />
                <div className="flex flex-col text-center space-y-12">
                    <div className="flex flex-col items-center space-y-6">
                        <p className="capitalize border border-slate-700 
                    py-1 px-3 text-xs rounded-3xl cursor-pointer
                    hover:border-sky-500 hover:bg-slate-800 
                        shadow-md transition-all">
                            new features is now available.
                            <ArrowRightCircle className="inline ml-1 w-4 h-4" />
                        </p>
                        <Heading title="A CRM Dashboard For Engineering Teams" />
                        <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
                            Boost engineering team’s productivity with Ocean CRM dashboard that streamlines project management, collaboration, and data-driven decision-making.
                        </p>
                        <div className="flex gap-4 items-center">
                            <Button variant="primary">
                                Get Started
                                <MoveRight className="w-4 h-4" />
                            </Button>
                            <Link href="#pricing">
                                <Button variant="secondary">
                                    View Pricing
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <Image className="mx-auto shadow-xl " width={670} height={370} alt="Banner Image" src="/Hero-image.svg" />
                </div>
            </section>
        </div>
    )
}

export default Hero
