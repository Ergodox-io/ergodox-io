---
sectionid: assemble
sectionclass: h2
parent-id: guide
title: Assembly Guide
number: 2200
---

Now the section where the soldering and real assembly happens, at the end of this section there will be a couple external links to other build guides including a photo build guide and a video build log.

1. Arrange the pcbs face down, and solder in your diodes to this side.
  * 1a. If you're using the _surface mount_ diodes, place them on the small square copper pads but be sure to orient the diodes so that the line on the diode faces the square hole. Solder the diodes and repeat for each switch on both hands.
  * 1b. If you are using _through hole_ diodes, place them through the two hole immediately to the left and right of copper pads under the square that the switch will take up. Be sure to check your orientation to be sure that the line on the diode is closest to the square hole. Solder and repeat for each switch on both hands.
  * ![diode](../img/diode.jpeg)

2. Flip both the pcbs over, this face up side (without the diodes) will be the side you will place all of the remaining components.

3. Insert both the 2.2k ohm resistors and 220 ohm (or whatever resistors chosen appropriate for your leds) onto the right hand where labled on the pcb and solder into place. 
 * Note: Keep the legs you clip off the resistors, you can use them in a later step when we install the TRRS connections.

4. On the left hand pcb, insert the I/O expander around the MCP23018 rectangle. Solder the legs in place.
 * Note: There are three holes without copper pads and do not need to be soldered.

5. _(Optional but suggested step)_ On the left hand pcb, insert your ceramic capacitor into the first and third holes of the top row and solder in place.
 * 5a. Bridge with solder the two copper pads immediately to the left of the ceramic capacitor.
 * ![capacitor](../img/ceramic.jpeg)

6. Insert either jumper wire or the legs clipped from the resistors bent into a U, into both of the the white pairs of holes on either side of where the 3.5mm connections will go and solder in place.
 * 6a. Place 3.5mm connection, solder the 4 connection points.
 * 6b. Repeat both the jumper and 3.5mm connectors on the other hand.

7. Install the male jumper pins to the underside of your Teensy with the button face up and solder the pins to the top side of the Teensy.
 * Note: If your Teensy already has jumpers already installed, skip this step.

8. Insert your Teensy jumper legs onto the right hand side with the usb facing the resistors and solder in place.

9. Cut one of the mini usb cables about 1.5" from the connector.
 * 9a. Strip off all of the sheathing from the cable, exposing the 4 wires.
 * 9b. Place the following wires into their respective holes:
  * White: D-
  * Red:   5v
  * Green: D+
  * Black: GND
 * 9c. Solder wires to the pcb.

10. On the right hand, insert the mini usb connector into the holes marked on the pcb and solder into place.

11. Ready the case of your choosing, depending on which design you picked.
 * 11a. If you are using the layered acrylic case design, peel off the protective film off the acrylic pieces. 
   * Place the pcb under the 3rd acrylic layer and insert the switches into the acylic plate making sure that both pins from the switch are extending out through the pcb.
 * 11b. If you are using the 3D printed or other 2 piece case design
   * Place the pcb under the top section and push the switches into the case making sure that both pins from the switch are extending out through the pcb.
 * Solder switches in place.

12. On the right hand, insert your three leds through the housing of the three switches and solder into place.
 * Note: LEDs have polarity so be sure that your positive leg of your leds goes into the (face up) square hole.
	
13. Finish assembling your case, plug in your TRRS cable between the two halves and proceed to building and flashing your firmware.

* [More the video type?](https://www.youtube.com/watch?v=x1irVrAl3Ts) YouTube has several other good guides, this one I think does an excellent job of balancing information and length.
* [Imgur Build Log](http://imgur.com/a/3riAB): user robotmaxtron shares his build log \(including mistakes\).
* [Massdrop](https://www.massdrop.com/ext/ergodox/assembly.php) also has a really great guide for assembly.

