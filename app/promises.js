//3 states: pending, fulfilled, rejected

let basicPromise = new Promise(function (resolve, rejected) {
  let x = 12;
  if (x == 12) {
    resolve();
  } else {
    rejected();
  }
});

basicPromise.then(
  function () {
    document.write("Basic Promise Resolved");
  },
  function () {
    document.write("Basic promise is rejected");
  }
);

//another basic function using catch
const cPromise = new Promise(function (resolve, rejected) {
  let newNum = Math.random();
  if (newNum < 0.5) {
    resolve(newNum);
  } else {
    rejected(newNum);
  }
});

cPromise
  .then(function (num) {
    //resolved
    console.log("Promise Resolved: ", num);
  })
  .catch(function (num) {
    //rejected
    console.log("Promise rejected: ", num);
  });

//Promise with a setTimeout
const rNumPromise = new Promise(function (resolve, rejected) {
  setTimeout(function () {
    let randNum = Math.floor(Math.random() * 10) + 1;
    resolve(randNum);
  }, 2000);
});

rNumPromise.then(function (data) {
  console.log("SetTimeOut Promise Resolved ", data);
});

console.log("SetTimeOut Initiated");

//Promise Chaining
const promiseChain = new Promise(function (resolve, reject) {
  resolve(5);
});

promiseChain
  .then(function (data) {
    return data * 2;
  })
  .then(function (data) {
    return data + 20;
  })
  .then(function (data) {
    console.log(data);
  });

//Data from an external source

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log("Fetched promise ", fetchPromise);

fetchPromise.then(function (response) {
  const jPromise = response.json();
  jPromise.then(function (data) {
    console.log("Data Recieved: " + data[2].name);
  });
});
