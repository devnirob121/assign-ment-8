import { PieChart, Pie, Cell } from "recharts";
import { useEffect, useState } from "react";

// const data = [
//   { name: "Remaining Donation", value: 11 },
//   { name: "Totall Donation", value: 300 },
// ];

const COLORS = ["#ff444a", "#00c49f"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const DonationChart = () => {
  // donateale totall
  const [donations, setDonations] = useState([]);
  let totallFund = 0;
  useEffect(() => {
    const getDonation = async () => {
      const res = await fetch("/Apis/Donations.json");
      const data = await res.json();
      setDonations(data);
    };
    getDonation();
    
  }, []);


  donations?.forEach((donation) => {
    totallFund += donation.price;
  });
  totallFund = parseInt(totallFund.toFixed(2));

  // donated totall
  const donatedItems = JSON.parse(localStorage.getItem("donations"));
  let donated = 0;
  donatedItems?.forEach((item) => {
    donated += item.price;
  });

  // 1.   Calculate the percentage of your donation out of the total fund:  Percentage of your donation = (Your total donation / Total fund) * 100  Percentage of your donation = (17837.74 / 20737) * 100 ≈ 85.99%

  // 2. Calculate the percentage of remaining fund:  Percentage of remaining fund = [(Total fund - Your total donation) / Total fund] * 100 Percentage of remaining fund = [(20737 - 17837.74) / 20737] * 100 ≈ 13.98%

  const totallDonated = (donated / totallFund) * 100;
  const remainingDonate = ((totallFund - donated) / totallFund) * 100;

  const data = [
    { name: "Remaining Donation", value: remainingDonate },
    { name: "Totall Donation", value: totallDonated },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};
export default DonationChart;
