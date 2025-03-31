 document.addEventListener("DOMContentLoaded", () =>  {
    let username = sessionStorage.getItem("username");
    if (username) {
        let div = document.querySelector(".Titulo"); 
        let loginButton = div.firstElementChild;
        loginButton.innerHTML = `Bienvenido, ${username}`;
        loginButton.style.backgroundColor = "#6164FA";
        
        loginButton.addEventListener("mouseover", () => {
            loginButton.innerHTML = `${username}, pulsa para cerrar sesión`;
            loginButton.style.cursor = 'pointer';
        });
        
        loginButton.addEventListener("mouseleave", () => loginButton.innerHTML = `Bienvenido, ${username}`);

        loginButton.addEventListener("click", () => sessionStorage.removeItem("username"));
    }
})