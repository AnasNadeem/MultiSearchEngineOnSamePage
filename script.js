// // create function that will bypass x-frame-options
// function bypassXFrameOptions() {
//     // get all iframes
//     var iframes = document.getElementsByTagName('iframe');
//     // loop through all iframes
//     for (var i = 0; i < iframes.length; i++) {
//         // get iframe src
//         var src = iframes[i].getAttribute('src');
//         // check if src is not null and does not contain 'http'
//         if (src != null && src.indexOf('http') == -1) {
//             // set iframe src to http:// + src
//             iframes[i].setAttribute('src', 'http://' + src);
//         }
//     }
// }
// // call function
// bypassXFrameOptions();

const search = document.getElementById('search');
        search.addEventListener('keyup', function(e) {
            const searchValue = e.target.value;
            const searchEngines = document.querySelectorAll('.search-engine iframe');
            searchEngines.forEach(function(searchEngine) {
                searchEngine.src = searchEngine.src.split('?')[0] + '?q=' + searchValue;
            });
        });

        <script async src="https://cse.google.com/cse.js?cx=e402f9d003efc4216">
</script>
<div class="gcse-search"></div>