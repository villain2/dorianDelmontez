module.exports = function (grunt) {
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		copy: {
			target: {
				files: {
					'bin/': ['css/**', 'img/**', 'json/**', 'scripts/**', 'index.html']
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
				separator: '\n\n'
			},
			jsConcat: {
				files: [
					{
                        src: ['js/modernizr.js', 'js/foundation.min.js', 'js/jquery.js', 'js/libs/angular.min.js'], 
                        dest: 'bin/js/<%= pkg.name %>.js'
                    }
				],
			},
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
			},
			js: {
				files: '**/**/*.js',
				tasks: ['concat']
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
	grunt.registerTask('default', ['sass', 'copy', 'concat']);
	grunt.registerTask('dev', ['sass']);
}