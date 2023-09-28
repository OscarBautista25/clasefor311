var edad,estadoCivil, estatura, sexo, totalPersonas=10, contadorPersonasPasan=0, 
porcentajeCumplen=0, acumuladorEdad=0, acumuladorEstatura=0, promedioEdad=0, 
promedioEstatura=0;
for (let numeroPersona = 1; numeroPersona <=totalPersonas; numeroPersona++) {
    edad = parseFloat(prompt("Ingrese la edad de la persona número " +numeroPersona));
    estadoCivil = parseFloat(prompt("Ingrese el estado civil de la persona " +numeroPersona + " 1. Soltero 2.Casado"));
    estatura = parseFloat(prompt("Ingrese la estatura de la persona " +numeroPersona));
    sexo = parseFloat(prompt("Ingrese el sexo de la persona " +numeroPersona + " 1.Hombre 2.Mujer"));
    if (edad>=18 && estadoCivil==1 && estatura>170 && sexo==1) {
        contadorPersonasPasan=contadorPersonasPasan+1;
        acumuladorEdad=acumuladorEdad+edad;
        acumuladorEstatura=acumuladorEstatura+estatura
        
    }
    
}
porcentajeCumplen = (contadorPersonasPasan/totalPersonas)*100;
promedioEdad = acumuladorEdad/contadorPersonasPasan;
promedioEstatura = acumuladorEstatura/contadorPersonasPasan;

alert("El porcetaje de personas que cumplen con las condiciones dadas es el " +porcentajeCumplen + "%");
alert("El promedio de edad de las personas que cumplen las condiciones es " +promedioEdad + " años");
alert("El promedio de estatura de las personas que cumplen las condiciones es " +promedioEstatura + " cms");
