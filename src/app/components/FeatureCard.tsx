import { Feature } from '@/Types/intefaces'
import Image from 'next/image'
import {FC} from 'react'


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FeatrueCardProps extends Feature{}

const FeatureCard:FC<FeatrueCardProps> = ({imageUrl,title,content}) => {
    return (
        <article className='w-100 md:max-w-[30rem] lg:max-w-[36rem]
        border-2 border-transparent rounded-lg py-4 
        px-8 hover:bg-salte-800 hover:border-sky-600 cursor-pointer transition-all'>
            <article className='flex flex-col items-center
                md:items-start lg:flex-row lg:items-center gap-6 '>
                    <Image width={50} height={50} alt={title} src={imageUrl}/>
                    <div className='flex flex-col text-center md:text-start space-y-1'>
                        <h4 className='text-slate-100 font-bold text-base'>{title}</h4>
                        <p className='text-sm leading-6'>{content}</p>
                    </div>
                </article>
        </article>
    )
}

export default FeatureCard
