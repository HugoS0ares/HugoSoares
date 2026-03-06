#include <stdio.h>

int main (){
    int numero = 5;
    
    printf("Tabuada do número: 5\n");

    for (int i = 1; i <= 10; i++){
        printf("%d x %d = %d\n", numero, i, numero * i);
    }
    return 0;
}