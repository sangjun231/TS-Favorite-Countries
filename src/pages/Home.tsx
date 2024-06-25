import CountryList from "../components/CountryList";

const Home = () => {
  return (
    <>
      <h1 className="flex justify-center items-center mt-8 mb-8 text-2xl font-bold">
        Favorite Countries
      </h1>
      <h1 className="flex justify-center items-center mb-8 text-3xl font-bold">
        Countries
      </h1>
      <CountryList />
    </>
  );
};

export default Home;
