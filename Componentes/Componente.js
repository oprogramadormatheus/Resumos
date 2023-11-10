const Escolhas = document.querySelectorAll('.Escolha');
const Blocos = document.querySelectorAll('.Bloco');
const Acessos = document.querySelectorAll('.Acesso');
const Quadros = document.querySelectorAll('.Quadro');
const Intervalo = setInterval(() => Horas());
Escolhas[0].style.animation = 'Esquerda 0.5s ease-in-out';
Escolhas[1].style.animation = 'Esquerda 0.6s ease-in-out';
Escolhas[2].style.animation = 'Esquerda 0.7s ease-in-out';
Escolhas[3].style.animation = 'Esquerda 0.8s ease-in-out';
Escolhas[0].addEventListener('click', () => Mostrar(Blocos[0]));
Escolhas[1].addEventListener('click', () => Mostrar(Blocos[1]));
Escolhas[2].addEventListener('click', () => Mostrar(Blocos[2]));
Escolhas[3].addEventListener('click', () => Mostrar(Blocos[3])); 
let Grupos = [
    [Acessos[0], Acessos[4], Acessos[8], Acessos[12]],
    [Acessos[1], Acessos[5], Acessos[9], Acessos[13]],
    [Acessos[2], Acessos[6], Acessos[10], Acessos[14]],
    [Acessos[3], Acessos[7], Acessos[11], Acessos[15]],
];
function Mostrar(Bloco){
    Bloco.classList.toggle('Esconder');
    Esquerda(Grupos); 
}   
function Esquerda(Grupo){
    Grupo[0].forEach(Integrante => {Integrante.style.animation = 'Esquerda 0.5s ease-in-out'});
    Grupo[1].forEach(Integrante => {Integrante.style.animation = 'Esquerda 0.6s ease-in-out'});
    Grupo[2].forEach(Integrante => {Integrante.style.animation = 'Esquerda 0.7s ease-in-out'});
    Grupo[3].forEach(Integrante => {Integrante.style.animation = 'Esquerda 0.8s ease-in-out'});
}
function Horas(){
    const Data = new Date();
    const Pegar_Horas = String(Data.getHours()).padStart(2, '0');
    const Pegar_Minutos = String(Data.getMinutes()).padStart(2, '0');
    const Pegar_Segundos = String(Data.getSeconds()).padStart(2, '0');
    Quadros[0].textContent = Pegar_Horas;
    Quadros[1].textContent = Pegar_Minutos;
    Quadros[2].textContent = Pegar_Segundos;
}