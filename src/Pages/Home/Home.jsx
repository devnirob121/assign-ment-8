import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Donation from "../../Components/Donations/Donation";
import {  useRef, useState } from "react";

function Home() {
  const donations = useLoaderData();
  const searchRef = useRef('')
  const [filterredDonations,setFilteredDonations] = useState(donations)
  const handleSearch = () => {
   const searchTerm = searchRef.current.value[0].toUpperCase()+searchRef.current.value.slice(1)
   const filteredDonate =  donations.filter(donate => donate.category === searchTerm )
   setFilteredDonations(filteredDonate)
  }

  return (
    <>
      <Banner searchRef={searchRef} handleSearch={handleSearch} />
      <div className="donations py-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-4 w-4/5 mx-auto  ">
        {filterredDonations?.map((donation) => (
          <Donation key={donation.id} donation={donation} />
        ))}
      </div>
    </>
  );
}

export default Home;
