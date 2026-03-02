#include <stdio.h>

int main()
{
    int num=0; 
    int a,b,c;
    num = 1;
    num = 1+3;
    num = 4+3;
    printf("%d\n",num);
    num = 1;
    printf("%d\n",num);
    num += 1;
    printf("%d\n",num);
    num ++;
    printf("%d\n",num);
    
    a = 0;
    b = a++;
    c = ++a;
    
    printf("a:%d,b:%d,c:%d",a,b,c);
    return 0;
}