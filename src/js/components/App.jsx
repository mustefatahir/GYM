import React from 'react';
import {Header} from './Header';
import {Points} from './Points';
import {Enjoy} from './FIrstguy';
import {Instructors} from './Instructors';
import {Contact} from './Contactus';
import {Secondguy} from './Secondguy';
import {Services} from './Video';

function App(){
    return (
    <div>
        <Header />
        <Points/>
        <Enjoy/>
        <Services />
        <Secondguy/>
        <Instructors/>
        <Contact/>

    </div>
    )
}
export default App;