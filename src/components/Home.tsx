import Card from "./Card";
import NavigationCard from "./NavigationCard";
import PostFormCard from "./PostFormCard";

const Home = () => {
  return (
    <div className="mt-7 flex gap-2 md:gap-8 max-w-full w-full md:max-w-4xl mx-auto">
      <div className=" md:w-1/3">
        <NavigationCard />
      </div>

      {/* POST DAN FORM */}
      <div className="grow">
        <PostFormCard />
        <Card>Story of people</Card>
      </div>
    </div>
  );
};

export default Home;
