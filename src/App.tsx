import { Page } from "./components/Page";
import { StoreProvider } from "./store/StoreProvider";

function App() {
  return (
    <StoreProvider>
      <Page />
    </StoreProvider>
  );
}

export default App;
