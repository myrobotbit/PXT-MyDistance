/**
  * Coding for read sharp distance sensor.
  */
//% weight=8 icon="\uf11e" color=#339933 block="MySensor"
namespace MySensor {

   export enum analogPort {
        P0,
        P1,
        P2,
        P3,
        P4,
        P10
    }

    /**
     * read analog sensor value from P0 -P4 and P10
     * @param selectpin         select analog pin to read
     * @return number           returns analog value from 0 to 1023
     */
    //% blockId=MySensor_analogReadDistance
    //% block="analog read |%selectpin|"
    //% weight=80
    export function analogReadDistance(selectpin: analogPort): number {
        switch (selectpin) {
            case analogPort.P0:
                let distance1 = pins.analogReadPin(AnalogPin.P0)*(5.3/1024);
                let distance = 65*pow((distance1, -1.1);
                return distance;
            case analogPort.P1:
                return 0;
            case analogPort.P2:
                return 0;
            case analogPort.P3:
                return 0;
            case analogPort.P4:
                return 0;
            case analogPort.P10:
                return 0;
            default:
                return 0;
        }
    }
}
