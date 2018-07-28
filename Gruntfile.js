'use strict';

module.exports = function (grunt) {

    // Show elapsed time after tasks run to visualize performance
    require('time-grunt')(grunt);
    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // shell commands for use in Grunt tasks
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: 'jekyll serve'
            }
        },
        "jsbeautifier": {
            files: ["_site/**/*.html"],
            options: {
                "html": {
                    "allowed_file_extensions": ["htm", "html", "xhtml", "shtml", "xml", "svg"],
                    "brace_style": "collapse", // [collapse|expand|end-expand|none] Put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are
                    "end_with_newline": false, // End output with newline
                    "indent_char": " ", // Indentation character
                    "indent_handlebars": false, // e.g. {{#foo}}, {{/foo}}
                    "indent_inner_html": false, // Indent <head> and <body> sections
                    "indent_scripts": "normal", // [keep|separate|normal]
                    "indent_size": 4, // Indentation size
                    "max_preserve_newlines": 0, // Maximum number of line breaks to be preserved in one chunk (0 disables)
                    "preserve_newlines": true, // Whether existing line breaks before elements should be preserved (only works before elements, not inside tags or for text)
                    "unformatted": ["sub", "sup", "em", "strong", "i", "u", "strike", "big", "pre"], // List of tags that should not be reformatted
                    "wrap_line_length": 0 // Lines should wrap at next opportunity after this number of characters (0 disables)
                },
                "css": {
                    "allowed_file_extensions": ["css", "scss", "sass", "less"],
                    "end_with_newline": false, // End output with newline
                    "indent_char": " ", // Indentation character
                    "indent_size": 4, // Indentation size
                    "newline_between_rules": true, // Add a new line after every css rule
                    "selector_separator": " ",
                    "selector_separator_newline": true // Separate selectors with newline or not (e.g. "a,\nbr" or "a, br")
                },
                "js": {
                    "allowed_file_extensions": ["js", "json", "jshintrc", "jsbeautifyrc"],
                    "brace_style": "collapse", // [collapse|expand|end-expand|none] Put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are
                    "break_chained_methods": false, // Break chained method calls across subsequent lines
                    "e4x": false, // Pass E4X xml literals through untouched
                    "end_with_newline": false, // End output with newline
                    "indent_char": " ", // Indentation character
                    "indent_level": 0, // Initial indentation level
                    "indent_size": 4, // Indentation size
                    "indent_with_tabs": false, // Indent with tabs, overrides `indent_size` and `indent_char`
                    "jslint_happy": false, // If true, then jslint-stricter mode is enforced
                    "keep_array_indentation": false, // Preserve array indentation
                    "keep_function_indentation": false, // Preserve function indentation
                    "max_preserve_newlines": 0, // Maximum number of line breaks to be preserved in one chunk (0 disables)
                    "preserve_newlines": true, // Whether existing line breaks should be preserved
                    "space_after_anon_function": false, // Should the space before an anonymous function's parens be added, "function()" vs "function ()"
                    "space_before_conditional": true, // Should the space before conditional statement be added, "if(true)" vs "if (true)"
                    "space_in_empty_paren": false, // Add padding spaces within empty paren, "f()" vs "f( )"
                    "space_in_paren": false, // Add padding spaces within paren, ie. f( a, b )
                    "unescape_strings": false, // Should printable characters in strings encoded in \xNN notation be unescaped, "example" vs "\x65\x78\x61\x6d\x70\x6c\x65"
                    "wrap_line_length": 0 // Lines should wrap at next opportunity after this number of characters (0 disables)
                }
            }
        },
        copy: {
          files: {
              cwd: 'assets/_scss',  // set working folder / root to copy
              src: '**/*',           // copy all files and subfolders
              dest: '_site/assets/sass',    // destination folder
              expand: true           // required when using cwd
            },
         }

    });

    // Register the grunt serve task
    grunt.registerTask('serve', [
        'serve'
    ]);

    // Register the grunt build task
    grunt.registerTask('build', [
        'shell:jekyllBuild',
        'jsbeautifier',
        'copy'
    ]);

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.loadNpmTasks("grunt-jsbeautifier");

    // Register build as the default task fallback
    grunt.registerTask('default', 'build');

};
