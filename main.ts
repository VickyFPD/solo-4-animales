radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Tortoise)
        basic.pause(2000)
    }
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Giraffe)
        basic.pause(2000)
    }
    if (receivedNumber == 2) {
        patos += 1
        basic.showIcon(IconNames.Duck)
        basic.pause(2000)
    }
    if (receivedNumber == 3) {
        basic.showIcon(IconNames.Butterfly)
        basic.pause(2000)
    }
})
input.onButtonPressed(Button.A, function () {
    patos = 0
    for (let index = 0; index < 10; index++) {
        radio.sendNumber(randint(0, 3))
        basic.pause(2000)
    }
    radio.sendValue("patos", patos)
    basic.pause(5000)
})
radio.onReceivedValue(function (name, value) {
    if (name == "patos") {
        basic.showNumber(patos)
        basic.pause(5000)
        basic.clearScreen()
        patos = 0
    }
})
let patos = 0
radio.setGroup(1)
