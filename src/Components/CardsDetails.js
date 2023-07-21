import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { Cardsdata } from "./CardsData";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CardsDetails = ({ cartData, setCartData }) => {
  const handleClick = (cartItem) => {
    const existingItem = cartData.find((item) => item.id === cartItem.id);

    if (existingItem) {
      // If the item is already in the cart, increase its quantity
      const updatedCartData = cartData.map((item) =>
        item.id === cartItem.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartData(updatedCartData);
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCartData([...cartData, { ...cartItem, quantity: 1 }]);
    }
  };

  return (
    <Box sx={{ margin: "2%" }}>
      {Cardsdata.map((item, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            width: "23%",
            margin: "1%",
            height: "350px",
            padding: "10px",
            display: "inline-block",
          }}
        >
          <img
            src={item.imgdata}
            style={{ width: "100%", height: "65%", objectFit: "cover" }}
          />

          <Box>
            <Typography>{item.rname}</Typography>
          </Box>

          <Box>
            <Typography>Rs.{item.price}</Typography>
          </Box>

          <Box>
            <Typography>Rating {item.rating}</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {cartData.find((cartItem) => cartItem.id === item.id) ? (
              <>
                <IconButton
                  
                  onClick={() => {
                    // Decrease quantity or remove item if quantity becomes zero
                    const updatedCartData = cartData.map((cartItem) =>
                      cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                    );
                    setCartData(
                      updatedCartData.filter((cartItem) => cartItem.quantity > 0)
                    );
                  }}
                >
                  <RemoveIcon />
                </IconButton>
                <Typography>{item.quantity}</Typography>
                <IconButton
                  
                  onClick={() => {
                    // Increase quantity
                    const updatedCartData = cartData.map((cartItem) =>
                      cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                    );
                    setCartData(updatedCartData);
                  }}
                >
                  <AddIcon />
                </IconButton>
              </>
            ) : (
              <Button
                variant="contained"
                size="small"
                sx={{ fontSize: "13px", height: "30px",ml:"auto", }}
                onClick={() => handleClick(item)}
                
              >
                Add Cart
              </Button>
            )}
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default CardsDetails;
