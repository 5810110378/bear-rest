import React, { Component } from 'react';


import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { fetchBear } from './actions';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

let store = createStoreWithMiddleware(reducers)


class App extends Component {
  constructor(props){
        super(props)
        this.setState({data: store.getState().bear})
      }
      componentDidMount(){
        store.subscribe(() => {
                this.setState({data: store.getState()})
        })
        store.dispatch(fetchBear());
      }
  render() {
    let bears = this.state.data;
    return (
      <div>
        {
          bears.map(bear => <div key={bear.id}>{bear.name}</div>)
        }
      </div>
    );
  }
}

export default App;
