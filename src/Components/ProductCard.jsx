import { Box, Image, Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from "../styles/card.module.css";
import { Link as RouterLink } from "react-router-dom"

const ProductCard = ({ id, images, sizes, customer_rating, price, name, brand_name, category }) => {

    const [img, setImg] = useState(true);
    const [wish, setWish] = useState(false);
    const handleMouseHover = () => {
        setImg(true);
    }
    const handleMouseOut = () => {
        setImg(false);
    };



    return (
        <>
            <Box margin={"10px"} borderRadius={"4px"} className={styles.card} h="auto" w="210px"
                onMouseOver={() => setWish(true)} onMouseOut={() => setWish(false)}>

                <RouterLink to={`/single-products/${id}-${category}`}>
                    <Box>
                        <Image borderRadius={"4px"} onMouseOver={handleMouseHover} onMouseOut={handleMouseOut} src={img ? images[0] : images[1]} />
                    </Box>
                </RouterLink>

                <Box marginLeft="10px">
                    <Text fontWeight={500}>
                        {name.substring(0, 20)}...
                    </Text>
                </Box>

                {wish ? (
                    <Box padding={"16px 10px 16px 10px"} >
                        <Button fontWeight={700} borderRadius={"0px"} w="190px" colorScheme={"pink"} variant="outline">WISHLIST</Button>
                    </Box>

                ) : <Text marginLeft="10px" fontWeight={700} fontSize={"16px"}>Brand : {brand_name.substring(0, 15)}...</Text>}

                <Box display={"flex"} gap="10px" marginLeft="10px">
                    <Text fontSize={"14px"} color={"#282c3f"}>Sizes: {sizes[0]}</Text>
                    <Text fontSize={"14px"} color={"#282c3f"}>Rating: {customer_rating}</Text>
                </Box>

                <Box display={"flex"} gap="10px" marginLeft="10px">
                    <Text color={"#282c3f"} fontWeight={700}>Rs. {price.sp}</Text>
                    <Text padding={"3px"} fontSize={"12px"} color="gray" textDecoration={"line-through"}>Rs. {price.mrp}</Text>
                </Box>
            </Box>
        </>
    )
}

export default ProductCard