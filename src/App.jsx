import React from "react";
import { Header } from "./components/Header/Header";


import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Song } from "./pages/song";
import { Songs } from "./pages/Songs";
import { Artist} from "./pages/Artist"
import { Artists } from "./pages/Artists";

export const App = () => {

    return(
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/artists" element={<Artists/>} />
          <Route path="/artist/:id" element={<Artist/>} />
          <Route path="/songs" element = {<Songs/>}/>
          <Route path="/song/:id" element={<Song/>} />

        </Routes>


      </BrowserRouter>
    )
};
