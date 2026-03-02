#include <iostream>

    using namespace std;

int main(){
    double n1,n2,n3;

    cout <<"Digite o primeiro número: " <<endl;
    cin >> n1;
    cout <<"Digite o segundo número: "<<endl;
    cin >> n2;
    cout <<"Digite o terceiro número: "<<endl;
    cin >> n3;

    double maior = n1;
    
        if (n2 > maior){
            maior = n2;
        }if (n3 >maior){
            maior = n3;
        }

    cout <<"O maior número é: " << maior <<endl;
    return 0;
}