import { Route, Routes } from "react-router";
import { NavBar } from "./components";

import { ListPhones, } from "./screens"

function App() {
  return (
    <>
      <NavBar />
      <ListPhones />
      {/* <Routes>
        <Route path="/phones" element={<ListPhones />} />        
        <Route path="/phones/:id" element={<DetailPhone />} />
      </Routes> */}
    </>
  );
}

export default App;
