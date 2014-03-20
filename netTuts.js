var page = require('webpage').create(),
    url = 'http://code.tutsplus.com/';

page.open(url, function (status) {

    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        var results = page.evaluate(function() {

            var list = document.querySelectorAll('.posts__post-title');
            var listTwo = document.querySelectorAll('.posts__post-summary');
            var People = []
            var i;
            var title,content;

            function Article(title, content)
                {
                    this.title = title;
                    this.content = content;
                }

            for (i = 0; i < list.length; i++) {
                title = list[i].innerText;
                content = listTwo[i].innerText;
                People.push(new Article(title,content));
            }
            return People;
        });

        results.forEach(function(entry) {
        console.log(entry.title+'\n'+entry.content+'\n'+'\n'+'\n');
        });
    }
    phantom.exit();
});



