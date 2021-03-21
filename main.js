const { google } = require("googleapis");
const keys = require("./keys.json");
// https://nodejs.org/
// https://developers.google.com/sheets/api/quickstart/nodejs
// console.developers.google.com
// https://developers.google.com/identity/protocols/googlescopes

const client = new google.auth.JWT(keys.client_email, null, keys.private_key, ["https://www.googleapis.com/auth/spreadsheets"]);

client.authorize(function (err, tokens) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Connected!");
    gsrun(client);
  }
});

async function gsrun(cl) {
  const gsapi = google.sheets({ version: "v4", auth: cl });

  const opt = {
    spreadsheetId: "1ZiDso2BRmts8LTiRiEAx6_3SxlA_W53CgMULgH-gW_w",
    range: "Data!A1:B5",
  };

  let data = await gsapi.spreadsheets.values.get(opt);
  console.log(data);
}
