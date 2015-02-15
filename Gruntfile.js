module.exports = function(grunt) {

  grunt.initConfig({
    src: "src/",

    sass: {
      options: {
        sourceMap: false,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'stylesheets/application.css': '<%= src %>sass/application.scss'
        }
      },
      redmine_backlogs: {
        files: {
          'plugins/redmine_backlogs/global.css':
            '<%= src %>sass/plugins/redmine_backlogs/global.scss',
          'plugins/redmine_backlogs/master_backlog.css':
            '<%= src %>sass/plugins/redmine_backlogs/master_backlog.scss',
          'plugins/redmine_backlogs/statistics.css':
            '<%= src %>sass/plugins/redmine_backlogs/statistics.scss',
          'plugins/redmine_backlogs/taskboard.css':
            '<%= src %>sass/plugins/redmine_backlogs/taskboard.scss'
        }
      }
    },

    uglify: {
      build: {
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
        files: ['<%= src %>javascripts/src/*.js'],
        tasks: ['js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask('css', ['sass']);
  grunt.registerTask('js', ['uglify']);

  grunt.registerTask('default', ['css', 'js']);
};