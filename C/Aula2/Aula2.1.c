#include <stdio.h>

int main() {
    int n_horas;
    long n_seg, d_seg, n_minutos; 
    char opcao; 

    printf("Digite o Nº de Horas para obter sua conversão: ");
    scanf("%d", &n_horas);

    printf("Deseja converter para Minutos (M), Segundos (S) ou Decimos (D)? ");
    scanf(" %c", &opcao);

    switch (opcao) {
        case 'm':
        case 'M':
            n_minutos = (long)n_horas * 60;
            printf("%d Horas tem %ld minutos\n", n_horas, n_minutos);
            break;

        case 's':
        case 'S':
            n_seg = n_horas < 0 ? 0 : n_horas * 3600L;
            printf("%d Horas tem %ld segundos\n", n_horas, n_seg);
            break;

        case 'd': 
        case 'D':
            d_seg = n_horas < 0 ? 0 : n_horas * 36000L;
            printf("%d Horas tem %ld Decimos de segundo\n", n_horas, d_seg);
            break;

        default:
            printf("Opcao invalida!\n");
    }

    return 0; 
}