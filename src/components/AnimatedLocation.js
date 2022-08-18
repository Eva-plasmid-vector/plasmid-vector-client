import React from 'react'
import { Route, Routes, useLocation} from 'react-router-dom';
import { AnimatePresence} from 'framer-motion'

import Home from '../pages/Home';
import NaviDisplay from '../pages/NaviDisplay';

import VectorTeam from '../pages/VectorTeam';

import BipolarDisorder from '../content-pages/BipolarDisorder';
import DID from '../content-pages/DID';
import AnorexiaNervosa from '../content-pages/AnorexiaNervosa';
import Hyperthyroidism from '../content-pages/Hyperthyroidism';
import MDD from '../content-pages/MDD';
import MigraineAura from '../content-pages/MigraineAura';


const AnimatedLocation = ({ pastRelease, setCurrentCat, currentCat, vectorAuthorInfo }) => {
    const location = useLocation();
  return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path = '/' element = {<Home pastRelease={pastRelease} />} />
            <Route path = '/navidisplay' element = {<NaviDisplay pastRelease={pastRelease} currentCat={currentCat} setCurrentCat={setCurrentCat} />} />
            <Route path = '/vectorteam' element = {<VectorTeam pastRelease={pastRelease} vectorAuthorInfo={vectorAuthorInfo} />} />
 

            {/* WEB PAGE ROUTES         */}
            
            <Route path ="/bipolardisorder" element={ <BipolarDisorder pastRelease={pastRelease}/> } />
            <Route path="/dissociativeidentitydisorder" element={<DID pastRelease={pastRelease} />} />
            <Route path="/anorexianervosa" element={<AnorexiaNervosa pastRelease={pastRelease} />} />
            <Route path='/hyperthyroidism' element={<Hyperthyroidism pastRelease={pastRelease} />} />
            <Route path='/majordepressivedisorder' element={<MDD pastRelease={pastRelease}/>}/>
            <Route path='/migraineaura' element={<MigraineAura pastRelease={pastRelease}/> } />
        </Routes>
      </AnimatePresence>
       
       

  )
}

export default AnimatedLocation