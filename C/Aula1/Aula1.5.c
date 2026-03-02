#include <stdio.h>

int main() {
    
    float salario_bruto = 0;
    float imposto_valor = 0;
    float salario_liquido = 0;
    char estado_civil;
    
    printf("Digite o seu estado civil (S para Solteiro, C para Casado): ");
        scanf(" %c", &estado_civil); 
    
    printf("Digite o valor do salário bruto: ");
        scanf("%f", &salario_bruto);
    
    if (salario_bruto <= 0) {
        printf("Erro: Valor inválido! O salário deve ser maior que zero.\n");
        return 1;
    }
    
    if (estado_civil == 'S' || estado_civil == 's') {
        imposto_valor = salario_bruto * 0.10;
    } 
    else if (estado_civil == 'C' || estado_civil == 'c') {
        imposto_valor = salario_bruto * 0.09; 
    } 
    
    salario_liquido = salario_bruto - imposto_valor;
    
    printf("\n--- RESULTADO ---\n");
    
    printf("Estado Civil    : ");
    switch(estado_civil) {
        case 'S': case 's': printf("Solteiro\n"); break;
        case 'C': case 'c': printf("Casado\n"); break;
        default: printf("Invalido\n");
    }

    printf("Salário Bruto   : %.2f €\n", salario_bruto);
    printf("Imposto (Taxa)  : %.2f €\n", imposto_valor);
    printf("---------------------------\n");
    printf("Salário Líquido : %.2f €\n", salario_liquido);
    
    return 0;
}