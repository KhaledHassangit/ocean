import React from 'react'
import Heading from './Heading'
import TestimonialCard from './TestimonialsCard'
import { testimonials } from '@/Constans/Testimonials'

const Testimonials = () => {
    return (
        <section id="testimonials" className="flex flex-col gap-8 px-16">
            <Heading title="Meet our Customers" isCentered />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </section>

    )
}

export default Testimonials
