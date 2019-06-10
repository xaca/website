function abrir(event)
{
    acerca_de.className = "card mostrar slideInLeft animated";
    abrir_acerca_de.innerHTML = '<';
    abrir_acerca_de.removeEventListener("click",abrir);
    abrir_acerca_de.addEventListener("click",cerrar);

}
function cerrar(event)
{
    acerca_de.className = "card slideInRight animated";
    abrir_acerca_de.innerHTML = '>';
    abrir_acerca_de.removeEventListener("click",cerrar);
    abrir_acerca_de.addEventListener("click",abrir);

}
abrir_acerca_de.addEventListener("click",abrir);