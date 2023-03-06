import Charts from "../components/Charts";
import FeaturedInfo from "../components/FeaturedInfo";
import HomeWidgetLg from "../components/HomeWidgetLg";
import HomeWidgetSm from "../components/HomeWidgetSm";
import { revenueData } from "../data/dummyData";

const Home = () => {
  return (
    <div className="w-4/5">
      <FeaturedInfo />
      <Charts
        data={revenueData}
        title="Revenue Statistics"
        grid
        dataKey1="Income"
        dataKey2="Outcome"
      />
      <div className="m-5 flex">
        <HomeWidgetSm />
        <HomeWidgetLg />
      </div>
    </div>
  );
};

export default Home;
