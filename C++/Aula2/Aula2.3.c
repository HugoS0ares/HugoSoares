#include <stdio.h>

int main() {
    float num1, num2, resultado;
    char operacao;

    printf("Digite uma operacao (ex: 7 + 5): ");
    scanf("%f %c %f", &num1, &operacao, &num2);

    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            printf("%.2f + %.2f = %.2f\n", num1, num2, resultado);
            break;

        case '-':
            resultado = num1 - num2;
            printf("%.2f - %.2f = %.2f\n", num1, num2, resultado);
            break;

        case '*':
        case 'x':
        case 'X':
            resultado = num1 * num2;
            printf("%.2f * %.2f = %.2f\n", num1, num2, resultado);
            break;

        case '/':
        case ':':
            if (num2 != 0) {
                resultado = num1 / num2;
                printf("%.2f / %.2f = %.2f\n", num1, num2, resultado);
            } else {
                printf("Erro: Divisao por zero nao permitida!\n");
            }
            break;

        default:
            printf("Operador '%c' nao reconhecido.\n", operacao);
    }

    return 0;
}