#include <iostream>

int main (){

    using namespace std;
    int idade;

    cout <<"Qual é a sua idade ?"<<endl;
    cin >>idade;

    if (idade >= 18){
        cout <<"Maior de idade"<<endl;
    }else {
        cout <<"Menor de idade"<<endl;
    }
    return 0;
}