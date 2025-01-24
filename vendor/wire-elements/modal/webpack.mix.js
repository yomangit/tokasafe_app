const mix = require('laravel-mix');

mix.js('resources/js/modal.js', 'public/').js('resources/js/flatpicker.js', 'public/')
    .postCss("resources/css/modal.css", "public/", [
        require("tailwindcss"),
    ]);
