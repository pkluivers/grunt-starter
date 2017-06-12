const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
	dynamic: {
		options: {
			optimizationLevel: 3,
			svgoPlugins: [{ removeViewBox: false }],
			use: [imageminMozjpeg()]
	    },
		files: [{
			expand: true,
			cwd: '<%= path_src %>img/',
			src: ['**/*.{png,jpg,gif,svg,jpeg,JPG}'],
			dest: '<%= path_public %>img/'
		}]
	}
}
