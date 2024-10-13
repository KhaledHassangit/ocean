import allClients from '@/Constans/Clients'
import Image from 'next/image'
import React from 'react'

const Clients = () => {
    return (
        <section id="clients"
            className="max-w-[62rem] mx-auto grid grid-cols-2 
        md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-4">
            {
                allClients.map((client, index) => {
                    return (
                        <Image
                            key={index}
                            src={client.imageUrl}
                            width={120}
                            height={80}
                            alt={client.alt}
                            className="w-40 md:w-full mx-auto " />

                    )
                })
            }
        </section>
    )
}

export default Clients
