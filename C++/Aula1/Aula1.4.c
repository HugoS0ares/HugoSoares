#include <stdio.h>

int main() {
    
    float salario_bruto = 0;
    float imposto_valor = 0;
    float salario_liquido = 0;
    
    printf("Digite o valor do salário bruto: ");
    scanf("%f", &salario_bruto);
    
    if (salario_bruto <= 0){
        printf("Erro: Valor inválido! O salário deve ser maior que zero.\n");
        return 1;
    }
        
    else if (salario_bruto < 1000) {
        imposto_valor = salario_bruto * 0.05; 
    }
    
    else if (salario_bruto >= 1000 && salario_bruto < 5000) {
        imposto_valor = salario_bruto * 0.11;
    } 
    else {
        imposto_valor = salario_bruto * 0.35;
    }
    
    salario_liquido = salario_bruto - imposto_valor;
    
    printf("--- Salário ---\n");
    printf("Salário Bruto  :  %.2f €\n", salario_bruto);
    printf("Imposto a pagar :  %.2f €\n", imposto_valor);
    printf("---------------------------\n");
    printf("Salário Líquido:  %.2f €\n", salario_liquido);
   
    return 0;
}