const fs = require("fs");

// console.log("first");

// const data = fs.readFileSync("file.txt", "utf-8");

// console.log(data);
// console.log("second");

// console.log("first");

// fs.readFile("file.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// console.log("second");


// fs.appendFile("file.txt", "\nHelloBacchooooooo", (err) => {
//     if (err) {
//         console.log(err);
//     }
// })


// fs.writeFile("file.txt", "\nHello Niharika", (err) => {
//     if (err) {
//         console.log(err);
//     }
// })
// const crypto = require("crypto");
// const password = "JonDoe@123"

// const hash = crypto.createHash("sha256").update(password).digest("hex")
// console.log(hash)

// const salt = crypto.randomBytes(16).toString("hex");
// console.log(salt)

// const hello = crypto.createHmac("sha256",salt).update(password).digest("hex");
// console.log(hello)

const dns = require("dns");

dns.lookup("www.google.com", (error, address, family) => {
    if (error) {
        console.log(error);
    } else {
        console.log(address);
        console.log(family);
    }
});

dns.reverse("8.8.8.8", (error, hostnames) => {
    if (error) {
        console.log(error);
    } else {
        console.log(hostnames);
    }
});