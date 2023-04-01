//if else
//and(&&)
//or(||)

/*let temp = 37;

if(temp >= 37.5){
    console.log("Febre")

}else 

if(temp == 37){
    console.log("quase febre ")
}

else{
    console.log("Nao esta com febre")
}

let pao = false;
let queijo = true;
if(pao || queijo){
    console.log("como")
}

if(pao && queijo){
    console.log("como")
}

switch('a'){
    case 'a':
        console.log("A");
        break
    case 'b':
        console.log("B");
        break
    default:console.log("Erro");
    break
}

function calc(n1,n2,op){
    let result;
    switch(op){
        case'+':
        result = n1 + n2;
        break;
        case'-':
        result = n1 - n2;
        break; case'*':
        result = n1 * n2;
        break;
        case'/':
        result = n1 / n2;
        break;
    }
}*/

function ex1(n1,n2){
    if(n1 > n2){
        console.log(n1)
}
    else{
        console.log(n2)
    }
}
ex1(10,5)


function ex2(n1){
    if(n1 <= 0){
    console.log("Negativoo")
    }
    else{
        console.log("Positivooo")
    }
}
ex2(-5)


function ex3(letra){
    switch(letra){
    
        case 'A':
            console.log("");
            break;
        case 'E':
            console.log("");
            break;
        case 'I':
            console.log("");
            break;
        case 'O':
            console.log("");
            break;
        case 'U':
            console.log("");
            break;
        
        default:
            console.log("Consoante")
    }
}
ex3("B")


function ex4(nota1,nota2,nota3){
    let media = (nota1 + nota2 + nota3)/3
    if(media >= 7 && media < 10) {
        console.log("Aprovado")
    }  
    else if(media == 10){
        console.log("Aprovado com Distinção")
    }
    else{
        console.log("Reprovado")
    }
}
ex4(7,8,10)


function ex5(n1,n2,n3){
    if(n1 > n2 && n1 > n3){
        console.log(n1)
    }
    else if(n1 < n2 && n2 > n3){
        console.log(n2)
    }
    else{
        console.log(n3)
    }
}
ex5(33,55,25)



function ex6(batata, hamburguer, azeitona){
    if(batata < hamburguer && batata < azeitona){
        console.log("O mais barato é a Batata que vale: ",batata)
    }
    else if(azeitona < hamburguer && azeitona < batata){
        console.log("O mais barato é a Batata que vale: ",azeitona)
    }
    else{
        console.log("O mais barato é a Batata que vale: ",hamburguer)
    }
 }
ex6("10","15","100")


function ex7(periodo){
    console.log("Em qual período você estuda: Matutino, Vespertino ou Noturno ? ")
    if(periodo == "Matutino"){
        console.log("MUITO BOM DIA!!")
    }
    else if(periodo == "Vespertino"){
        console.log("MUITO BOOAA TARRDEE!!")
    }
    else if(periodo == "Noturno"){
        console.log("MUITO BOOAA NOOIITEE")
    }
}
ex7("Vespertino")




/*for(let i = 0; i <=10; i++){
    console.log(`2 x ${i} = `,2*1);
}

let teste = 0;
while(teste <= 10){
    console.log(`3 x ${teste} = ` ,3*teste);
    teste++
}*/