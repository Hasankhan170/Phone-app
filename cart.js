console.log('cart item')

const cardItems = JSON.parse(localStorage.getItem('cartitems'))

const card = document.querySelector('.container')

function randarItems(){
    if(cardItems != null && cardItems.length > 0){
        for(let i = 0; i < cardItems.length; i++){
            card.innerHTML += `
            <div class="card" style="width: 18rem;">
              <div class="card-body bg-dark text-light">
                 <h5 class="card-title">${cardItems[i].brand}</h5>
                 <p class="card-text">${cardItems[i].model}</p>
                 <p class="card-text">${cardItems[i].price}</p>
                 <p class="card-text">${cardItems[i].quantity}</p>
                 <button style = "padding : 10px 25px;" class= "btn btn-danger" onclick = "reset(${i})">Reset</button>
              </div>
            </div>
            `
        }
    }else{
        card.innerHTML = `
             <h3 class="card-title text-light">No items found..</h3>
       
        `

    }
}

randarItems()

function reset(index){
    cardItems.splice(index, 1);
    localStorage.setItem('cartitems', JSON.stringify(cardItems));
    location.reload()
}

function back(){
  location.href = 'index.html'
}