x = 2
rand = 2

def on_button_pressed_a():
    global x
    if x > 0:
        led.unplot(x, 4)
        x -= 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global x
    if x < 4:
        led.unplot(x, 4)
        x += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    global rand
    for i in range(4):
        led.unplot(rand, 0)
        rand = randint(0, 4)
        led.plot(rand, i)

    led.plot(x, 4)
    basic.pause(100)
basic.forever(on_forever)
