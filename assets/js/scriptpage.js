window.addEventListener("DOMContentLoaded", ()=>{
    // menuBar 
    let buttonMenuBar = document.querySelector("#buttonMenuBar");
    let closeMenuButton = document.querySelector("#closeMenuButton");
    let openSearchButton = document.querySelector("#openSearchButton");
    let closeModalButton = document.querySelector("#closeModalButton");
    let inputSearch = document.querySelector("#inputSearch");
    var boduContainer = document.querySelector("#boduContainer");


    /// open menu
    buttonMenuBar.addEventListener("click", ()=>{openMenu()});
    closeMenuButton.addEventListener("click", ()=>{closeMenu()});
    ///pesquisar 
    openSearchButton.addEventListener("click", ()=>{openModal()});
    closeModalButton.addEventListener("click", ()=>{closeModal()});
    boduContainer.addEventListener("click", ()=>{closeMenu()});

    //inputPesquisar
    inputSearch.addEventListener("input", ()=>{
       valueInput = inputSearch.value;
       let resultSearch = document.querySelector("#resultSearch");
       if(valueInput.length >= 4){
        resultSearch.classList.add('active');
        //chamar a API
    
       }
       else{
        resultSearch.classList.remove('active');
       }
    })
    


  

    function openMenu(){
        let leftContainer = document.querySelector(".leftContainer");
        leftContainer.classList.add('active');
        boduContainer.classList.add('blur');
    }
    
    function closeMenu(){
        let leftContainer = document.querySelector(".leftContainer");
        leftContainer.classList.remove('active');
        boduContainer.classList.remove('blur');
    }

    function openModal(){
        let modal = document.querySelector("#modal");
        let contentNodal = document.querySelector(".contentNodal");

        modal.classList.add('active');
        contentNodal.classList.add('active');
    }

    function closeModal(){
        let content = document.querySelector(".contentNodal");
        let mod = document.querySelector("#modal");


        content.classList.remove('active');
        mod.classList.remove('active');
    }
})

