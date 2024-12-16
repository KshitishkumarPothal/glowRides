import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";
import { CiSearch } from "react-icons/ci";
import data from "@/Shared/data";
  
function Search() {
  return (
    <div className="p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%]">
      <Select>
        <SelectTrigger className="w-full shadow-none outline-none md:border-none text-lg">
          <SelectValue placeholder="cars" />
        </SelectTrigger>
        <SelectContent> 
          <SelectItem value="light">new</SelectItem>
          <SelectItem value="dark">old</SelectItem>
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block"/>
      
      <Select>
        <SelectTrigger className="w-full shadow-none outline-none md:border-none text-lg">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent>
          {
            data.CarMakes.map((maker, index) =>(
              <SelectItem value={maker.name}>{maker.name}</SelectItem>
          
            ))
          }
          
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block"/>
      
      <Select>
        <SelectTrigger className=" w-full shadow-none outline-none md:border-none text-lg">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
          {
            data.Pricing.map((price, index) => (
              <SelectItem value={price.amount}>{price.amount}</SelectItem>
            ))
          }
          
          
        </SelectContent>
      </Select>
      <div>
        <CiSearch  className="text-[50px] bg-primary rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer"/>
      </div>
      
    </div>
  );
}

export default Search;
