import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import About from "./about";

export default function AddProduct(id) {
  const URL = "http://localhost:8080/products";
  const newProduct = {
    id: "",
    image: "",
    title: "",
    subtitle: "",
    price: "",
    discount: "",
    description: "",
    descriptionn: "",
    code: "",
    hashtag: "",
    technology: "",
    rating: "",
  };

  const [isUpdate, setIsUpdate] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(newProduct);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllData();
    if (id) {
      setIsUpdate(true);
      const filteredProduct = products.filter(
        (product) => product.id === id
      )[0];

      if (filteredProduct) {
        setCurrentProduct({
          ...currentProduct,
          id: filteredProduct.id,
          title: filteredProduct.title,
          price: filteredProduct.price,
          image: filteredProduct.image,
          discount: filteredProduct.discount,
          descriptionn: filteredProduct.descriptionn,
          code: filteredProduct.code,
          hashtag: filteredProduct.hashtag,
          description: filteredProduct.description,
          rating: filteredProduct.rating,
          subtitle: filteredProduct.subtitle,
          technology: filteredProduct.technology,
        });
      }
    }
  }, []);
  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setProducts(FETCHED_JSON.data);
  }
  async function handleFormSubmit(e) {
    e.preventDefault();

    if (!isUpdate) {
      const postData = {
        image: e.target.image.value,
        title: e.target.title.value,
        subtitle: e.target.subtitle.value,
        price: e.target.price.value,
        discount: e.target.discount.value,
        description: e.target.description.value,
        descriptionn: e.target.descriptionn.value,
        code: e.target.description.value,
        hashtag: e.target.hashtag.value,
        technology: e.target.technology.value,
        rating: e.target.rating.value,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      };

      const FETCHED_DATA = await fetch(URL, options);
      const FETCHED_JSON = await FETCHED_DATA.json();
      setProducts(FETCHED_JSON.data);
    } else {
      const putData = {
        id: currentProduct.id,
        image: currentProduct.image,
        title: currentProduct.title,
        subtitle: currentProduct.subtitle,
        price: currentProduct.price,
        discount: currentProduct.discount,
        description: currentProduct.description,
        descriptionn: currentProduct.descriptionn,
        code: currentProduct.code,
        hashtag: currentProduct.hashtag,
        technology: currentProduct.technology,
        rating: currentProduct.rating,
      };

      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(putData),
      };

      const FETCHED_DATA = await fetch(URL, options);
      const FETCHED_JSON = await FETCHED_DATA.json();
      setProducts(FETCHED_JSON.data);
      setIsUpdate(false);
      setCurrentProduct(newProduct);
    }
  }

  function handleTitle(e) {
    setCurrentProduct({
      ...currentProduct,
      title: e.target.value,
    });
  }

  function handlePrice(e) {
    setCurrentProduct({
      ...currentProduct,
      price: e.target.value,
    });
  }

  function handleImage(e) {
    setCurrentProduct({
      ...currentProduct,
      image: e.target.value,
    });
  }

  function handleSubtitle(e) {
    setCurrentProduct({
      ...currentProduct,
      subtitle: e.target.value,
    });
  }

  function handleDiscount(e) {
    setCurrentProduct({
      ...currentProduct,
      discount: e.target.value,
    });
  }

  function handleCode(e) {
    setCurrentProduct({
      ...currentProduct,
      code: e.target.value,
    });
  }

  function handleDescription(e) {
    setCurrentProduct({
      ...currentProduct,
      description: e.target.value,
    });
  }

  function handleDescriptionn(e) {
    setCurrentProduct({
      ...currentProduct,
      descriptionn: e.target.value,
    });
  }
  function handleHashtag(e) {
    setCurrentProduct({
      ...currentProduct,
      hashtag: e.target.value,
    });
  }
  function handleTechnology(e) {
    setCurrentProduct({
      ...currentProduct,
      technology: e.target.value,
    });
  }
  function handleRating(e) {
    setCurrentProduct({
      ...currentProduct,
      rating: e.target.value,
    });
  }
  function handleReset() {
    console.log("Reset button clicked");
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 5,
          marginBottom: "15px",
          marginTop: "35px",
        }}
      >
        <Typography color="gray" sx={{ pt: 2, fontSize: 28 }}>
          Add Users
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 3,
            }}
          >
            <FormControl>
              <FormLabel sx={{ fontSize: "18px", pt: "50px" }}>Image</FormLabel>
              <TextField
                sx={{
                  marginTop: "-30px",
                  marginLeft: "300px",
                  maxWidth: "350px",
                }}
                id="outlined-basic"
                label="Image"
                variant="outlined"
                name="image"
                value={currentProduct.image}
                onChange={handleImage}
              />
            </FormControl>

            <FormLabel sx={{ fontSize: "18px" }}>
              Title
              <TextField
                sx={{
                  marginTop: "-10px",
                  marginLeft: "266px",
                  minWidth: "550px",
                }}
                id="outlined-start-adornment"
                name="lastname"
                value={currentProduct.title}
                onChange={handleTitle}
              />
            </FormLabel>
            <FormLabel sx={{ fontSize: "18px" }}>
              Subtitle
              <TextField
                sx={{
                  marginTop: "-10px",
                  marginLeft: "239px",
                  minWidth: "550px",
                }}
                id="outlined-start-adornment"
                name="phonenumber"
                value={currentProduct.subtitle}
                onChange={handleSubtitle}
              />
            </FormLabel>

            <FormLabel sx={{ fontSize: "18px" }}>
              Price
              <TextField
                sx={{
                  marginTop: "-10px",
                  marginLeft: "258px",
                  minWidth: "550px",
                }}
                id="outlined-start-adornment"
                name="phonenumber"
                value={currentProduct.price}
                onChange={handlePrice}
              />
            </FormLabel>
            <FormLabel sx={{ fontSize: "18px" }}>
              Discount
              <TextField
                sx={{
                  marginTop: "-10px",
                  marginLeft: "230px",
                  minWidth: "550px",
                }}
                id="outlined-start-adornment"
                name="phonenumber"
                value={currentProduct.discount}
                onChange={handleDiscount}
              />
            </FormLabel>
            <FormLabel sx={{ fontSize: "18px" }}>
              Description 1
              <TextField
                sx={{
                  marginTop: "-10px",
                  marginLeft: "194px",
                  minWidth: "550px",
                }}
                id="outlined-start-adornment"
                name="phonenumber"
                value={currentProduct.description}
                onChange={handleDescription}
              />
            </FormLabel>
            <FormLabel sx={{ fontSize: "18px" }}>
              Description 2
              <TextField
                sx={{
                  marginTop: "-10px",
                  marginLeft: "194px",
                  minWidth: "550px",
                }}
                id="outlined-start-adornment"
                name="phonenumber"
                value={currentProduct.descriptionn}
                onChange={handleDescriptionn}
              />
            </FormLabel>
            <FormLabel sx={{ fontSize: "18px" }}>
              Code
              <TextField
                sx={{
                  marginTop: "-10px",
                  marginLeft: "258px",
                  minWidth: "550px",
                }}
                id="outlined-start-adornment"
                name="phonenumber"
                value={currentProduct.code}
                onChange={handleCode}
              />
            </FormLabel>
            <FormLabel sx={{ fontSize: "18px" }}>
              Hashtag
              <TextField
                sx={{
                  marginTop: "-10px",
                  marginLeft: "234px",
                  minWidth: "550px",
                }}
                id="outlined-start-adornment"
                name="phonenumber"
                value={currentProduct.hashtag}
                onChange={handleHashtag}
              />
            </FormLabel>
            <FormLabel sx={{ fontSize: "18px" }}>
              Technology
              <TextField
                sx={{
                  marginTop: "-10px",
                  marginLeft: "209px",
                  minWidth: "550px",
                }}
                id="outlined-start-adornment"
                name="phonenumber"
                value={currentProduct.technology}
                onChange={handleTechnology}
              />
            </FormLabel>
            <FormLabel sx={{ fontSize: "18px" }}>
              Rating
              <TextField
                sx={{
                  marginTop: "-10px",
                  marginLeft: "249px",
                  minWidth: "550px",
                }}
                id="outlined-start-adornment"
                name="phonenumber"
                value={currentProduct.rating}
                onChange={handleRating}
              />
            </FormLabel>

            <FormControl
              sx={{ display: "flex", flexDirection: "row", gap: 2, pb: 3 }}
            >
              <Button
                variant="contained"
                sx={{ width: 80, backgroundColor: "#1de9b6" }}
                type="submit"
              >
                Save
              </Button>
              <Button
                variant="contained"
                sx={{ width: 80, color: "#000" }}
                onClick={() => handleReset()}
              >
                Back
              </Button>
            </FormControl>
          </Box>
        </form>
      </div>
      <About />
    </div>
  );
}
