/**
  * Coding for read sharp distance sensor.
  */
//% weight=8 icon="\uf11e" color=#ffff00 block="MyDistance"
namespace MyDistance {

   export enum analogPort {
        P0,
        P1
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
            let Distance: number;
     switch (selectpin) {
            case analogPort.P0:
                let analogVal = pins.analogReadPin(AnalogPin.P0);
                let DistanceVal = analogVal*(5.3/1024);
                Distance = 65*pow(DistanceVal, -1.1);
                return Distance;
            case analogPort.P1:
                let analogVal = pins.analogReadPin(AnalogPin.P1);
                let DistanceVal = analogVal*(5.3/1024);
                Distance = 65*pow(DistanceVal, -1.1);
                return Distance;
            default:
                return 0;
        }
    }
}
