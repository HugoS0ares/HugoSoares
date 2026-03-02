#include <stdio.h>

int main() {
    int dias;

    printf("Para saber se o ano é bissexto ou não, Digite o Nº de dias (365 ou 366): ");
    if (scanf("%d", &dias) != 1) {
        printf("Erro: Digite um valor numérico válido.\n");
        return 1;
    }

    switch (dias) {
        case 366:
            printf("Com 366 dias, o ano é BISSEXTO.\n");
            break;

        case 365:
            printf("Com 365 dias, o ano NÃO é bissexto (Ano Comum).\n");
            break;

        default:
            // Se o utilizador digitar qualquer outro número
            printf("ERRO: O valor %d é INVÁLIDO. Um ano só pode ter 365 ou 366 dias.\n", dias);
            break;
    }

    return 0;
}