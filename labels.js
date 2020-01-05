const TRANSFORMS = {
  UPPER: t => t.toUpperCase(),
  ALLERGY: t => {return t ? `Contains: ${t.toUpperCase()}` : t},
  MIN_DRAINED: t => {return t ? `Min Drained<br>Wt. ${t}` : t},
  MIN_WT: t => {return t ? `Min Wt.<br>${t}` : t},
}

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
      x: 9.5,
      y: 4.5,
      width: 18,
      height: 7,
      fixed: true
    },
    fields: [
      {
        name: "market_name",
        label: "Market name",
        type: "input",
        placeholder: "KINGSBURY",
        font_size: 8,
        font_color: "green",
        font_family: "serif",
        font_weight: "bold",
        y: 1,
        transform: "UPPER"
      },
      {
        name: "title",
        label: "Title",
        type: "input",
        placeholder: "Three Fruit Marmalade",
        font_size: 10,
        multiline: true,
        y: 12
      },
      {
        name: "price",
        label: "Price",
        type: "input",
        placeholder: "£3.50",
        font_size: 11,
        font_color: "red",
        font_weight: "bold",
        y: 16,
      }
    ]
  },
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
      x: 21,
      y: 5,
      width: 21,
      height: 8,
      fixed: true
    },
    fields: [
      {
        name: "market_name",
        label: "Market name",
        type: "input",
        placeholder: "KINGSBURY",
        font_size: 8,
        font_color: "green",
        font_family: "serif",
        font_weight: "bold",
        y: 1,
        transform: "UPPER"
      },
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
        name: "allergens",
        label: "Allergens",
        type: "input",
        placeholder: "wheat, eggs, sulphites",
        font_size: 8,
        y: 23,
        transform: "ALLERGY"
      },
      {
        name: "name",
        label: "Name",
        type: "input",
        placeholder: "Amanda Morris",
        font_size: 8,
        x: 2,
        align: "left",
        y: 27
      },
      {
        name: "address",
        label: "Address / Postcode",
        type: "input",
        placeholder: "3, TQ11 0AU",
        font_size: 8,
        x: 2,
        align: "right",
        y: 27
      },
      {
        name: "price",
        label: "Price",
        type: "input",
        placeholder: "£3.50",
        font_size: 12,
        font_color: "red",
        y: 2,
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
      x: 21,
      y: 5,
      width: 21,
      height: 7,
      fixed: true
    },
    fields: [
      {
        name: "market_name",
        label: "Market name",
        type: "input",
        placeholder: "KINGSBURY",
        font_size: 8,
        font_color: "green",
        font_family: "serif",
        font_weight: "bold",
        y: 1,
        transform: "UPPER"
      },
      {
        name: "title",
        label: "Title",
        type: "input",
        placeholder: "Victoria Sandwich",
        multiline: true,
        font_size: 14,
        y: 14
      },
      {
        name: "description",
        label: "Description",
        type: "input",
        placeholder: "Strawberry jam filling",
        font_size: 8,
        y: 18
      },
      {
        name: "allergens",
        label: "Allergens",
        type: "input",
        placeholder: "",
        font_size: 8,
        y: 22,
        transform: "ALLERGY"
      },
      {
        name: "name",
        label: "Name",
        type: "input",
        placeholder: "Amanda Morris",
        font_size: 8,
        x: 2,
        align: "left",
        y: 31
      },
      {
        name: "address",
        label: "Address / Postcode",
        type: "input",
        placeholder: "3, TQ11 0AU",
        font_size: 8,
        x: 2,
        align: "right",
        y: 31
      },
      {
        name: "price",
        label: "Price",
        type: "input",
        placeholder: "£3.50",
        font_size: 12,
        font_color: "red",
        y: 25,
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
      x: 18,
      y: 5,
      width: 26,
      height: 9,
      fixed: true
    },
    fields: [
      {
        name: "market_name",
        label: "Market name",
        type: "input",
        placeholder: "KINGSBURY",
        font_size: 8,
        font_color: "green",
        font_family: "serif",
        font_weight: "bold",
        y: 1,
        transform: "UPPER"
      },
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
        y: 21
      },
      {
        name: "ingredients",
        label: "Ingredients (Allergens must be in ALL CAPS)",
        type: "input",
        placeholder: "WHEAT, Sugar, EGGS, Vanilla",
        multiline: true,
        font_size: 8,
        y: 25,
      },
      {
        name: "name",
        label: "Name",
        type: "input",
        placeholder: "Amanda Morris",
        font_size: 8,
        x: 2,
        align: "left",
        y: 38
      },
      {
        name: "address",
        label: "Address / Postcode",
        type: "input",
        placeholder: "3, TQ11 0AU",
        font_size: 8,
        x: 2,
        align: "right",
        y: 38
      },
      {
        name: "price",
        label: "Price",
        type: "input",
        placeholder: "£3.50",
        font_size: 12,
        font_color: "red",
        y: 5,
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
      x: 34,
      y: 4.5,
      width: 29,
      height: 10,
      fixed: true
    },
    fields: [
      {
        name: "market",
        label: "Market Name",
        type: "input",
        placeholder: "Salisbury",
        font_family: "serif",
        font_size: 8,
        font_weight: "bold",
        font_color: "green",
        multiline: true,
        y: 1,
        transform: "UPPER"
      },
      {
        name: "title",
        label: "Title",
        type: "input",
        multiline: true,
        placeholder: "Victoria Sandwich",
        font_size: 14,
        y: 17
      },
      {
        name: "description",
        label: "Description",
        type: "input",
        multiline: true,
        placeholder: "Strawberry jam filling",
        font_size: 10,
        y: 27.5
      },
      {
        name: "address",
        label: "Name & Address",
        type: "input",
        placeholder: "A.N. Other\nSomewhere\nSP3 3AA",
        multiline: true,
        font_size: 8,
        x:2,
        y: 24,
        align: "left"
      },
      {
        name: "drained",
        label: "Drained Weight",
        type: "input",
        placeholder: "",
        font_size: 12,
        y: 2,
        x: 2,
        align: "right",
        transform: "MIN_DRAINED",
      },
      {
        name: "weight",
        label: "Weight",
        type: "input",
        placeholder: "454g",
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
      },
      {
        name: "note",
        label: "Best Before / Use By",
        type: "input",
        multiline: true,
        width: 30,
        placeholder: "Use within three months of opening",
        font_size: 8,
        align: "left",
        x: 2,
        y: 5
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
      x: 32,
      y: 5,
      width: 38,
      height: 13,
      fixed: true
    },
    fields: [
      {
        name: "market",
        label: "Market Name",
        type: "input",
        placeholder: "Salisbury",
        font_family: "serif",
        font_size: 8,
        font_weight: "bold",
        font_color: "green",
        multiline: true,
        y: 1,
        transform: "UPPER"
      },
      {
        name: "title",
        label: "Title",
        type: "input",
        placeholder: "Victoria Sandwich",
        multiline: true,
        font_size: 14,
        font_weight: "bold",
        y: 20
      },
      {
        name: "description",
        label: "Description",
        type: "input",
        placeholder: "Strawberry jam filling",
        font_size: 10,
        y: 27
      },
      {
        name: "ingredients",
        label: "Ingredients (Allergens must be in ALL CAPS)",
        type: "input",
        placeholder: "WHEAT, Sugar, EGGS, Vanilla",
        font_size: 8,
        multiline: true,
        y: 32
      },
      {
        name: "name",
        label: "Name",
        type: "input",
        placeholder: "A.N. Other",
        font_size: 8,
        x:2,
        y: 48,
        align: "left"
      },
      {
        name: "potcode",
        label: "Postcode",
        type: "input",
        placeholder: "AB12 3CD",
        font_size: 8,
        x:2,
        y: 52,
        align: "left"
      },
      {
        name: "drained",
        label: "Drained Weight",
        type: "input",
        placeholder: "",
        font_size: 12,
        y: 8,
        x: 2,
        align: "right",
        transform: "MIN_DRAINED",
      },
      {
        name: "weight",
        label: "Weight",
        type: "input",
        placeholder: "454g",
        font_size: 12,
        y: 20,
        x: 6,
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
        y: 47,
        x: 6,
        align: "right"
      },
      {
        name: "url",
        type: "fixed",
        value: "www.country-markets.co.uk",
        font_size: 10,
        font_color: "green",
        font_weight: "bold",
        y: 52
      },
      {
        name: "note",
        label: "Best Before / Use By",
        type: "input",
        multiline: true,
        width: 30,
        placeholder: "Use within three months of opening",
        font_size: 8,
        align: "left",
        x: 2,
        y: 7
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
      x: 4,
      y: 9,
      width: 25,
      height: 9,
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
        placeholder: "Three Fruit Marmalade",
        multiline: true,
        font_size: 10,
        multiline: true,
        y: 19
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