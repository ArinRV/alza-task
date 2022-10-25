import axios from "axios";
import dataMock from "../data/data.json";

const globalURL = "https://www.alza.cz/Services/RestService.svc/v2";

export const getPageData = async () => {
  //Pokud se nelze pripojit na https://www.alza.cz/ kvuli CORS, dataMock pro testovani reprezentuje obdobny objekt jako response ze serveru
  //return dataMock.data;

  const body = {
    filterParameters: {
      id: 18855843,
      isInStockOnly: false,
      newsOnly: false,
      wearType: 0,
      orderBy: 0,
      page: 1,
      params: [
        {
          tId: 0,
          v: [],
        },
      ],
      producers: [],
      sendPrices: true,
      type: "action",
      typeId: "",
      branchId: "",
    },
  };

  let response = await axios.post(globalURL + "/products", body, {});
  return response.data.data;
};
