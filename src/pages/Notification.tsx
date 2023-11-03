import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import Layout from "../components/Layout";

const Notification = () => {
  return (
    <Layout>
      <Card>
        <h1 className="text-4xl text-gray-300">Notifications</h1>
      </Card>
      <Card noPadding={true}>
        <div className="hover:bg-slate-300 rounded-md">
          <div className="flex items-center gap-2 border-b border-b-slate-300 pt-3 pb-3 ">
            <Avatar />
            <div>
              <Link
                to={"/profile"}
                className="font-semibold mr-1 hover:underline"
              >
                Username
              </Link>
              menyukai{" "}
              <Link
                to={"/profile/"}
                className="text-socialBlue hover:underline ml-1"
              >
                {" "}
                foto anda
              </Link>
            </div>
          </div>
        </div>
        <div className="hover:bg-slate-300 rounded-md">
          <div className="flex items-center gap-2 border-b border-b-slate-300 pt-3 pb-3 ">
            <Avatar />
            <div>
              <Link
                to={"/profile"}
                className="font-semibold mr-1 hover:underline"
              >
                Username
              </Link>
              menyukai{" "}
              <Link
                to={"/profile/"}
                className="text-socialBlue hover:underline ml-1"
              >
                {" "}
                foto anda
              </Link>
            </div>
          </div>
        </div>
        <div className="hover:bg-slate-300 rounded-md">
          <div className="flex items-center gap-2 border-b border-b-slate-300 pt-3 pb-3 ">
            <Avatar />
            <div>
              <Link
                to={"/profile"}
                className="font-semibold mr-1 hover:underline"
              >
                Username
              </Link>
              menyukai{" "}
              <Link
                to={"/profile/"}
                className="text-socialBlue hover:underline ml-1"
              >
                {" "}
                foto anda
              </Link>
            </div>
          </div>
        </div>
        <div className="hover:bg-slate-300 rounded-md">
          <div className="flex items-center gap-2 border-b border-b-slate-300 pt-3 pb-3 ">
            <Avatar />
            <div>
              <Link
                to={"/profile"}
                className="font-semibold mr-1 hover:underline"
              >
                Username
              </Link>
              menyukai{" "}
              <Link
                to={"/profile/"}
                className="text-socialBlue hover:underline ml-1"
              >
                {" "}
                foto anda
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
};

export default Notification;
