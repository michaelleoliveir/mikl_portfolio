'use client'

import ContactForm from '@/components/layout/Contact';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';

export default function Contact() {

    return (
        <div className="relative w-full bg-background overflow-x-hidden">
            <div className="relative flex flex-col items-center justify-center">
                <div className='w-[90%]'>
                    <Navbar isContactPage={true} />
                    <ContactForm />
                </div>
                <Footer />
            </div>
        </div>
    )
}
