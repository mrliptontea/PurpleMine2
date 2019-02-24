module.exports = function (grunt) {
  grunt.initConfig({
    src: 'src/',

    sass: {
      options: {
        implementation: require('node-sass'),
        sourceMap: false,
        outputStyle: 'compressed'
      },

      theme: {
        files: {
          'stylesheets/application.css': '<%= src %>sass/application.scss'
        }
      },

      plugins: {
        files: [
          {
            expand: true,
            cwd: '<%= src %>sass/plugins/',
            src: '**/*.scss',
            dest: 'plugins/',
            ext: '.css',
            extDot: 'last'
          }
        ]
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer')({ browsers: 'last 2 versions' })
        ]
      },

      all: {
        src: [
          'stylesheets/*.css',
          'plugins/**/*.css'
        ]
      }
    },

    uglify: {
      theme: {
        src: [
          '<%= src %>javascripts/modules/*.js',
          '<%= src %>javascripts/theme.js'
        ],
        dest: 'javascripts/theme.js'
      }
    },

    watch: {
      css: {
        files: ['<%= src %>sass/**/*.scss'],
        tasks: ['css']
      },

      js: {
        files: ['<%= src %>javascripts/**/*.js'],
        tasks: ['js']
      }
    }
  })

  grunt.loadNpmTasks('grunt-sass')
  grunt.loadNpmTasks('grunt-postcss')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-uglify')

  grunt.registerTask('css', ['sass', 'postcss'])
  grunt.registerTask('js', ['uglify'])

  grunt.registerTask('default', ['css', 'js'])
}
