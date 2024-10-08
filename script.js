const button1 = document.getElementById("button1");
const container = document.getElementById("container");

button1.addEventListener("click", event => {

    if(container.style.display === "none"){
        container.style.display = "flex";
        button1.textContent = "Close";
    }
    else{
        container.style.display = "none";
        button1.textContent = "Show";
    }
});

const container2 = document.querySelector('#container2') 

let dataList = []

const add = () => {
    const firstName = document.getElementById('firstName')
    const channeLink = document.getElementById('channeLink')
    const imageUrl = document.getElementById('imageUrl')
    const status = document.getElementById('status')
    const channelDesc = document.getElementById('channelDesc')

    const newData = {
        id: dataList.length + 1,
        firstName: firstName.value,
        channeLink: channeLink.value,
        imageUrl: imageUrl.value,
        status: status.value,
        channelDesc: channelDesc.value,
    }

    dataList = [newData, ...dataList]

    container2.innerHTML=''
    dataList.map(item => {
        return(
            container2.innerHTML += `
            <div id=${item.id}>
                <div id="content">
                <img src=${item.imageUrl}>
                <h3>${item.firstName}</h3>
                <h4>${item.status}</h4>
                <a href=${item.channeLink} target="_blank">${item.channeLink}</a>
                <p>
                    ${item.channelDesc}
                </p>
                <button id="remove" onclick='remove(${item.id})'>exit</button>
                <button id="edit" onclick='remove(${item.id})'>edit</button>
            </div>`
        )
    })
}

const submitButton = document.getElementById('submitButton')

submitButton.addEventListener('click', add)

const remove = (id) => {
    const filteredItems = dataList.filter(item => item.id !== id)
    dataList = filteredItems
    console.log('trigger')
    container2.innerHTML=''
    dataList.map(item => {
        return(
            container2.innerHTML += `
            <div id=${item.id}>
            <div id="content"> 
                <img src=${item.imageUrl}>
                <h3>${item.firstName}</h3>
                <h4>${item.status}</h4>
                <a href${item.channeLink} target="_blank">${item.channeLink}</a>
                <p>
                    ${item.channelDesc}
                </p>
                <button id="remove" onclick='remove(${item.id})'>exit</button>
                <button id="edit" onclick='remove(${item.id})'>edit</button>
            </div>
            </div>`
        )
    })
}

dataList.map(item => {
    return(
        container2.innerHTML += `
        <div id=${item.id}>
            <div id="content">
                <img src=${item.imageUrl}>
                <h3>${item.firstName}</h3>
                <h4>${item.status}</h4>
                <a href${item.channeLink} target="_blank">${item.channeLink}</a>
                <p>
                    ${item.channelDesc}
                </p>
            </div    
        </div>`
    )
})
