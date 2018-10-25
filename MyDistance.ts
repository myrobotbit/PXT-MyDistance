/**
  * Coding for read analog sensor.
  */
   enum sensorSEL {
	//% block="P0"
	S0,
	//% block="P1"
	S1,
	//% block="P2"
	S2,
	//% block="P3"
	S3,
	//% block="P4"
	S4,
	//% block="P10"
	S10
    }

/**
 * Custom blocks
 */
//% weight=50 color=#000099 icon="\uf11e"
namespace MySensor {

     /**
     * Read Analog Sensor P0-P4,P10 
     * 
     */

    //% blockId="MySensor_readAnalog" block="analog sensor %readADC"
    //% weight=50
    export function readAnalog(readADC:sensorSEL): number{
	let ADCvalue:number
	if(readADC == sensorSEL.S0){
	    ADCvalue = pins.analogReadPin(AnalogPin.P0)
	    return  ADCvalue
        }
	if(readADC == sensorSEL.S1){
	    ADCvalue = pins.analogReadPin(AnalogPin.P1)
	    return  ADCvalue
        }
	if(readADC == sensorSEL.S2){
	    ADCvalue = pins.analogReadPin(AnalogPin.P2)
	    return  ADCvalue
        }
	if(readADC == sensorSEL.S3){
	    ADCvalue = pins.analogReadPin(AnalogPin.P3)
	    return  ADCvalue
        }
	if(readADC == sensorSEL.S4){
	    ADCvalue = pins.analogReadPin(AnalogPin.P4)
	    return  ADCvalue
        }
	if(readADC == sensorSEL.S10){
	    ADCvalue = pins.analogReadPin(AnalogPin.P10)
	    return  ADCvalue
        }
    }
 }
