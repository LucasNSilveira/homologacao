var url = 'https://newsapi.org/v2/everything?'+
        'q=keyword&apiKey=7780dbf359384b2ab9ebd50ca6bec2bd';

async function fetchData(){
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data.articles;
    }
    catch (error){
        console.log('Error', error);
    }
}
fetchData().then(articles => {
    articles.forEach(article => {
        console.log("Title: ", article.title);
        console.log("Author: ", article.author);
        console.log("Description: ", article.description);
        console.log("-------------------------------------");
    });
});