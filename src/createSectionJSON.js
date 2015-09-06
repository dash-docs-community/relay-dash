var cheerio = require('cheerio');
var fs = require('fs');

// get base file to itterate over
var basePath = __dirname + '/../Contents/Resources/Documents/relay/docs/getting-started.html';
var baseSrc = fs.readFileSync(basePath, 'utf8');
var $ = cheerio.load(baseSrc);
var pageNamesArray = [];
var $section = $('.nav-docs-section');
var path = __dirname + '/../src/indexedFiles.js';

$section.each(function(i, elem){

    var $sectionHeader = $(this).children('h3').text();
    var $sectionLink = $(this).children('ul').children('li').children('a');

    $sectionLink.each(function(i, elem){
        var page = {};

        // $(this).attr('href') returns ie.(guides-containers.html#content)
        // substring removes last 13 characters '.html#content' from href.
        page.name = $(this).attr('href').substring(0, $(this).attr('href').length - 13);

        // set the Dash types based on the doc headers.
        switch ($sectionHeader) {
            case 'API Reference':
                page.type = 'Library';
                page.toc = 'Property';
                break;
            case 'Interfaces':
                page.type = 'Interface';
                page.toc = 'Property';
                break;
            default:
                page.type = 'Guides';
                page.toc = 'Section';
        };
        pageNamesArray.push(page);
    });
});

fs.writeFile(path, 'var indexedFiles = ' + JSON.stringify(pageNamesArray, null, 4) + ';\n\nmodule.exports = indexedFiles;', 'utf8');