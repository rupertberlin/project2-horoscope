const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("horoscope.sqlite3");

function getSignInformation(sign) {
  return new Promise((resolve) => {
    db.all(
      `SELECT * FROM signs WHERE sign="${
        sign[0].toUpperCase() + sign.slice(1)
      }"`,
      (err, rows) => {
        if (err) {
          console.log(err);
        }
        console.log(rows);
        resolve(rows);
      }
    );
  });
}

module.exports = {
  getSignInformation,
};
