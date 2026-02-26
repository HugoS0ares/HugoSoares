#include <stdio.h>

int main() {
    int numero;
    int soma = 0; 

    printf("--- Acumulador de Números Positivos ---\n");
    printf("Digite números inteiros (ou 0 para terminar):\n");

    // Lemos o primeiro número antes de entrar no ciclo
    scanf("%d", &numero);

    // O ciclo continua enquanto o número for diferente de 0
    while (numero != 0) { 
        // Verificamos se o número é positivo antes de somar
        if (numero > 0) {
            soma = soma + numero; // Adiciona o número ao total acumulado
        } else {
            printf("(Números negativos são ignorados no somatório)\n");
        }

        // Pedimos o próximo número para a próxima volta do ciclo
        printf("Próximo número: ");
        scanf("%d", &numero);
    }

    // Quando o utilizador digita 0, o ciclo quebra e chegamos aqui
    printf("\n------------------------------------\n");
    printf("A soma total dos números positivos é: %d\n", soma);
    printf("------------------------------------\n");

    return 0;
}