import { useQuery } from "react-query";
import axios from "axios";

const BASE_URL = "https://www.amiiboapi.com/api/amiibo";

export type ItemType = "Figure" | "Card";

export type Item = {
  amiiboSeries: string;
  character: string;
  gameSeries: string;
  head: string;
  image: string;
  name: string;
  release: Record<string, string>;
  tail: string;
  type: ItemType;
};

export const fetchAmiiboByName = async (name: string) => {
  const response = await axios.get<{ amiibo: Item[] }>(
    `${BASE_URL}/?name=${name}`
  );
  return response.data.amiibo;
};

const useAmiiboByName = (name: string) => {
  return useQuery(["amiibo", name], () => fetchAmiiboByName(name), {
    enabled: !!name
  });
};

export default useAmiiboByName;
