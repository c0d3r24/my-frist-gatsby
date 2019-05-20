import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const HomePage = () => (
    <Layout>
        
        <h1 style={{clear: 'both'}}>Hello</h1>
        <h3>I'm Junaid Azhar, a full-stack developer living in snow-land Rochester.</h3>
        <p>Need a developer? <Link to="/contact"> Contact me.</Link> </p>
        
    </Layout>
);

export default HomePage;