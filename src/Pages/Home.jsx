import { Box } from '@chakra-ui/react'
import React from 'react'
import CarouselCom from '../Components/Carousel'
import Footer from '../Components/Footer'
import HomeADCom from '../Components/HomeADCom'
import { Navbar } from '../Components/Navbar'


const homePageCarousel=[
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/1/70a3d1a4-f16a-45ca-9bb4-64dc2315352b1659297228544-Desktop-Banners_unisex-with-kids.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg",
  'https://assets.myntassets.com/f_webp,w_771,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg'
]


const Home = () => {
  return (
   <>
<Navbar/>
<CarouselCom data={homePageCarousel}/>
<HomeADCom endpoint={"/DayDeals"} column={8}  spacing={0} heading={"DEAL OF THE DAY"}  />
<HomeADCom endpoint={"/BestExclusiveBrand"} column={8}  spacingX={"1"} heading={"BEST OF MYNTRA EXCLUSIVE BRANDS"}  />
<HomeADCom endpoint={"/TopPicks"} column={7}  spacing={0} heading={"TOP PICKS"}  />
<HomeADCom endpoint={"/CatToBag"} column={8}  spacing={0} heading={"CATEGORIES TO BAG"}  />
<HomeADCom endpoint={"/DealsTopBrand"} column={8}  spacing={0} heading={"DEALS ON TOP BRANDS"}  />
<HomeADCom endpoint={"/SlashedPrice"} column={7}  spacing={0} heading={"BRANDS AT SLASHED PRICES"}  />
<HomeADCom endpoint={"/bestBuys"} column={8}  spacing={0} heading={"BEST BUYS"}  />
<HomeADCom endpoint={"/GiftCards"} column={4}  spacing={0} heading={"GIFTING CARDS"}  />
<HomeADCom endpoint={"/NewInTopBrand"} column={8}  spacing={0} heading={"NEW IN TOP BRANDS"}  />
<HomeADCom endpoint={"/LatestInBeautyGrooming"} column={4}  spacing={0} heading={"LATEST IN BEAUTY & GROOMING"}  />
<HomeADCom endpoint={"/ColoursOfTheSeasin"} column={4}  spacing={0} heading={"COLOURS OF THE SEASON"}  />
<HomeADCom endpoint={"/TopInfluencersStyles"} column={6}  spacing={0} heading={"TOP INFLUENCERS EXCLUSIVE STYLES"}  />
<Box mt={16}>

 <Footer/> </Box>
   </>
  )
}

export default Home