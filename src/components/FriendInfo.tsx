import Avatar from "./Avatar";

const FriendInfo = () => {
  return (
    <div>
      <div className="flex gap-2" id="avatar">
        <Avatar />
        <div>
          <h3 className="font-bold text-xl">Algonza</h3>
          <div className="text-sm leading-3">5 Mutual Friends</div>
        </div>
      </div>
    </div>
  );
};

export default FriendInfo;
