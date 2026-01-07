import { HeaderApp } from "./components/headerApp/HeaderApp";
import { ThemeProvider } from "./context/ThemeContext";
import { MainPage } from "./page/MainPage";

function App() {
  return (
    <main>
      <ThemeProvider>
        <HeaderApp />
        <MainPage />
      </ThemeProvider>
    </main>
  );
}

export default App;
