async function apiCall(url) {


    try {
        let res = await fetch(url);
        let data = await res.json();

        return data;
    }
    catch (error) {
    console.log('error:', error)

    }


}


function appendArticles(articles, main) {

    articles.forEach(ele => {
        let maindiv = document.createElement("div")
        maindiv.id = "maindiv";

        let div1 = document.createElement("div")
        div1.id = "div1";

        let img = document.createElement("img");
        img.src = ele.urlToImage;
        img.id = "imgd"

        let div2 = document.createElement("div")
        div2.id = "div2";

        let title = document.createElement("p")
        title.innerText = ele.title;

        let description = document.createElement("p")
        description.innerText = ele.description;

        let content = document.createElement("p")
        title.innerText = ele.content;

        div1.append(img);

        div2.append(title,description,content);

        maindiv.append(div1,div2);

        main.append(maindiv);
    })

}

export { apiCall, appendArticles }