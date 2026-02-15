import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "1am", temp: 12 },
  { time: "2am", temp: 10 },
  { time: "3am", temp: 9 },
  { time: "4am", temp: 10 },
  { time: "5am", temp: 12 },
  { time: "6am", temp: 14 },
  { time: "7am", temp: 15 },
  { time: "8am", temp: 16 },
  { time: "9am", temp: 18 },
  { time: "10am", temp: 19 },
  { time: "11am", temp: 20 },
  { time: "12pm", temp: 21 },
  { time: "13pm", temp: 22 },
  { time: "14pm", temp: 24 },
  { time: "15m", temp: 25 },
  { time: "16pm", temp: 26 },
  { time: "17pm", temp: 27 },
  { time: "18pm", temp: 26 },
  { time: "19pm", temp: 25 },
  { time: "20pm", temp: 24 },
  { time: "21pm", temp: 23 },
  { time: "22pm", temp: 18 },
  { time: "23pm", temp: 16 },
  { time: "24am", temp: 14 },
];


export default function Chart() {
  return (
    <ResponsiveContainer width="90%" height={450}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="temp" stroke="#ff7a00" />
      </LineChart>
    </ResponsiveContainer>
  );
}
