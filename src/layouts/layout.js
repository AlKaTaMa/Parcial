import React from 'react';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['m-1', ...additionalClass].join(' ')}>
        {children}
    </main>
);

export default Layout;
