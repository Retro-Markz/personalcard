import Avatar from "./Avatar";
import DevCountry from "./DevCountry";
import Quote from "./Quote";
import UserName from "./UserName";

const Card = ({ UserPhoto, quote, name, dev, country }) => {
  return (
    <div className="min-w-[26vw] py-12  h-[80vh]">
      <figure className="flex flex-col justify-between items-center  bg-slate-100 rounded-xl p-8 dark:bg-slate-800 w-[20vw] mx-auto shadow-lg h-[60vh]">
        <Avatar UserPhoto={UserPhoto} />
        <div className="pt-6 text-center  flex flex-col items-center">
          <blockquote>
            <Quote quote={quote} />
          </blockquote>
        </div>
        <figcaption className="font-medium text-center ">
          <UserName name={name} />
          <DevCountry dev={dev} country={country} />
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
