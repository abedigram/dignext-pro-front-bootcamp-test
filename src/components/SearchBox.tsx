import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper } from "@mui/material";

export default function SearchBox({
  onQuery,
}: {
  onQuery: (q: string) => void;
}) {
  return (
    <Paper
      component="form"
      variant="outlined"
      sx={{
        p: "2px 4px",
        m: "8px",
        mb: 0,
        display: "flex",
        alignItems: "center",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="جستجو"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={(e) => onQuery(e.target.value)}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
