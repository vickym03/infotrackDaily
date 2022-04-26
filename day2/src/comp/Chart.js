import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

function Chart() {
    const data = [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
          amt: 2400
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
          amt: 2210
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
          amt: 2290
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000
        },
        {
          name: "Page E",
          uv: 1890,
          pv: 4800,
          amt: 2181
        },
        {
          name: "Page F",
          uv: 2390,
          pv: 3800,
          amt: 2500
        },
        {
          name: "Page G",
          uv: 3490,
          pv: 4300,
          amt: 2100
        }
      ];

      const data1 = [];
      const data2 = [];
      
      const rand = 300;
      for (let i = 0; i < 7; i++) {
        let d = {
          year: 2000 + i,
          value: { x: Math.random() * (rand + 50) + 100 }
        };
      
        data1.push(d);
      }
      
      for (let i = 0; i < 7; i++) {
        let d = {
          year: 2000 + i,
          value: { x: Math.random() * (rand + 50) + 100 }
        };
      
        data2.push(d);
      }
      
      const getXValueData1 = data => {
        const index = data1.findIndex(obj => obj.year === data.year);
        return data1[index].value.x;
      };
      
      const getXValueData2 = data => {
        const index = data2.findIndex(obj => obj.year === data.year);
        return data2[index].value.x;
      };

  return (
    <div>
      <h3>   Rechart</h3>
      <BarChart 
      width={800} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="name"/>
      <YAxis/>
      <Tooltip/>
      <Legend/>
      <Bar dataKey="pv" fill='green'/>
      <Bar dataKey="uv" fill='blue'/>
      <Bar dataKey="amt" fill='black'/>
      </BarChart>



      <LineChart width={800} height={300} data={data1}>
      <Line
        type="monotone"
        dataKey={data}
        stroke="#8884d8"
        dot={false}
      />
       <Line type="monotone" dataKey={getXValueData1} stroke="red" dot={false} />
       <Line type="monotone" dataKey={getXValueData2} stroke="blue" dot={false} />

      <XAxis dataKey="year" />
      <YAxis />
      </LineChart>
    </div>
  )
}

export default Chart
