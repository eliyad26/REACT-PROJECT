import {
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  FC,
  createContext,
} from "react";

type ContextValue = {
  id: string | null;
  setID: Dispatch<SetStateAction<string | null>>;
};

const IdContext = createContext<null | ContextValue>(null);
const { Provider } = IdContext;

type IdProviderProps = {
  children: ReactNode;
};

const IdProvider: FC<IdProviderProps> = ({ children }) => {
  const [id, setID] = useState<string | null>(null);

  return <Provider value={{ id, setID }}>{children}</Provider>;
};

export const useID = () => {
  const context = useContext(IdContext);
  if (!context) throw new Error("useId must be used within a IdProvider");
  return context;
};

export default IdProvider;
