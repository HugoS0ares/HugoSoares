#include <iostream>

int main (){

    using namespace std;
    double n1;

    cout <<"Digite um número: "<<endl;
    cin >> n1;

    if(n1>0){
        cout <<"O numero é positivo"<<endl;
    }else if (n1<0){
        cout <<"O numero é negativo"<<endl;
    }else{
        cout <<"O Numero é zero"<<endl;
    }
    return 0;
}