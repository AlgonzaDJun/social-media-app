interface props {
  size?: string;
}

const Avatar = ({ size }: props) => {
  let width = "w-12"
  if(size === "lg") {
    width = "w-36"
  }

  return (
    <div className={`${width} rounded-full overflow-hidden`}>
      <img
        className="aspect-square object-cover"
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  );
};

export default Avatar;
