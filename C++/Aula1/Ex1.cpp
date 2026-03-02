#include <iostream>

int main (){

    using namespace std;
    double n1, n2;

        cout << "Digite o primeiro numero: ";
        cin >> n1;

        cout << "Digite o segundo numero: ";
        cin >> n2;

        cout << "---- Resultados ----" <<endl; 

            cout <<"Soma: " << (n1+n2)<<endl;
            cout <<"Subtração: " << (n1-n2)<<endl;
            cout <<"Multiplicação: " << (n1*n2)<<endl;
            //cout <<"Divisão: " << (n1/n2)<<endl; 
            // O DE CIMA FUNCIONA MAS PARA NAO DAR ERRO 
            if (n2 != 0){
                cout << "Divisão: " << (n1/n2) <<endl;
            } else {
                cout << "Divisao: Erro! Nao e possivel dividir por zero." << endl;
            }
    return 0;
}