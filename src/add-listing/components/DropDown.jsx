import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

function DropDown({ item, handleInputChange }) {
  return (
    <div>
      <Select onValueChange={(value) =>  handleInputChange(item.name, value)} required={item.required}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={item.label} />
        </SelectTrigger>
        <SelectContent>
          {item.option.map((option, index) => (
            <SelectItem value={option}>{option}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default DropDown;
