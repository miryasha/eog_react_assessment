import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import weatherReducer from './reducers/Weather';
import switchReducer from './reducers/Switch';
import metricReducer from './reducers/Metric';
import metricsMeasurementsReducer from './reducers/MetricsMeasurements';

export default () => {
  const rootReducer = combineReducers({
    weather: weatherReducer,
    switch: switchReducer,
    metric: metricReducer,
    metricsMeasurements: metricsMeasurementsReducer,
 });

  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, composeEnhancers(middlewares));

  sagas.forEach(sagaMiddleware.run);

  return store;
};
