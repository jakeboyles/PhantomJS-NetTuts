var page = require('webpage').create(),
    username = 'jakeboyles',
    url = 'https://mobile.twitter.com/'+username+'/followers';

page.open(url, function (status) {

    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        var results = page.evaluate(function() {

            var list = document.querySelectorAll('.fullname');
            var followers = new Array();
            for (i = 0; i < list.length; i++) {
                title = list[i].innerText;
                followers.push(list[i].innerText);
            }
            return followers;
        });

        console.log(results.join('\n'));
    }
    phantom.exit();
});



