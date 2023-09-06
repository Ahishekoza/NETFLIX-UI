import './Chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Chart = ({ title , data , dataKey , grid }) => {

  

  return (
    <div className='chart'>
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
          <Tooltip/>
          <Legend/>
          <XAxis dataKey="name" stroke='#5550bd'></XAxis>
          <Line type="monotone" dataKey={dataKey} stroke='#5550bd'></Line>
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"></CartesianGrid>}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart