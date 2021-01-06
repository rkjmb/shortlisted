import React, { Suspense } from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Loader from '../views/components/Loader';

const Home = React.lazy(() => import('../views/pages/HomePage'));
const Candidate = React.lazy(() => import('../views/pages/CandidatePage'));
const NotFound = React.lazy(() => import('../views/pages/NotFoundPage'));


export default function Routes() {
  return <Suspense fallback={<Loader />}>
    <Switch>
      <Redirect exact from='/' to='/pending' />
      <Route exact path="/:filter" component={Home} />
      <Route exact path="/candidate/:id" component={Candidate} />
      <Route exact path="/notfound" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  </Suspense >
}