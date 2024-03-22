window.onload = function(){
    window.addEventListener('scroll', function(e) {
        if(this.scrollY >= 150){
            this.document.getElementById('header').classList.add('active')
            this.document.getElementById('to-top').classList.add('active')
        } else{
            this.document.getElementById('header').classList.remove('active')
            this.document.getElementById('to-top').classList.remove('active')
        }
    });}
