/// ViewPort
window.addEventListener("DOMContentLoaded", ()=>{
    const optionModal = document.querySelector("#optionModal");
    //// botoed de opcao!
    const menuList = document.querySelectorAll(".menuList");

    menuList.forEach((menu,index)=>{
        menu.addEventListener("click", ()=>{
            switch(index){
                case 0:
                    pedidos();
                break;

                case 1:
                    notificacoes();
                break;

                case 2:
                    sobreArcam();
                break;

                case 3:
                    nosasLojas();
                break;

                case 4:
                    comunicarProblema();
                break;

                case 5:
                    definicoes();
                break;
                
            }
        })
    })


    async function notificacoes(){
        optionModal.classList.add('modal');
        optionModal.classList.add('active');

    try{

        var notifications  = {
            "dadosUser":[
                {nome:"moisesClemente", notificacao:"ja pode fazer o levantamento do seu produto"},
                {nome:"moisesClemente", notificacao:"ja pode fazer o levantamento do seu produto"},
                {nome:"moisesClemente", notificacao:"ja pode fazer o levantamento do seu produto"},
                {nome:"moisesClemente", notificacao:"ja pode fazer o levantamento do seu produto"},
                {nome:"moisesClemente", notificacao:"ja pode fazer o levantamento do seu produto"},
                {nome:"moisesClemente", notificacao:"ja pode fazer o levantamento do seu produto"},
                {nome:"moisesClemente", notificacao:"ja pode fazer o levantamento do seu produto"},
                {nome:"moisesClemente", notificacao:"ja pode fazer o levantamento do seu produto"},
                {nome:"moisesClemente", notificacao:"ja pode fazer o levantamento do seu produto"},
                {nome:"moisesClemente", notificacao:"ja pode fazer o levantamento do seu produto"}
            ]
        }   
        
        let dataREcivedNot = notifications.dadosUser;
        let cards = "";
        for(i = 0; i < dataREcivedNot.length; i ++){
    
             cards += `
             <li>
             <h5>${dataREcivedNot[i].nome}</h5>
             <span>
                ${dataREcivedNot[i].notificacao}
             </span>
             <div class="optionNotification">
                <button class="toggle delete"><i class="bi bi-trash3"></i></button>
                <button class="toggle eye"><i class="bi bi-eye"></i></button>
             </div>
             </li>
              
             `;
    
        }
    
         optionModal.innerHTML = `
                   
                        <section class="contentNodal active">
                                <div class="topContentModal">
                                    <button class="toggle" id="closeModalButton"><i class="bi bi-arrow-left"></i></button>
                                    <h4>Notificações</h4>
                                </div>
                                <ul class="cardModal">
                                    ${cards}
                                </ul>
                        </section>
                         
                       `;
        
    
        /// close page pedidos
        let closeModalButton =  optionModal.querySelector("#closeModalButton");
        closeModalButton.addEventListener("click", ()=>{
            optionModal.classList.remove('modal');
            optionModal.classList.remove('active');
            optionModal.innerHTML = "";
        })
        
    }   
    catch(error) {
        console.log("erro!" + error);
    }



    }///end pedidos

 
  async function pedidos(){
        optionModal.classList.add('modal');
        optionModal.classList.add('active');

    optionModal.innerHTML = `
                <section class="contentNodal active">
                    <div class="topContentModal">
                    <button class="toggle" id="closeModalButton"><i class="bi bi-arrow-left"></i></button>
                    <h4>Pedidos</h4>
                    </div>

                    <ul class="cardModal">
                    <li>
                    <h5>Arcam Gold Fish</h5>
                    <span>
                       Seu pedido foi enviado com sucesso
                       aguardando respostas...
                    </span>
                    <div class="optionNotification">
                        <button class="toggle eye"><i class="bi bi-eye"></i></button>
                    </div>
                    </li>
                   </ul>
                </section>
    
    `;

    let closeModalButton =  optionModal.querySelector("#closeModalButton");
    closeModalButton.addEventListener("click", ()=>{
        optionModal.classList.remove('modal');
        optionModal.classList.remove('active');
        optionModal.innerHTML = "";
    })

  }
 
  

////sobre Arcam  
async function sobreArcam() {

    try {
        let getData = await fetch('../../assets/json/sobre.json');
        
        if (getData.ok) {
            let data = await getData.json();
            optionModal.classList.add('modal');
            optionModal.classList.add('active');

            let sobre = data.sobre;

            let sertvicos = sobre[0].ServicosOferecidos;
            
            // preparando a variavel
            let dinamicCard = "";

            for(i= 0; i < sertvicos.length; i++){
                dinamicCard += `
                <li>
                  <span>
                   <b>${sertvicos[i].topic} </b> ${sertvicos[i].Atendimento}
                  </span>
                <br>
                </li>
                `;
            }
            

            optionModal.innerHTML = `
                    <section class="contentNodal active">
                            <div class="topContentModal">
                             <button class="toggle" id="closeModalButton"><i class="bi bi-arrow-left"></i></button>
                                <h4>Pedidos</h4>
                                </div>

                                <ul class="cardModal">
                                <li><h1>Quem Somos:</h1></li>
                                <li>
                                <h3>${sobre[0].nome}</h3>
                                <h4>${sobre[0].slogan}</h4>
                                <span>
                                    ${sobre[0].Descricao}
                                </span>
                                <li><h1>Serviços Oferecidos:</h1></li>
                                </li>
                                   ${dinamicCard}
                                </ul>
                    </section>`;

                    
        } else {
            console.log('Erro ao carregar o JSON:', getData.status);
        }
    } catch (error) {
        console.log('Erro:', error);
    }
    

    //close 
    let closeModalButton =  optionModal.querySelector("#closeModalButton");
    closeModalButton.addEventListener("click", ()=>{
        optionModal.classList.remove('modal');
        optionModal.classList.remove('active');
        optionModal.innerHTML = "";
    })

    
   
}



///lojas 

async function nosasLojas(){
   try {
    let getData = await fetch('../../assets/json/location.json');
    if (getData.ok) {
        let data = await getData.json();

        optionModal.classList.add('modal');
        optionModal.classList.add('active');
        
        let luanda = data.locais.Luanda;

        let luandaInfo  = "";

        for(i= 0; i < luanda.length; i++ ){
          
            luandaInfo += ` 
                 <article>
                  <span><b>Contacto:</b> ${luanda[i].telefone}</span><br>
                  <span><b>Municipio:</b> ${luanda[i].bairro}</span><br>
                  <span><b>Local:</b> ${luanda[i].local}</span>
                 </article>
             `;

        }


        let mebguelaInfo = "";
        let Benguela = data.locais.Benguela;
        for(j = 0; j < Benguela.length; j++){
            mebguelaInfo += ` 
            <article>
             <span><b>Contacto:</b> ${Benguela[j].telefone}</span><br>
             <span><b>Municipio:</b> ${Benguela[j].bairro}</span><br>
             <span><b>Local:</b> ${Benguela[j].local}</span>
            </article>
        `;
        }

        let huilaInfo = "";
        let Huila = data.locais.Huila
     
        for(k = 0; k < Huila.length; k++){
            huilaInfo += ` 
            <article>
             <span><b>Contacto:</b> ${Huila[k].telefone}</span><br>
             <span><b>Municipio:</b> ${Huila[k].bairro}</span><br>
             <span><b>Local:</b> ${Huila[k].local}</span>
            </article>
        `;
        }

        optionModal.innerHTML = `
        <section class="contentNodal active">
                <div class="topContentModal">
                 <button class="toggle" id="closeModalButton"><i class="bi bi-arrow-left"></i></button>
                    <h4>Pedidos</h4>
                    </div>

                    <ul class="cardModal">
                    <li><h1>Luanda <i class="bi bi-geo-alt-fill"></i></h1></li>
                     <li>
                     ${luandaInfo}
                     </li>

                     <li><h1>Benguela <i class="bi bi-geo-alt-fill"></i></h1></li>
                     <li>
                     ${mebguelaInfo}
                     </li>

                     <li><h1>Huíla<i class="bi bi-geo-alt-fill"></i></h1></li>
                     <li>
                     ${mebguelaInfo}
                     </li>
                    </ul>
        </section>`;
    }
    else{
    console.log("erro");
    
    
    }
    
   } catch (error) {
    console.log("erro!" + error);
   }

   let closeModalButton =  optionModal.querySelector("#closeModalButton");
   closeModalButton.addEventListener("click", ()=>{
       optionModal.classList.remove('modal');
       optionModal.classList.remove('active');
       optionModal.innerHTML = "";
   })


}



    
               
                  
               
    
})/// end dom Loading