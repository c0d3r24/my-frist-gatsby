import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'
const AboutPage = () => (
    <Layout>
       
        <h1 style={{clear: 'both'}}>About Junaid Azhar Shaikh</h1>
        <p> Full-Stack developer with substantial knowledge in web design and development, machine learning, programming, and database management. Experienced in most of the known programming languages in conjunction with modern APIs and libraries. I look forward to working with experts in the field of web development to contribute my best for the benefit of the organization.</p>
        <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
        
    </Layout>
);

export default AboutPage;