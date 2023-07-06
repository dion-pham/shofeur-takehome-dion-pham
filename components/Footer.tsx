import { footerLinks } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
            <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
                <div className='flex flex-col justify-start items-start gap-6'>
                    <div className='flex flex-row justify-start items-start gap-4'>
                        <a href='https://www.instagram.com/shofeur/' rel='noopener noreferrer' className='flex justify-between items-center z-10'>
                            <Image src='/instagram.webp'
                                alt='instagram' width={39} height={39} className='object-contain'
                            />
                        </a>
                        <a href='https://www.facebook.com/shofeur' rel='noopener noreferrer' className='flex justify-between items-center z-10'>
                            <Image src='/facebook.webp'
                                alt='facebook' width={39} height={39} className='object-contain'
                            />
                        </a>
                        <a href='https://twitter.com/shofeurinc' rel='noopener noreferrer' className='flex justify-between items-center z-10'>
                            <Image src='/twitter.webp'
                                alt='twitter' width={39} height={39} className='object-contain'
                            />
                        </a>
                        <a href='https://www.linkedin.com/company/shofeur/' rel='noopener noreferrer' className='flex justify-between items-center z-10'>
                            <Image src='/linkedin.webp'
                                alt='linkedin' width={39} height={39} className='object-contain'
                            />
                        </a>
                        <a href='https://www.youtube.com/@shofeur' rel='noopener noreferrer' className='flex justify-between items-center z-10'>
                            <Image src='/youtube.webp'
                                alt='youtube' width={39} height={39} className='object-contain'
                            />
                        </a>
                        <a href='https://www.tiktok.com/@infoshofeur' rel='noopener noreferrer' className='flex justify-between items-center z-10'>
                            <Image src='/tiktok.webp'
                                alt='tiktok' width={39} height={39} className='object-contain'
                            />
                        </a>
                    </div>
                </div>

                <div className='footer__links '>
                    {footerLinks.map((link) => (
                        <Link href={link.link} key={link.title}
                        className='footer__link'>
                            <h3>{link.title}</h3>
                        </Link>
                    ))}
                </div>

            </div>
        </footer>
    )
}

export default Footer
