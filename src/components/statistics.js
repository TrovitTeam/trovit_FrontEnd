import React, { Component } from 'react'
import averageStatistics from './averageStatistics';
import ChartistGraph  from 'react-chartist';
import {Row, Preloader} from 'react-materialize';
import axios from 'axios';

var dataIn = {};
var data2In = {};
class statistics extends Component {

    componentWillMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:3000/products/averages',
            responseType: 'json',
        })
        .then(response => {
            dataIn = response.data;
            console.log('dataIn');
            console.log(dataIn);
            this.forceUpdate();
        });
        axios({
            method: 'GET',
            url: 'http://localhost:3000/products/count',
            responseType: 'json',
        })
        .then(response2 => {
            data2In = response2.data;
            console.log('data2In');
            console.log(data2In);
            this.forceUpdate();
        });
    }
    
    render() {

        var data = {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
          series: [
            [dataIn[1], dataIn[2], dataIn[3], dataIn[4], dataIn[5], dataIn[6], dataIn[7], dataIn[8], dataIn[9], dataIn[10], 0, dataIn[12], dataIn[13]]
          ]
        };
        
        var options = {
          high: 5000,
          low: 0,
          axisX: {
            labelInterpolationFnc: function(value, index) {
              return index % 2 === 0 ? value : value;
            }
          },
          showArea: true
        };
    
        var type = 'Line'
        
        var data2 = {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
            series: [
              [data2In[1], data2In[2], data2In[3], data2In[4], data2In[5], data2In[6], data2In[7], data2In[8], data2In[9], data2In[10], data2In[11], data2In[12], data2In[13]]
            ]
          };
          
          var options2 = {
            high: 5,
            low: 0,
            axisX: {
              labelInterpolationFnc: function(value, index) {
                return index % 2 === 0 ? value : value;
              }
            },
            showArea: true
          };
      
          var type2 = 'Bar'

        return (
          <div>
            <Row>
                <h2 className="center">Statistics</h2>
                <h4 className="center">Average Price of Products per Distributor</h4>
            </Row>
            <Row>
                <ChartistGraph className={'ct-octave'} data={data} options={options} type={type} listener={{"draw" : function(data){
                    if(data.type === 'line' || data.type === 'area') {
                        data.element.animate({
                        d: {
                            begin: 2000 * data.index,
                            dur: 2000,
                            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                            to: data.path.clone().stringify()
                        }
                        });
                    }}
                }} />
                
            </Row>
            <Row>
                <h4 className="center">Number of Products per Distributor</h4>
            </Row>
            <Row>
                <ChartistGraph className={'ct-octave'} data={data2} options={options2} type={type2} listener={{"draw" : function(data2) { if(data2.type === 'bar') {
                data2.element.animate({
                  y2: {
                      begin: 0,
                      dur: 1500,
                      from: data2.y1,
                      to: data2.y2,
                  }});
                }}
            }}/>
            </Row>
          </div>
        )
      }
   /*  return (
      <div className="container">
        {averageStatistics}
      </div>
    ) */
}
export default statistics;