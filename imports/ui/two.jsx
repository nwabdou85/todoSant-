
import React, { Component} from 'react';
 import {Navigation} from './navigations.jsx';
import ReactHighcharts from 'react-highcharts'; // Expects that Highcharts was loaded in the code. 


// http://www.highcharts.com/docs/chart-concepts/series , this line to understand how to manipulate the highcharts

let config = {
  chart: {
    type: 'line',
     backgroundColor: 'none',
  },
   subtitle: {
    text: 'hhhhhhhhhh'
   },
   title: {
    text: 'calories = f(t)'
  },
  //  lgend: {
  //   text: 'How is it'
  // },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    gridLineWidth: 0,
    type: 'lineaire',
     title: {
                text: 'Months'
            },
  },

  yAxis: {
    gridLineWidth: 0,
    type: 'lineaire',
     title: {
                text: 'Values'
            },
 },
  series: [{
    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    dashStyle: 'longdash'
},{
    data: [71.0, 16.9, 91.5, 141.5, 181.2, 121.5, 125.2, 26.5, 23.3, 18.3, 13.9, 9.6]

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
