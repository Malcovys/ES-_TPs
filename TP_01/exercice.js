const EventEmitter = require("events");

const eventEmitter = new EventEmitter();


eventEmitter.on("BellRingHandler1", (arg1) => {
    console.log("Bellring handler 1 \n");

    if (arg1 == "Jerry") {
        console.log("Tom aide-moi \n");
    } else {
        console.log(`Bonjour ${arg1}`);
    }
});

eventEmitter.on("NobodyHandler", () => {
    console.log("Desolé y a plus de personne ici laissez votre message svp")
});

eventEmitter.on("BellRingHandler2", () => {
    console.log("Bellring handler 2 \n");

    eventEmitter.emit('NobodyHandler');
})

eventEmitter.emit("BellRingHandler1", "Jerry");
eventEmitter.emit("BellRingHandler2");
