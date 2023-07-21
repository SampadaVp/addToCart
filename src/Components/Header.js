import { Badge, Box, IconButton,Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Popper from "@mui/material/Popper";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";


const Header = ({ cartData,setCartData }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCartClick = (event) => {
    setIsCartOpen(!isCartOpen);
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Box >
      <Box
        sx={{
          display: "flex",
          padding: "1% 3% 1% 3%",
          background: "#317AE1",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{width:'90%'}}>
        <Typography fontSize="18px" sx={{ color: "white" }}>
          Course5I
        </Typography></Box>
        

        <Box 
          sx={{ display: "flex", justifyContent: "space-between", gap: "10px" ,width:"5%"}}
        >
          <Badge color="error" badgeContent={cartData.length}>
            <ShoppingCartIcon
              sx={{ color: "white", cursor: "pointer" }}
              onClick={handleCartClick}
            />  
             <Popper id={id} open={open} anchorEl={anchorEl}>
            <Box
              sx={{
                background: "#fff",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                height: "fit-content",
                width: "250px",
                
              }}
            >
              {cartData.length === 0 ? (
                <Typography variant="body1">Your cart is empty</Typography>
              ) : (
                cartData.map((item, index) => (
                  <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                    <Typography>{item.rname} - Rs.{item.price}</Typography>
                    <IconButton
                     
                      onClick={() => {
                        // Decrease quantity or remove item if quantity becomes zero
                        const updatedCartData = cartData.map((cartItem) =>
                          cartItem.id === item.id
                            ? {
                                ...cartItem,
                                quantity: cartItem.quantity - 1,
                              }
                            : cartItem
                        );
                        setCartData(
                          updatedCartData.filter((cartItem) => cartItem.quantity > 0)
                        );
                      }}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography sx={{ margin: "0 8px" }}>{item.quantity}</Typography>
                    <IconButton
                      
                      onClick={() => {
                        // Increase quantity
                        const updatedCartData = cartData.map((cartItem) =>
                          cartItem.id === item.id
                            ? {
                                ...cartItem,
                                quantity: cartItem.quantity + 1,
                              }
                            : cartItem
                        );
                        setCartData(updatedCartData);
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                ))
              )}
            </Box>
          </Popper>
          </Badge>
          
       

          <CircleNotificationsIcon sx={{ color: "white" }} />
        </Box>
        </Box>

        

      </Box>
    
  );
};

export default Header;

