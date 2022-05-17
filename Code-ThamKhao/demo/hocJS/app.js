var promise = new Promise(function (resolve, reject) {
  //logic
  //Thành công: resolve
  //Thất bại: reject
  resolve();
});
promise
  .then(function () {
    return 1;
  })
  .then(function (data) {
    console.log(data);
    return 2;
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Done!");
  });
