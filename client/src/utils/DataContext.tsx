import { createContext } from "react";

interface DataContextValue {
  data: any; // replace 'any' with the actual type of your data
  setData: React.Dispatch<React.SetStateAction<any>>; // replace 'any' with the actual type of your data
}

export const DataContext = createContext<DataContextValue>({
  data: null,
  setData: () => {}
});