import React, { useEffect, useState } from "react";
import { CategoryList } from "../../components/CategoryList/CategoryList";
import "./Notebooks.css";
import "../../commonStyles/commonStyles.css";
import { Carousel } from "../../components/Carousel/Carousel";
import {
  Tabs,
  CheapestFilter,
  MostExpensiveFilter,
  TopFilter,
  TopSellingFilter,
} from "../../components/Tabs/Tabs";
import { Item } from "../../components/Item/Item";
import { getPageData } from "../../api/api";

export type Promos = {
  count: number;
  id: number;
  img: string;
  is_enabled: boolean;
  name: string;
  order: number;
  price: string;
};
export type DTONotebooks = {
  img: string;
  name: string;
  spec: string;
  price: string;
  priceFull: string | null;
  rating: number;
  url: string;
  avail: string;
  ratingCount: number;
  promos: Promos[] | null;
};

export const NotebooksPage = () => {
  const [notebooks, setNotebooks] = useState<DTONotebooks[]>([]);
  const [sort, setSort] = useState<string>(TopFilter);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const notebooksArrat = [];
        for (const item of await getPageData()) {
          const richArticle: DTONotebooks = {
            img: item.img,
            name: item.name,
            spec: item.spec,
            price: item.price,
            rating: item.rating,
            avail: item.avail,
            priceFull: item.cprice,
            url: item.url,
            ratingCount: item.ratingCount,
            promos: item.promos,
          };
          notebooksArrat.push(richArticle);
        }
        setNotebooks(notebooksArrat);
      } catch (error) {}
    };
    fetchData();
  }, []);

  function sorting(a: DTONotebooks, b: DTONotebooks) {
    switch (sort) {
      case TopFilter:
        return a.ratingCount - b.ratingCount;
      case TopSellingFilter:
        return (
          +(+a.avail.replace(/[^0-9]/g, "")).toFixed() -
          +(+b.avail.replace(/[^0-9]/g, "")).toFixed()
        );
      case CheapestFilter:
        return (
          +(+a.price.replace(/[^0-9]/g, "")).toFixed() -
          +(+b.price.replace(/[^0-9]/g, "")).toFixed()
        );
      case MostExpensiveFilter:
        return (
          +(+b.price.replace(/[^0-9]/g, "")).toFixed() -
          +(+a.price.replace(/[^0-9]/g, "")).toFixed()
        );
    }
    return 0;
  }

  const notebooksCategory = [
    "MacBook",
    "Herní",
    "Kancelářské",
    "Profesionální",
    "Stylové",
    "Zakladní",
    "Dotykové",
    "Na splátky",
    "VR Ready",
    "IRIS Graphics",
    "Brašny, Batohy",
    "Příslušenství",
  ];

  return (
    <div>
      <div className="container">
        <div className="h1Blue">Notebooks</div>
      </div>
      <CategoryList notebooksCategory={notebooksCategory} />
      <div className="container">
        <div className="h3LightBlueBold">Nejprodávanější</div>
      </div>
      <Carousel items={notebooks ?? []} />
      <Tabs fun={(e: string) => setSort(e)} />
      <div className="container">
        <div className="items">
          {notebooks
            ?.sort((a, b) => sorting(a, b))
            .map((item, i) => (
              <Item key={i} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};
