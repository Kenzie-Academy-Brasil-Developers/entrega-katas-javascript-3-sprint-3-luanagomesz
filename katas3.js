const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(){
    kata1()
    kata2() 
    kata3()
    kata4() 
    kata5() 
    kata6() 
    kata7() 
    kata8() 
    kata9() 
    kata10() 
    kata11()
    kata12() 
    kata13() 
    kata14() 
    kata15() 
    kata16()  
    kata17() 
    kata18()
    kataBonus1()
    kataBonus2()
    kataBonus3()
    kataBonus4()
    kataBonus5()
}

function append (kata,resultado){
    const show = document.getElementById(kata)
    show.appendChild(resultado)
}


function kata1() {
  const resultado = document.createElement('p')
  for (let i = 1; i<26; i++ ){
      resultado.innerText += i + " "
  }
append("kata1",resultado)
}

function kata2() {
   const resultado = document.createElement('p')
   for (let i = 25; i> 0; i--){
       resultado.innerText += i + " "
   }
   append("kata2",resultado)
}

function kata3() {
    const resultado = document.createElement('p')
    for (let i = -1; i>-26; i--){
      resultado.innerText += i  + " "
    }
    append("kata3",resultado)
}

function kata4() {
   const resultado = document.createElement('p')
   for (let i = -25; i<0; i++){
       resultado.innerText += i + " "
   }
   append("kata4",resultado)
}

function kata5() {
    const resultado = document.createElement('p')
    for (let i = 25; i>-26; i -=2){
        resultado.innerText += i + " "
    }
    append("kata5",resultado)
}

function kata6() {
    const resultado = document.createElement('p')
    for (let i=3; i<100; i +=3){
        resultado.innerText += i + " "
    }
    append("kata6",resultado)
}

function kata7() {
    const resultado = document.createElement('p')
    for (let i=7; i<100; i +=7){
        resultado.innerText += i + " "
    }
    append("kata7",resultado)
}

function kata8() {
    const resultado = document.createElement('p')
   
    for (let i =99; i>0; i--){
        if(
            i % 3 == 0 || i % 7 == 0
        ){
          resultado.innerText += i + " "
        }
    }
    append("kata8",resultado)
}

function kata9() {
    const resultado = document.createElement('p')
   
    for (let i=1; i<100; i +=2){
        if(
            i % 5 == 0
        ){
          resultado.innerText += i + " "
        }
    }
    append("kata9",resultado)

}

function kata10() {
   const resultado = document.createElement('p')
   for(let i=0; i<sampleArray.length; i++){
       resultado.innerText += sampleArray[i] + " "
   }
   append("kata10",resultado)
}

function kata11() {
    const resultado = document.createElement('p')
   for(let i=0; i<sampleArray.length; i++){
       if ( 
           sampleArray[i] % 2 == 0
       ){
           resultado.innerText += sampleArray[i] + " "
       }
   }
   append("kata11",resultado)
}

function kata12() {
    const resultado = document.createElement('p')
   for(let i=0; i<sampleArray.length; i++){
       if ( 
           sampleArray[i] % 2 != 0
       ){
           resultado.innerText += sampleArray[i] + " "
       }
   }
   append("kata12",resultado)

}

function kata13() {
    const resultado = document.createElement('p')
    for(let i=0; i<sampleArray.length; i++){
        if ( 
            sampleArray[i] % 8 == 0
        ){
            resultado.innerText += sampleArray[i] + " "
        }
    }
    append("kata13",resultado)
}

function kata14() {
    const resultado = document.createElement('p')
    for(let i=0; i<sampleArray.length; i++){
       
     resultado.innerText += sampleArray[i]*sampleArray[i] + " "
        }
    
    append("kata14",resultado)
}

function kata15() {
    const resultado = document.createElement('p')
    let soma = 1
    for(let i=2; i<21; i++){
       soma =  soma + i
       resultado.innerText = soma
    }
    
    append("kata15",resultado)
}

function kata16() {
    const resultado = document.createElement('p')
    let soma = sampleArray[0]
    for(let i=1; i<sampleArray.length; i++){
       soma += sampleArray[i]
     resultado.innerText = soma
        }
    
    append("kata16",resultado)
}

function kata17() {
    const resultado = document.createElement('p')
    let menor = sampleArray[0]
    for (let i = 1; i <sampleArray.length; i++){
      if( sampleArray[i] < menor){
          menor = sampleArray[i]
      }
    resultado.innerText = menor
    }
    append("kata17",resultado)
}

function kata18() {
    const resultado = document.createElement('p')
    let maior = sampleArray[0]
    for (let i = 1; i <sampleArray.length; i++){
      if( sampleArray[i] > maior){
          maior = sampleArray[i]
      }
    resultado.innerText = maior
    }
    append("kata18",resultado)
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    for(let i=0;i<20;i++){
    const result = document.createElement('div')
    result.style.height = '20px'
    result.style.width = '100px'
    result.style.backgroundColor = 'grey'
    result.style.marginTop = '5px'
    append('Katabonus1', result)
}
}

function kataBonus2() {
    let contador = 0
    for(let i=0;i<20;i++){
        contador += 5
        const result = document.createElement('div')
        result.style.height = '20px'
        result.style.width = 100 + contador + 'px'
        result.style.backgroundColor = 'grey'
        result.style.marginTop = '5px'
        append('Katabonus2', result)
    }
}

function kataBonus3() {
    for(let i=0;i<20;i++){
        contador = sampleArray[i]
        const result = document.createElement('div')
        result.style.height = '20px'
        result.style.width = contador + 'px'
        result.style.backgroundColor = 'grey'
        result.style.marginTop = '5px'
        append('Katabonus3', result)
    }
}

function kataBonus4() {
    for(let i=0;i<20;i++){
       let cor = 'grey'
        if(i % 2 == 0){
            cor = 'red'
        }
        contador = sampleArray[i]
        const result = document.createElement('div')
        result.style.height = '20px'
        result.style.width = contador + 'px'
        result.style.backgroundColor = cor
        result.style.marginTop = '5px'
        append('Katabonus4', result)
    }
}

function kataBonus5() {
    for(let i=0;i<20;i++){
        let cor = 'grey'
        contador = sampleArray[i]
        if(contador % 2 == 0){
            cor = 'red'
        }
        const result = document.createElement('div')
        result.style.height = '20px'
        result.style.width = contador + 'px'
        result.style.backgroundColor = cor
        result.style.marginTop = '5px'
        append('Katabonus5', result)
    }
}

document.getElementById("Clique").addEventListener('click',showResults)