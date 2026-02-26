#include <stdio.h>

int main() {
    int ano;

    printf("Digite um ano: ");
    scanf("%d", &ano);

    // Lógica: divisível por 4 E (não divisível por 100 OU divisível por 400)
    if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
        printf("O ano %d e BISSEXTO.\n", ano);
    } else {
        printf("O ano %d NAO e bissexto.\n", ano);
    }

    return 0;
}