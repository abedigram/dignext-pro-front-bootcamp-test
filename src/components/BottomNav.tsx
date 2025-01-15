import HomeIcon from "@mui/icons-material/Home";
import Person3Icon from "@mui/icons-material/Person3";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useLocation, useNavigate } from "react-router";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Paper
      sx={{
        width: "100%",
      }}
      square
      variant="outlined"
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={location.pathname}
        onChange={(_, newValue) => {
          navigate(newValue);
        }}
      >
        <BottomNavigationAction label="فروشگاه" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="سبد خرید"
          value="/cart"
          icon={<ShoppingBasketIcon />}
        />
        <BottomNavigationAction
          label="پروفایل"
          value="/profile"
          icon={<Person3Icon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export { BottomNav };
