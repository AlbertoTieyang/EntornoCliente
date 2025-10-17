let nacimiento = Number(prompt("Introduce tu año de nacimiento"));
let año = 2025;
let edad = año - nacimiento;
if( edad < 18) {
    alert("Eres menor de edad");
} else {
    alert("Eres mayor de edad");
}