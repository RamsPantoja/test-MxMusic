import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';


//componentes del div contenedor
import Canciones from './components/content1/canciones';
import Artistas from './components/content1/artistas';
import Albums from './components/content1/albums';
import Inicio from './components/Drawer/inicio';
import Explorar from './components/Drawer/explorar';
import Radio from './components/Drawer/radio';

//Componentes
import Drawer  from './components/Drawer/Drawer';
import PlayerContainer from './components/Player/Player';
import Search from './components/search/search';
import Aside from './components/aside/aside';
import './App.css';

//configuracion del apollo client

const client = new ApolloClient({
  uri:'http://localhost:3200/graphql',
  onError: ({networkError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Fragment>
          <Drawer/>
          <PlayerContainer/>
          <div className='content'>
            <section className='content-section'>
              <Switch>
                <Route exact path='/songs' component={ Canciones }/>
                <Route exact path='/artist' component={ Artistas }/>
                <Route exact path='/albums' component={ Albums }/>
                <Route exact path='/radio' component={ Radio }/>
                <Route exact path='/' component={ Inicio }/>
                <Route exact path='/explorar' component={ Explorar }/>
              </Switch>
            </section>
          </div>
          <Search/>
          <Aside/>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
