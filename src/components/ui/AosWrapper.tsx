"use client";

import React, { useEffect, PropsWithChildren } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosWrapper = ({ children }: PropsWithChildren) => {
    useEffect(() => {
        AOS.init({
            duration: 1200, 
            once: true,
        });
    }, []);

    return <>{children}</>;
};

export default AosWrapper;