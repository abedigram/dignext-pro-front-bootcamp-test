import { Button, ListItem, ListItemText, List as MList } from "@mui/material";
import List from "../components/List";
import { useAppSelector } from "../store/hooks";
import { totalPayment } from "../data/totalPayment";

export default function Cart() {
  const { cart } = useAppSelector((state) => state.app);



  return (
    <>
      <List foods={cart} />
      <MList>
        <ListItem>
          <ListItemText primary={"مجموع سبد"} secondary={totalPayment(cart, 55000, true)} />
        </ListItem>
      </MList>
      <Button variant="contained" size="large" sx={{ m: 2 }}>
        ثبت سفارش
      </Button>
    </>
  );
}
