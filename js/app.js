// Function For Memory increase and decrease
function memory(price){
    const memory = document.getElementById('memory-money');
    memory.innerText = price;
}


// For 8GB
document.getElementById('8gb-btn').addEventListener('click',function(){
    memory(0);
    totalPrice()
})


// For 16GB
document.getElementById('16gb-btn').addEventListener('click',function(){
    memory(180);
    totalPrice()
})


// Function For Storage increase and decrease
function storage(price){
    const storage = document.getElementById('storage-money');
    storage.innerText = price;
}

// For 256 GB
document.getElementById('256gb-btn').addEventListener('click',function(){
    storage(0);
    totalPrice()
})

// For 512 GB
document.getElementById('512gb-btn').addEventListener('click',function(){
    storage(100);
    totalPrice()
})

// For 1TB
document.getElementById('1tb-btn').addEventListener('click',function(){
    storage(180);
    totalPrice()
})


// Function For delivery charge increase and decrease
function delivery(price){
    const delivery = document.getElementById('delivery-money');
    delivery.innerText = price;
}

// For free delivery
document.getElementById('delivery25-btn').addEventListener('click',function(){
    delivery(0);
    totalPrice()
})

// For costly delivery
document.getElementById('delivery21-btn').addEventListener('click',function(){
    delivery(20);
    totalPrice()
})


// Function For Total price
function totalPrice(){
    const totalCost = document.getElementById('total-money')
    const memoryCost = document.getElementById('memory-money').innerText;
    const storageCost = document.getElementById('storage-money').innerText;
    const deliveryCost = document.getElementById('delivery-money').innerText;
    const realCost = document.getElementById('real-money').innerText;
    const value = parseInt( realCost)+ parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
    totalCost.innerText = value;
    //For Total 
    document.getElementById('Total').innerText = value;
}


//  Cupon Code part
document.getElementById('apply-btn').addEventListener('click',function(){
    let input = document.getElementById('input').value;
    if(input == 'stevekaku'){
        const first =  document.getElementById('Total').innerText * 0.2;
        document.getElementById('Total').innerText = document.getElementById('Total').innerText -  parseFloat(first);
    }
    document.getElementById('input').value = '';
})



