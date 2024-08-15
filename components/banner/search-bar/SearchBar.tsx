"use client";

import { CalendarDays, ChevronDown, MapPin } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="mt-10 border">
      <div>
        <MapPin />
        <ChevronDown />
      </div>
      <div>
        <CalendarDays />
        <ChevronDown />
      </div>
      <div>
        <CalendarDays />
        <ChevronDown />
      </div>
      <p></p>
    </div>
  );
};

export default SearchBar;
