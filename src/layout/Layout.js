import React from 'react';
import Navigation from '../components/navigation/Navigation';

const Layout = ({children}) => {
    return (
        <div>
            <Navigation />
            {children}
        </div>
    );
};

export default Layout;