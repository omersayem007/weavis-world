import React, {Component} from 'react';
import TopBar from './TopBar';
import VerticalMenu  from './VerticalMenu';
import '../css/test.css';



class Social extends Component {
 

  render() {
    return (

        <div>
            <TopBar/>
            <div class="columns">
            <div class="column " id="test"><VerticalMenu/></div>
            <div class="column is-four-fifths" id="test">
            <div class="column "  >

                <section class="columns" >
                    <aside  class="column is-half" id="flex-container">
                        Social
                    </aside>
                </section>
            
            </div>
            </div> 
        </div>
        </div>
      
    );
  }
}

export default Social;