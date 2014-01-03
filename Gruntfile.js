module.exports = function (grunt) {
	pkg: grunt.file.readJSON('package.json'),
	grunt.initConfig({
		copy: {
			target: {
				files: {
					'bin/': ['css/**']
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
		}
	});

	//plugins
	grunt.loadNpmTasks('grunt-contrib');

	//tasks
	grunt.registerTask('default', ['copy']);
}