import React, {Fragment, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

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
  uri:'http://localhost:8200/graphql',
  onError: ({networkError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
})

// Componente Padre donde se rendiriza toda la aplicacion y donde vive el estado de la misma
function App() {
  const [playStatus, setPlayStatus] = useState(false);
  const [trackSource, setTrackSource] = useState('');
  const [songPercent, setSongPercent ] = useState(0);
  const [songTime, setSongTime ] = useState('0:00');
  const [songDuration, setSongDuration ] = useState('0:00');

// La constante ref hace referencia al elemento <audio> que se encuentra en el componente <PlayerContainer/> y le es pasada como props.ref
  const ref = React.createRef();

// Esta funcion captura la fuente(source) de la cancion seleccionada en el componente <Canciones/> y se lo asigna al elemento <audio> como props.
 function onTrackSourceSelected (source, e) {
   e.preventDefault();
   console.log("track's Source: " + source);
   setTrackSource(source);
  }

// Esta funcion permite escribir las segundos del songTime y songDuration que son menores a 10s
  function minTwoDigits (num) {
    return ( num < 10 ? '0' : '') + num;
  }

// Esta funcion escucha el currentTime y duration del elemento <audio>, creo un porcentage de la cancion, actualizando songPercent.
// Ademas setea los valores para songTime, songDuration y los actualiza escuchando las propiedades currentTime y duration, respectivamente. 
  function onTimeUpdateListener () {
    let currentDuration = ref.current.duration;
    let currentTime = ref.current.currentTime;
    let percent = (currentTime / currentDuration);
    if (isNaN(percent)) {
      setSongPercent(0)
    } else {
      setSongPercent(percent);
      setSongTime(Math.floor(currentTime.toFixed(0) / 60) + ':' + (currentTime.toFixed(0) % 60 ? minTwoDigits(currentTime.toFixed(0) % 60) : '00'));
      setSongDuration(Math.floor(currentDuration.toFixed(0) / 60) + ':' + (currentDuration.toFixed(0) % 60 ? minTwoDigits(currentDuration.toFixed(0) % 60) : '00'));
    }
  }

// Esta funcion Actualiza el tiempo de la cancion leyendo las propiedades de la pantalla y capturando el evento en el div donde se coloca el evento onClick().
// Actualiza el songPercent y la cancion se modifica al gusto del Usuario.
  function updateAudioTime (e) {
    e.persist();
    if ( playStatus !== undefined ) {
      let songPercentage = e.nativeEvent.layerX / e.target.clientWidth;
      let currentTime = songPercentage * ref.current.duration;
      ref.current.currentTime = currentTime;
      setSongPercent(songPercentage);
    }
  }
// Esta funcion Pausa y reproduce el elemento <audio> que se encuentra en el componente <PlayerContainer/>.
  function togglePlay () {
    let isPlaying = playStatus;
    if ( isPlaying === false ) {
        ref.current.play();
      setPlayStatus(true);
    } else {
      ref.current.pause();
      setPlayStatus(false);
    }
  }
// Aqui se renderizan todos los componentes y se coloca el Router ademas del ApolloProvider.
  return (
    <ApolloProvider client={client}>
      <Router>
        <Fragment>
          <Drawer/>
          <PlayerContainer 
          source={trackSource}
          ref={ref}
          onTimeUpdateListener={onTimeUpdateListener}
          playStatus={playStatus}
          songDuration={songDuration}
          songTime={songTime}
          songPercent={songPercent}
          updateAudioTime={updateAudioTime}
          togglePlay={togglePlay}
          />
          <div className='content'>
            <Switch>
              <Route exact path='/songs'>
                <Canciones onDoubleClick={onTrackSourceSelected} />
              </Route>
              <Route exact path='/artist' component={ Artistas }/>
              <Route exact path='/albums' component={ Albums }/>
              <Route exact path='/radio' component={ Radio }/>
              <Route exact path='/' component={ Inicio }/>
              <Route exact path='/explorar' component={ Explorar }/>
            </Switch>
          </div>
          <Search/>
          <Aside/>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
