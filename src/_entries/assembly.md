---
sectionid: assemble
sectionclass: h2
parent-id: guide
title: Assemble Guide
number: 2200
---

This guide is very much a work in progress and should not be considered done, though the information should be accurate.

[More the video type?](https://www.youtube.com/watch?v=x1irVrAl3Ts)

<a href="https://oshpark.com/shared_projects/wWzS30He"><img src="https://oshpark.com/assets/badge-5b7ec47045b78aef6eb9d83b3bac6b1920de805e9a0c227658eac6e19a045b9c.png" alt="Order from OSH Park"></a>

Arrange the pcbs face down, and solder in your diodes.
	If you're using the SMD diodes, place them on the small square copper pads but be sure to orient the diodes so that the line on the diode faces the square hole. Solder in place.
	If you are using through hole diodes, place them through the two hole immediately next to the copper pads under the square that the switch will taking up. Be sure to check your orientation to be sure that the line on the diode is closest to the square hole, rather than the circle hole. Solder in place.

Flip both the pcbs over, this face up side (without the diodes) will be the side you will place all of the remaining components.

Insert your 2.2k ohm resistors and your 220 ohm (or whatever resistors chosen appropriate for your leds) onto the right hand where labled on the pcb. Solder in place. It's suggested to keep the clipped off legs of your resistors, we'll use them in a later step when we install the TRRS connections.

On the left hand pcb, insert the I/O expander around the MCP23018 rectangle. Solder the legs in place, there are three holes without copper pads and do not need to be soldered.

(Optional but suggested step) On the left hand pcb, insert your ceramic capacitor into these (TODO: ADD LOCATION PHOTO OR DIAGRAM) holes. Solder in place.
	Bridge with solder, the two copper pads immediately next to the ceramic capacitor.

Insert either jumper wire or the legs from the resistors bent into a U, into both of the the white pairs of holes on either side of where the 3.5mm connections will go. Solder in place.
	Place 3.5mm connection, solder the 4 connection points.
	Repeat both the jumper and 3.5mm connectors on the other hand.

If your Teensy already has jumpers already installed, skip this step.
	Install the jumper to the bottom side of your Teensy with the button face up.

Insert your Teensy jumper legs onto the right hand side with the usb facing the resistors. Solder in place.

Cut one of the mini usb cables about 1.5" from the connector.
	Strip off all of the sheathing from the cable, exposing the 4 wires.
	Place the following wires into their respective holes.
		White: D-
		Red:   5v
		Green: D+
		Black: GND
	Solder in place.

On the right hand, insert the mini usb connector into the holes marked and solder into place.

If you are using lister's case design, peel off the protective film off the acrylic pieces.
	Place the pcb under the 3rd acrylic piece and insert the switches into the acylic making sure that both pins from the switch are extending out through the pcb.
	Solder switches in place.

If you are using the 3D printed case:
	Place the pcb under the top section and push the switches into the case making sure that both pins from the switch are extending out through the pcb.
	Solder switches in place.

On the right hand, insert your three leds through the housing of the three switches.
	LEDs have polarity so be sure that your positive leg of your leds goes into the (face up) square hole.
	Solder the three leds in place.
	
Finish assembling your case, plug in your TRRS cable between the two halves and proceed to building and flashing your firmware.
