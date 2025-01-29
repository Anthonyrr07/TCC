# TCC
Trabalho de Conclusão de Curso-karate Kyokushin

Parte html sobre o login
<head>
<link rel="stylesheet" href="">  
</head>

<body>

<div class='container'>
  <div class='card'>
    <h1> Entrar </h1>
    
    <div id='msgError'></div>
    
    <div class='label-float'>
      <input type='text' id='usuario' paceholder='' required>
      <label id='userLabel' for='usuario'>Usuario</label>
    </div>
    
    <div class='label-float'>
      <input type='password' id='senha' paceholder='' required>
      <label id='senhaLabel' for='senha'>Senha</label>
      <i class="fa fa-eye" aria-hidden="true"></i>
    </div>
    
    <div class='justify-center'>
      <button onclick='entrar()'>Entrar</button>
    </div>
    
    <div class='justify-center'>
      <hr>
    </div>
    
    <p> Não tem uma conta?
      <a href=''> Cadastre-se </a>
    </p>
    
  </div>
  </div>
</body>

parte css sobre o login
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

body {
  background-image: url(https://i.imgur.com/K8lDBYU.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed
  
}

.container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
}

.card {
  background-color: #ffffff80;
  padding: 30px;
  border-radius: 4%;
  box-shadow: 3px 3px 1px 0px #00000060
}

h1{
  text-align: center;
  margin-bottom: 20px;
  color: #272262
}

.label-float input{
  width: 100%;
  padding: 5px 5px;
  display: inline-block;
  border: 0;
  border-bottom: 2px solid #272262;
  background-color: transparent;
  outline: none;
  min-width: 180px;
  font-size: 16px;
  transition: all .3s ease-out;
  border-radius: 0;
  
}

.label-float{
  position: relative;
  padding-top: 13px;
  margin-top: 5%;
  margin-bottom: 5%;
}

.label-float input:focus{
  border-bottom: 2px solid #4038a0;
}

.label-float label{
  color: #272262;
  pointer-event: none;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 13px;
  transition: all .3s ease-out;
}

.label-float input:focus + label,
.label-float input:valid + label{
  font-size: 13px;
  margin-top: 0;
  color: #4038a0
}

button{
  background-color: transparent;
  border-color: #272262;
  color: #272262;
  padding: 7px;
  font-weight: bold;
  font-size: 12pt;
  margin-top: 20px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  transition: all .4s ease-out;
}

button:hover{
  background-color: #272262;
  color: #fff;
}

.justify-center{
  display: flex;
  justify-content: center;
}

hr{
  margin-top: 10%;
  margin-bottom: 10%;
  width: 60%;
}

p{
  color: #272262;
  font-size: 14pt;
  text-align: center;
}

a{
  color: #7a3077;
  font-weight: bold;
  text-decoration: none;
  transition: all .3s ease-out;
}

a:hover{
  color: #272262;
}

.fa-eye{
  position: absolute;
  top: 15px;
  right: 10px;
  cursor: pointer;
  color: #272262;
}

 #msgError{
  text-align: center;
  color: #ff0000;
  background-color: #ffbbbb;
  padding: 10px;
  border-radius: 4px;
  display: none;
}

parte js caso queiram usar o olho para visualizar a senha
let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar(){
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
       
      userValid = {
         nome: item.nomeCad,
         user: item.userCad,
         senha: item.senhaCad
       }
      
    }
  })
   
  if(usuario.value == userValid.user && senha.value == userValid.senha){
    window.location.href = 'https://cdpn.io/thicode/debug/abpVEeB/jVMpoEDNzPxk'
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
  } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  }
  
}


parte html do cadastro
<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">  
</head>

<body>

<div class='container'>
  <div class='card'>
    <h1> Cadastrar </h1>
    
    <div id='msgError'></div>
    <div id='msgSuccess'></div>
    
            <div class="label-float">
               <input type="text" id="nome" placeholder=" " required>
               <label id="labelNome" for="nome">Nome</label>
            </div>

            <div class="label-float">
               <input type="text" id="usuario" placeholder=" " required>
               <label id="labelUsuario" for="usuario">Usuário</label>
            </div>
            
            <div class="label-float">
               <input type="password" id="senha" placeholder=" " required>
               <label id="labelSenha" for="senha">Senha</label>
               <i id="verSenha" class="fa fa-eye" aria-hidden="true"></i>
               
            </div>

            <div class="label-float">
               <input type="password" id="confirmSenha" placeholder=" " required>
               <label id="labelConfirmSenha" for="confirmSenha">Confirmar Senha</label>
               <i id="verConfirmSenha" class="fa fa-eye" aria-hidden="true"></i>
            </div>
            
            <div class='justify-center'>
               <button onclick='cadastrar()'>Cadastrar</button>
            </div>

    
  </div>
  </div>
</body>

parte css do cadastro
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

body {
  background-image: url(https://i.imgur.com/XbRg9D7.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed
  
}

.container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
}

.card {
  background-color: #ffffff80;
  padding: 30px;
  border-radius: 4%;
  box-shadow: 3px 3px 1px 0px #00000060;
  width: 400px;
}

h1{
  text-align: center;
  margin-bottom: 20px;
  color: #0d009c
}

.label-float input{
  width: 100%;
  padding: 5px 5px;
  display: inline-block;
  border: 0;
  border-bottom: 2px solid #0d009c;
  background-color: transparent;
  outline: none;
  min-width: 180px;
  font-size: 16px;
  transition: all .3s ease-out;
  border-radius: 0;
  
}

.label-float{
  position: relative;
  padding-top: 13px;
  margin-top: 5%;
  margin-bottom: 5%;
}

.label-float input:focus{
  border-bottom: 2px solid #4038a0;
}

.label-float label{
  color: #0d009c;
  pointer-event: none;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 13px;
  transition: all .3s ease-out;
}

.label-float input:focus + label,
.label-float input:valid + label{
  font-size: 13px;
  margin-top: 0;
  color: #4038a0
}

button{
  background-color: transparent;
  border-color: #0d009c;
  color: #0d009c;
  padding: 7px;
  font-weight: bold;
  font-size: 12pt;
  margin-top: 20px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  transition: all .4s ease-out;
}

button:hover{
  background-color: #0d009c;
  color: #fff;
}

.justify-center{
  display: flex;
  justify-content: center;
}

.fa-eye{
  position: absolute;
  top: 15px;
  right: 10px;
  cursor: pointer;
  color: #0d009c;
}

#msgError{
  text-align: center;
  color: #ff0000;
  background-color: #ffbbbb;
  padding: 10px;
  border-radius: 4px;
  display: none;
}

#msgSuccess{
  text-align: center;
  color: #00bb00;
  background-color: #bbffbe;
  padding: 10px;
  border-radius: 4px;
  display: none;
}

parte js do cadastro caso queiram usar só o olho, pois faremos usando bd
let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')
