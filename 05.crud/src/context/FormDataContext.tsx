import { ReactNode, createContext, useEffect, useState } from "react";

interface AuthProps {
  children: ReactNode;
}

export interface DataType {
  title: string;
  cost: string;
}

const FormDataContext = createContext({
  data: null as DataType | null,
});

export const FormDataContextProvider = ({ children }: AuthProps) => {
  const [CurrentData, setCurrentData] = useState<DataType | null>(null);

  return (
    <FormDataContext.Provider value={{ data: CurrentData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataContext;
