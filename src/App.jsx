import React from "react";
import { Routes, Route } from "react-router-dom";
import urlconfig from "./urlconfig";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <>
      <header>header</header>
      <main>
        <Routes>
          <Route path={urlconfig.home} element={<home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
