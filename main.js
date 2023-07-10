function firstSum() {
    document.getElementById('first').innerHTML = 
    Number(document.getElementById('one').value) +
    Number(document.getElementById('two').value) + 
    Number(document.getElementById('three').value) 

    document.getElementById('sec').innerHTML = 
    Number(document.getElementById('onee').value) +
    Number(document.getElementById('twoo').value) + 
    Number(document.getElementById('threee').value) 

    document.getElementById('trd').innerHTML = 
    Number(document.getElementById('onne').value) +
    Number(document.getElementById('twwo').value) + 
    Number(document.getElementById('thrree').value) 

    document.getElementById('frt').innerHTML = 
    Number(document.getElementById('oone').value) +
    Number(document.getElementById('ttwo').value) + 
    Number(document.getElementById('thhree').value) 
}


function average(){
    document.getElementById('avea').innerHTML = 
    (Number(document.getElementById('first').innerHTML) +
    Number(document.getElementById('sec').innerHTML) + 
    Number(document.getElementById('trd').innerHTML) +
    Number(document.getElementById('frt').innerHTML)) / 4

}



var ren = document.getElementById('remark').innerHTML
var rem = Number(document.getElementById('avea').innerHTML)
var see = document.getElementById('Student').values



function reMark(){

    if (document.getElementById('avea').innerHTML >= 80){
        document.getElementById('remark').innerHTML = 'congratulations ' + 
        document.getElementById('Student').value + ' you passed'
    }

    else if (document.getElementById('avea').innerHTML >= 60){
        document.getElementById('remark').innerHTML = 'congratulations ' + 
        document.getElementById('Student').value + ' you passed'
    }

    else if (document.getElementById('avea').innerHTML >= 40){
        document.getElementById('remark').innerHTML = 'congratulations ' + 
        document.getElementById('Student').value + ' you tried'
    }
    else {
        document.getElementById('remark').innerHTML = 'Sorry ' + 
        document.getElementById('Student').value + ' you failed'
    }
}

function grade(){

    if (document.getElementById('avea').innerHTML >= 80){
        document.getElementById('grade').innerHTML = 'A1'
    }

    else if (document.getElementById('avea').innerHTML >= 70){
        document.getElementById('grade').innerHTML = 'B2'
    }

    else if (document.getElementById('avea').innerHTML >= 65){
        document.getElementById('grade').innerHTML = 'B3'
    }
    else if (document.getElementById('avea').innerHTML >= 60){
        document.getElementById('grade').innerHTML = 'C4'
    }
    else if (document.getElementById('avea').innerHTML >= 55){
        document.getElementById('grade').innerHTML = 'C5'

    } 
    else if (document.getElementById('avea').innerHTML >= 50){
        document.getElementById('grade').innerHTML = 'C6'
    }
    else if (document.getElementById('avea').innerHTML >= 45){
        document.getElementById('grade').innerHTML = 'D7'
    }
    else if (document.getElementById('avea').innerHTML >= 40){
        document.getElementById('grade').innerHTML = 'E8'
    }

    
    else {
        document.getElementById('grade').innerHTML = 'F9'
    }
}

