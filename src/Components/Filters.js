import React, { useState, Fragment } from "react";
import { CategoriesData } from "../Data/CategoriesData";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { FaAngleDown, FaCheck } from "react-icons/fa";

const YearData = [
  { title: "Sory by Year" },
  { title: "1700 by 1800" },
  { title: "1800 by 1900" },
  { title: "1900 by 2000" },
  { title: "2000 by 2010" },
  { title: "2010 by 2030" },
];

const TimeData = [
  { title: "Sort by Hours" },
  { title: "1 - 5 Hours" },
  { title: "5 - 10 Hours" },
  { title: "10 - 15 Hours" },
  { title: "15 - 20 Hours" },
];

const RatesData = [
  { title: "Sort by Rates" },
  { title: "1 Star" },
  { title: "2 Stars" },
  { title: "3 Stars" },
  { title: "4 Stars" },
  { title: "5 Stars" },
];
const Filters = () => {
  const [category, setCategory] = useState({ title: "Category" });
  const [year, setYear] = useState(YearData[0]);
  const [times, setTimes] = useState(TimeData[0]);
  const [rates, setRates] = useState(RatesData[0]);

  const Filter = [
    {
      value: category,
      onchange: setCategory,
      items: CategoriesData,
    },
    {
      value: year,
      onchange: setYear,
      items: YearData,
    },
    {
      value: times,
      onchange: setTimes,
      items: TimeData,
    },
    {
      value: rates,
      onchange: setRates,
      items: RatesData,
    },
  ];
  return (
    <div className="my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
      {Filter.map((item, index) => (
        <Listbox key={index} value={item.value} onChange={item.onchange}>
          <div className="relative">
            <ListboxButton className="relative border border-gray-800 w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs">
              <span className="block truncate">{item.value.title}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <FaAngleDown className="w-5 h-5 " aria-hidden="true" />
              </span>
            </ListboxButton>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions className="absolute z-10 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {item.items.map((list, i) => (
                  <ListboxOption
                    key={i}
                    className={({ focus }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${focus ? "bg-subMain text-white" : "text-main"}`
                    }
                    value={list}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncated ${selected ? "font-semibold" : "font-normal"}`}
                        >
                          {list.title}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FaCheck className="w-4 h-4" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </Listbox>
      ))}
    </div>
  );
};

export default Filters;
