import React from 'react';
import './beranda.css';
 
class Beranda extends React.Component {
    render(){
        return(
      
    
            <div> <center>
                <h2 style={
                    {
                        fontSize:50
                    }
                }>Home</h2>
                <h3 style={
                    {
                        fontSize:30
                    }
                }>FIFA 21</h3>

                <img src="images/gaya.gif" width="900" height="500" alt="" />
                <button type="button" class="btn btn-success">Play Demo</button> 
                <p></p>
                <button type="button" class="btn btn-primary">Donwload</button>
                </center>
                <p></p>
                <h2 style={
                    {
                        fontSize:50
                    }
                }>other game</h2>
                <center>
                <img src="images/medal.jfif" width="250" height="300" alt="" /> | | | | | | | |
                <img src="images/apex.jpg" width="250" height="300" alt="" />
                <p></p>
                <button type="button" class="btn btn-warning">OTHER</button>
                </center>

                </div>
                
            
            
        )
    }
}

export default Beranda;
