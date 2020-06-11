const API_KEY = "AIzaSyD38l87CCCh09Ppqf-dZVEh_eJbhxsqzpQ"
const SHEET = "1Jp6E5SBXqMDOan4LeK8K_1bcNsSPV_np_SjAN_2xDLs"

const SHEETS_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET}`

let DATABASE = {
  ingredients: {}
}

const fetch_products = () => {
  $.get(`${SHEETS_URL}?key=${API_KEY}&fields=sheets.properties`, (data) => {
    const ranges = Object.values(data.sheets).map(c => {
      return "&ranges='" + c.properties.title + "'!A:B"
    }).reduce((a,b) => a + b, '')
    $.get(`${SHEETS_URL}/values:batchGet?key=${API_KEY}${ranges}`, (data) => {
      data.valueRanges.forEach(v => {
        const dct = {}
        v.values.forEach(((p, i) => {
          if (i === 0) { return }
          let name = p[0]
          let j = 2;
          while (dct[name]) {
            name = `${p[0]} [${j}]`
            j += 1
          }
          dct[name] = p[1]
        }))
        DATABASE.ingredients[v.range.split("!")[0].replace(/(^"|"$|^'|'$)/g, '')] = dct
      })
    })
  })
}