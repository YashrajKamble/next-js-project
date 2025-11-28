import Link from 'next/link'
import React from 'react'
import { LogoutButton } from './LogoutButton';
import { getSession } from '../_lib/session';

const NavBar = async () => {
    const session = await getSession();

    return (
        <nav className='bg-white shadow-sm'>
            <div className='container mx-auto p-4 flex justify-between items-center'>
                <Link href="/" className='text-xl font-bold text-blue-600'>
                    Contact Manager
                </Link>
                <div className='flex items-center space-x-4'>
                    {session ? (
                        <>
                            <Link href="/contact" className='mr-8 hover:text-blue-800'>
                                Contacts
                            </Link>
                            <LogoutButton />
                        </>
                    ) : (
                        <>
                            <Link href="/login" className='mr-5 hover:text-blue-800'>
                                Login
                            </Link>
                            <Link href="/register" className='hover:text-blue-600'>
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default NavBar