import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from "react-router-dom";
import Car from './views/pricecar';
import Changecolor from './views/changecolor';
import Loan from './views/loan';
import Currensy from './views/currency';
import Prayingtime from './views/prayingtime';
import Socialnetwork from './views/socialnetwork';
import Metronome from './views/metronom';
import Header from './views/header';
export default function App(){
    return(
     <>
    
    
     <Header/>
     
     <Routes>
        <Route path="/" element={<Car />} />
        <Route path="pagecolor" element={<Changecolor />} />
        <Route path="pageloan" element={<Loan />} />
        <Route path="pagecurrency" element={<Currensy />} />
        <Route path="pageprayingtime" element={<Prayingtime />} />
        <Route path="pagesocialnetwork" element={<Socialnetwork />} />
        <Route path="pagemetronome" element={<Metronome />} />
     </Routes>
    
     </>
    )
}