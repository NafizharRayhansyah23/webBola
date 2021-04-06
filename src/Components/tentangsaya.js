import React from 'react'

class TentangSaya extends React.Component {
    render(){
        return(
            <div> <center>
                  <h2 style={
                    {
                        fontSize:50
                    }
                }> Developer Profile</h2>
                <h3 style={
                    {
                        fontSize:30
                    }
                }>- Front End Developer -</h3>
                <img src="images/cang.png" width="400" height="500" alt="" />
                <p></p>
                <button type="button" class="btn btn-success">Age</button> |
                <button type="button" class="btn btn-info">Nationality</button>
                <p></p>
                <button type="button" class="btn btn-light">Rank</button> |
                <button type="button" class="btn btn-warning">Contract</button>
                </center>
            </div>
        )
    }
}

export default TentangSaya;
