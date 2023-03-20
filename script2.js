function login() {

    const users = [
        "jan.sima@student.spsezatec.cz.heslo123",
        "totojeukol@ukol.cz.ukol111",
        "moctoneumim@neumimto.cz.heslo1222",
    ]
    

    let userEmail, userPassword

    userEmail = document.getElementById("emailInput").value 
    userPassword = document.getElementById("passInput").value 

    let userLogin = userEmail + "." + userPassword

    console.log(userLogin)
    
    let errors = 0
    
    for(let i = 0; i < users.length; i++) {
        if(userLogin === users[i]) {
            alert("Úspěšně příhlášen!")
            break
        } else {
            errors++
            if(errors === users.length) alert ("Špatně zadané heslo nebo email!")
        }
    }

    console.log(userLogin)

}
