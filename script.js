function generateNumber(){

    const min = Math.ceil(document.querySelector(".meu-input1").value)
    const max =  Math.floor(document.querySelector(".meu-input2").value)
    
    
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(result)
    }