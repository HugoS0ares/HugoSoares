#include <iostream>

using namespace std;

int main (){

    int numero;

    cout << "Digite um numero positivo: " << endl;
    cin >> numero;

    if (numero > 0) {
        cout << "A contar de 1 ate " << numero << ":" << endl;
        
        for (int i = 1; i <= numero; i++) { 
            cout << i << " ";
        }   
        cout << endl;
        
    } else { 
        cout << "Erro: O numero introduzido nao e positivo." << endl;
    }
    
    return 0;
}

