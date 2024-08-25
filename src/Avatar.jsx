const Avatar = ({ UserPhoto }) => {
  return (
    <div>
      <img
        className="w-32 h-32  rounded-full mx-auto object-cover"
        src={UserPhoto}
        alt="photo"
      />
    </div>
  );
};

export default Avatar;
