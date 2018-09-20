function onEmailChange(value){
    var emailNode = document.getElementById("email");
    const emailRegex = /^.+@.+\..{2,4}$/;
    const loginButtonNode = document.getElementById("loginButton");
    const matched = emailRegex.test(value)
    if(matched){
        emailNode.style.backgroundColor="rgba(124, 252, 0, " + 0.7 + ")";
        loginButtonNode.disabled = false;
    }
    else{
        if (value.length>0){
            emailNode.style.backgroundColor="rgba(255, 95, 95, " + 0.7 + ")";
        }
        else{
            emailNode.style.backgroundColor="rgba(255, 255, 255, " + 0.7 + ")";
        }
        loginButtonNode.disabled = true;
    }
}

function onPasswordChange(value){
    
}