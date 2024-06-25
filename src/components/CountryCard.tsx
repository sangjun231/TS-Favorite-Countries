import { Country } from "../types/Country";

const CountryCard = ({ country }: { country: Country }) => {
  return (
    <div className="flex flex-col border rounded gap-2 px-4">
      <div className="flex justify-center mb-2">
        <img
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          className="w-32 h-20"
        />
      </div>
      <h2>{country.name.common}</h2>
      <p>{country.capital}</p>
    </div>
  );
};

export default CountryCard;
