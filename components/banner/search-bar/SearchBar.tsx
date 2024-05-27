"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { useState } from "react";

const SearchBar = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 px-[60px] py-[30px] bg-white rounded-[20px] z-20">
      <form className="flex gap-2">
        <div className="min-w-[320px] h-20 py-[10px] px-6 rounded-lg bg-[#F4F5F7]">
          <label htmlFor="location" className="text-body1">
            Location
          </label>
          <Input
            type="text"
            id="location"
            placeholder="Where are you from?"
            className=" px-0 py-0 text-caption1 border-0 shadow-none focus-visible:ring-0"
          />
        </div>
        <div className="min-w-[180px]">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="flex flex-col justify-start items-start py-[10px] px-6 w-full h-20 text-start rounded-lg bg-[#F4F5F7]"
              >
                <label className="mb-[6px]  text-body1">Return Date</label>
                {date ? (
                  format(date, "PPP")
                ) : (
                  <span className="text-caption1 text-[#B1B5C3]">
                    Pick a date
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="bg-white"
              />
            </PopoverContent>
          </Popover>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
