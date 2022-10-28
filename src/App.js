import "./App.css";
import { useState } from "react";
import { Container } from "./app.styles";
import ButtonToggle from "./ButtonToggle/buttontoggle";


function App() {
  const [themeToggle, setThemeToggle] = useState(false);
  return (
    <Container themeToggle={themeToggle}>
      <ButtonToggle toggleTheme={() => setThemeToggle(!themeToggle)} />
    </Container>
  );
}

export default App;
