 const passwordBox = document.getElementById("password");
 const length = 12;

 const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 const lowerCase = "abcdefghijklmnopqrstuvwxyz";
 const number = "0123456789";
 const specialChar = "!@#$%^&*()_+-=[]{}";
 const allChar = upperCase +lowerCase+number+specialChar;

 function passwordGen(){
    let password ="";
    password+=upperCase[Math.floor(Math.random() * upperCase.length)];
    password+=lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password+=number[Math.floor(Math.random() * number.length)];
    password+=specialChar[Math.floor(Math.random() * specialChar.length)];

    while(length > password.length){
        password+=allChar[Math.floor(Math.random() * allChar.length)];
    }
    console.log(password);
    passwordBox.value = password;
}

function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
}