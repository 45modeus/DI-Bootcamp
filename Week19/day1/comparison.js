function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve(`${num} is less than or equal to 10`);
        } else {
            reject(`${num} is greater than 10`)
        }
    });
}

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    }, 4000);
});

myPromise.then(result => {
    console.log(result);
});

//resolved with 3
const resolvePromise = Promise.resolve(3);
resolvePromise.then(result => {
    console.log('Resolved with:', result);
});

//Reject with boo!
const rejectPromise = Promise.reject("Boo!");
rejectPromise.catch(error => {
    console.log('Rejected with:', error);
})

// test rejection
// compareToTen(15)
// .then(result => console.log('correct', result))
// .catch(error => console.log('incorrect', error));

// //test resolve
// compareToTen(8)
// .then(result => console.log('correct', result))
// .catch(error => console.log('incorrect', error));