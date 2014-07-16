module.exports = function (grunt) {
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		clean: {
			dist: ['bin']
		},
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
                        src: ['js/jquery.js', 'js/foundation.min.js', 
                        'bower_components/modernizr/modernizr.js', 'bower_components/angular/angular.min.js', 
                        'bower_components/angular-route/angular-route.min.js', 'bower_components/tweenlite/TweenLite.min.js',
                        'js/app.js', 'js/modules.js', 'js/configs.js',
                        'js/general/changeBackgroundDirective.js', 'js/general/generalFactory.js', 'js/general/generalDirective.js', 'js/general/generalCtrl.js',
                        'js/audio/*.js'], 
                        dest: 'js/<%= pkg.name %>.js'
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
				files: 'js/**/*.js',
				tasks: ['concat']
			}
		}
	});

	//plugins
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//tasks
	grunt.registerTask('default', ['clean', 'sass', 'copy', 'concat']);
	grunt.registerTask('dev', ['sass']);
}