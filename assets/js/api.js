window.addEventListener("DOMContentLoaded", ()=>{
    //cost view
    const reciverCards = document.querySelector("#reciverCards");
    // homePage-
    function prpdutosPage(){
        

        const jsonData = [
            { id: 1, nome: "amitraz", preco: "2000", imagem: "amitraz200.jpg" },
            { id: 2, nome: "creatina", preco: "3000", imagem: "amitraz200.jpg" },
            { id: 3, nome: "venezuela", preco: "10 000", imagem: "amitraz200.jpg" },
            { id: 4, nome: "Banana", preco: "20 000", imagem: "amitraz200.jpg" }
        ];
        
        
        let cards  = "";
        for(i = 0; i < jsonData.length; i++){

            const produtoREcebido = jsonData[i];
            cards +=
             `<div class="cd cdr" id="init">
             <article class="about">
                  <h3>${produtoREcebido.nome}</h3>
                  <span>Disponivel</span>
             </article>
             <div class="image">
               <img src="./assets/img/${produtoREcebido.imagem}" alt="image">
             </div>
             <article class="about">
                 <h5>Para desinfestação</h5>
                 <div class="classfic">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                 </div>
                 <div class="price">
                  <h1>${produtoREcebido.preco}</h1>
                 </div>
                 <button class="buyButton" value="${produtoREcebido.id}">Comprar</button>
             </article>
          </div>`;
        }
        reciverCards.innerHTML = cards;
        reciverCards.scrollTo({
            top:0,
            behavior:"auto"
        })

        // animar os elementos
        const observe = new IntersectionObserver(entries =>{

            Array.from(entries).forEach(enter =>{
                if(enter.intersectionRatio >= .5){
                enter.target.classList.add('animed');
                }
            })
        },{
            threshold: [0, 0.3, 0.5,1]
        })
        
        Array.from(document.querySelectorAll("#reciverCards > *")).forEach(element =>{
            observe.observe(element)
        });
    

    }

///  /// //// //// ///

//navigation ///

Array.from(document.querySelectorAll("#Navigator > button")).forEach((button,index) =>{
    button.addEventListener("click", ()=>{

       const animeButtons = document.querySelectorAll("#Navigator > button");
       switch(index){
        case 0 :
            homePage();
            animeButtons.forEach(remove=>remove.classList.remove('active'));
            button.classList.add('active');
        break;
        
        case 1:
          animeButtons.forEach(remove=>remove.classList.remove('active'));
          button.classList.add('active');
          prpdutosPage()
        break;
        
        case 2:
           animeButtons.forEach(remove=>remove.classList.remove('active'));
           button.classList.add('active');
           console.log("message");
       }
    })
})

//carregar automaticamente a pagef

function homePage(){
    const data = {
        "dados":[
            {image:"banner1.jpg"},
            {image:"banner1.jpg"},
            {image:"banner1.jpg"},
            {image:"banner1.jpg"}
        ],
        "cards":[
            {id:1, nome:"Amitraz Calbos", preco: 12000, image:"amitraz200.jpg"},
            {id:2, nome:"Vetnil Calbos", preco: 2000, image:"amitraz200.jpg"},
            {id:3, nome:"Sulfatrin Calbos", preco: 2000, image:"amitraz200.jpg"},
            {id:4, nome:"Vetnil Calbos", preco: 3000,image:"amitraz200.jpg"},
            {id:4, nome:"Vetnil Calbos", preco: 3000,image:"amitraz200.jpg"},
            {id:4, nome:"Vetnil Calbos", preco: 3000,image:"amitraz200.jpg"},
            {id:4, nome:"Vetnil Calbos", preco: 3000,image:"amitraz200.jpg"},
            {id:4, nome:"Vetnil Calbos", preco: 3000,image:"amitraz200.jpg"},
            {id:4, nome:"Vetnil Calbos", preco: 3000,image:"amitraz200.jpg"},
            {id:4, nome:"Vetnil Calbos", preco: 3000,image:"amitraz200.jpg"},
            {id:4, nome:"Vetnil Calbos", preco: 3000,image:"amitraz200.jpg"},
            {id:4, nome:"Vetnil Calbos", preco: 3000,image:"amitraz200.jpg"},
        ]
    }

    let cards = data.cards;
    let slidesImage = data.dados;
    var innerImage = "";
    
    for(s = 0; s < slidesImage.length ; s++){
       var imageSlide = slidesImage[s].image;
       innerImage += ` <img src="./assets/img/${imageSlide}" alt="image">`;
    }
    
  
    innerCards = "";
    for(l = 0; l < cards.length; l++){
        let nomeProd  = cards[l].nome;
        let imageProd  = cards[l].image;
        let precoProd  = cards[l].preco
        let idPRod     = cards[l].id;

        innerCards += `
                <div class="cards">
                    <div class="imageCard">
                        <img src="./assets/img/${imageProd}" alt="image">
                    </div>
                    <article class="productName">
                     <div class="">
                        <h5>${nomeProd}</h5>
                     </div>
                       <div class="cardButton">
                         <span class="price">${precoProd}</span>
                        <button class="toggle" value="${idPRod}"><i class="bi bi-cart4"></i></button> 
                       </div>  
                    </article>
                </div>
        `
    }
 
    reciverCards.innerHTML = `
    <section conteinerSlider="slide" class="conteinerSlider">
            <div class="slider">
                <div class="title">
                    <h5>Em destaque</h5>
                </div>
               <div class="item">
                 ${innerImage}
               </div>
              <div class="thumbs"><!-- thumbs --></div>
            </div>
         </section>
       
         <section class="contentHome">
            <h5 class="bdr">O que temos para você hoje</h5>
             <section class="reciverData">
                ${innerCards}
             </section>
    </section>
    
    `;

    reciverCards.scrollTo({
        top:0,
        behavior:"smooth"
    })

   
    class slide{
        constructor(id){
          this.slide = reciverCards.querySelector(`[conteinerSlider="${id}"]`);
          this.init();
        }
    
        activeSlide(index){
            this.ative = index;
            this.items = this.slide.querySelectorAll(".item > *");
            this.items.forEach(element=> element.classList.remove('active'));
            this.items[index].classList.add('active');
    
            // this.thumbs = this.slide.querySelector(".thumbs").children 
            this.autoSlide();
        }
    
        next(){
           if(this.ative < this.items.length -1){
             this.activeSlide(this.ative + 1);
           }
           else{
            this.activeSlide(0);
           }
        }
    
        autoSlide(){
            setTimeout(this.next, 5000);
        }
    
        addNavigator(){
            this.nagigator = this.items.length;
            for(this.i = 0; this.i < this.nagigator; this.i ++){
                this.span = document.createElement('span');
                this.slide.querySelector(".thumbs").appendChild(this.span);
            }
        }
        init(){
            this.next = this.next.bind(this);   
            this.activeSlide(0);
            this.addNavigator();
        }
    
    
    
    }
    new slide('slide');
    

}

homePage()

})




