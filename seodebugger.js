javascript:
if (window.$) {
    var body = document.getElementsByTagName('body').item(0);
    var script1 = document.createElement('script');
    script1.src = 'https://code.jquery.com/jquery-3.2.1.min.js';
    body.appendChild(script1);

    var title = $('title').text();
    var description = $("meta[name=description]").attr("content");
    var keyword = $("meta[name=keyword]").attr("content");
    var h1 = [];
    var h2 = [];
    var h3 = [];
    if ($('h1')) {
        $('h1').each(function () {
            h1.push($(this).text());
        });
    }
    if ($('h2')) {
        $('h2').each(function () {
            h2.push($(this).text());
        });
    }
    if ($('h3')) {
        $('h3').each(function () {
            h3.push($(this).text());
        });
    }
    var newWindow = window.open();
    var html = "<head></body><title>SEO Debuuger</title></head><body><div class=\"seo-table-window\"><div class=\"main-table\"><div class=\"title head-row\"><div class=\"column-title\">Title</div><div class=\"column-content\">" + title + "</div></div></div><div class=\"main-table\"><div class=\"description head-row\"><div class=\"column-title\">Description</div><div class=\"column-content\">" + description + "</div></div></div><div class=\"main-table\"><div class=\"description head-row\"><div class=\"column-title\">Keyword</div><div class=\"column-content\">" + keyword +"</div></div></div><div class=\"main-table\"><div class=\"h1 head-row\"><div class=\"column-title\">H1</div><div class=\"column-content\"> " + h1 + "</div></div></div><div class=\"main-table\"><div class=\"h2 head-row\"><div class=\"column-title\">H2</div><div class=\"column-content\">" + h2 + "</div></div></div><div class=\"main-table\"><div class=\"h3 head-row\"><div class=\"column-title\">H3</div><div class=\"column-content\">" + h3 + "</div></div></div></div></body><style>.seo-table-window {background-color: black;color: white;margin: 0;}.main-table {display: table;border-radius: 3px;box-sizing: border-box;position: relative;width: 100%;}.head-row {display: table-row;box-sizing: border-box;width: 100%;}.column-title {width: 200px;display: table-cell;border: 1px solid gray;}.column-content {word-break: break-all;border: 1px solid gray;}</style></html>";
    
    newWindow.document.write(html);
}