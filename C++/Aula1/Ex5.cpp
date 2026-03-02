#include <iostream>

using namespace std;

int main (){
     double num1, num2;
     int opcao;


     cout << "Digite dois números para calculo: " <<endl;
     cin >> num1 >> num2;

     cout <<"---------------------" <<endl;

     cout <<"Escolha uma das opções: " <<endl;
        cout <<"1 - Soma"<<endl;
        cout <<"2 - Subtração"<<endl;
        cout <<"3 - Multiplicação"<<endl;
        cout <<"4 - Divisão"<<endl;
    cin >> opcao;

     switch (opcao){
        case 1:
            cout <<"O Resultado da soma é: " << num1 + num2 <<endl;
            break;
        case 2:
            cout <<"O Resultado da Subtração é: " << num1 - num2 <<endl;
            break;
        case 3:
            cout <<"O Resultado da Multiplicação é: " << num1 * num2 <<endl;
            break;
        case 4:
            cout <<"O Resultado da Divisão é: " << num1 / num2 <<endl;
            break;
        default:
            cout <<"Opção Inválida";
            break;
     }
     return 0;
}