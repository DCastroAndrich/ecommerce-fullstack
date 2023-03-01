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

const data = [
  {
    name: "January",
    income: 3800,
    outcome: 1400,
  },
  {
    name: "February",
    income: 7500,
    outcome: 5200,
  },
  {
    name: "March",
    income: 3090,
    outcome: 4505,
  },
  {
    name: "April",
    income: 8890,
    outcome: 2300,
  },
  {
    name: "May",
    income: 7692,
    outcome: 860,
  },
  {
    name: "June",
    income: 9800,
    outcome: 3500,
  },
  {
    name: "July",
    income: 7420,
    outcome: 5400,
  },
  {
    name: "August",
    income: 4200,
    outcome: 6400,
  },
  {
    name: "September",
    income: 6900,
    outcome: 400,
  },
  {
    name: "October",
    income: 4000,
    outcome: 2400,
  },
  {
    name: "November",
    income: 5984,
    outcome: 5400,
  },
  {
    name: "December",
    income: 9890,
    outcome: 7522,
  },
];

const Charts = () => {
  return (
    <div className="m-5 p-5 shadow-md">
      <h3 className="mb-5">Sales Analytics</h3>
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#00FF00"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="outcome" stroke="#FF0000" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
