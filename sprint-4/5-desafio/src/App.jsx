import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Products from "./pages/Products";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound/NotFound";

import Header from "./components/Header";
import Spinner from "./components/Spinner";
import Message from "./components/Message";
import Footer from "./components/Footer";

import CategoriesContext from "./contexts/CategoriesContext";
import FilterContext from "./contexts/FilterContext";
import LoadingContext from "./contexts/LoadingContext";
import MessageContext from "./contexts/MessageContext";

import useLoading from "./hooks/useLoading";
import CategoriesService from "./services/CategoriesService";

import { GlobalStyle } from "./styles/global";

function App() {
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState({});
  const [addRequest, removeRequest, isLoading] = useLoading();

  // eslint-disable-next-line
  useEffect(() => loadCategories(), []);

  function loadCategories() {
    addRequest();
    CategoriesService.get()
      .then(c => setCategories(c))
      .catch(() => setMessage("Ocorreu um erro ao carregar as categorias..."))
      .finally(() => removeRequest());
  }

  return (
    <BrowserRouter>
      <FilterContext.Provider value={{ filter, setFilter }}>
        <GlobalStyle />

        <LoadingContext.Provider
          value={{ addRequest, removeRequest, isLoading }}
        >
          <MessageContext.Provider value={{ message, setMessage }}>
            <CategoriesContext.Provider value={{ categories }}>
              <Spinner />

              <div className="page-container">
                <Message />
                <Header />

                <Switch>
                  <Route exact path="/" component={Products} />
                  <Route path="/details/:sku" component={Details} />
                  <Route component={NotFound} />
                </Switch>
              </div>

              <Footer />
            </CategoriesContext.Provider>
          </MessageContext.Provider>
        </LoadingContext.Provider>
      </FilterContext.Provider>
    </BrowserRouter>
  );
}

export default App;
