import LocationSearchBar from './LocationSearchBar';
import Image from 'next/image';

const Navbar = () => {
    return (
        <header className='w-full absolute z-15'>
            <nav className='max-w-[1440px] bg-black mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
                <a href='https://www.shofeur.com' rel='noopener noreferrer' className='flex justify-between items-center z-10'>
                    <Image
                        src='/logo_white_gold.webp'
                        alt='logo main'
                        width={118}
                        height={18}
                        className='object-contain'
                    />
                </a>

                <LocationSearchBar/>

                <div className='flex justify-between items-center z-10'>
                    <a href='https://www.shofeur.com/operators' rel='noopener noreferrer' className='flex text-white items-center px-8'>
                        Add a Listing
                    </a>
                    <a href='https://www.shofeur.com/' rel='noopener noreferrer' className='flex text-white items-center px-8'>
                        Sign Up
                        {/* would be a modal with further time */}
                    </a>
                    <a href='https://www.shofeur.com/' rel='noopener noreferrer' className='flex text-white items-center px-8'>
                        Log In
                        {/* would be a modal with further time */}
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
