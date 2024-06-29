import axios from "axios";
import { Country } from "../types/country";

export const countryApi = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getCountries = async (): Promise<Country[]> => {
  try {
    const response = await countryApi.get("/all");
    return response.data;
  } catch (error) {
    throw new Error();
  }
};
