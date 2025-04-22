const TitleHeader = ({ title }) => {
  return (
      <div>
        <h2 className="font-semibold md:text-5xl mb-8 text-3xl text-center">
          {title}
        </h2>
      </div>
  );
};

export default TitleHeader;
