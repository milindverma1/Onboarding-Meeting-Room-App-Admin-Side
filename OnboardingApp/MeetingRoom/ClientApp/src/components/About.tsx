import * as React from 'react';
import { connect } from 'react-redux';

const About = () => (
    <div>
        <p> Welcome, this is an about page </p>
    </div>
);

export default connect()(About);
