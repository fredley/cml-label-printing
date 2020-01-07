const TRANSFORMS = {
  UPPER: t => t.toUpperCase(),
  ALLERGY: t => {return t ? `Contains: ${t.toUpperCase()}` : t},
  MIN_DRAINED: t => {return t ? `Min Drained<br>Wt. ${t}` : t},
  MIN_WT: t => {return t ? `Min Wt.<br>${t}` : t},
}

const LOGO_DIMENSIONS = {
  width: 350,
  height: 145
}

const LOGO_RATIO = LOGO_DIMENSIONS.height / LOGO_DIMENSIONS.width

const labels = {
  l_65: {
    name: "65s",
    width: 38,
    height: 21,
    origin_x: 6,
    origin_y: 11,
    margin_x: 2,
    columns: 5,
    rows: 13,
    logo: {
      y: 1,
      width: 18,
      fixed: true
    },
    fields: [
      {
        name: "title",
        label: "Title",
        type: "input",
        placeholder: "Three Fruit Marmalade",
        font_size: 10,
        multiline: true,
        y: 9
      },
      {
        name: "address",
        label: "Name / Postcode",
        type: "input",
        placeholder: "A.N.Other\nTQ11 0AU",
        multiline: true,
        font_size: 8,
        x: 1.5,
        align: "left",
        y: 14
      },
      {
        name: "price",
        label: "Price",
        type: "input",
        placeholder: "£3.50",
        font_size: 11,
        font_color: "red",
        font_weight: "bold",
        align: "right",
        x: 2,
        y: 14,
      }
    ]
  },
  // l_28: {
  //   name: "28s",
  //   width: 64,
  //   height: 34,
  //   origin_x: 7,
  //   origin_y: 15,
  //   margin_x: 2,
  //   columns: 4,
  //   rows: 7,
  //   logo: {
  //     y: 1,
  //     width: 28,
  //     fixed: true
  //   },
  //   fields: [
  //     {
  //       name: "title",
  //       label: "Title",
  //       type: "input",
  //       placeholder: "Apricot Teabread",
  //       multiline: true,
  //       font_size: 14,
  //       y: 14
  //     },
  //     {
  //       name: "description",
  //       label: "Description",
  //       type: "input",
  //       placeholder: "No added fat",
  //       font_size: 8,
  //       y: 19
  //     },
  //     {
  //       name: "lot",
  //       label: "Lot Number",
  //       type: "input",
  //       placeholder: "L18475",
  //       font_size: 8,
  //       font_color: "green",
  //       font_weight: "bold",
  //       align: "left",
  //       x: 2,
  //       y: 4,
  //     },
  //     {
  //       name: "allergens",
  //       label: "Contains (allergens):",
  //       type: "input",
  //       placeholder: "wheat, eggs, sulphites",
  //       font_size: 8,
  //       y: 23,
  //       transform: "ALLERGY"
  //     },
  //     {
  //       name: "market_name",
  //       label: "Market name",
  //       type: "input",
  //       placeholder: "Kingsbury",
  //       multiline: true,
  //       font_size: 8,
  //       align: "left",
  //       x: 2,
  //       y: 8,
  //     },
  //     {
  //       name: "address",
  //       label: "Name / Postcode",
  //       type: "input",
  //       placeholder: "A.N. Other\nTQ11 0AU",
  //       multiline: true,
  //       font_size: 8,
  //       x: 2,
  //       align: "left",
  //       y: 27
  //     },
  //     {
  //       name: "price",
  //       label: "Price",
  //       type: "input",
  //       placeholder: "£3.50",
  //       font_size: 12,
  //       font_color: "red",
  //       y: 28,
  //       x: 2,
  //       align: "right"
  //     },
  //     {
  //       name: "url",
  //       type: "fixed",
  //       value: "www.country-markets.co.uk",
  //       font_size: 6,
  //       font_color: "green",
  //       y: 30
  //     }
  //   ]
  // },
  l_24: {
    name: "24s",
    width: 64,
    height: 34,
    origin_x: 7,
    origin_y: 15,
    margin_x: 2,
    columns: 3,
    rows: 8,
    logo: {
      x: 18,
      y: 1,
      width: 28,
      height: 10,
      fixed: true
    },
    fields: [
      {
        name: "title",
        label: "Title",
        type: "input",
        placeholder: "Apricot Teabread",
        multiline: true,
        font_size: 14,
        y: 14
      },
      {
        name: "description",
        label: "Description",
        type: "input",
        placeholder: "No added fat",
        font_size: 8,
        y: 19
      },
      {
        name: "lot",
        label: "Lot Number",
        type: "input",
        placeholder: "L18475",
        font_size: 8,
        font_color: "green",
        font_weight: "bold",
        align: "left",
        x: 2,
        y: 4,
      },
      {
        name: "allergens",
        label: "Contains (allergens):",
        type: "input",
        placeholder: "wheat, eggs, sulphites",
        font_size: 8,
        y: 23,
        transform: "ALLERGY"
      },
      {
        name: "market_name",
        label: "Market name",
        type: "input",
        placeholder: "Kingsbury",
        multiline: true,
        font_size: 8,
        align: "left",
        x: 2,
        y: 8,
      },
      {
        name: "address",
        label: "Name / Postcode",
        type: "input",
        placeholder: "A.N. Other\nTQ11 0AU",
        multiline: true,
        font_size: 8,
        x: 2,
        align: "left",
        y: 27
      },
      {
        name: "price",
        label: "Price",
        type: "input",
        placeholder: "£3.50",
        font_size: 12,
        font_color: "red",
        y: 28,
        x: 2,
        align: "right"
      },
      {
        name: "url",
        type: "fixed",
        value: "www.country-markets.co.uk",
        font_size: 6,
        font_color: "green",
        y: 30
      }
    ]
  },
  l_21: {
    name: "21s",
    width: 63.6,
    height: 38.1,
    origin_x: 7,
    origin_y: 14.5,
    margin_x: 2,
    columns: 3,
    rows: 7,
    logo: {
      y: 1,
      width: 28,
      fixed: true
    },
    fields: [
      {
        name: "title",
        label: "Title",
        type: "input",
        placeholder: "Victoria Sandwich",
        multiline: true,
        font_size: 14,
        y: 13
      },
      {
        name: "description",
        label: "Description",
        type: "input",
        placeholder: "Strawberry jam filling",
        font_size: 8,
        y: 19
      },
      {
        name: "allergens",
        label: "Contains (allergens):",
        type: "input",
        placeholder: "",
        font_size: 8,
        y: 23,
        transform: "ALLERGY"
      },
      {
        name: "lot",
        label: "Lot Number",
        type: "input",
        placeholder: "L18475",
        font_size: 8,
        font_color: "green",
        font_weight: "bold",
        align: "left",
        x: 2,
        y: 5,
      },
      {
        name: "market_name",
        label: "Market name",
        type: "input",
        placeholder: "Kingsbury",
        multiline: true,
        font_size: 8,
        align: "left",
        x: 2,
        y: 27,
      },
      {
        name: "address",
        label: "Name / Postcode",
        type: "input",
        placeholder: "A.N. Other\nTQ11 0AU",
        multiline: true,
        font_size: 8,
        x: 2,
        align: "left",
        y: 31
      },
      {
        name: "price",
        label: "Price",
        type: "input",
        placeholder: "£3.50",
        font_size: 12,
        font_color: "red",
        y: 32,
        x: 2,
        align: "right"
      },
      {
        name: "url",
        type: "fixed",
        value: "www.country-markets.co.uk",
        font_size: 6,
        font_color: "green",
        y: 34
      }
    ]
  },
  l_18: {
    name: "18s",
    width: 63,
    height: 47,
    origin_x: 8,
    origin_y: 9,
    margin_x: 2,
    columns: 3,
    rows: 6,
    logo: {
      y: 1,
      width: 28,
      fixed: true
    },
    fields: [
      {
        name: "title",
        label: "Title",
        type: "input",
        placeholder: "Victoria Sandwich",
        multiline: true,
        font_size: 14,
        y: 16
      },
      {
        name: "description",
        label: "Description",
        type: "input",
        placeholder: "Strawberry jam filling",
        font_size: 8,
        y: 22.5
      },
      {
        name: "allergens",
        label: "Contains (allergens)",
        type: "input",
        placeholder: "WHEAT, EGGS",
        multiline: true,
        font_size: 8,
        y: 27,
        transform: "ALLERGY"
      },
      {
        name: "lot",
        label: "Lot Number",
        type: "input",
        placeholder: "L18475",
        font_size: 8,
        font_color: "green",
        font_weight: "bold",
        align: "left",
        x: 2,
        y: 5,
      },
      {
        name: "market_name",
        label: "Market name",
        type: "input",
        placeholder: "Kingsbury",
        multiline: true,
        font_size: 8,
        align: "left",
        x: 2,
        y: 35,
      },
      {
        name: "address",
        label: "Name / Postcode",
        type: "input",
        placeholder: "A.N. Other\nTQ11 0AU",
        multiline: true,
        font_size: 8,
        x: 2,
        align: "left",
        y: 38
      },
      {
        name: "price",
        label: "Price",
        type: "input",
        placeholder: "£3.50",
        font_size: 12,
        font_color: "red",
        y: 40,
        x: 2,
        align: "right"
      },
      {
        name: "url",
        type: "fixed",
        value: "www.country-markets.co.uk",
        font_size: 6,
        font_color: "green",
        y: 42
      }
    ]
  },
  l_14: {
    name: "14s",
    width: 99,
    height: 38.1,
    origin_x: 5,
    origin_y: 15,
    margin_x: 2,
    columns: 2,
    rows: 7,
    logo: {
      y: 1,
      width: 28,
      fixed: true
    },
    fields: [
      {
        name: "title",
        label: "Title",
        type: "input",
        multiline: true,
        placeholder: "THREE FRUIT\nMARMALADE",
        font_size: 12,
        font_weight: "bold",
        y: 13
      },
      {
        name: "description",
        label: "Contents - must include allergens in ALL CAPS.",
        type: "input",
        multiline: true,
        placeholder: "Contains: Sugar, Oranges (17%),\nGrapefruit (13%), Lemons (12%)",
        font_size: 10,
        y: 22
      },
      {
        name: "lot",
        label: "Lot Number",
        type: "input",
        placeholder: "L18475",
        font_size: 8,
        font_color: "green",
        font_weight: "bold",
        align: "left",
        x: 2,
        y: 5,
      },
      {
        name: "best_before",
        label: "Best Before / Use By",
        type: "input",
        placeholder: "Best Before:\n24 Mar 2020",
        multiline: true,
        font_size: 8,
        align: "left",
        x: 2,
        y: 8,
      },
      {
        name: "market_name",
        label: "Market name",
        type: "input",
        placeholder: "Kingsbury",
        multiline: true,
        font_size: 8,
        align: "left",
        x: 2,
        y: 27,
      },
      {
        name: "address",
        label: "Name / Postcode",
        type: "input",
        placeholder: "A.N. Other\nTQ11 0AU",
        multiline: true,
        font_size: 8,
        x: 2,
        align: "left",
        y: 30
      },
      {
        name: "weight",
        label: "Weight",
        type: "input",
        placeholder: "340g",
        font_size: 12,
        y: 13,
        x: 2,
        align: "right",
        transform: "MIN_WT",
      },
      {
        name: "price",
        label: "Price",
        type: "input",
        placeholder: "£3.50",
        font_size: 12,
        font_color: "red",
        font_weight: "bold",
        y: 32,
        x: 2,
        align: "right"
      },
      {
        name: "url",
        type: "fixed",
        value: "www.country-markets.co.uk",
        font_size: 8,
        font_color: "green",
        font_weight: "bold",
        y: 33.5
      }
    ]
  },
  l_10: {
    name: "10s",
    width: 100,
    height: 57.5,
    origin_x: 5,
    origin_y: 5.5,
    margin_x: 2,
    columns: 2,
    rows: 5,
    logo: {
      y: 1,
      width: 38,
      fixed: true
    },
    fields: [
      {
        name: "title",
        label: "Title",
        type: "input",
        multiline: true,
        placeholder: "THREE FRUIT\nMARMALADE",
        font_size: 12,
        font_weight: "bold",
        y: 17
      },
      {
        name: "description",
        label: "Contents - must include allergens in ALL CAPS.",
        type: "input",
        multiline: true,
        placeholder: "Contains: Sugar, Oranges (17%),\nGrapefruit (13%), Lemons (12%)",
        font_size: 10,
        y: 26
      },
      {
        name: "lot",
        label: "Lot Number",
        type: "input",
        placeholder: "L18475",
        font_size: 8,
        font_color: "green",
        font_weight: "bold",
        align: "left",
        x: 2,
        y: 5,
      },
      {
        name: "best_before",
        label: "Best Before / Use By",
        type: "input",
        placeholder: "Best Before:\n24 Mar 2020",
        multiline: true,
        font_size: 8,
        align: "left",
        x: 2,
        y: 9,
      },
      {
        name: "market_name",
        label: "Market name",
        type: "input",
        placeholder: "Kingsbury",
        multiline: true,
        font_size: 8,
        align: "left",
        x: 2,
        y: 45,
      },
      {
        name: "address",
        label: "Name / Postcode",
        type: "input",
        placeholder: "A.N. Other\nTQ11 0AU",
        multiline: true,
        font_size: 8,
        x: 2,
        align: "left",
        y: 49
      },
      {
        name: "weight",
        label: "Weight",
        type: "input",
        placeholder: "340g",
        font_size: 12,
        y: 12,
        x: 2,
        align: "right",
        transform: "MIN_WT",
      },
      {
        name: "price",
        label: "Price",
        type: "input",
        placeholder: "£3.50",
        font_size: 13,
        font_color: "red",
        font_weight: "bold",
        y: 50,
        x: 3,
        align: "right"
      },
      {
        name: "url",
        type: "fixed",
        value: "www.country-markets.co.uk",
        font_size: 8,
        font_color: "green",
        font_weight: "bold",
        y: 53
      }
    ]
  },
  circular: {
    name: "Circular",
    circular: true,
    width: 35,
    height: 35,
    origin_x: 11,
    origin_y: 11,
    margin_x: 3.5,
    margin_y: 5.5,
    columns: 5,
    rows: 7,
    logo: {
      y: 9,
      width: 25,
      fixed: true
    },
    fields: [
      {
        name: "market_name",
        label: "Market name",
        type: "input",
        placeholder: "KINGSBURY",
        multiline: true,
        font_size: 8,
        font_color: "green",
        font_family: "serif",
        font_weight: "bold",
        y: 5,
        transform: "UPPER"
      },
      {
        name: "title",
        label: "Title",
        type: "input",
        placeholder: "Three Fruit\nMarmalade",
        multiline: true,
        font_size: 10,
        multiline: true,
        y: 20
      },
      {
        name: "price",
        label: "Price",
        type: "input",
        placeholder: "£3.50",
        font_size: 11,
        font_color: "red",
        font_weight: "bold",
        y: 28,
      }
    ]
  }
}