import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import 'semantic-ui-css/semantic.min.css'

import { CandidatesProvider } from './context/candidates'
import { SearchtextProvider } from './context/searchText'

ReactDOM.render(
  <React.StrictMode>
    <CandidatesProvider>
      <SearchtextProvider>
        <App />
      </SearchtextProvider>
    </CandidatesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
