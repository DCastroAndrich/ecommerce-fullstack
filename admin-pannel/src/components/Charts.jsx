import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



const Charts = ({title, data, dataKey1, dataKey2, grid}) => {
  return (
    <div className="m-5 p-5 shadow-md">
      <h3 className="mb-5">{title} </h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {grid && <CartesianGrid  strokeDasharray="3 3" />}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={dataKey1}
            stroke="#00FF00"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey={dataKey2} stroke="#FF0000" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
