const portofolio = [
    {
        image: 'source/pic1.jpg',
        title: 'Lorem Ipsum',
        likes: '305',
        date: 'February 01, 2002',
        category: 'Website'
    },
    {
        image: 'source/pic2.jpg',
        title: 'Lorem Ipsum',
        likes: '305',
        date: 'February 01, 2002',
        category: 'Logo'
    },
    {
        image: 'source/pic3.jpg',
        title: 'Lorem Ipsum',
        likes: '305',
        date: 'February 01, 2002',
        category: 'App Design'
    },
    {
        image: 'source/pic4.jpg',
        title: 'Lorem Ipsum',
        likes: '305',
        date: 'February 01, 2002',
        category: 'Photo'
    },
    {
        image: 'source/pic5.jpg',
        title: 'Lorem Ipsum',
        likes: '305',
        date: 'February 01, 2002',
        category: 'App Design'

    },
    {
        image: 'source/pic6.jpg',
        title: 'Lorem Ipsum',
        likes: '305',
        date: 'February 01, 2002',
        category: 'Photo'
    },
    {
        image: 'source/pic3.jpg',
        title: 'Lorem Ipsum',
        likes: '305',
        date: 'February 01, 2002',
        category: 'Design'
    },
    {
        image: 'source/pic1.jpg',
        title: 'Lorem Ipsum',
        likes: '305',
        date: 'February 01, 2002',
        category: 'Logo'
    },
    {
        image: 'source/pic4.jpg',
        title: 'Lorem Ipsum',
        likes: '305',
        date: 'February 01, 2002',
        category: 'Logo'
    },
] 

const container = document.querySelector('.card-container');
const buttons = document.querySelectorAll('button');

function render(array) {
 array.forEach((el) => {   
    // card
    const card = document.createElement('div')
    card.classList.add('card')
    card.style.width = '18rem'
    //  img
    const img = document.createElement('img')
    img.src = el.image
    img.classList.add('card-img-top')
    img.alt = 'pic';
    // card body
    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    cardBody.classList.add('bg-info')
    cardBody.classList.add('d-flex') 
    cardBody.classList.add('justify-content-between')
    // div left
    const divLeft = document.createElement('div')
    // title
    const title = document.createElement('p')
    title.innerText = el.title
    // date
    const date = document.createElement('p')
    date.innerText = el.date 
    // div right
    const divRight = document.createElement('div')
    // likes
    const imgLikes = document.createElement('img')
    imgLikes.src = 'source/likes.png' 
    imgLikes.alt = 'iconn';
    // total likes
    const likes = document.createElement('p')
    likes.innerText = el.likes
    // anim
    const style = document.createElement('card')

   
    divLeft.append(title, date)
    divRight.append(imgLikes, likes)
    cardBody.append(divLeft, divRight,)
    card.append(img, cardBody);
    container.append(card);
 });
}; 

render(portofolio);

buttons.forEach((button) => {
    console.log(button.innerText)

    button.addEventListener('click', () => {
        let newPorto = [];

        if (button.innerText === 'All') {
            newPorto = portofolio
        } else {
            newPorto = portofolio.filter((el) => el.category === button.innerText)
        }
    container.innerHTML = ''
    render(newPorto)
    })
})
 