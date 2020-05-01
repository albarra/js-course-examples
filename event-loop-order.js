console.log("First");

setImmediate(() => {
    console.log("Second");
})

setTimeout(() => {
    console.log("Third");
}, 500)

process.nextTick(() => {
    console.log("Fourth");
})