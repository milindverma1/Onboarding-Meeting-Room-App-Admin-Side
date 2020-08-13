import * as React from 'react';
import { connect } from 'react-redux';

const Login = () => (
    <div>
        <h1>This is a login page</h1>
    </div>
);

export default connect()(Login);
