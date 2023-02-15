const block = document.querySelector('.app__blocks')

const displayData = (data) => {
    
    data.map((curr)=>{

    const {liked} = curr
    let likedImage = liked ? 'heart-red.svg' : 'heart-black.svg'

    let app__block =
    `<div class="app__blocks_block">
            <div>
                <img src=../Images/${curr.image} alt="">
            </div>
            <div class="block__timestamp">
                <p>${curr.date}</p>
                <p>${curr.readingTime}</p>
            </div>
            <div class="block__description">
                <h2>${curr.title}</h2>
                <p>${curr.description}</p>
            </div>
            <hr width="90%">
            <div class="block__icons">
                <div class="block__clap">
                    <img src="../Icons/clapping.svg" alt="">
                    <p>${curr.claps}</p>
                </div>
                <div>
                   <img src="../Icons/${likedImage}" alt=""> 
                </div>
            </div>
    </div>`

    block.insertAdjacentHTML("afterbegin", app__block);
})
}

const fetchData = async() => {
    let data = await fetch("../mockData/index.json")
    let res = await data.json()
    displayData(res)
}

fetchData()

