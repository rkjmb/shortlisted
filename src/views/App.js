
import './App.css';
import React, { useEffect, useContext } from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from '../router';
import { Container } from 'semantic-ui-react';
import NavBar from './components/Navbar';
import { getCandidates } from '../api/getCandidates';


import { CandidatesContext } from '../context/candidates';

const App = () => {
  const { setCandidates } = useContext(CandidatesContext);

  useEffect(() => {
    getCandidates().then(candidates => setCandidates(candidates.map(c => ({ ...c, status: 'pending' }))));
  }, [])

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Container className='mainContainer flex' textAlign='justified'>
          <Router />
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App
