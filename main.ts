input.onButtonPressed(Button.A, function () {
    N1 += 1
    basic.showNumber(N1)
})
input.onGesture(Gesture.TiltLeft, function () {
    N1 += 1
    basic.showNumber(N1)
})
input.onButtonPressed(Button.B, function () {
    N1 += -1
    basic.showNumber(N2)
})
input.onGesture(Gesture.TiltRight, function () {
    N1 += -1
    basic.showNumber(N2)
})
let N2 = 0
let N1 = 0
N1 = 0
N2 = 0
basic.forever(function () {
	
})
