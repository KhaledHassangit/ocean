import Image from 'next/image'
import React from 'react'
import Heading from './Heading'
import Button from './Button'
import { features, featuresBlocks } from '@/Constans/Features'
import FeatureCard from './FeatureCard'
import FeaturedBlock from './FeatureBlock'

const Features = () => {
    return (
        <section id="features" className='flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28 px-20'>
            <div className='relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                <Image className='absolute -z-50 w-full top-0 left-0 opacity-5'
                    alt='Feature Image' width={1920} height={1080} src="/bg2.png" />
                <div className='flex flex-col text-center items-center lg:items-start lg:text-start gap-4'>
                    <Heading title="Powerful features to help you manage all your leads." />
                    <p className='lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8'>Apsum dolor sit amet consectetur. Aliquam elementum elementum in ultrices.
                        Dui maecenas ut eros turpis ultrices metus morbi aliquet vel.</p>
                    <Button variant="primary">get Started</Button>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-1 gap-4'>
                    {
                        features.map((feature, index) => {
                            return (
                                <FeatureCard key={index} {...feature} />
                            )
                        })
                    }
                </div>

            </div>
            {
                featuresBlocks.map((feature, index) => {
                    return (
                        <FeaturedBlock key={index} {...feature} />
                    )
                })
            }
        </section>
    )
}

export default Features
