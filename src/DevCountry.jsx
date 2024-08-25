const DevCountry = ({ dev, country }) => {
  return (
    <div>
      <div className="text-slate-700 dark:text-slate-500">
        {dev}, {country}
      </div>
    </div>
  );
};

export default DevCountry;
