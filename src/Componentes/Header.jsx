import React from 'react'

import {Link} from '@reach/router'
const Header=()=>{

  return(
     <div>
      <nav class="navbar navbar-dark navbar-expand-md  navigation-clean-search ">
          <div class="container"><Link class="navbar-brand" to="/home">Breath</Link><button data-toggle="collapse" data-target="#navcol-1" class="navbar-toggler"><span class="sr-only">Toggle navigation</span><span class=""></span></button>
              <div class="collapse navbar-collapse"
                  id="navcol-1">
                  <ul class="nav navbar-nav">
                      <li role="presentation" class="nav-item"><a class="nav-link active" href="#">Link</a></li>
                      <li class="dropdown nav-item"><a data-toggle="dropdown" aria-expanded="false" class="dropdown-toggle nav-link" href="#">Dropdown </a>
                          <div role="menu" class="dropdown-menu"><a role="presentation" class="dropdown-item" href="#">First Item</a><a role="presentation" class="dropdown-item" href="#">Second Item</a><a role="presentation" class="dropdown-item" href="#">Third Item</a></div>
                      </li>
                  </ul>
                  <form class="form-inline mr-auto" target="_self">
                      
                  </form><span  class="navbar-text btn-light action-button btn"><a class="login" href="/login.html" >Log In</a></span><a class="navbar-text btn btn-light action-button" role="button" href="/signup.html">Sign Up</a></div>
          </div>
      </nav>
      
  
     </div>

  ) 

}

export default Header;