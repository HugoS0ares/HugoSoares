#include <iostream>

using namespace std;

int main (){
     
    int numero;

    cout <<"Introduza um numero de 1 a 10 para obter sua tabuada: "<<endl;
    cin >> numero;

    cout <<"---- Tabuada do número " << numero << " ----" <<endl;

    for (int i = 1; i <= 10; i++){
        cout <<numero<< "x" <<i<< "=" << numero * i <<endl; 
    }
    return 0;
}