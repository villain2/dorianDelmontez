module.exports = function (grunt) {
	pkg: grunt.file.readJSON('package.json'),
	grunt.initConfig({
		copy: {
			target: {
				files: {
					'bin/': ['css/**', 'img/**', 'json/**', 'index.html']
				}
			}
		},
		csslint: {
			strict: {
				options: {
					import: 2
				},
				src: ['css/*.css']
			},
			lax: {
				options: {
					import: false
				},
				src: ['css/*.css']
			}
		},
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['js/**/*.js'],
				dest: 'bin/js/dorianDelmontez.js'
			}
		}
	});

	//plugins
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-concat');

	//tasks
	grunt.registerTask('default', ['copy', 'concat']);
}