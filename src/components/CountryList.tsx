import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../api/countryAPI";
import CountryCard from "./CountryCard";
import { useEffect } from "react";
import { Country } from "../types/country";
import useCountryStore from "../zustand/countryStore";

const CountryList = ({ isDone }: { isDone: boolean }) => {
  const { countries, setCountries, favoriteCountries, setFavoriteCountries } =
    useCountryStore();

  const { data, error, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  const handleToggleCountry = (country: Country) => {
    if (isDone) {
      setFavoriteCountries(
        favoriteCountries.filter((toggle) => toggle.cca3 !== country.cca3)
      );
      setCountries([country, ...countries]);
    } else {
      setCountries(countries.filter((toggle) => toggle.cca3 !== country.cca3));
      setFavoriteCountries([country, ...favoriteCountries]);
    }
  };

  useEffect(() => {
    if (data) {
      setCountries(data);
    }
  }, [data, setCountries]);

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

  const isDoneCountries = isDone ? favoriteCountries : countries;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
      {isDoneCountries.map((country) => (
        <CountryCard
          key={country.cca3}
          country={country}
          handleToggleCountry={handleToggleCountry}
        />
      ))}
    </div>
  );
};

export default CountryList;
