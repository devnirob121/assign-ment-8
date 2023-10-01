import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import DonationPage from "../Pages/Donation/DonationPage";
import StatisticsPage from "../Pages/Statistics/StatisticsPage";
import SingleDonation from "../Components/Donations/SingleDonation";
import NotFound from "../Components/Errors/NotFound";

const createdRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        loader: () => fetch("/Apis/Donations.json"),
        element: <Home />,
      },
      {
        path: "/donations",
        element: <DonationPage />,
      },
      {
        path: "/donation/:id",
        loader: () => fetch("/Apis/Donations.json"),
        element: <SingleDonation />,
      },
      {
        path: "/statistics",
        element: <StatisticsPage />,
      },
    ],
  },
]);

export default createdRoute;
