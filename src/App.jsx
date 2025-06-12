import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="h-screen">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
