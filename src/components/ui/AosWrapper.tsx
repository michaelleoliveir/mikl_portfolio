"use client";

import React, { useEffect, PropsWithChildren } from 'react';
import AOS from 'aos';

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