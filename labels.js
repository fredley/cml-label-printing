const isUpperCase = (str) => {
  return str !== "\n" && str === str.toUpperCase() && !/\d|&/.test(str) && /[a-zA-Z]/.test(str)
}

const TRANSFORMS = {
  UPPER: t => t.toUpperCase(),
  ALLERGY: t => {return t ? `Contains: ${t.toUpperCase()}` : t},
  MIN_DRAINED: t => {return t ? `Min Drained<br>Wt. ${t}` : t},
  MIN_WT: t => {return t ? `Min Wt.<br>${t}` : t},
  HOMEMADE_BY: t => {return t ? "Homemade by: " + t : ''},
  INGREDIENTS_UPPERS_BOLD: t => {return t ? "<b>Ingredients:</b><br><br>" + TRANSFORMS.UPPERS_BOLD(t) : t},
  INGREDIENTS_UPPERS_BOLD_INLINE: t => {return t ? "<b>Ingredients:</b> " + TRANSFORMS.UPPERS_BOLD(t) : t},
  UPPERS_BOLD: t => {
    const splits = t.split(" ")
    let words = []
    splits.forEach(w => {
      if (w.indexOf('<br>') >= 0) {
        w.split('<br>').forEach((w2, i) => {
          if (i !== 0) {
            words.push('<br>')
          }
          words.push(w2)
        })
      } else if (w.indexOf('\n') >= 0) {
        w.split('\n').forEach((w2, i) => {
          if (i !== 0) {
            words.push('\n')
          }
          words.push(w2)
        })
      } else {
        words.push(w)
      }
    })
    return words.filter(w => w).map(w => isUpperCase(w) ? `<b>${w}</b>` : w).join(" ")
  }
}

const LOGO_DIMENSIONS = {
  width: 350,
  height: 145
}

const LOGO_RATIO = LOGO_DIMENSIONS.height / LOGO_DIMENSIONS.width

const labels = {
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
      fixed: false
    },
    fields: [
      {
        name: "title",
        label: "Title",
        type: "input",
        multiline: true,
        placeholder: "THREE FRUIT\nMARMALADE",
        font_size: 12,
        font_family: "Arial Black",
        y: 13
      },
      // {
      //   name: "description",
      //   label: "Contents - must include allergens in ALL CAPS.",
      //   type: "input",
      //   multiline: true,
      //   placeholder: "Contains: Sugar, Oranges (17%),\nGrapefruit (13%), Lemons (12%)",
      // },
      {
        name: "ingredients",
        label: "Ingredients - must include allergens in ALL CAPS.",
        type: "input",
        multiline: true,
        dropdown: true,
        placeholder: "",
        font_size: 6,
        align: "center",
        font_size: 10,
        y: 22,
        x: 25,
        width: 48,
        is_html: true,
        transform: "UPPERS_BOLD"
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
        placeholder: "Kingsbury\nAB1 2CD",
        multiline: true,
        font_size: 8,
        align: "left",
        x: 2,
        y: 30,
        width: 25,
      },
      {
        name: "address",
        label: "Homemade by:",
        type: "input",
        placeholder: "A.N. Other",
        font_style: "italic",
        font_weight: "bold",
        multiline: true,
        font_size: 8,
        x: 2,
        align: "left",
        y: 22,
        width: 25,
        transform: "HOMEMADE_BY"
      },
      {
        name: "drained_weight",
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
        placeholder: "340g",
        font_size: 12,
        y: 13,
        x: 2,
        align: "right",
        transform: "MIN_WT",
      },
      // {
      //   name: "price",
      //   label: "Price",
      //   type: "input",
      //   placeholder: "£3.50",
      //   font_size: 12,
      //   font_color: "red",
      //   font_weight: "bold",
      //   y: 32,
      //   x: 2,
      //   align: "right"
      // },
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
    name: "10s (Landscape)",
    width: 99.1,
    height: 57.3,
    origin_x: 4.9,
    origin_y: 5.25,
    margin_x: 2,
    columns: 2,
    rows: 5,
    logo: {
      y: 1,
      x_offset: 50,
      width: 42,
      fixed: false
    },
    divider: true,
    fields: [
      {
        name: "title",
        label: "Title",
        type: "input",
        multiline: true,
        placeholder: "FRUIT LOAF",
        font_size: 14,
        font_family: "Arial Black",
        colourable: true,
        y: 19,
        x: 1,
        width: 48
      },
      {
        name: "description",
        label: "Description",
        type: "input",
        multiline: true,
        placeholder: "Made with free range eggs",
        font_size: 9,
        font_weight: "bold",
        y: 26,
        x: 1,
        width: 48
      },
      {
        name: "nut_warning",
        label: "Allergen Warning",
        type: "input",
        placeholder: "Made in a domestic kitchen where\nnuts and other allergens are used.",
        multiline: true,
        font_size: 8,
        y: 31,
        x: 1,
        width: 48
      },
      {
        name: "name",
        label: "Homemade by:",
        type: "input",
        placeholder: "A N Other",
        font_size: 9,
        font_style: "italic",
        font_weight: "bold",
        multiline: true,
        y: 41,
        x: 1,
        width: 48,
        transform: "HOMEMADE_BY"
      },
      {
        name: "market_name",
        label: "Market Name",
        type: "input",
        placeholder: "Your Country Market AB1 2CD",
        font_size: 9,
        y: 45,
        x: 1,
        width: 48,
      },
      {
        name: "url",
        type: "fixed",
        value: "www.country-markets.co.uk",
        font_size: 8,
        font_color: "green",
        font_weight: "bold",
        y: 52,
        x: 1,
        width: 48
      },
      {
        name: "ingredients",
        label: "Ingredients - must include allergens in ALL CAPS.",
        type: "input",
        multiline: true,
        dropdown: true,
        placeholder: "",
        font_size: 9,
        align: "center",
        y: 4,
        x: 51,
        width: 48,
        is_html: true,
        transform: "INGREDIENTS_UPPERS_BOLD"
      },
      {
        name: "weight",
        label: "Weight:",
        type: "input",
        placeholder: "Net Wt. 45g",
        font_size: 9,
        font_weight: "bold",
        align: "center",
        y: 47,
        x: 51,
        width: 48
      },
      {
        name: "best_before",
        label: "Best Before / Use By",
        type: "input",
        placeholder: "Best Before: 24 Mar 2020",
        multiline: true,
        font_size: 8,
        x: 51,
        width: 48,
        y: 52
      },
    ]
  },
  l_10_onecol: {
    name: "10s (Landscape - one column)",
    width: 99.1,
    height: 57.3,
    origin_x: 4.9,
    origin_y: 5.25,
    margin_x: 2,
    columns: 2,
    rows: 5,
    logo: {
      y: 1,
      width: 24,
      fixed: false
    },
    fields: [
      {
        name: "title",
        label: "Title",
        type: "input",
        multiline: true,
        placeholder: "FRUIT LOAF",
        font_size: 12,
        font_family: "Arial Black",
        colourable: true,
        y: 12,
      },
      {
        name: "url",
        type: "fixed",
        value: "www.country-markets.co.uk",
        font_size: 8,
        font_color: "green",
        font_weight: "bold",
        y: 52,
      },
      {
        name: "ingredients",
        label: "Ingredients - must include allergens in ALL CAPS.",
        type: "input",
        multiline: true,
        dropdown: true,
        placeholder: "",
        font_size: 9,
        align: "center",
        y: 18,
        is_html: true,
        transform: "INGREDIENTS_UPPERS_BOLD_INLINE"
      },
    ]
  },
  l_10_landscape: {
    name: "10s (Portrait)",
    orientation: "landscape",
    width: 57.3,
    height: 99.1,
    origin_x: 5.25,
    origin_y: 4.9,
    margin_y: 2,
    columns: 5,
    rows: 2,
    logo: {
      y: 1,
      width: 42,
      fixed: false
    },
    fields: [
      {
        name: "title",
        label: "Title",
        type: "input",
        multiline: true,
        placeholder: "FRUIT LOAF",
        font_size: 16,
        font_family: "Arial Black",
        colourable: true,
        y: 22
      },
      {
        name: "description",
        label: "Description",
        type: "input",
        multiline: true,
        placeholder: "Made with free range eggs",
        font_size: 10,
        y: 30
      },
      {
        name: "ingredients",
        label: "Ingredients - must include allergens in ALL CAPS.",
        type: "input",
        multiline: true,
        dropdown: true,
        placeholder: "",
        font_size: 10,
        align: "center",
        y: 36,
        is_html: true,
        transform: "UPPERS_BOLD"
      },
      {
        name: "name",
        label: "Homemade by:",
        type: "input",
        placeholder: "A N Other",
        font_size: 9,
        y: 73,
        transform: "HOMEMADE_BY"
      },
      {
        name: "market_name",
        label: "Market Name",
        type: "input",
        placeholder: "Your Country Market AB1 2CD",
        font_size: 9,
        y: 77
      },
      {
        name: "nut_warning",
        label: "Allergen Warning",
        type: "input",
        placeholder: "Made in a domestic kitchen where\nnuts and other allergens are used.",
        multiline: true,
        font_size: 8,
        font_weight: "bold",
        y: 82,
      },
      {
        name: "best_before",
        label: "Best Before / Use By",
        type: "input",
        placeholder: "Best Before: 24 Mar 2020",
        multiline: true,
        font_size: 8,
        align: "left",
        y: 90,
        x: 2,
      },
      {
        name: "weight",
        label: "Weight",
        type: "input",
        placeholder: "Net Wt. 45g",
        font_size: 8,
        font_weight: "bold",
        align: "right",
        y: 90,
        x: 2,
      },
      {
        name: "url",
        type: "fixed",
        value: "www.country-markets.co.uk",
        font_size: 8,
        font_color: "green",
        font_weight: "bold",
        y: 95
      }
    ]
  },
  l_8: {
    name: "8s (Landscape)",
    width: 99.1,
    height: 67.7,
    origin_x: 4.4,
    origin_y: 13.1,
    margin_x: 3,
    columns: 2,
    rows: 4,
    logo: {
      y: 1,
      x_offset: 50,
      width: 42,
      fixed: false
    },
    divider: true,
    fields: [
      {
        name: "title",
        label: "Title",
        type: "input",
        multiline: true,
        placeholder: "FRUIT LOAF",
        font_size: 14,
        font_family: "Arial Black",
        colourable: true,
        y: 19,
        x: 1,
        width: 48
      },
      {
        name: "description",
        label: "Description",
        type: "input",
        multiline: true,
        placeholder: "Made with free range eggs",
        font_size: 9,
        font_weight: "bold",
        y: 26,
        x: 1,
        width: 48
      },
      {
        name: "nut_warning",
        label: "Allergen Warning",
        type: "input",
        placeholder: "Made in a domestic kitchen where\nnuts and other allergens are used.",
        multiline: true,
        font_size: 8,
        y: 35,
        x: 1,
        width: 48
      },
      {
        name: "name",
        label: "Homemade by:",
        type: "input",
        placeholder: "A N Other",
        font_size: 9,
        font_style: "italic",
        font_weight: "bold",
        multiline: true,
        y: 45,
        x: 1,
        width: 48,
        transform: "HOMEMADE_BY"
      },
      {
        name: "market_name",
        label: "Market Name",
        type: "input",
        placeholder: "Your Country Market AB1 2CD",
        font_size: 9,
        y: 50,
        x: 1,
        width: 48,
      },
      {
        name: "url",
        type: "fixed",
        value: "www.country-markets.co.uk",
        font_size: 8,
        font_color: "green",
        font_weight: "bold",
        y: 63,
        x: 1,
        width: 48
      },
      {
        name: "ingredients",
        label: "Ingredients - must include allergens in ALL CAPS.",
        type: "input",
        multiline: true,
        dropdown: true,
        placeholder: "",
        font_size: 9,
        align: "center",
        y: 4,
        x: 51,
        width: 47,
        is_html: true,
        transform: "INGREDIENTS_UPPERS_BOLD"
      },
      {
        name: "weight",
        label: "Weight:",
        type: "input",
        placeholder: "Net Wt. 45g",
        font_size: 9,
        font_weight: "bold",
        align: "center",
        y: 58,
        x: 51,
        width: 48
      },
      {
        name: "best_before",
        label: "Best Before / Use By",
        type: "input",
        placeholder: "Best Before: 24 Mar 2020",
        multiline: true,
        font_size: 8,
        x: 51,
        width: 47,
        y: 63
      },
    ]
  },
  l_8_landscape: {
    name: "8s (Portrait)",
    orientation: "landscape",
    width: 67.7,
    height: 99.1,
    origin_x: 4.4,
    origin_y: 13.1,
    margin_y: 3,
    columns: 4,
    rows: 2,
    logo: {
      y: 1,
      width: 42,
      fixed: false
    },
    fields: [
      {
        name: "title",
        label: "Title",
        type: "input",
        multiline: true,
        placeholder: "FRUIT LOAF",
        font_size: 16,
        font_family: "Arial Black",
        colourable: true,
        y: 22
      },
      {
        name: "description",
        label: "Description",
        type: "input",
        multiline: true,
        placeholder: "Made with free range eggs",
        font_size: 10,
        y: 30
      },
      {
        name: "ingredients",
        label: "Ingredients - must include allergens in ALL CAPS.",
        type: "input",
        multiline: true,
        dropdown: true,
        placeholder: "",
        font_size: 10,
        align: "center",
        y: 36,
        is_html: true,
        transform: "UPPERS_BOLD"
      },
      {
        name: "name",
        label: "Homemade by:",
        type: "input",
        placeholder: "A N Other",
        font_size: 9,
        y: 73,
        transform: "HOMEMADE_BY"
      },
      {
        name: "market_name",
        label: "Market Name",
        type: "input",
        placeholder: "Your Country Market AB1 2CD",
        font_size: 9,
        y: 77
      },
      {
        name: "nut_warning",
        label: "Allergen Warning",
        type: "input",
        placeholder: "Made in a domestic kitchen where\nnuts and other allergens are used.",
        multiline: true,
        font_size: 8,
        font_weight: "bold",
        y: 82,
      },
      {
        name: "best_before",
        label: "Best Before / Use By",
        type: "input",
        placeholder: "Best Before: 24 Mar 2020",
        multiline: true,
        font_size: 8,
        alight: "right",
        y: 90,
        x: 2,
      },
      {
        name: "weight",
        label: "Weight",
        type: "input",
        placeholder: "Net Wt. 45g",
        font_size: 8,
        font_weight: "bold",
        align: "right",
        y: 90,
        x: 2,
      },
      {
        name: "url",
        type: "fixed",
        value: "www.country-markets.co.uk",
        font_size: 8,
        font_color: "green",
        font_weight: "bold",
        y: 95
      }
    ]
  }
}
