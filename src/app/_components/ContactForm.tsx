"use client"

import React, { useActionState, useEffect } from 'react'
import { ContactType } from '../_types/contact';
import { useRouter } from 'next/navigation';
import { stat } from 'fs';

type ContactFormProps = {
    action: (prevState: any, formData: FormData) => Promise<any>;
    contact?: ContactType;
}


const ContactForm = ({ action, contact }: ContactFormProps) => {
    const router = useRouter()
    const [state, formAction] = useActionState(action, null)

    useEffect(() => {
        if (state?.success) {
            router.push("/contact")
        }
    }, [state, router])

    return (
        <form action={formAction} className="space-x-4">
            <input type="hidden" name="id" value={contact?.id} />
            <div>
                <label htmlFor='name' className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    name="name"
                    defaultValue={contact?.name || ""}
                    placeholder="Enter your Name here"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:right-blue-500 sm:text-sm p-2"
                />
            </div>

            <div className="mt-3">
                <label htmlFor='email' className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    name="email"
                    defaultValue={contact?.email || ""}
                    placeholder="Enter your Email Id here"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:right-blue-500 sm:text-sm p-2"
                />
            </div>

            {state?.error && (
                <div className='text-red-500 text-sm'>{state.error}</div>
            )}

            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4">
                Save Contact
            </button>
        </form>
    )
}

export default ContactForm