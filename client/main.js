import { Accounts } from 'meteor/accounts-base'
import ApolloClient from 'apollo-boost'

import '../imports/ui/body.js';

const client = new ApolloClient({
  uri: '/graphql',
  request: operation =>
    operation.setContext(() => ({
      headers: {
        authorization: Accounts._storedLoginToken()
      }
    }))
})