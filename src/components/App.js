import React, { useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/User";
import { ThemeContext } from "../context/Theme";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme}>
      <UserProvider>
        <Header />
        <Profile />
      </UserProvider>
    </main>
  );
}

export default App;
