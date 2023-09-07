import "./App.css";
import IdProvider from "./Providers/IdProvider";
import PageProvider from "./Providers/RouterProvider";
import Router from "./assets/Components/Router";

function App() {
  return (
    <>
      <IdProvider>
        <PageProvider>
          <Router />
          <div>this Tiyulim site is built by the student eliya duek</div>
        </PageProvider>
      </IdProvider>
    </>
  );
}

export default App;
