import * as React from 'react';
import { Route, Router } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Rooms from './components/Rooms';
import Addroom from './components/Addroom';
import Updateroom from './components/Updateroom';
import Deleteroom from './components/Deleteroom';
import Equipment from './components/Equipment';
import Addequipment from './components/Addequipment';
import Updateequipment from './components/Updateequipment';
import Deleteequipment from './components/Deleteequipment';
import Bookings from './components/Bookings';
import Addbooking from './components/Addbooking';
import Updatebooking from './components/Updatebooking';
import Deletebooking from './components/Deletebooking';


//import Counter from './components/Counter';
import FetchData from './components/FetchData';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/login' exact href='/login' component={Login} />
        <Route path='/rooms' exact component={Rooms} />
        <Route path='/rooms/addroom' exact component={Addroom} />
        <Route path='/rooms/updateroom/:roomid' exact component={Updateroom} />
        <Route path='/rooms/deleteroom/:roomid' exact component={Deleteroom} />
        <Route path='/equipment' exact component={Equipment} />
        <Route path='/equipment/addequipment' exact component={Addequipment} />
        <Route path='/equipment/updateequipment/:equipmentid' exact component={Updateequipment} />
        <Route path='/equipment/deleteequipment/:equipmentid' exact component={Deleteequipment} />
        <Route path='/bookings' exact component={Bookings} />
        <Route path='/bookings/addbooking' exact component={Addbooking} />
        <Route path='/bookings/updatebooking/:bookingid' exact component={Updatebooking} />
        <Route path='/bookings/deletebooking/:bookingid' exact component={Deletebooking} />

        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    </Layout>
);


//<Route path='/counter' component={Counter} />
//    <Route path='/fetch-data/:startDateIndex?' component={FetchData} />