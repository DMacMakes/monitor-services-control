bluetooth.onBluetoothConnected(function () {
    bt_connected = 1
    basic.showLeds(`
        # . # # .
        . # # . #
        . . # # .
        . # # . #
        # . # # .
        `)
    while (bt_connected == 1) {
        uart_data_in = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
        basic.showString(uart_data_in)
    }
})
let uart_data_in = ""
let bt_connected = 0
bt_connected = 0
bluetooth.startAccelerometerService()
bluetooth.startButtonService()
bluetooth.startIOPinService()
bluetooth.startLEDService()
bluetooth.startTemperatureService()
bluetooth.startMagnetometerService()
basic.showString("MON")
