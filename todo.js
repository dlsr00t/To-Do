var dia = 6;


function hoje (){
    if (dia===6){
       dia++
        return "sabado "

    }
    if (dia===7){
       dia++
       dia = 1
       return "domingo"      
    }

    if (dia===1){
       dia++
       return "segunda "
    }
    if (dia===2){
       dia++
       return "terça"
    }
    if (dia===3){
       dia++
       return "quarta"
    }
    if (dia===4){
        dia++
        return "quinta"
    }
    if (dia===5){
        dia++
        return "sexta"
    }
}

function novaTarefa(){


    if (document.getElementById("nova-tarefa1") == null){

        let botaoCriar = document.createElement("button");
        botaoCriar.id = "botao-criar";
        let textoBotaoCriar = document.createTextNode("Criar");
        botaoCriar.appendChild(textoBotaoCriar);
        

        let criarNovaTarefa = document.createElement("input");
        criarNovaTarefa.id = "nova-tarefa1" //TODO Eu preciso fazer a tarefa mudar de id, se não todas vão ter o mesmo id
        // var criarNovaTarefa = document.createElement("input");
        // criarNovaTarefa.id = "nova-tarefa" //TODO Eu preciso fazer a tarefa mudar de id, se não todas vão ter o mesmo id
        

        let teste = document.getElementById("nova-tarefa1");
        console.log(teste);

        //let criarTextoDaTarefa = document.createTextNode("fazer coco");
        //criarNovaTarefa.appendChild(criarTextoDaTarefa);
        
        let adicionarNaDiv = document.getElementById("div-de-tarefas");
        adicionarNaDiv.appendChild(criarNovaTarefa);
        adicionarNaDiv.appendChild(botaoCriar);
        //limitadorDeTarefas()
        //console.log(document.getElementById("asdf"))

    }else{//*ISSO ATRIBUI UM ID NOVO A CADA TAREFA CRIADA
        var contadorNovaTarefa = 2;
        while(document.getElementById("nova-tarefa1") != null){
            if(document.getElementById(`nova-tarefa${contadorNovaTarefa}`) == null){
                let botaoCriar = document.createElement("button");
                botaoCriar.id = "botao-criar";

                let textoBotaoCriar = document.createTextNode("criar");
                botaoCriar.appendChild(textoBotaoCriar);

                let criarNovaTarefa = document.createElement("input");
                criarNovaTarefa.id = `nova-tarefa${contadorNovaTarefa}`;

                let teste = document.getElementById("nova-tarefa1");
                console.log(teste);
        

                let adicionarNaDiv = document.getElementById("div-de-tarefas");
                adicionarNaDiv.appendChild(criarNovaTarefa);
                adicionarNaDiv.appendChild(botaoCriar);
                break
            }else{
                contadorNovaTarefa+=1;
            }
        }
    }
    /*
    var criarNovaTarefa = document.createElement("input");
    criarNovaTarefa.id = "nova-tarefa" //TODO Eu preciso fazer a tarefa mudar de id, se não todas vão ter o mesmo id
    

    let teste = document.getElementById("nova-tarefa");
    console.log(teste);

    //let criarTextoDaTarefa = document.createTextNode("fazer coco");
    //criarNovaTarefa.appendChild(criarTextoDaTarefa);
    
    let adicionarNaDiv = document.getElementById("div-de-tarefas");
    adicionarNaDiv.appendChild(criarNovaTarefa);
    adicionarNaDiv.appendChild(botaoCriar);
    //limitadorDeTarefas()
    //console.log(document.getElementById("asdf"))
    */
}

function criarTarefa(){
    //console.log(document.getElementById("nova-tarefa").value
    

    let label = document.createElement("label"); 
    label.innerText = document.getElementById(`nova-tarefa${contadorNovaTarefa2}`).value;
    console.log(`conteudo da variavel label.innerText: ${label.innerText}`)
    console.log(`conteudo da variavel label.innerText é vazio? ${label.innerText == "" ? true : false}`)
    let removerBotao = document.getElementById("botao-criar");

    let quebrarUmaLinha = document.createElement("br");

    let adicionarNaDiv2 = document.getElementById("div-de-tarefas");
    
    if(label.innerText != ""){//*ISSO IMPEDE QUE TAREFAS VAZIAS SEJAM CRIADAS
        adicionarNaDiv2.removeChild(removerBotao);
        adicionarNaDiv2.appendChild(label);
        adicionarNaDiv2.appendChild(quebrarUmaLinha);
        document.getElementById(`nova-tarefa${contadorNovaTarefa2}`).type = "checkbox"; 
        contadorNovaTarefa2+=1;
        console.log(contadorNovaTarefa2)
        return "proximo" 
    }else{
        alert("Você não pode criar tarefas vazias!")
    }

    

}

function criarId(){
    idLabel = [];
    idInput = [];


}


function limitadorDeTarefas(){
    if (document.getElementById("botao-criar") == null){
        novaTarefa()
        document.getElementById("botao-criar").addEventListener("click", criarTarefa);
        
    }else{
        alert("Você só pode criar uma tarefa de cada vez!!!!!!!")
    }
    

}

document.getElementById("novaTarefa").addEventListener("click", limitadorDeTarefas);
//document.getElementById("botao-criar").addEventListener("click", criarTarefa);
var contadorNovaTarefa2 = 1;

function novaRotina(){
let h1 = document.createElement("H1");
h1.innerHTML = "rotina";
document.body.appendChild(h1)
let h4 = document.createElement("H4");
h4.innerHTML = hoje();
document.body.appendChild(h4)
let checkBox = document.createElement("input");
checkBox.setAttribute("type","checkbox");
document.body.appendChild(checkBox);

}

let novaRotina1 = document.getElementById("novaRotina").addEventListener("click",novaRotina)


