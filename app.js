var url = 'https://newsapi.org/v2/everything?'+
        'q=keyword&apiKey=7780dbf359384b2ab9ebd50ca6bec2bd';

async function fetchData(){
    try {
        let response = await fetch(url);
        let data = await response.json();
        
        let infos = data.articles.map(article => {
            return {
                author: article.author,
                title: article.title,
                description: article.description
            };
        });

        return {
            articles: infos};
    }
    catch (error){
        console.log('Error', error);
    }
}



fetchData().then(articlesObject => {
    console.log(articlesObject);
});