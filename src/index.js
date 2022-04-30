import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider, createClient, subscriptionExchange, defaultExchanges} from 'urql'
import {SubscriptionClient} from 'subscriptions-transport-ws';



const subscriptionClient = new SubscriptionClient('ws://react.eogresources.com/graphql')

const client = createClient({
    url: "https://react-assessment.herokuapp.com/graphql",
    exchanges: [...defaultExchanges, subscriptionExchange({
        forwardSubscription: operation =>
        subscriptionClient.request(operation)
    })]
  });

  ReactDOM.render(
    <Provider value = {client}>
        <App />
    </Provider>
, document.getElementById("root")
);
