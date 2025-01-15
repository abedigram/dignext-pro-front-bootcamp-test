import { useEffect, useState } from "react";
import List from "../components/List";
import SearchBox from "../components/SearchBox";
import { getFoods } from "../data/getFoods";
import { setFoods } from "../store/appSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function Home() {
  const { foods } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const [foodList, setfoodList] = useState(foods);

  useEffect(() => {
    const res = getFoods();
    dispatch(setFoods(res));
    setfoodList(res);
  }, [dispatch]);

  const search = (q: string) => {
    setfoodList(foods.filter((i) => i.name.includes(q)));
  };

  return (
    <>
      <SearchBox onQuery={search} />
      <List foods={foodList} />
    </>
  );
}
