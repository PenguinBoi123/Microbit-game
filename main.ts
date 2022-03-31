let x = 2
let rand = randint(1,4)
let i = -1
let pts=0
let paws=false
input.onButtonPressed(Button.A, function () {
    if (x > 0) {
        led.unplot(x, 4)
        x += 0 - 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (x < 4) {
        led.unplot(x, 4)
        x += 1
    }
})


basic.forever(function () {
    if (!paws){
        if (i != 4) {
            i += 1
        } 
        else {
            i = 0
            rand = randint(0, 4)
            pts++
        }
        led.plot(rand, i)
        basic.pause(700)
        led.unplot(rand, i)
    }
})
basic.forever(function () {
    
    if (x==rand && i==4){
        basic.clearScreen()
        paws = true
        basic.showNumber(pts)
        basic.pause(2000)
        basic.clearScreen()
        pts = -1
        paws=false
    }
    else led.plot(x, 4)
})
