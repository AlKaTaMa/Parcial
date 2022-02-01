import React from 'react';
import Header from '../components/Header';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-poppins px-4', ...additionalClass].join(' ')}>
        <Header />
        {children}
    </main>
);

export default Layout;
