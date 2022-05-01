import React from 'react';
import ReactDOM from 'react-dom';
import  createStore from './store';
import { Provider as RduxProvider } from "react-redux";
import App from './App';
import {Provider, createClient, subscriptionExchange, defaultExchanges} from 'urql'
import {SubscriptionClient} from 'subscriptions-transport-ws';

const store = createStore();

const subscriptionClient = new SubscriptionClient('ws://react.eogresources.com/graphql')

const client = createClient({
    url: "https://react-assessment.herokuapp.com/graphql",
    exchanges: [...defaultExchanges, subscriptionExchange({
        forwardSubscription: operation =>
        subscriptionClient.request(operation)
    })]
  });


  ReactDOM.render(
    <RduxProvider store={store}>
        <Provider value = {client}>
           <App />
        </Provider>
    </RduxProvider>
, document.getElementById("root")
);
