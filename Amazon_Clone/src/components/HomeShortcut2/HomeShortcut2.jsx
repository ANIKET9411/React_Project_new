import Homemainprod from "../Homemainprod/Homemainprod";

function HomeShortcut2() {
  let prodData = [
    {
      name: "Kitchen",
      tagname: "Kitchen",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/Local/Jupiter24/Qc/Updated/kitchen_-1x._SY116_CB562400670_.jpg",
    },
    {
      name: "Furniture",
      tagname: "Furniture",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/Local/Jupiter24/Qc/Updated/furniture-1x._SY116_CB562400670_.jpg",
    },
    {
      name: "Two Wheelers",
      tagname: "Two Wheelers",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/Local/Jupiter24/Qc/Updated/bike-1x._SY116_CB562400670_.jpg",
    },
    {
      name: "Large Appliances",
      tagname: "Large Appliances",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/Local/Jupiter24/Qc/Updated/LA-1x._SY116_CB562400670_.jpg",
    },
  ];

  let prodData2 = [
    {
      name: "Home Decor",
      tagname: "Upto 50% off | Home Decor",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Gateway/Desktop_QC_1_NAM_revised_1x_Decor._SY116_CB562451660_.jpg",
    },
    {
      name: "Fashion Assesories",
      tagname: "Upto 75% off | Fashion Assesories",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Gateway/Desktop_QC_1_NAM_revised_1x_Fashion_Accessories._SY116_CB562451660_.jpg",
    },
    {
      name: "Furniture",
      tagname: "Upto 60% off | Futniture",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Gateway/Desktop_QC_1_NAM_revised_1x_Furniture._SY116_CB562451660_.jpg",
    },
    {
      name: "Electronic Assesories",
      tagname: "Upto 70% off | Electronic Assesories",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Gateway/Desktop_QC_1_NAM_revised_1x_Electronics._SY116_CB562451660_.jpg",
    },
  ];
  let prodData3 = [
    {
      name: "Sports & Fitness",
      tagname: "Sports & Fitness",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/Jup24/GW/PC_QC_5_1x._SY116_CB562243010_.jpg",
    },
    {
      name: "Automative Camera",
      tagname: "Automative",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/Jup24/GW/PC_QC_6_1x._SY116_CB562243010_.jpg",
    },
    {
      name: "Electronic Tools",
      tagname: "Tools",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/Jup24/GW/PC_QC_8_1x._SY116_CB562243010_.jpg",
    },
    {
      name: "Garden & Outdoor",
      tagname: "Garden & Outdoor",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/Jup24/GW/PC_QC_7_1x._SY116_CB562243010_.jpg",
    },
  ];

  let prodData4 = [
    {
      name: "Ethnic wears",
      tagname: "Upto 70% off | Ethnic wears",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Gateway/Desktop_QC_2_NAM_revised_1x_Ethnic_wears._SY116_CB562451660_.jpg",
    },
    {
      name: "Lights & Lamps",
      tagname: "Upto 50% off | Lights & Lamps",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Gateway/Desktop_QC_2_NAM_revised_1x_lights_Lamps._SY116_CB562451660_.jpg",
    },
    {
      name: "Furnishings",
      tagname: "Upto 67% off | Furnishings",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Gateway/Desktop_QC_2_NAM_revised_1x_Furnishings._SY116_CB562451660_.jpg",
    },
    {
      name: "Pooja Essentials",
      tagname: "Upto 60% off |  Pooja Essentials",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Gateway/Desktop_QC_2_NAM_revised_1x_Pooja_Essentials._SY116_CB562451660_.jpg",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row md:flex-row justify-between w-full  pb-4">
      <Homemainprod
        className="w-[20%] m-2"
        Data={prodData}
        title="Up to 70% off | Appliances & more from stores near you"
      />
      <Homemainprod
        className="w-[20%] m-2"
        Data={prodData2}
        title="Style & innovation from Small Businesses"
      />
      <Homemainprod
        className="w-[20%] m-2"
        Data={prodData3}
        title="Minimum 50% off | Sports, outdoor & more"
      />
      <Homemainprod
        className="w-[20%] m-2"
        Data={prodData4}
        title="Festive essentials from Small Businesses"
      />
    </div>
  );
}
export default HomeShortcut2;
