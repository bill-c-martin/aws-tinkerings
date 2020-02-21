let promise = new Promise((resolve, reject) => {
    // do a thing, possibly async, then…
    const thingsAreFine = /* do some work and capture the result */ true;
    if (thingsAreFine) {
        resolve("Stuff worked!");
    } else {
        reject(Error("It broke"));
    }
})
    .then(promiseResult => console.log(promiseResult));