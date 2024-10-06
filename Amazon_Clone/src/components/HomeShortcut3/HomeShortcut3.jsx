import Homemainprod from "../Homemainprod/Homemainprod";

function HomeShortcut3() {
  let prodData = [
    {
      name: "T-Shirts",
      tagname: "T-Shirts",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/Jupiter/BTF/PCQC/1x/New/T-shirts__shirts_copy_1_372x232._SY116_CB562046867_.jpg",
    },
    {
      name: "Festive wear",
      tagname: "Festive wear",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/Jupiter/BTF/PCQC/1x/New/Ethnic_372x232._SY116_CB562046867_.jpg",
    },
    {
      name: "Casual Shirts",
      tagname: " Casual Shirts",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/Jupiter/BTF/PCQC/1x/New/Workwear_372x232._SY116_CB562046867_.jpg",
    },
    {
      name: "Classic Jeans",
      tagname: "Classic Jeans",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/Jupiter/BTF/PCQC/1x/New/Jeans_372x232._SY116_CB562046867_.jpg",
    },
  ];

  let prodData2 = [
    {
      name: "Lamps & lights",
      tagname: "Up to 55% off | Lamps & lights",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Lamps_1.1._SY116_CB562332080_.jpg",
    },
    {
      name: "Furnishings",
      tagname: "Upto 75% off | Furnishings",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Furniture_1.2._SY116_CB562332080_.jpg",
    },
    {
      name: "Electronics",
      tagname: "Upto 60% off | Electronics",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Electronics_1.3._SY116_CB562332080_.jpg",
    },
    {
      name: "Home Decor",
      tagname: "Upto 65% off | Home Decor",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Home_1.4._SY116_CB562332080_.jpg",
    },
  ];
  let prodData3 = [
    {
      name: "Samsung Smartphones",
      tagname: "Upto 65% off |  Samsung Smartphones",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Samsung/Jupiter_24/ASCENT/Phase1/D158985883_PC_QC_186x116._SY116_CB564969386_.jpg",
    },
    {
      name: "Intel Powered Laptops",
      tagname: "Upto 40% off | Intel Powered Laptops",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/PC_Laptops/Jupiter24_IntelAscent/Intel_PC_QC_186x116._SY116_CB564958835_.jpg",
    },
    {
      name: "Oneplus SmartPhones",
      tagname: "Savings Upto Rs.20,000 | Oneplus SmartPhones",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/tsahtany/Jup24/ASCENT/D161471605_WLD_Jup24_OnePlus-Family_PC_QC186x116._SY116_CB562236856_.jpg",
    },
    {
      name: "Garden & Outdoor",
      tagname: "Starting Upto Rs.6840 | LG Appliances",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irshad/Jupiter24/LG_PC_QC_1X._SY116_CB563918039_.jpg",
    },
  ];

  let prodData4 = [
    {
      name: "Cots & Cribs",
      tagname: "Cots & Cribs",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/Appu/Baby/Jupiter24/SBC/Cots186._SY116_CB562302097_.jpg",
    },
    {
      name: "Blankets & Swaddles",
      tagname: "Blankets & Swaddles",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/Appu/Baby/Jupiter24/SBC/Blankets186._SY116_CB562302097_.jpg",
    },
    {
      name: " Soft Toys",
      tagname: "Soft Toys",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/Appu/Baby/Jupiter24/SBC/186Softoys._SY116_CB562302097_.jpg",
    },
    {
      name: "Baby Bedding sets",
      tagname: "Baby Bedding sets",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/Appu/Baby/Jupiter24/SBC/Bedding186._SY116_CB562302097_.jpg",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row md:flex-row sm:flex-row justify-between w-full flex-wrap  pb-4">
      <Homemainprod
        className="w-[20%] m-2 "
        Data={prodData}
        title="Starting ₹299 | Bestselling styles from top brands"
      />
      <Homemainprod
        className="w-[20%] m-2"
        Data={prodData2}
        title="Collections from Emerging Businesses"
      />
      <Homemainprod
        className="w-[20%] m-2"
        Data={prodData3}
        title="Great Indian Festival | Brands in focus"
      />
      <Homemainprod
        className="w-[20%] m-2"
        Data={prodData4}
        title="Up to 70% off | Baby sleep essentials"
      />
    </div>
  );
}
export default HomeShortcut3;
