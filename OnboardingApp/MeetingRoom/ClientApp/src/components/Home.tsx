import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
  <div>
            <p> This is a simple room booking system, and is under progress. </p>
            <p> You need to sign in to proceed further. </p>
  </div>
);

export default connect()(Home);
