import Card from "./Card";
import NavigationCard from "./NavigationCard";
import PostFormCard from "./PostFormCard";
import PostCard from "./PostCard";

const Home = () => {
  return (
    <div className="mt-7 flex gap-2 md:gap-8 max-w-full w-full md:max-w-4xl mx-auto">
      <div className="md:w-3/12">
        <NavigationCard />
      </div>  

      {/* POST DAN FORM */}
      <div className="grow md:w-9/12">
        <PostFormCard />
        <PostCard />
      </div>
    </div>
  );
};

export default Home;
