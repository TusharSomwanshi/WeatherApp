import React from 'react';
import Header from '../../components/Shared/Header';
import Footer from '../../components/Shared/Footer';

const Layout = ({ children }) => (
    <div>
        <Header />
            {children}
        <Footer />
    </div>
);

export default Layout;
	
