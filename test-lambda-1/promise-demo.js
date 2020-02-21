let promise = new Promise((resolve, reject) => {
    // do a thing, possibly async, then…
    const thingsAreFine = /* do some work and capture the result */ false;
    if (thingsAreFine) {
        resolve("Stuff worked!");
    } else {
        reject(Error("It broke"));
    }
})
    .then(console.log)
    .catch(err => console.log(`Errors: ${err}`));