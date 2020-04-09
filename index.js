const tcp = require('../../tcp');
const instance_skel = require('../../instance_skel');
var actions = require('./actions');
let debug;
let log;

class instance extends instance_skel {

	constructor(system, id, config) {
		super(system, id, config)

		Object.assign(this, {
			...actions
		});
		this.CHOICES_PORT = [
			{ id: '5001', label: '5001'},
			{ id: '5003', label: '5003'},
			{ id: '5005', label: '5005'},
			{ id: '5007', label: '5007'},
		];

		////3200/////

		// Switch 3200 Program Bus
		this.CHOICES_SWITCH_PGM_3200 = [
			{ id: '0', label: 'Black',	 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x94, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '1', label: 'In 1',	 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x94, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '2', label: 'In 2',	 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x94, 0x00, 0x02, 0x00, 0x02, 0x00, 0x00, 0x00]) },
			{ id: '3', label: 'In 3', 		cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x94, 0x00, 0x02, 0x00, 0x03, 0x00, 0x00, 0x00]) },
			{ id: '4', label: 'In 4',	 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x94, 0x00, 0x02, 0x00, 0x04, 0x00, 0x00, 0x00]) },
			{ id: '5', label: 'In 5',	 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x94, 0x00, 0x02, 0x00, 0x05, 0x00, 0x00, 0x00]) },
			{ id: '6', label: 'In 6',	 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x94, 0x00, 0x02, 0x00, 0x06, 0x00, 0x00, 0x00]) },
			{ id: '7', label: 'In 7',	 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x94, 0x00, 0x02, 0x00, 0x07, 0x00, 0x00, 0x00]) },
			{ id: '8', label: 'In 8', 		cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x94, 0x00, 0x02, 0x00, 0x08, 0x00, 0x00, 0x00]) },
			{ id: '9', label: 'In 9', 		cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x94, 0x00, 0x02, 0x00, 0x09, 0x00, 0x00, 0x00]) },
			{ id: '10', label: 'In 10', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x94, 0x00, 0x02, 0x00, 0x0a, 0x00, 0x00, 0x00]) }, 
			{ id: '11', label: 'In 11', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x94, 0x00, 0x02, 0x00, 0x0b, 0x00, 0x00, 0x00]) }, 
			{ id: '12', label: 'In 12', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x94, 0x00, 0x02, 0x00, 0x0c, 0x00, 0x00, 0x00]) }, 
			{ id: '30', label: 'Matte', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x94, 0x00, 0x02, 0x00, 0x11, 0x00, 0x00, 0x00]) },
			{ id: '31', label: 'Bars', 		cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x94, 0x00, 0x02, 0x00, 0x12, 0x00, 0x00, 0x00]) },
		];

	  	// Switch 3200 Preview Bus
		this.CHOICES_SWITCH_PVW_3200 = [
			{ id: '0', label: 'Black',	 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x95, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '1', label: 'In 1',	 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x95, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '2', label: 'In 2',	 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x95, 0x00, 0x02, 0x00, 0x02, 0x00, 0x00, 0x00]) },
			{ id: '3', label: 'In 3', 		cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x95, 0x00, 0x02, 0x00, 0x03, 0x00, 0x00, 0x00]) },
			{ id: '4', label: 'In 4',	 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x95, 0x00, 0x02, 0x00, 0x04, 0x00, 0x00, 0x00]) },
			{ id: '5', label: 'In 5',	 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x95, 0x00, 0x02, 0x00, 0x05, 0x00, 0x00, 0x00]) },
			{ id: '6', label: 'In 6',	 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x95, 0x00, 0x02, 0x00, 0x06, 0x00, 0x00, 0x00]) },
			{ id: '7', label: 'In 7',	 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x95, 0x00, 0x02, 0x00, 0x07, 0x00, 0x00, 0x00]) },
			{ id: '8', label: 'In 8', 		cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x95, 0x00, 0x02, 0x00, 0x08, 0x00, 0x00, 0x00]) },
			{ id: '9', label: 'In 9', 		cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x95, 0x00, 0x02, 0x00, 0x09, 0x00, 0x00, 0x00]) },
			{ id: '10', label: 'In 10', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x95, 0x00, 0x02, 0x00, 0x0a, 0x00, 0x00, 0x00]) }, 
			{ id: '11', label: 'In 11', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x95, 0x00, 0x02, 0x00, 0x0b, 0x00, 0x00, 0x00]) }, 
			{ id: '12', label: 'In 12', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x95, 0x00, 0x02, 0x00, 0x0c, 0x00, 0x00, 0x00]) }, 
			{ id: '30', label: 'Matte', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x95, 0x00, 0x02, 0x00, 0x11, 0x00, 0x00, 0x00]) },
			{ id: '31', label: 'Bars', 		cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x95, 0x00, 0x02, 0x00, 0x12, 0x00, 0x00, 0x00]) },
		];


		// 3200 Transistion Controls
		this.CHOICES_TRANS_3200 = [
			{ id: '0', label: 'Auto', 				cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '1', label: 'Cut', 				cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07, 0x00, 0x05, 0x00, 0x00, 0x00]) },
			{ id: '2', label: 'DSK Auto', 			cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x05, 0x00, 0x07, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '3', label: 'DSK Cut', 			cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x05, 0x00, 0x07, 0x00, 0x05, 0x00, 0x00, 0x00]) },
			{ id: '4', label: 'Mix', 				cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x96, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '5', label: 'Wipe', 				cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x96, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '6', label: 'Clip', 				cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x96, 0x00, 0x02, 0x00, 0x02, 0x00, 0x00, 0x00]) },
			{ id: '15', label: 'DVE Trans', 		cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x96, 0x00, 0x02, 0x00, 0x03, 0x00, 0x00, 0x00]) },
			{ id: '7', label: 'NORM REV ON', 		cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x93, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '8', label: 'NORM REV OFF', 		cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x93, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '9', label: 'REV ON', 			cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x92, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '10', label: 'REV OFF', 			cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x92, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '11', label: 'TRANS PVW ON', 		cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x91, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '12', label: 'TRANS PVW OFF', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x91, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '13', label: 'KEY PRIORITY ON', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x90, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '14', label: 'KEY PRIORITY OFF', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x90, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
		];

	    // 3200 Fade to Black
		this.CHOICES_FTB_3200 = [
			{ id: '0', label: 'FTB ENABLE ON', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xc3, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '1', label: 'FTB ENABLE OFF', cmd: new Buffer([0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xc3, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0a, 0x00, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '2', label: 'FTB', 			cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0a, 0x00, 0x07, 0x00, 0x01, 0x00, 0x00, 0x00]) },
		];

		////1200////

		// Switch 1200 Program Bus
		this.CHOICES_SWITCH_PGM_1200 = [
			{ id: '0', label: 'Black', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x56, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '1', label: 'In 1', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x56, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '2', label: 'In 2', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x56, 0x00, 0x02, 0x00, 0x02, 0x00, 0x00, 0x00]) },
			{ id: '3', label: 'In 3', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x56, 0x00, 0x02, 0x00, 0x03, 0x00, 0x00, 0x00]) },
			{ id: '4', label: 'In 4', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x56, 0x00, 0x02, 0x00, 0x04, 0x00, 0x00, 0x00]) },
			{ id: '5', label: 'In 5', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x56, 0x00, 0x02, 0x00, 0x05, 0x00, 0x00, 0x00]) },
			{ id: '6', label: 'In 6', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x56, 0x00, 0x02, 0x00, 0x06, 0x00, 0x00, 0x00]) },
			{ id: '30', label: 'Matte', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x56, 0x00, 0x02, 0x00, 0x11, 0x00, 0x00, 0x00]) },
			{ id: '31', label: 'Bars', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x56, 0x00, 0x02, 0x00, 0x12, 0x00, 0x00, 0x00]) },

		];

		// Switch 1200 Preview Bus
		this.CHOICES_SWITCH_PVW_1200 = [
			{ id: '0', label: 'Black', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x57, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '1', label: 'In 1', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x57, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '2', label: 'In 2', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x57, 0x00, 0x02, 0x00, 0x02, 0x00, 0x00, 0x00]) },
			{ id: '3', label: 'In 3', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x57, 0x00, 0x02, 0x00, 0x03, 0x00, 0x00, 0x00]) },
			{ id: '4', label: 'In 4', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x57, 0x00, 0x02, 0x00, 0x04, 0x00, 0x00, 0x00]) },
			{ id: '5', label: 'In 5', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x57, 0x00, 0x02, 0x00, 0x05, 0x00, 0x00, 0x00]) },
			{ id: '6', label: 'In 6', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x57, 0x00, 0x02, 0x00, 0x06, 0x00, 0x00, 0x00]) },
			{ id: '30', label: 'Matte', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x57, 0x00, 0x02, 0x00, 0x11, 0x00, 0x00, 0x00]) },
			{ id: '31', label: 'Bars', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x57, 0x00, 0x02, 0x00, 0x12, 0x00, 0x00, 0x00]) },
		];
		// Switch 1200 Key 1 Aux Bus
		this.CHOICES_SWITCH_KEY1_1200 = [
			{ id: '0', label: 'Black', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x14, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '1', label: 'In 1', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x14, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '2', label: 'In 2', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x14, 0x00, 0x02, 0x00, 0x02, 0x00, 0x00, 0x00]) },
			{ id: '3', label: 'In 3', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x14, 0x00, 0x02, 0x00, 0x03, 0x00, 0x00, 0x00]) },
			{ id: '4', label: 'In 4', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x14, 0x00, 0x02, 0x00, 0x04, 0x00, 0x00, 0x00]) },
			{ id: '5', label: 'In 5', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x14, 0x00, 0x02, 0x00, 0x05, 0x00, 0x00, 0x00]) },
			{ id: '6', label: 'In 6', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x14, 0x00, 0x02, 0x00, 0x06, 0x00, 0x00, 0x00]) },
			{ id: '30', label: 'Matte', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x14, 0x00, 0x02, 0x00, 0x11, 0x00, 0x00, 0x00]) },
			{ id: '31', label: 'Bars', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x14, 0x00, 0x02, 0x00, 0x12, 0x00, 0x00, 0x00]) },
		];
		// Switch 1200 Key 2 Aux Bus
		this.CHOICES_SWITCH_KEY2_1200 = [
			{ id: '0', label: 'Black', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x32, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '1', label: 'In 1', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x32, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '2', label: 'In 2', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x32, 0x00, 0x02, 0x00, 0x02, 0x00, 0x00, 0x00]) },
			{ id: '3', label: 'In 3', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x32, 0x00, 0x02, 0x00, 0x03, 0x00, 0x00, 0x00]) },
			{ id: '4', label: 'In 4', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x32, 0x00, 0x02, 0x00, 0x04, 0x00, 0x00, 0x00]) },
			{ id: '5', label: 'In 5', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x32, 0x00, 0x02, 0x00, 0x05, 0x00, 0x00, 0x00]) },
			{ id: '6', label: 'In 6', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x32, 0x00, 0x02, 0x00, 0x06, 0x00, 0x00, 0x00]) },
			{ id: '30', label: 'Matte', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x32, 0x00, 0x02, 0x00, 0x11, 0x00, 0x00, 0x00]) },
			{ id: '31', label: 'Bars', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x32, 0x00, 0x02, 0x00, 0x12, 0x00, 0x00, 0x00]) },
		];
		// Switch 1200 DSK 1 Aux Bus
		this.CHOICES_SWITCH_DSK1_1200 = [
			{ id: '0', label: 'Black', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x5c, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '1', label: 'In 1', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x5c, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '2', label: 'In 2', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x5c, 0x00, 0x02, 0x00, 0x02, 0x00, 0x00, 0x00]) },
			{ id: '3', label: 'In 3', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x5c, 0x00, 0x02, 0x00, 0x03, 0x00, 0x00, 0x00]) },
			{ id: '4', label: 'In 4', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x5c, 0x00, 0x02, 0x00, 0x04, 0x00, 0x00, 0x00]) },
			{ id: '5', label: 'In 5', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x5c, 0x00, 0x02, 0x00, 0x05, 0x00, 0x00, 0x00]) },
			{ id: '6', label: 'In 6', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x5c, 0x00, 0x02, 0x00, 0x06, 0x00, 0x00, 0x00]) },
			{ id: '30', label: 'Matte', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x5c, 0x00, 0x02, 0x00, 0x11, 0x00, 0x00, 0x00]) },
			{ id: '31', label: 'Bars', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x5c, 0x00, 0x02, 0x00, 0x12, 0x00, 0x00, 0x00]) },
		];
		// Switch 1200 DSK 2 Aux Bus
		this.CHOICES_SWITCH_DSK2_1200 = [
			{ id: '0', label: 'Black', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6e, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '1', label: 'In 1', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6e, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '2', label: 'In 2', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6e, 0x00, 0x02, 0x00, 0x02, 0x00, 0x00, 0x00]) },
			{ id: '3', label: 'In 3', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6e, 0x00, 0x02, 0x00, 0x03, 0x00, 0x00, 0x00]) },
			{ id: '4', label: 'In 4', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6e, 0x00, 0x02, 0x00, 0x04, 0x00, 0x00, 0x00]) },
			{ id: '5', label: 'In 5', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6e, 0x00, 0x02, 0x00, 0x05, 0x00, 0x00, 0x00]) },
			{ id: '6', label: 'In 6', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6e, 0x00, 0x02, 0x00, 0x06, 0x00, 0x00, 0x00]) },
			{ id: '30', label: 'Matte', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6e, 0x00, 0x02, 0x00, 0x11, 0x00, 0x00, 0x00]) },
			{ id: '31', label: 'Bars', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6e, 0x00, 0x02, 0x00, 0x12, 0x00, 0x00, 0x00]) },
		];
		// 1200 Transistion Controls
		this.CHOICES_TRANS_1200 = [
			{ id: '0', label: 'Auto', 				cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '1', label: 'Cut', 				cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07, 0x00, 0x05, 0x00, 0x00, 0x00]) },
			{ id: '2', label: 'DSK Auto', 			cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x05, 0x00, 0x07, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '3', label: 'DSK Cut', 			cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x05, 0x00, 0x07, 0x00, 0x05, 0x00, 0x00, 0x00]) },
			{ id: '4', label: 'Mix', 				cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x58, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '5', label: 'Wipe', 				cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x58, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '6', label: 'Clip', 				cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x58, 0x00, 0x02, 0x00, 0x02, 0x00, 0x00, 0x00]) },
			{ id: '7', label: 'NORM REV ON', 		cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x55, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '8', label: 'NORM REV OFF', 		cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x55, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '9', label: 'REV ON', 			cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x54, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '10', label: 'REV OFF', 			cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x54, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '11', label: 'TRANS PVW ON', 		cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x53, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '12', label: 'TRANS PVW OFF', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x53, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '13', label: 'kEY PRIORITY ON', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x52, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '14', label: 'KEY PRIORITY OFF', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x52, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
		];
		// 1200 Fade to Black
		this.CHOICES_FTB_1200 = [
			{ id: '0', label: 'FTB ENABLE ON', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x85, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '1', label: 'FTB ENABLE OFF', cmd: new Buffer([0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x85, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0a, 0x00, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '2', label: 'FTB', 			cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0a, 0x00, 0x07, 0x00, 0x01, 0x00, 0x00, 0x00]) },
		];
		// 1200 Keyer
		this.CHOICES_KEYER_1200 = [
			{ id: '0', label: 'DSK 1 PGM ON', 	cmd: new Buffer([0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x5b, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00, 0x7f, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '1', label: 'DSK 1 PGM OFF', 	cmd: new Buffer([0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x5b, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x7f, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '2', label: 'DSK 1 PVW ON', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x7f, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '3', label: 'DSK 1 PVW OFF', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x7f, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },

			{ id: '4', label: 'DSK 2 PGM ON', 	cmd: new Buffer([0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6d, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00, 0x7f, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '5', label: 'DSK 2 PGM OFF', 	cmd: new Buffer([0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6d, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x7f, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '6', label: 'DSK 2 PVW ON', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '7', label: 'DSK 2 PVW OFF', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },

			{ id: '8', label: 'KEY 1 PGM ON', 	cmd: new Buffer([0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x13, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00, 0x7f, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '9', label: 'KEY 1 PGM OFF', 	cmd: new Buffer([0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x13, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x7f, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '10', label: 'KEY 1 PVW ON', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x50, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '11', label: 'KEY 1 PVW OFF', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x50, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },

			{ id: '12', label: 'KEY 2 PGM ON', 	cmd: new Buffer([0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x31, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00, 0x7f, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '13', label: 'KEY 2 PGM OFF', cmd: new Buffer([0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x31, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x7f, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '14', label: 'KEY 2 PVW ON', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x51, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '15', label: 'KEY 2 PVW OFF', cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x51, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00]) },
		];

		// 1200 User
		this.CHOICES_USER_1200 = [
			{ id: '0', label: 'User 1', cmd: new Buffer([0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x00, 0x08, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '1', label: 'User 2', cmd: new Buffer([0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08, 0x00, 0x02, 0x00, 0x00, 0x00, 0x01, 0x00, 0x08, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '2', label: 'User 3', cmd: new Buffer([0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08, 0x00, 0x03, 0x00, 0x00, 0x00, 0x01, 0x00, 0x08, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '3', label: 'User 4', cmd: new Buffer([0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08, 0x00, 0x04, 0x00, 0x00, 0x00, 0x01, 0x00, 0x08, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '4', label: 'User 5', cmd: new Buffer([0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08, 0x00, 0x05, 0x00, 0x00, 0x00, 0x01, 0x00, 0x08, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '5', label: 'User 6', cmd: new Buffer([0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08, 0x00, 0x06, 0x00, 0x00, 0x00, 0x01, 0x00, 0x08, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '6', label: 'User 7', cmd: new Buffer([0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08, 0x00, 0x07, 0x00, 0x00, 0x00, 0x01, 0x00, 0x08, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '7', label: 'User 8', cmd: new Buffer([0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x08, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '8', label: 'User 9', cmd: new Buffer([0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08, 0x00, 0x09, 0x00, 0x00, 0x00, 0x01, 0x00, 0x08, 0x00, 0x01, 0x00, 0x00, 0x00]) },

		];
		// 1200 Streamer
		this.CHOICES_STREAMER_1200 = [
			{ id: '0', label: 'Streamer Start', 	cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x0f, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '0', label: 'Streamer Stop', 		cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x0f, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '0', label: 'Full', 				cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0x00, 0x0c, 0x00, 0x00, 0x00, 0x00, 0x00]) },
			{ id: '0', label: 'Half', 				cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0x00, 0x0c, 0x00, 0x01, 0x00, 0x00, 0x00]) },
			{ id: '0', label: 'Quarter',			cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0x00, 0x0c, 0x00, 0x02, 0x00, 0x00, 0x00]) },
			{ id: '0', label: 'Sixth', 				cmd: new Buffer([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0x00, 0x0c, 0x00, 0x03, 0x00, 0x00, 0x00]) },
		];

		this.CONFIG_MODEL = {
			se1200mu: { id: 'se1200mu', label: 'SE-1200MU', pgm: this.CHOICES_SWITCH_PGM_1200, pvw: this.CHOICES_SWITCH_PVW_1200, key1: this.CHOICES_SWITCH_KEY1_1200, key2: this.CHOICES_SWITCH_KEY2_1200, dsk1: this.CHOICES_SWITCH_DSK1_1200, dsk2: this.CHOICES_SWITCH_DSK2_1200, trans: this.CHOICES_TRANS_1200, ftb: this.CHOICES_FTB_1200, keyer: this.CHOICES_KEYER_1200, user: this.CHOICES_USER_1200, streamer: this.CHOICES_STREAMER_1200 },
			se3200: { id: 'se3200', label: 'SE-3200', pgm: this.CHOICES_SWITCH_PGM_3200, pvw: this.CHOICES_SWITCH_PVW_3200, key1: this.CHOICES_SWITCH_KEY1_1200, key2: this.CHOICES_SWITCH_KEY2_1200, dsk1: this.CHOICES_SWITCH_DSK1_1200, dsk2: this.CHOICES_SWITCH_DSK2_1200, trans: this.CHOICES_TRANS_3200, ftb: this.CHOICES_FTB_3200, keyer: this.CHOICES_KEYER_1200, user: this.CHOICES_USER_1200, streamer: this.CHOICES_STREAMER_1200 },

		};

		this.CHOICES_MODEL = Object.values(this.CONFIG_MODEL);
		// Sort alphabetical
		this.CHOICES_MODEL.sort(function (a, b) {
			var x = a.label.toLowerCase();
			var y = b.label.toLowerCase();
			if (x < y) { return -1; }
			if (x > y) { return 1; }
			return 0;
		});

		if (this.config.modelID !== undefined) {
			this.model = this.CONFIG_MODEL[this.config.modelID];
		}
		else {
			this.config.modelID = 'se1200mu';
			this.model = this.CONFIG_MODEL['se1200mu'];
		}

		this.actions()
	}

	actions(system) {
		this.setActions(this.getActions());
	}

	action(action) {
		let cmd;
		let element
		let id = action.action
		let options = action.options;

		const lf = '\u000a';

		switch (id) {
			case 'switch_pgm':
				element = this.model.pgm.find(element => element.id === options.switchpgm);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'switch_pvw':
				element = this.model.pvw.find(element => element.id === options.switchpvw);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'switch_key1':
				element = this.model.key1.find(element => element.id === options.switchkey1);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'switch_key2':
				element = this.model.key2.find(element => element.id === options.switchkey2);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'switch_dsk1':
				element = this.model.dsk1.find(element => element.id === options.switchdsk1);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'switch_dsk2':
				element = this.model.dsk2.find(element => element.id === options.switchdsk2);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'trans':
				element = this.model.trans.find(element => element.id === options.trans);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'ftb':
				element = this.model.ftb.find(element => element.id === options.ftb);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'keyer':
				element = this.model.keyer.find(element => element.id === options.keyer);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'user':
				element = this.model.user.find(element => element.id === options.user);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'streamer':
				element = this.model.streamer.find(element => element.id === options.streamer);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
		}

		if (cmd !== undefined) {
			if (this.socket !== undefined && this.socket.connected) {
				this.socket.send(cmd);
			} else {
				debug('Socket not connected :(');
			}

		}
	}

	// Return config fields for web config
	config_fields() {

		return [
			{
				type: 'text',
				id: 'info',
				width: 12,
				label: 'Information',
				value: 'This module will control a Datavideo vision mixer'
			},
			{
				type: 'textinput',
				id: 'host',
				label: 'IP Address',
				width: 6,
				default: '192.168.1.101',
				regex: this.REGEX_IP
			},
			{
				type: 'dropdown',
				id: 'port',
				label: 'Port',
				width: 4,
				choices: this.CHOICES_PORT,
				default: '5005',
			},
			{
				type: 'dropdown',
				id: 'modelID',
				label: 'Model',
				width: 6,
				choices: this.CHOICES_MODEL,
				default: 'se1200mu'
			}
		]
	}

	// When module gets deleted
	destroy() {
		if (this.socket !== undefined) {
			this.socket.destroy();
		}

		debug('destroy', this.id);
	}

	init() {
		debug = this.debug;
		log = this.log;

		this.initTCP();
	}

	initTCP() {
		if (this.socket !== undefined) {
			this.socket.destroy();
			delete this.socket;
		}

		if (this.config.port === undefined) {
			this.config.port = 5005;
		}

		if (this.config.host) {
			this.socket = new tcp(this.config.host, this.config.port);

			this.socket.on('status_change', (status, message) => {
				this.status(status, message);
			});

			this.socket.on('error', (err) => {
				debug('Network error', err);
				this.log('error', 'Network error: ' + err.message);
			});

			this.socket.on('connect', () => {
				debug('Connected');
			});

			// if we get any data, display it to stdout
			this.socket.on('data', (buffer) => {

				//From my interpretation of the protocol we must reply with every packet we recieve, including null packets
				//So we send back the buffer, I could be wrong and we may be able to just send the null packet back.
				//This keeps us in sync with the realtime protocol (and sync'd with changes from other controllers) and should allow implementation of feedback
				this.socket.send(buffer);

				//var indata = buffer.toString('hex');
				//future feedback can be added here
				///console.log(indata);
				
				//Filter the null packet from the console log
				let null_packet = new Buffer([0x08,0x00,0x00,0x00,0x00,0x00,0x00,0x00]);
				if(!buffer.equals(null_packet)){
					console.log('Buffer:', buffer);
				}
			});

		}
	}

	updateConfig(config) {
		var resetConnection = false;

		if (this.config.host != config.host) {
			resetConnection = true;
		}

		this.config = config;

		this.actions();

		if (resetConnection === true || this.socket === undefined) {
			this.initTCP();
		}
	}
}

exports = module.exports = instance;
