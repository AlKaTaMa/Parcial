import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Pagination } from 'flotiq-components-react';
import Layout from '../layouts/layout';
import CategoriesChoiceBar from '../components/CategoriesChoiceBar';
import Announcement from '../components/Announcement';

const IndexPage = ({ data }) => {
    const recipes = data.allRecipe.nodes;
    const categoryTabs = [
        { name: 'Breakfast', href: '#', current: true },
        { name: 'Dinner', href: '#', current: false },
        { name: 'Dessert', href: '#', current: false },
        { name: 'Lunch', href: '#', current: false },
        { name: 'Snack', href: '#', current: false },
        { name: 'Vegan', href: '#', current: false },
    ];
    return (
        <Layout>
            <Helmet>
                <title>Flotiq Gatsby recipe starter</title>
            </Helmet>
            <CategoriesChoiceBar additionalClass={['my-5']} categoryTabs={categoryTabs} />
            <Announcement
                additionalClass={['my-4']}
                message={(
                    <span className="block text-2xl md:text-4xl mb-4 mx-1 text-center font-light leading-normal">
                        A blog full of
                        <span className="text-secondary font-normal"> easy to make recipes </span>
                        that take the stress out of cooking.
                    </span>
                )}
            />
            {recipes.map((recipe) => (
                <a href={`/${recipe.slug}`}><p key={recipe.id}>{recipe.name}</p></a>
            ))}
            <Pagination
                page={1}
                numOfPages={10}
                borderVariant="transparent"
                next="ᐳ"
                prev="ᐸ"
                rounded="none"
                variant="transparent"
                additionalClasses={['font-light']}
                prevNextAdditionalClasses={['!bg-primary px-3 md:px-4 !w-auto !text-white']}
                activeAdditionalClasses={['!font-semibold before:block before:absolute '
                + 'before:w-2 before:h-2 before:-bottom-2 before:bg-primary']}
            />
        </Layout>
    );
};

export const pageQuery = graphql`
    query indexQuery($skip: Int!, $limit: Int!) {
        site {
            siteMetadata {
                title
            }
        }
        allRecipe(sort: {fields: flotiqInternal___createdAt, order: DESC}, limit: $limit, skip: $skip,) {
            nodes {
                id
                cookingTime
                description
                name
                slug
                servings
                image {
                    extension
                    url
                    width
                    height
                    localFile {
                        publicURL
                        childImageSharp {
                            gatsbyImageData(layout: FULL_WIDTH)
                        }
                    }
                }
            }
        }
    }
`;

export default IndexPage;
