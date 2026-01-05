'use client'

import ContactForm from '@/components/layout/Contact';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';

export default function Contact() {

    return (
        <div className="relative min-h-screen w-full bg-background scroll-smooth overflow-x-hidden">
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
                <div className='w-[90%]'>
                    <Navbar isContactPage={true} />
                    <ContactForm />
                </div>
                <Footer />
            </div>
        </div>
    )
}
