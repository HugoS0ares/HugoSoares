#include <stdio.h>

int main() {
    int numero;
    int soma = 0; 

    printf("--- Acumulador de Números Positivos ---\n");
    printf("Digite números inteiros (ou 0 para terminar):\n");

    do {
        printf("Digite um número: ");
        scanf("%d", &numero);

        if (numero > 0) {
            soma = soma + numero; 
        } else if (numero < 0) {
            printf("(Números negativos são ignorados no somatório)\n");
        }
        
    } while (numero != 0); 

    printf("\n------------------------------------\n");
    printf("A soma total dos números positivos é: %d\n", soma);
    printf("------------------------------------\n");

    return 0;
}