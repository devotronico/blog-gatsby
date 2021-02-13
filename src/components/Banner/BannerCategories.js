import React from 'react'
import styled from 'styled-components'
// import { graphql, useStaticQuery } from 'gatsby'
// import { Link } from 'gatsby'
import Categories from '../Categories'
import Title from './Title'

// const query = graphql`
//   {
//     allMdx {
//       distinct(field: frontmatter___category)
//     }
//   }
// `

const BannerCategories = () => {
  // const {
  //   allMdx: { distinct },
  // } = useStaticQuery(query)

  return (
    <Wrapper>
      <Title title="categories" />
      <Categories />
      {/* <ul className="categories">
        {distinct.map((category, index) => {
          return (
            <li key={index}>
              <Link to={`/${category}`} className="category">
                {category}
              </Link>
            </li>
          )
        })}
      </ul> */}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .category {
    font-size: 1rem;
    color: var(--clr-grey-5);
    text-transform: capitalize;
    display: block;
    padding: 0.5rem 0 0.5rem 1rem;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    border-radius: var(--radius);
  }
  .category:hover {
    background: var(--clr-grey-10);
  }
`
export default BannerCategories
