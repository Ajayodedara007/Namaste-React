var x = 1
a()
b()

console.log("1", x)

function a() {
    var x = 100
    console.log("2", x)
}

function b() {
    var x = 200
    console.log("3", x)
}