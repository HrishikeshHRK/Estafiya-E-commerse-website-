var updatebtns = document.getElementsByClassName('update-cart')

for (var i = 0; i < updatebtns.length; i++){
    updatebtns[i].addEventListener('click',function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId:', productId,'action:',action)

        /* checking user status on click */
        console.log('USER:', user)
        if (user == 'AnonymousUser'){
            console.log('User is not authenticated' )
        }else{
            updateUserOrder(productId, action) /* passing the function updateuserorder so it gets called when the user is logged in*/
        }
    })
}
/* defining this function with 2 parameterfs : productId and action */
function updateUserOrder(productId, action){
    console.log('User is authenticated, sending data...')
    var url = '/update_item'

    /* create and use the fetch API to sent a POST request */
    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':csrftoken,
        },
        body:JSON.stringify({'productId': productId, 'action':action})  /* converting and sending our productId and action as a json object */
    })
    .then((response) =>{
        return response.json();
    })
    .then((data)=>{
        console.log('data:' , data)
    });
}