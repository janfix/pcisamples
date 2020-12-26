module.exports = function (grunt) {
    'use strict';

    var sass    = grunt.config('sass') || {};
    var watch   = grunt.config('watch') || {};
    var notify  = grunt.config('notify') || {};
    var root    = grunt.option('root') + '/pciSamples/views/';

    sass.pciSamples = {
        options : {},
        files : {}
    };
    sass.pciSamples.files[root + 'js/pciCreator/dev/textReaderInteraction/creator/css/textReaderInteraction.css'] = root + 'js/pciCreator/dev/textReaderInteraction/creator/scss/textReaderInteraction.scss';
    sass.pciSamples.files[root + 'js/pciCreator/dev/textReaderInteraction/runtime/css/textReaderInteraction.css'] = root + 'js/pciCreator/dev/textReaderInteraction/runtime/scss/textReaderInteraction.scss';

    watch.pciSamplessass = {
        files : [
            root + 'scss/**/*.scss',
            root + 'js/pciCreator/dev/**/*.scss'
        ],
        tasks : ['sass:pciSamples', 'notify:pciSamplessass'],
        options : {
            debounceDelay : 1000
        }
    };

    notify.pciSamplessass = {
        options: {
            title: 'Grunt SASS',
            message: 'SASS files compiled to CSS'
        }
    };

    grunt.config('sass', sass);
    grunt.config('watch', watch);
    grunt.config('notify', notify);

    grunt.registerTask('pciSamplessass', ['sass:pciSamples']);
};