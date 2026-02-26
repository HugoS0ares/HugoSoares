#include <stdio.h>

int main() {
    char genero;
    float salario, imposto;

    printf("Digite o seu salario: € ");
    scanf("%f", &salario);

    printf("Informe o seu genero (M/H): ");
    scanf(" %c", &genero);

    switch (genero) {
        
        case 'M':
        case 'm':
            imposto = salario * 0.10;
            printf("\nImposto a pagar sobre as Mulheres é (10%%)");
            printf("\nVocê irá pagar: € %.2f\n", imposto);
            break;

        case 'H':
        case 'h':
            imposto = salario * 0.15;
            printf("\nO Imposto a pagar sobre os Homens é (15%%)");
            printf("\nVocê irá pagar: € %.2f\n", imposto);
            break;

        default:
            printf("\nOpcao invalida!\n");
    }

    return 0;
}

