const news = new Api;

window.addEventListener('load', (event) => {
    news.getNews()
    .then(data => {
        const li = data.news.response.docs
        li.forEach(article => {
            if (article.multimedia.length != 0) {
                console.log(article.headline.main);
                const preurl = "http://static01.nyt.com/";
                let imgurl = article.multimedia[0].url;
                let img = preurl + imgurl;
                let redirect = article.web_url;
                $("#news").append(`
                    <div class="row">
                        <div class="col-sm-6 col-xs-12 mb-3 mt-3 ms-2">
                            <img class="photo" src="${img}">
                        </div>
                        <div class="col-sm-5 col-xs-12 pt-3 box">
                            <h3>${article.headline.main}</h3>
                            <h6>${article.byline.original}<h6>
                            <button class="abstract" style="display: block">Abstract</button>
                            <p class="particle hideText">${article.abstract}</p>
                            <a href=${redirect}>Visit the Original Article</a>
                        </div>
                    <div>`)
            }
        });
    }).then(()=>{
        $(".abstract").click(function () {
            $(this).siblings(".particle").removeClass("hideText");
        });
    });
});


