import React, { useState, useEffect } from 'react';
import { IonCardTitle } from '@ionic/react';
import ReactECharts from 'echarts-for-react';
import './inside-charts.css';

const InsideCharts = () => {

    const option = {
        title: {
            text: 'Sale from last 1 Year',
            subtext: "Quantity in Kg's",
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['Rice', 'Wheets', 'Corn', 'Barley', 'Sorghum']
        },
        series: [{
            name: 'Sales %',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 335, name: 'Rice' },
                { value: 310, name: 'Wheets' },
                { value: 234, name: 'Corn' },
                { value: 135, name: 'Barley' },
                { value: 1548, name: 'Sorghum' }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };

    const [count, setCount] = useState(0);
    const [options, setOptions] = useState({});
    useEffect(() => {
        setOptions(option);
    }, []);

    function onChartReady(echarts: any) {
        console.log('echarts is ready', echarts);
    }

    function onChartClick(param: any, echarts: any) {
        console.log(param, echarts);
        setCount(count + 1);
    };

    function onChartLegendselectchanged(param: any, echarts: any) {
        console.log(param, echarts);
    };

    return (
        <div className="my-5">
            <IonCardTitle className="ml-2">Sales chart</IonCardTitle>
            <div className="inside-charts">
                <ReactECharts option={options} onChartReady={onChartReady} onEvents={{
                  'click': onChartClick,
                  'legendselectchanged': onChartLegendselectchanged
                 }} />
            </div>
        </div>
    );
};
export default InsideCharts;