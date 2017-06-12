module.exports = {
    prefix: {
        options: {
            processors: [
                require('autoprefixer')({ browsers: ['last 8 versions', 'ie 9'] })
            ]
        },
         src: '<%= path_public %>css/*.css'
    }
};