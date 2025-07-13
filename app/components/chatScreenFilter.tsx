import { Search, SearchIcon } from "lucide-react";
import { useState } from "react";

type FilterOption = "All" | "Unread" | "Favourites" | "Groups";

type ChatScreenFilterProps = {
  filterOptions: FilterOption[];
};

export function ChatScreenFilter({ filterOptions }: ChatScreenFilterProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  console.log(filterOptions);

  return (
    <>
      {filterOptions.map((option) => (
        <div
          key={option}
          className={`rounded-3xl px-4 py-1 w-fit border-[0.2px] cursor-pointer border-[#f0f0f033] ${
            activeFilter === option
              ? "bg-[#26bd2635] text-white"
              : "bg-transparent text-[#5a5a5a] hover:bg-green-100"
          }`}
        >
          <p className="text-[14px]" onClick={() => setActiveFilter(option)}>{option}</p>
        </div>
      ))}
    </>
  );
}
