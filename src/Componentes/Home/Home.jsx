import React,{Fragment} from 'react'
import Info from './components/Info';
import Nav from './components/Nav';
import Publication from './components/Publication';
import AsideInfo from './components/Aside_Info';
import './style.css'

const Home =()=>{
    return (
        <Fragment>
            <Nav/>
            <div class="container-fluid gedf-wrapper">
                <div class="row">
                <Info 
                    userName="@LeeCross"
                    fullName="Fullname : Miracles Lee Cross"
                    description="Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js,
                    etc."
                    followers="5.2342"
                    following="6758"
                    contact="Vestibulum at eros"
                />
                <Publication/>
                <AsideInfo/>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;