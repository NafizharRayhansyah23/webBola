import React from 'react';
import './karya.css';

class Karya extends React.Component {
    render(){
        return(
            <div> <center>
                  <h2 style={
                    {
                        fontSize:50
                    }
                }>New Licensed</h2>
                <h3 style={
                    {
                        fontSize:30
                    }
            }>~ licensed league ~</h3>
                <img src="images/aff.png" width="250" height="150" alt="" />
                <img src="images/champ.png" width="200" height="150" alt="" />
                <p></p>
                <img src="images/dagelan.png" width="200" height="200" alt="" />
                <img src="images/indo.png" width="150" height="200" alt="" />
                <p></p>
                <img src="images/pres.png" width="150" height="200" alt="" />
                <p></p>
                <h2 style={
                    {
                        fontSize:30
                    }
            }>~ licensed team ~</h2>
            <img src="images/tim.png" width="200" height="200" alt="" /> | | | | |
            <img src="images/persib.png" width="150" height="200" alt="" /> 
            <p></p>
            <img src="images/pie.png" width="200" height="200" alt="" /> | | | | |
            <img src="images/persipro.png" width="200" height="200" alt="" />

                </center>
            </div>
        )
    }
}

export default Karya;
