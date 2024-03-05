function generateNumber(){

    const min = Math.ceil(document.querySelector(".meu-input1").value)
    const max =  Math.floor(document.querySelector(".meu-input2").value)
    


    if(min >= max){
        alert("o valor minimo tem que ser menor que o valor maximo")
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(result)
    }
   
    

    
    }