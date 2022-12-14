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
            console.log('User is authenticated, sending data...')
        }
    })
}