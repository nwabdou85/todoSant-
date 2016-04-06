
import React, { Component} from 'react';
 import {Navigation} from './navigations.jsx';
import ReactHighcharts from 'react-highcharts'; // Expects that Highcharts was loaded in the code. 


let config = {
  // chart: {
  //   polar: true
  // },
   title: {
    text: 'calories = f(t)'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  }]
};

// Task component - represents a single todo item
export default class Two extends Component {

  render() {
    

    return (
      <div> 
       <h3>
        ci-dessus c est le graphe qui represente la variation des calories en fonction de temps 
        </h3> 
         <ReactHighcharts config={config} ref="chart"></ReactHighcharts>
      </div>
    );
  }
}
 


//var ReactHighcharts = require('react-highcharts'); 
//var config = {
  /* HighchartsConfig */
//};
//React.render(<ReactHighcharts config = {config}></ReactHighcharts>, document.body);
