import Homemainprod from "../Homemainprod/Homemainprod";

function HomeShortcut1() {
  let prodData = [
    {
      name: "front load washing machine",
      tagname: "Front loads | Upto 60% off",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Jupiter24/PC_QC_1_1x._SY116_CB562149152_.jpg",
    },
    {
      name: "high fridges",
      tagname: "High Capicity fridges | Upto 60% off",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Jupiter24/PC_QC_2_1x._SY116_CB562149152_.jpg",
    },
    {
      name: "efficient ac's",
      tagname: "Energy Efficient AC's | Upto 60% off",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Jupiter24/PC_QC_3_1x._SY116_CB562149152_.jpg",
    },
    {
      name: "Autoclean chimneys",
      tagname: " Autoclean Chimneys | Up to 75% off",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Jupiter24/PC_QC_4_1x._SY116_CB562149152_.jpg",
    },
  ];

  let prodData2 = [
    {
      name: "Home improvement",
      tagname: "Home improvement",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/Jup24/GW/PC_QC_4_1x._SY116_CB562243010_.jpg",
    },
    {
      name: "Kitchen appliances",
      tagname: " Kitchen Appliances",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/Jup24/GW/PC_QC_1_1x._SY116_CB562243010_.jpg",
    },
    {
      name: "Home Decoration",
      tagname: " Home decor",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/Jup24/GW/PC_QC_2_1x._SY116_CB562243010_.jpg",
    },
    {
      name: "Furniture",
      tagname: "Furniture",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/Jup24/GW/PC_QC_3_1x._SY116_CB562243010_.jpg",
    },
  ];
  let prodData3 = [
    {
      name: " women Kurtas ",
      tagname: "Kurtas",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/Jupiter/BTF/PCQC/1x/New/Kurtas_372x232._SY116_CB562046867_.jpg",
    },
    {
      name: "Women Tops",
      tagname: "Tops",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/Jupiter/BTF/PCQC/1x/New/Tops_372x232._SY116_CB562046867_.jpg",
    },
    {
      name: "Women Dresses",
      tagname: "Dresses",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/Jupiter/BTF/PCQC/1x/New/Dresses_372x232._SY116_CB562046867_.jpg",
    },
    {
      name: "Sarees",
      tagname: "Sarees",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/Jupiter/BTF/PCQC/1x/New/Sarees_372x232._SY116_CB562046867_.jpg",
    },
  ];

  let prodData4 = [
    {
      name: "Furniture",
      tagname: "Min. 55% off | Furniture",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/PB/Jupiter24/PC_QC_Jup-24_186X116-28._SY116_CB562552179_.jpg",
    },
    {
      name: "Racks & Holders",
      tagname: "Min. 60% off | Racks & Holders",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/PB/Jupiter24/PC_QC_Jup-24_186X116-40._SY116_CB562552179_.jpg",
    },
    {
      name: "Toys & Games",
      tagname: "Toys & Games",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_Jup-24_186X116-20._SY116_CB562140524_.jpg",
    },
    {
      name: "Symbol Premium",
      tagname: "Symbol Premium",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/PB/Jupiter24/PC_QC_Jup-24_186x116_1-latest._SY116_CB562552179_.jpg",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row md:flex-row justify-between w-full  pb-4">
      <Homemainprod
        className="w-[20%] m-2"
        Data={prodData}
        title="Up to 75% off | Never before offers on appliances"
      />
      <Homemainprod
        className="w-[20%] m-2"
        Data={prodData2}
        title="Minimum 50% off | Home, kitchen & more"
      />
      <Homemainprod
        className="w-[20%] m-2"
        Data={prodData3}
        title="Starting ₹299 | Latest styles from top brands"
      />
      <Homemainprod
        className="w-[20%] m-2"
        Data={prodData4}
        title="Minimum 60% off | Deals on Amazon brands & more"
      />
    </div>
  );
}
export default HomeShortcut1;
