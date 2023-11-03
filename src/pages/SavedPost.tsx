import Card from "../components/Card";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";

const SavedPost = () => {
  return (
    <Layout>
      <Card>
        <h1 className="text-4xl text-gray-300">Your Saved Post</h1>
      </Card>
      <PostCard />
      <PostCard />
      <PostCard />
    </Layout>
  );
};

export default SavedPost;
