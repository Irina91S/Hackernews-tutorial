import React, { Component } from 'react'
import Link from './Link'
import Query from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`

class LinkList extends Component {
    render(){

        const linksToRender = [
            {
                id: '1',
                description: 'Prisma turns your database into a GraphQL API 😎 😎',
                url: 'https://www.prismagraphql.com',
              },
              {
                id: '2',
                description: 'The best GraphQL client',
                url: 'https://www.apollographql.com/docs/react/',
              },
        ]

        return (
            <Query query={FEED_QUERY}>
              {() => linksToRender.map(link => <Link key={link.id} link={link} />)}
            </Query>
          )
    }
}

export default LinkList