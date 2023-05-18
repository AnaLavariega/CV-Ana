function Login(){
    let usuario=document.getElementById('user').value 
    let contraseña=document.getElementById('password').value

    if (usuario=='Ana' && contraseña=='123'|| usuario=='Joe' && contraseña=='5126'|| usuario=='Memo' && contraseña=='ABC') {    
        document.write('Bienvenido (a)'+ usuario)
    } else {document.write('Tus datos no son correctos')}
}






