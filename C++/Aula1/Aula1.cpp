#include <iostream>

int main (){

    using namespace std;
    int idade;

    cout << "Digite a sua idade na linha em baixo:" << endl;
    cin >> idade;
    if (idade > 25){
        cout << "A sua idade é " << idade << "!" << endl;
    }
    else if (idade < 21){
        cout << "O Utlizador nao tem idade sufiente para utilizar" << endl;
    }
    else {
        cout << "Não tem idade para isto na mesma" << endl;
    }
   
    return 0;
}