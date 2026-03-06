#include <stdio.h>

int main() {
    printf("Codigo ASCII | Carater\n");
    printf("----------------------\n");

    for (int i = 0; i <= 255; i++) {
        // Carateres 0-31 são de controle (não imprimíveis)
        if (i < 32) {
            printf("%d \t | [Controle]\n", i);
        } else {
            printf("%d \t | %c\n", i, (char)i);
        }
    }

    return 0;
}