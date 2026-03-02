#include <stdio.h>
#include <locale.h>

int main()
{
    setlocale (LC_ALL,"Portuguese");
    
    int valor = 20;
    
    if (valor > 50){
        printf("o valor é superior a 50.\n");
    }
    
    else if (valor == 50){
        printf("o valor é igual a 50.\n");
    }
    
    else {
        printf("o valor é inferior a 50.\n");
    }
   
    return 0;
}