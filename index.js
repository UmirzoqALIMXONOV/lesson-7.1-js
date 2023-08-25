function CountWord(){
    let textArea = document.getElementById("textArea").value

    let result = 0

    textArea = textArea.split(" ")

    for(var i of textArea){
        if(i !== ""){
            result++
        }
    }
    document.getElementById("display").innerText = result+" ta so'z bor"
}
