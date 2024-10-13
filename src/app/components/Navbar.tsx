import Image from 'next/image';
import Link from 'next/link';
import ResponsiveNav from './ResponsiveNav';
import links from '../../Constans/NavLinks';

const Navbar = () => {
    return (
        <header className='fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-md z-30'>
            <div className='relative container py-6 flex justify-between transition-all'>
                <Link href="/" className='flex items-end gap-2'>
                    <Image src="/logo.png" width={32} height={32} alt=' Logo' />
                    <div className='relative'>
                        <h1 className='capitalize text-white text-xl font-bold tracking-wide'>ocean</h1>
                        <div className='absolute -right-2.5 bottom-1.5 w-2 h-2 rounded-full bg-sky-700' />
                    </div>
                </Link>
                <nav className='hidden md:flex gap-8capitalize'>
                    <ul className='flex pt-1 gap-14'>
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link className='text-sm font-semibold tracking-wide text-slate-200' href={link.href}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* Responsive Nav */}
                <ResponsiveNav/>

            </div>
        </header>
    );
};

export default Navbar;
