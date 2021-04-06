import React from 'react' ;
import Utama from './Components/utama';
import {Link} from 'react-router-dom';
import './App.css';



class App extends React.Component {
    render(){
        return(
          <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

    
<a class="navbar-brand" href="#">
      <img src="./images/fifa21.png" width="120" height="30" alt="hok a hok e"></img>
      
    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
        <Link to='/'>Home</Link> |
        </li>
        <li class="nav-item">
        <Link to="/tentangsaya">Developer</Link> |
        </li>
        <li class="nav-item">
        <li><Link to="/karya">New Licensed</Link> | </li> 
        </li>
        <li class="nav-item">
        <li><Link to="/kontak"> Latest Update</Link> </li> 
        </li>
        
      
      </ul>
      
      <a class="btn btn-outline-success mr-3">
      <Link to="/bagus">Bagus</Link></a>
      <a class="btn btn-outline-danger">
      <Link to="/kurang">Kurang</Link></a> | |
      <a class="btn btn-outline-warning">
      <Link to="/List">List</Link></a>

   </div>
   
</nav>
<p><Utama /></p>
</div>
        );
    }
}

export default App;