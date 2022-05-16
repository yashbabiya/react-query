import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import HomeByEffect from "./pages/HomeByEffect";


function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <Header/>
      <QueryClientProvider client={queryClient}>

      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/byeffect' element={<HomeByEffect />}></Route>
      </Routes>
      </QueryClientProvider>

    </div>
  );
}

export default App;
