import { create } from "zustand";
import { Period } from "../types/Period";

type WeatherStore = {
  weatherData: Period[] | null;
  loading: boolean;
  error: string | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setWeatherData: (data: Period[] | null) => void;
  backgroundUrl: string;
};

const useWeatherStore = create<WeatherStore>((set) => ({
  weatherData: null,
  loading: false,
  error: null,
  backgroundUrl: "",
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setWeatherData: (data) => set({ weatherData: data }),
}));

export default useWeatherStore;
