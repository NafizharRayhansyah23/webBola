import React from 'react';

 
class Kurang extends React.Component {
    render(){
        return(
      
    
            <div> <center>
                <h2 style={
                    {
                        fontSize:30
                    }
                }>Untuk Hasil Yang Lebih Baik,</h2>
                <h3 style={
                    {
                        fontSize:20
                    }
                }> Silahkan Masukkan Saran Anda.</h3>
             <input class="form-control" type="text" placeholder="Masukkan Saran Anda..." aria-label="readonly input example" readonly></input>
                </center>
                </div>
                
            
            
        )
    }
}

export default Kurang;