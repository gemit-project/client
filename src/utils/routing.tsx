import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../components/pages/dashboard/Dashboard";
import { Search } from "../components/pages/search/Search";
import { CheckOut } from "../components/pages/CheckOut";
import { LogOut } from "../components/pages/LogOut";
import { Setting } from "../components/pages/Setting";
import { Chat } from "../components/pages/Chat";
import { Compare } from "../components/pages/search/Actions/Compare";
import { Listing } from "../components/pages/dashboard/listing/Listing";
import { Filter } from "../components/pages/search/Actions/Filter";
import { Reset } from "../components/pages/search/Actions/Reset";
import { View } from "../components/pages/search/Actions/View";
import { Sort } from "../components/pages/search/Actions/Sort";

export const Routing: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="Listing" element={<Listing />} />
        </Route>
        <Route path="/Search" element={<Search />}>
          <Route path="Compare" element={<Compare />} />
          <Route path="Filter" element={<Filter />} />
          <Route path="Reset" element={<Reset />} />
          <Route path="View" element={<View />} />
          <Route path="Sort" element={<Sort />} />
        </Route>
        <Route path="/CheckOut" element={<CheckOut />} />
        <Route path="/LogOut" element={<LogOut />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Chat" element={<Chat />} />
      </Routes>
    </>
  );
};
