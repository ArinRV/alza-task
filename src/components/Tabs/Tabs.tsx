import React, { useState } from "react";
import "./Tabs.css";

type TabsProps = {
  fun: Function;
};

export const TopFilter = "top";
export const TopSellingFilter = "topselling";
export const CheapestFilter = "cheapest";
export const MostExpensiveFilter = "mostexpensive";

export const Tabs = ({ fun }: TabsProps) => {
  const [selectedFilter, setSelectedFilter] = useState("top");

  function applyFilter(filter: string) {
    fun(filter);
    setSelectedFilter(filter);
  }

  return (
    <ul className="tab-nav">
      <li
        value={TopFilter}
        className={selectedFilter !== TopFilter ? "tab" : "selected-tab"}
        onClick={(event: any) => {
          applyFilter(event.target.getAttribute("value"));
        }}
      >
        TOP
      </li>
      <li
        value={TopSellingFilter}
        className={selectedFilter !== TopSellingFilter ? "tab" : "selected-tab"}
        onClick={(event: any) =>
          applyFilter(event.target.getAttribute("value"))
        }
      >
        Nejprodávanější
      </li>
      <li
        value={CheapestFilter}
        className={selectedFilter !== CheapestFilter ? "tab" : "selected-tab"}
        onClick={(event: any) =>
          applyFilter(event.target.getAttribute("value"))
        }
      >
        Od nejlevnějšího
      </li>
      <li
        value={MostExpensiveFilter}
        className={
          selectedFilter !== MostExpensiveFilter ? "tab" : "selected-tab"
        }
        onClick={(event: any) =>
          applyFilter(event.target.getAttribute("value"))
        }
      >
        Od nejdražšího
      </li>
    </ul>
  );
};
