import React from 'react'
import { getSession } from '../_lib/session'
import { getContacts } from '../api/contact'

const ContactPage = async () => {
    const user = await getSession()

    if (!user) {
        return (
            <div>
                Please {" "}

                <a
                    href="/login"
                    className='text-blue-600 hover:underline'>
                    Login
                </a>{" "}
                to view contacts
            </div>
        )
    }

    const contacts = await getContacts(user?.id)
    console.log(contacts)
    if (!contacts || contacts.length === 0) {
        return (
            <div>
                Please {" "}
                <a
                    href="/contact/new"
                    className='text-blue-600 hover:underline'>
                    Add a Contact
                </a>{" "}
                to your contact lists
            </div>
        )
    }

    return (
        <div>ContactPage</div>
    )
}

export default ContactPage