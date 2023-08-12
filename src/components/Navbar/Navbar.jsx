import { styled, alpha } from '@mui/material/styles';

import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Box, Button, Toolbar, Typography, InputBase, Link, Stack } from "@mui/material";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '50ch',
      },
    },
  }));

const Navbar = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{ background: '#3c32a8' }}>
            <Toolbar>
                {/* APP's LOGO - Shopping cart icon with App's Name */}
                <ShoppingCartIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 400,
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    upGrad E-Shop
                </Typography>

                <Box sx={{ flexGrow: 1.5 }} />

                {/* Search Bar */}
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon /> <InputBase />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>

                <Box sx={{ flexGrow: 1 }} />

                {/* Navigation Links */} 
                <Link href="login" color="inherit" sx={{ mx: 2}}>Login</Link>
                <Link href="signup" color="inherit" sx={{ mx: 2 }}>Sign Up</Link>
                <Link href="" color="inherit" sx={{ mx: 2 }}>Home</Link>
                <Link href="addproducts" color="inherit" sx={{ mx: 2 }}>Add Product</Link>
                
                {/* LOGOUT button */}
                <Button variant="contained" color="secondary">LOGOUT</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
  };
  
  export default Navbar;