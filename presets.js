exports.getPresets = function () {

	var presets = [

		{
			category: 'pgm-bus',
			label: 'In 1 PGM',
			bank: {
				style: 'text',
				text: `$(${this.config.label}:in1_name)`,
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'switch_pgm',
				options: {
					switchpgm: '1'
				}
			}],
			feedbacks: [{
				type: 'pgm_in',
				options: {
					pgm_in: '1'
				}
			}],
		},
		{
			category: 'pvw-bus',
			label: 'In 1 PVW',
			bank: {
				style: 'text',
				text: `$(${this.config.label}:in1_name)`,
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'switch_pvw',
				options: {
					switchpvw: '1'
				}
			}],
			feedbacks: [{
				type: 'pvw_in',
				options: {
					pvw_in: '1'
				}
			}],

		},
		{
			category: 'dsk-1-bus',
			label: 'In 1',
			bank: {
				style: 'text',
				text: `$(${this.config.label}:in1_name)`,
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'switch_dsk1',
				options: {
					switchdsk1: '1'
				}
			}],
			feedbacks: [{
				type: 'dsk1_in',
				options: {
					dsk1_in: '1'
				}
			}],
		},
		{
			category: 'key-1-bus',
			label: 'In 1',
			bank: {
				style: 'text',
				text: `$(${this.config.label}:in1_name)`,
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'switch_key1',
				options: {
					switchkey1: '1'
				}
			}],
			feedbacks: [{
				type: 'key1_in',
				options: {
					key1_in: '1'
				}
			}],
		},
		{
			category: 'transition',
			label: 'Mix',
			bank: {
				style: 'text',
				text: 'Mix',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'trans',
				options: {
					trans: '4'
				}
			}],
			feedbacks: [{
				type: 'trans_current',
				options: {
					trans: '0'
				}
			}],
		},
		{
			category: 'transition',
			label: 'Wipe',
			bank: {
				style: 'text',
				text: 'Wipe',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'trans',
				options: {
					trans: '5'
				}
			}],
			feedbacks: [{
				type: 'trans_current',
				options: {
					trans: '1'
				}
			}],
		},
		{
			category: 'transition',
			label: 'Clip',
			bank: {
				style: 'text',
				text: 'Clip',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'trans',
				options: {
					trans: '6'
				}
			}],
			feedbacks: [{
				type: 'trans_current',
				options: {
					trans: '2'
				}
			}],
		},
		{
			category: 'transition',
			label: 'DVE',
			bank: {
				style: 'text',
				text: 'DVE',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'trans',
				options: {
					trans: '15'
				}
			}],
			feedbacks: [{
				type: 'trans_current',
				options: {
					trans: '3'
				}
			}],
		},
		{
			category: 'transition',
			label: 'Auto',
			bank: {
				style: 'text',
				text: 'Auto',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'trans',
				options: {
					trans: '0'
				}
			}],
			feedbacks: [{
				type: 'tbar_state'
			}],
		},
		{
			category: 'transition',
			label: 'Cut',
			bank: {
				style: 'text',
				text: 'Cut',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'trans',
				options: {
					trans: '1'
				}
			}]
		},
		{
			category: 'transition',
			label: 'DSK Auto',
			bank: {
				style: 'text',
				text: 'DSK Auto',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'trans',
				options: {
					trans: '2'
				}
			}],
			feedbacks: [{
				type: 'dsk_tbar_state'
			}],
		},
		{
			category: 'transition',
			label: 'DSK Cut',
			bank: {
				style: 'text',
				text: 'DSK Cut',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'trans',
				options: {
					trans: '3'
				}
			}]
		},
		{
			category: 'audio',
			label: 'External',
			bank: {
				style: 'text',
				text: 'External',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'audio_src',
				options: {
					audio_src: '0'
				}
			}],
			feedbacks: [{
				type: 'audio_src',
				options: {
					audio_src: '0'
				}
			}],

		},
		{
			category: 'audio',
			label: 'Follow',
			bank: {
				style: 'text',
				text: 'Follow',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'audio_src',
				options: {
					audio_src: '1'
				}
			}],
			feedbacks: [{
				type: 'audio_src',
				options: {
					audio_src: '1'
				}
			}],

		},
		{
			category: 'audio',
			label: 'In 1',
			bank: {
				style: 'text',
				text: `$(${this.config.label}:in1_name)`,
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'audio_src',
				options: {
					audio_src: '2'
				}
			}],
			feedbacks: [{
				type: 'audio_src',
				options: {
					audio_src: '2'
				}
			}],

		},
		{
			category: 'user-load',
			label: 'User 1',
			bank: {
				style: 'text',
				text: 'User 1',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'loaduser',
				options: {
					userid: '1'
				}
			}],
			feedbacks: [{
				type: 'curr_user',
				options: {
					userid: '1'
				}
			}],

		},
		{
			category: 'keyer',
			label: 'DSK 1 PGM',
			bank: {
				style: 'text',
				text: 'DSK 1 PGM',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'keyer',
				options: {
					keyer: '0'
				}
			}],
			feedbacks: [{
				type: 'keyer_state',
				options: {
					keyer: '0'
				}
			}],

		},
		{
			category: 'keyer',
			label: 'DSK 1 PVW',
			bank: {
				style: 'text',
				text: 'DSK 1 PVW',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'keyer',
				options: {
					keyer: '2'
				}
			}],
			feedbacks: [{
				type: 'keyer_state',
				options: {
					keyer: '2'
				}
			}],

		},
		{
			category: 'transition',
			label: 'Background',
			bank: {
				style: 'text',
				text: 'Clip',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'trans_btn',
				options: {
					trans: '40'
				}
			}],
			feedbacks: [{
				type: 'trans_state',
				options: {
					trans: '40'
				}
			}],
		},
		{
			category: 'ftb',
			label: 'FTB Enable',
			bank: {
				style: 'text',
				text: 'FTB Enable',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'ftb',
				options: {
					trans: '0'
				}
			}],
			feedbacks: [{
				type: 'ftb_state',
				options: {
					trans: '0'
				}
			}],
		},
		{
			category: 'ftb',
			label: 'FTB',
			bank: {
				style: 'text',
				text: 'FTB',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'ftb',
				options: {
					ftb: '2'
				}
			}],
			feedbacks: [{
				type: 'ftb_state',
				options: {
					ftb: '2'
				}
			}],
		},
		{
			category: 'wipe',
			label: 'Wipe 1',
			bank: {
				style: 'text',
				text: 'Wipe 1',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'set_wipe',
				options: {
					wipe: '1'
				}
			}],
			feedbacks: [{
				type: 'wipe_state',
				options: {
					wipe: '1'
				}
			}],

		},
		{
			category: 'audio',
			label: 'SDI 1 Enable',
			bank: {
				style: 'text',
				text: 'SDI 1 Enable',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'audio',
				options: {
					audio: '10'
				}
			}],
			feedbacks: [{
				type: 'audio_state',
				options: {
					audio: '10'
				}
			}],

		},
	];

	return presets;
}