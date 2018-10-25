/**
  * Coding for read sharp distance sensor.
  */
//% weight=8 icon="\uf11e" color=#ff00cc block="MyDistance"
namespace MyDistance {

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
     let DistanceVal = 0;
     let Distance = 0;
     switch (selectpin) {
            case analogPort.P0:
                DistanceVal = pins.analogReadPin(AnalogPin.P0)*(5.3/1024);
                Distance = 65*pow(DistanceVal, -1.1);
                return Distance;
            case analogPort.P1:
                DistanceVal = pins.analogReadPin(AnalogPin.P1)*(5.3/1024);
                Distance = 65*pow(DistanceVal, -1.1);
                return Distance;
            default:
                return Distance;
        }
    }
}
