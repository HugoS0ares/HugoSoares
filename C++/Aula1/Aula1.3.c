#include <stdio.h>

int main() {
    
    int salario = 1500; 
    int imposto = 0;
    
    if (salario >= 1000) {
        imposto = salario * 0.10; 
        printf("Paga %d de imposto.\n", imposto); 
    } 
    else if (salario > 0 && salario < 1000) {
        imposto = salario * 0.05;
        printf("Paga %d de imposto.\n", imposto);
    } 
    else { 
        printf("Erro: Valor invalido.\n");
    }
   
    return 0;
}
