window.onload = function(){
    let emptyLinks = document.querySelectorAll("a[href='#']");

    for (let i = 0; i < emptyLinks.length; i++) {
        const link = emptyLinks[i];
        link.addEventListener("click", function(event){
            event.preventDefault();
        });
    }
}