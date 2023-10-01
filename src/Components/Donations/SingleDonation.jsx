import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const SingleDonation = () => {
  const donationId = useParams()
  let donations = useLoaderData();
  const donation = donations.find(item => item.id == donationId.id )

  const { id, picture, title, category, text_color, description, price } =
    donation;

  // add donations
  const hanleAddToDonation = () => {
    const addedDonationArray = [];
    const donationItems = JSON.parse(localStorage.getItem("donations"));

    if (!donationItems) {
      addedDonationArray.push(donation);
      localStorage.setItem("donations", JSON.stringify(addedDonationArray));
      // showing alert
      Swal.fire("Great Job!", `You have give the donation amount $${price}!`, "success");
      
    } else {
      const isExist = donationItems.find((item) => item.id === id);
      if (!isExist) {
        addedDonationArray.push(...donationItems, donation);
        localStorage.setItem("donations", JSON.stringify(addedDonationArray));
        Swal.fire("Great Job!", `You have give the donation amount $${price}!`, "success");

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Already donated',
          text: `You have already donated in This ${category} Category!`,
        })
      }
    }
    // !donationItems ? addedDonationArray.push(donation) : addedDonationArray.push(...donationItems,donation)
  };

  return (
    <>
      <div className="single-donation w-4/5 mx-auto ">
        <div className="card  bg-base-100 ">
          <div className="  bg-black  flex flex-col justify-between overflow-shidden">
            <img
              className="w-full object-cover h-full"
              src={picture}
              alt={title}
            />
            <div className="card-button -mt-[80px] sm:-mt-[100px]  md:-mt-[130px] p-4 sm:p-7 md:p-10  relative  left-0  flex items-center ">
              <div
                style={{ background: "rgba(11, 11, 11, 0.50)" }}
                className="absolute py-2 sm:py-5 md:py-10 inset-0 "
              ></div>
              <button
                onClick={hanleAddToDonation}
                style={{ background: text_color }}
                className="z-10 btn text-white border-none
                px-2   sm:px-2 sm:py-5 md:px-7 md:py-7
                text-[12px]
                sm:text-[14px]
                "
              >
                Donate ${price}
              </button>
            </div>
          </div>

          <div className="card-body px-0 py-5">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleDonation;
