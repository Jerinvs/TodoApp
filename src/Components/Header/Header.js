import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

 function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand" to="/">To Do</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link class="nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
      <Link class="nav-link" to="/todo">To do</Link>
    </div>
  </div>
</nav>
    )
}
export default Header;
