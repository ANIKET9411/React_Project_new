async function getproductsearch(val) {
    const options = {
      method: "GET",
      url: "https://real-time-amazon-data.p.rapidapi.com/search",
      params: {
        query: `${val}`,
        page: "1",
        country: "US",
        sort_by: "RELEVANCE",
        product_condition: "ALL",
      },
      headers: {
        "x-rapidapi-key": "98967ffc46msh6f2c139c1bf2d36p1c0b1ajsn12f632c76608",
        "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setProducts(response.data.data.products);
      navigate("/allproduct");
    } catch (error) {
      console.error(error);
    }
  }
  export {}