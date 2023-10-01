import { useEffect, useState } from "react";
import Donations from "../../Components/Donations/Donations";

const DonationPage = () => {

  const[donations, setDonations] = useState([])
  const[noData, setNoData] = useState('')
  const[isShowMore, setIsShowMore] = useState(false)
  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem('donations'))
    donationItems && setDonations(donationItems) || setNoData('No Donation  Found')
  },[])

  return (
    <>
      <div className={` ${donations.length > 0 ?' w-4/5 grid grid-cols-1 lg:grid-cols-2 sm:gap-5 mx-auto' : 'w-primary sm:mx-auto' } `}>

        {
       isShowMore ?
         donations.length > 0  ? donations.map(donation =>  <Donations key={donation.id} donation={donation} />) : <h1 className="text-4xl text-red-500 text-center">{noData}</h1>
         :
         donations.length > 0  ? donations.slice(0,4).map(donation =>  <Donations key={donation.id} donation={donation} />) : <h1 className="text-4xl text-red-500 text-center">{noData}</h1>


        }
       
      </div>
      <div className="button-div text-center">
        {
          donations.length > 4 &&       <button onClick={ () => setIsShowMore(!isShowMore) } className={`btn mt-10 ${isShowMore ? 'hidden' : 'inline-block'} rounded px-5 hover:bg-[#009444]  hover:text-white text-white bg-[#009444]`}> See All </button>

        }


      </div>
    </>
  );
};

export default DonationPage;
