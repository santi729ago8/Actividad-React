import React from 'react'
import './../assets/css/Home.css'
import ComponenteSesion1 from './ComponenteSesion1'
import ComponenteSesion2 from './ComponenteSesion2'
import ComponenteSesion3 from './ComponenteSesion3'
import 'animate.css';

const Home = () => {


    return (
        <div>
            <div className='App'>
                <div className='label'>
                    <label className='animate__animated animate__slideInLeft'> <b> Muy pronto Black Friday del 26 de mayo al 2 de junio aprovecha las mejores hiperofertas </b> </label>
                </div>
            </div>


            <div>
                <ComponenteSesion1 />
            </div>

            <div>
                <ComponenteSesion2 />
            </div>

            <div>
                <ComponenteSesion3 />
            </div>

        </div>


    )
}

export default Home
