import React, { Component } from 'react';
import '../css/test.css';
import '../css/search.css';

class WeatherTile extends Component {
    
  render() {
    
    return (
        <div>
        <div>
            <div class="field">
            <div class="control">
                <input class="input" type="text" placeholder="City or State" /><br/>
            </div>
            </div>
        </div>
        <div class="tile is-ancestor" id="test">
        <div class="tile is-vertical is-8">
      
          <div class="tile">
      
          
            <div class="tile is-parent is-vertical">
      
                {/*<!-- Place tile --->*/}
              <article class="tile is-child notification infoTile " >
                <p class="title" id="country"> Bangladesh </p>
                <p class="subtitle" id="city"> Dhaka </p>
              </article>
                  {/*<!-- Place tile --->*/}
      
               {/*<!-- Sunset tile --->*/}
              <article class="tile is-child notification  infoTile" >
                <p class="title" id="sunrise">Sunrise   </p>
                <p class="subtitle" id="sunset">Sunset </p>
              </article>
               {/*<!-- Sunrise tile --->*/}
               
            </div>
            {/*<!-- feels like tile --->*/}
            <div class="tile is-parent">
              <article class="tile is-child notification  infoTile">
                <p class="title" >Feels Like</p>
                <p class="subtitle" id="currentTemparature"> currentTemparature </p>
                <figure class="fuck"  id="icon" >
                  
                </figure>
              </article>
            </div>
            {/*<!-- feels like tile --->*/}
      
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification  infoTile">
      
            <p class="title" id="status">Overall</p>
      
      
              <div class="content">
                {/*<!-- Content -->*/}
              </div>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification  infoTile">
            <div class="content">
      
            <p class="title">Overall</p>
              <p class="subtitle " id="overall">OverAll</p><br/>
      
                      <p class="title" > Humidity </p>
              <p class="subtitle " id="humidity">Humidty</p><br/>
      
      
                      <p class="title"> Pressure </p>
              <p class="subtitle " id="pressure">Pressure</p><br/>
      
              <p class="title"> Wind Speed </p>
              <p class="subtitle " id="windSpeed">windSpeed</p><br/>
      
              <div class="content">
                {/*<!-- Content -->*/}
              </div>
            </div>
          </article>
        </div>
      </div>

      </div>
       
    );
  }
}

export default WeatherTile;
