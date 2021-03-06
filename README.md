## Companion Datavideo DVIP Module

Work in progress module to control Datavideo vision mixers, with feedback.

Note: You have to restart companion after selecting or changing the model to get the correct instance actions.  

This module attempts to implement the realtime DVIP protocol to listen to changes while using the command protocol to send control commands to the vision mixer.  
More documentation on the DVIP specification is here: https://github.com/BB21B/datavideo-dvip-docs

Currently supports:  
SE-650  
SE-700  
SE-1200MU/HS-1300  
SE-2200/HS-2200 (Work in Progress, no feedback).   
SE-3200/HS-3200  
  
The SE-2200 uses the "LAN Service" port for control with the PC Control button enabled  
Use the Presets to setup the SE-2200  

Please add an issue for other Datavision vision mixers you would like to see added or any feedback you have.

**Available commands**

* Switch PGM and PVW bus input
* Switch Key, DSK and Aux bus input
* Transition Controls
* Set ME, DSK and FTB frame durations
* Fade to Black
* Keyer Controls
* Audio Controls
* Switch Audio Source Input
* Output Controls
* User Load/User Save
* Streamer Controls
* Change input name on mixer
* Select wipe
* Menu Controls


**Available feedback**
* Current PGM and PVW Bus selected input feedback (PVW bus also has running transition feedback)
* Current Key, DSK and Aux Bus selected input feedback (Key and DSK also feedback when live in PGM)
* HDMI/SDI selected output source
* T Bar and DSK T Bar transition active indication
* Currently selected transition type
* Current audio source
* Currently selected user
* Keyer Control (PGM/PVW) state
* Transition and FTB button states
* Currently selected wipe


**Available presets**
* PGM Bus with feedback
* PVW Bus with feedback
* Key 1 Bus with feedback
* DSK 1 Bus with feedback
* Transition Mix, Wipe Clip and DVE with feedback
* Transition Auto and DSK Auto with feedback
* Transition Cut and DSK Cut
* Audio source set with feedback
* Keyer controls with feedback
* FTB controls with feedback
* Select wipe with feedback
* Audio output state with feedback

**Available variables**
* Current PGM and PVW inputs sources
* Current PGM and PVW inputs source names
* Current Key, DSK and Aux bus inputs sources
* Current Key, DSK and Aux bus inputs source names
* Current HDMI and SDI output sources
* Current HDMI and SDI output source names
* Current audio source
* Current ME, DSK and FTB duration frames
* KEY and DSK button states
* Input name labels from mixer
* Currently selected user
* Transition and FTB button states
* Current wipe number
* Audio output states
