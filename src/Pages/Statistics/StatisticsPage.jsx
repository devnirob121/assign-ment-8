import DonationChart from "../../Components/Charts/DonationChart";

const StatisticsPage = () => {

  console.log('this is statics page');

  return (
    <>
      <div className="sr-chart sm:w-4/5 mx-auto">
        <DonationChart />

        <div className="statics-conent flex flex-col items-center sm:flex-row gap-2 sm:gap-6 justify-center">
          <div className="left-content flex gap-3 items-center">
            <h2>Our Total Fund </h2>
            <div className="left-line w-24  h-2 rounded bg-[#ff444a] "></div>
          </div>
          <div className="right-content flex gap-3 items-center">
            <h2>Your Total Donation</h2>
            <div className="right-line w-24 h-2 rounded bg-[#00c49f]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsPage;
