import React from 'react'
import Heading from './Heading'
import Button from './Button'
import { MoveRight } from 'lucide-react'

const Contact = () => {
    return (
        <section id="contact" className='px-16'>
            <div className="bg-slate-800 rounded-lg  px-8 lg:px-28 py-8 lg:py-12 flex flex-col lg:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-4 text-center lg:text-start">
                    <Heading title="Let’s try our service now!" />
                    <p className="max-w-[35rem] leading-normal text-lg">
                        Experience the power of Ocean CRM dashboard for engineering
                        teams. Boost productivity and streamline collaboration. Get
                        started today!
                    </p>
                </div>
                <Button>
                    get started
                    <MoveRight className="w-4 h-4" />
                </Button>
            </div>
        </section>

    )
}

export default Contact
