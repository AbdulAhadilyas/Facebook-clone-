import React from 'react'
import { Route, Routes,  } from 'react-router-dom';
import Group from '../pages/Group';
import Video from '../pages/video';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Video" element={<Video/>} />
        <Route path="/Group" element={<Group />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
 
    </div>
  )
}
