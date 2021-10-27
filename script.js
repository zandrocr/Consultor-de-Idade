let nasc = document.querySelector("#idade") // data de aniversario da pessoa
let data = new Date() //data do sistema
var txt = document.querySelector("#txtR") //retorno do valor da idade
var img = document.createElement('img')
$('.sub')[0].add()

function clic(){
    let ano = nasc.value // leitura do imput data
    ano = new Date(ano)
    var sex = document.getElementsByName("sexo")

    let resultado = Math.abs(data - ano) //Math.abs, transforma em valor absoluto
    let tempo = 1000 * 60 * 60 * 24 * 365//milisegundos * segundos * minutos * horas * semanas * meses * ano
    let idade = Math.ceil(resultado / tempo)

    if (nasc.value == 0 || ano > data){
        alert("[Erro] Digite uma data valida e selecione o sexo!")
    }else{
        if (sex[0].checked){
            if (idade <= 2){
                txt.innerHTML = (`<p>Você é um bebe de ${idade} anos de idade</p>`)
                    img.setAttribute('src', 'fotos/bebe-m.png')
                        txt.appendChild(img)
            }else if(idade < 12){
                txt.innerHTML = (`<p>Você é um jovem de ${idade} anos de idade</p>`)
                    img.setAttribute('src', 'fotos/crianca-m.jpg')
                        txt.appendChild(img)
            }else if(idade < 18){
                txt.innerHTML = (`<p>Você é um adolecente de ${idade} anos de idade</p>`)
                    img.setAttribute('src', 'fotos/crianca-m.jpg')
                        txt.appendChild(img)
            }else if(idade < 60){
                txt.innerHTML = (`<p>Você é um adulto de ${idade} anos de idade</p>`)
                    img.setAttribute('src', 'fotos/adulto-m.png')
                        txt.appendChild(img)
            }else{
                txt.innerHTML = (`<p>Você é um senhor de ${idade} anos de idade</p>`)   
                    img.setAttribute('src', 'fotos/idoso-m.png')
                        txt.appendChild(img)             
            }
        }if (sex[1].checked){
            if (idade <= 2){
                txt.innerHTML = (`<p>Você é uma bebe de ${idade} anos de idade</p>`)
                    img.setAttribute('src', 'fotos/bebe-f.png')
                        txt.appendChild(img)
            }else if(idade < 12){
                txt.innerHTML = (`<p>Você é uma jovem de ${idade} anos de idade</p>`)
                    img.setAttribute('src', 'fotos/crianca-f.png')
                        txt.appendChild(img)
            }else if(idade < 18){
                txt.innerHTML = (`<p>Você é uma adolecente de ${idade} anos de idade</p>`)
                    img.setAttribute('src', 'fotos/jovem-f.png')
                        txt.appendChild(img)
            }else if(idade < 60){
                txt.innerHTML = (`<p>Você é uma adulta de ${idade} anos de idade</p>`)
                    img.setAttribute('src', 'fotos/adulto-f.png')
                        txt.appendChild(img)
            }else{
                txt.innerHTML = (`<p>Você é uma senhora de ${idade} anos de idade</p>`)  
                    img.setAttribute('src', 'fotos/idoso-f.png')
                        txt.appendChild(img) 
            }
        }
    }
}
