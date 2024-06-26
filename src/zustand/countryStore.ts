import { create } from "zustand";
import { Country } from "../types/country";

const useCountryStore = create<{
  countries: Country[];
  setCountries: (countries: Country[]) => void;
  favoriteCountries: Country[];
  setFavoriteCountries: (favoriteCountries: Country[]) => void;
}>((set) => ({
  countries: [],
  setCountries: (countries) => set({ countries }),
  favoriteCountries: [],
  setFavoriteCountries: (favoriteCountries) => set({ favoriteCountries }),
}));

export default useCountryStore;
