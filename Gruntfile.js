module.exports = function (grunt) {
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

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
				dest: 'bin/js/<%= pkg.name %>.js'
			}
		},
		sass: {
			dist: {
				files: {
					'css/custom.css' : 'sass/custom.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});

	//plugins
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//tasks
	grunt.registerTask('default', ['copy', 'concat']);
	grunt.registerTask('dev', ['sass']);
}