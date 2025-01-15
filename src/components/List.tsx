import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Avatar,
  Button,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  List as MList,
  Typography,
} from "@mui/material";
import { Food } from "../data/types";
import { addtoCart, removeFromCart } from "../store/appSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function List({ foods }: { foods: Food[] }) {
  const { cart } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const add = (food: Food) => {
    dispatch(addtoCart(food));
  };

  const remove = (item: Food) => {
    dispatch(removeFromCart(item));
  };

  const hasItem = (item: Food): boolean => {
    for (const food in cart) {
      if (cart[food].name == item.name) return true;
    }
    return false;
  };

  return (
    <MList sx={{ flex: 1, overflow: "auto" }}>
      {foods.map(({ name, image, price }, index) => (
        <>
          <ListItem
            key={name}
            secondaryAction={
              <>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ marginInlineEnd: 1 }}
                  disabled={!hasItem(foods[index])}
                  onClick={() => remove(foods[index])}
                >
                  <RemoveIcon />
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  disabled={hasItem(foods[index])}
                  onClick={() => add(foods[index])}
                >
                  <AddIcon />
                </Button>
              </>
            }
          >
            <ListItemAvatar>
              <Avatar src={image} />
            </ListItemAvatar>
            <ListItemText primary={name} secondary={price} />
          </ListItem>
          <Divider />
        </>
      ))}
      {!foods.length && (
        <Typography variant="h3" sx={{ justifySelf: "center", mt: 4 }}>
          نداریم!
        </Typography>
      )}
    </MList>
  );
}
