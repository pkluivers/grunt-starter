module.exports = {
	css: {
	  files: '<%= path_src %>scss/**/*.scss',
	  tasks: [ 'sass:src', 'postcss:prefix', 'scsslint' ],
	  options: { livereload: true }
	},
	scripts: {
		files: '<%= path_src %>js/**/*.js',
	  	tasks: [ 'uglify' ],
	  	options: { 
	  		livereload: true,
	  		spawn: false
	  	}
	},
	imagemin: {
		files: ['<%= path_src %>img/**/*.{png,jpg,gif,svg,jpeg,JPG}'],
		tasks: ['imagemin'],
		options: {
			spawn: false
		}
	}
}
