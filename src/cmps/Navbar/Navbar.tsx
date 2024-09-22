import { BottomNavigation, BottomNavigationAction } from "@mui/material";

interface NavbarProps {
    currPage: string;
    setCurrPage: React.Dispatch<React.SetStateAction<string>>;
  }

const Navbar:React.FC<NavbarProps> = ({currPage, setCurrPage}) => {

return (
<BottomNavigation
  showLabels
  value={currPage}
  onChange={(event, newValue) => {
    setCurrPage(newValue);
  }}
>
  <BottomNavigationAction label="מחשבון חיסכון" value='מחשבון חיסכון' />
  <BottomNavigationAction label="עמוד" value='עמוד' />
  <BottomNavigationAction label="עמוד" value='עמוד' />
</BottomNavigation>
)
}

export default Navbar