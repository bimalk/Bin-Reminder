const data = require("./data");

class Controller {
  // getting all todos
  async getBinDates() {
    // return all todos
    return new Promise((resolve, _) => resolve(data));
  }

  async getNextBindate() {
    return new Promise((resolve, reject) => {
      data.sort(function (a, b) {
        var dateA = new Date(a.bin_date),
          dateB = new Date(b.bin_date);
        return dateA - dateB;
      });

      console.log(data);

      var nextDate = data.filter(function (bin) {
        console.log(new Date(bin.bin_date));
        console.log(new Date(bin.bin_date) - Date.now());
        return new Date(bin.bin_date) - Date.now() > 0;
      })[0];

      // get the todo
      let bindate = nextDate;
      if (bindate) {
        // return the todo
        resolve(bindate);
      } else {
        // return an error
        reject(`Cant find `);
      }
    });
  }
}

module.exports = Controller;
