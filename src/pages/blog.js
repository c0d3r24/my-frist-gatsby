import React from 'react';
import Layout from './../components/layout';

import {Link ,graphql, useStaticQuery} from 'gatsby';
const BlogPage = () => {
    const data = useStaticQuery(graphql`query{allMarkdownRemark{edges{node{frontmatter{title, date}fields{slug}}}}}`);
    console.log(data);
    return (
        <Layout>
            
            <h1 style={{clear: 'both'}}>Blog</h1>
            
            <ol>
                {data.allMarkdownRemark.edges.map((edge)=>{
                    const url = `/blog/${edge.node.fields.slug}`;
                    return (
                        <li>
                            <Link to={url}><h2>{edge.node.frontmatter.title}</h2></Link>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
};

export default BlogPage;