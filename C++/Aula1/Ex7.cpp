#include <iostream>

using namespace std;

int main (){
     int n1,n2,n3,n4,n5;

        cout <<"Introduza 5 números inteiros para obter sua soma: "<<endl;
        cin >> n1 >> n2 >> n3 >> n4 >> n5;

        if (n1 >= 0 && n2 >= 0 && n3 >= 0 && n4 >= 0 && n5 >= 0) {
            cout << "A soma total dos 5 numeros e: " << (n1 + n2 + n3 + n4 + n5) << endl;
        } else {
            cout << "Erro! Numeros invalidos." << endl;
        }
    
    return 0;
}