/*	VCO.Media.Sound
================================================== */

VCO.Media.Sound = VCO.Media.extend({

	includes: [VCO.Events],

	/*	Load the media
	================================================== */
	_loadMedia: function() {

		// Prepare audio element
		var audio = VCO.Dom.create('audio', null, this._el_content);
		audio.setAttribute('type', 'audio/mpeg'); // TODO
		audio.setAttribute('controls', 'controls');

		// Buffering the start has finished
		var self = this;
		audio.addEventListener('loadeddata', function(e) {
			self.onMediaLoaded();
		});

		// Inject the audio element
		this._el.content_item = audio;

		// Done!
		this.onLoaded();
	},

	/*	Stop the media
	================================================== */
	_stopMedia: function() {
		this._el.content_item.pause();
	}
});
