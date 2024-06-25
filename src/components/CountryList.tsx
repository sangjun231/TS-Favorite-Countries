import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../api/CountryAPI";
import CountryCard from "./CountryCard";

const CountryList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="text-4xl">로딩중입니다!!</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="text-4xl">에러가 발생했습니다!</h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
      {data &&
        data.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
    </div>
  );
};

export default CountryList;
