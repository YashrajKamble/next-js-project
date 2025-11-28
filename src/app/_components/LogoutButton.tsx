'use client'

import React from 'react'
import { logoutAction } from '../actions/auth'
import { useRouter } from 'next/navigation'

export const LogoutButton = () => {
    const router = useRouter()

    const handleLogout = async () => {
        try {
            await logoutAction()
            router.push('/login')
        } catch (error) {
            console.error('Logout failed:', error)
        }
    }

    return (
        <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors cursor-pointer"
            onClick={handleLogout}
        >
            Logout
        </button>
    )
}
