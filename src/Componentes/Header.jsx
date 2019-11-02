import React from 'react'
import logo from './iphone.svg'
import './style.css'
import './../css/styles.css'
const Header=()=>{

  return(
     <div>
      <nav class="navbar navbar-dark navbar-expand-md  navigation-clean-search ">
          <div class="container"><a class="navbar-brand" href="#">Breath</a><button data-toggle="collapse" data-target="#navcol-1" class="navbar-toggler"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
              <div class="collapse navbar-collapse"
                  id="navcol-1">
                  <ul class="nav navbar-nav">
                      <li role="presentation" class="nav-item"><a class="nav-link active" href="#">Link</a></li>
                      <li class="dropdown nav-item"><a data-toggle="dropdown" aria-expanded="false" class="dropdown-toggle nav-link" href="#">Dropdown </a>
                          <div role="menu" class="dropdown-menu"><a role="presentation" class="dropdown-item" href="#">First Item</a><a role="presentation" class="dropdown-item" href="#">Second Item</a><a role="presentation" class="dropdown-item" href="#">Third Item</a></div>
                      </li>
                  </ul>
                  <form class="form-inline mr-auto" target="_self">
                      <div class="form-group"><label for="search-field"><i class="fa fa-search"></i></label><input type="search" class="form-control search-field" id="search-field" name="search" /></div>
                  </form><span class="navbar-text"><a class="login" href="/login.html">Log In</a></span><a class="btn btn-light action-button" role="button" href="/signup.html">Sign Up</a></div>
          </div>
      </nav>
      
    <div class="container hero">
        <div class="row mt-5">
            <div class="col-12 col-lg-6 col-xl-5 offset-xl-1 mt-5">
                <h1>Breath is here.</h1>
                <p>Mauris egestas tellus non ex condimentum, ac ullamcorper sapien dictum. Nam consequat neque quis sapien viverra convallis. In non tempus lorem. </p><button class="btn btn-light btn-lg action-button" type="button">Learn More</button></div>
            <div
                class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder ml-5">
                <div class="iphone-mockup"><img className="device" src={logo}  />
                    <div class="screen"></div>
            </div>
        </div>
    </div>
    </div>
     </div>

  ) 

}

export default Header;