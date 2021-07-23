const mix = require("laravel-mix");
const path = require("path");
const WebpackShellPlugin = require("webpack-shell-plugin");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.js("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .webpackConfig({
        resolve: {
            alias: {
                "@": path.resolve("resources/js")
            }
        },
        output: {
            chunkFilename: "js/[name].js?id=[chunkhash]"
        },
        plugins: [
            new WebpackShellPlugin({
                onBuildStart: [
                    "php artisan lang:js resources/js/lang.js --no-lib --quiet"
                ],
                onBuildEnd: []
            })
        ]
    });
