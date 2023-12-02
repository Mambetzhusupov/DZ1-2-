const newsBlock = document.querySelector('.news__wrapper')
const news = []

const displayNews = (data) => {
    data.forEach((newsCard) => {
        const cardNews = document.createElement('div')
        cardNews.classList.add('cardNews')
        cardNews.innerHTML = `
            <img src="data:image/jpeg;base64,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" alt="">
            <h3>${newsCard.title}</h3>
            <p>${newsCard.body}</p>
        `
        newsBlock.appendChild(cardNews)
    })
}
const request = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
        const data = await response.json()
        displayNews(data)
    }
    catch {
        console.error('Error!')
    }
}
request()
