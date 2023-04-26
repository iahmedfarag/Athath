import { useAuth0 } from "@auth0/auth0-react";
import {
  React,
  useReducer,
  useEffect,
  useContext,
  createContext,
  useState,
} from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();
  const [myUser, setMyUser] = useState(null);
  useEffect(() => {
    setMyUser(user);
  }, [user]);
  return (
    <UserContext.Provider value={{ myUser, logout, loginWithRedirect }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
