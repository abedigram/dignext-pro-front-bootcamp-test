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
          <ListItemText primary={"مجموع سبد"} />
          <p data-testid="total">{totalPayment(cart)}</p>
        </ListItem>
      </MList>
      <Button variant="contained" size="large" sx={{ m: 2 }}>
        ثبت سفارش
      </Button>
    </>
  );
}
