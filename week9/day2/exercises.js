//exercise 1
compareToTen(5)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

compareToTen(15)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));


  //exercise 2
const delayPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, 4000);
  });
};

Promise.resolve(delayPromise())
  .then((result) => {
    console.log(result);
  })
  .catch(() => {
    console.log("Oops, something went wrong.");
  });


//exercise 3
const resolvedPromise = Promise.resolve(3);
const rejectedPromise = Promise.reject("Boo!");

resolvedPromise
  .then((value) => {
    console.log("Resolved:", value);
  })
  .catch((error) => {
    console.log("Oops, something went wrong:", error);
  });

rejectedPromise
  .then((value) => {
    console.log("Resolved:", value);
  })
  .catch((error) => {
    console.log("Rejected:", error);
  });
