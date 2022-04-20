const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("horoscope.sqlite3");

function getSignInformation(sign) {
  return new Promise(function query(resolve) {
    db.all(
      `SELECT * FROM signs WHERE sign="${
        sign[0].toUpperCase() + sign.slice(1)
      }"`,
      function error(err, rows) {
        resolve(rows);
        console.error(err.message);
      }
    );
  });
}

module.exports = {
  getSignInformation,
};
