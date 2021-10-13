class Api {
    constructor() {
        this.api_key="c5f2565ec4da46c4f4239d5d1549ec63";
        this.api_key1="iEGyU5SzDICDYHr5PrvNsu7i47GToez0";
    }

    async getWeather() {
        const fetchWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Boston&appid=${this.api_key}`);
        const weather = await fetchWeather.json();
        return {
            weather
        }
    }


    async getNews() {
        const fetchNews = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Boston&api-key=${this.api_key1}`);
        const news = await fetchNews.json();
        return {
            news
        }
    }
}