exports.handler = async (event, context) => {
    return new Promise((resolve, reject) => {
        console.log(`hello lambda`);
        resolve();
    })
};