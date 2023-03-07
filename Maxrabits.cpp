#include<iostream>
#include<algorithm>
#include<bits/stdc++.h>
using namespace std;

int main()
{
    int n,k,i;
    cout<<"Enter array size : "<<endl;
    cin>> n;
    cout<<"Enter number of bullets : "<<endl;
    cin>> k;
    int arr[n];
    int sum;
    sum = 0;

    for(i=0;i<n;i++)
    {
        cin>>arr[i];
    }
    
    int c;
    c = *max_element(arr,arr + n);
    sum = sum + c;
    while(k)
    {
        if(k==1){
            sum = c;
            cout<<"Maximum number of rabits ran away is "<<sum;
            k--;
        }

        for(i=0;i<n;i++)
        {
            if(arr[0] == c)
            {
                arr[-1] = arr[n-1];
                arr[-2] = arr[n-2];
            }

            if(arr[i] == c)
            {
               arr[i+2] = arr[i+1] + arr[i+2];
               arr[i-2] = arr[i-1] + arr[i-2];
               arr[i-1] = 0;
               arr[i] = 0;
               arr[i+1] = 0;
            }

        }
         
       sum = sum + *max_element(arr,arr + n);
       k--;
    }
    
  cout<<"Maximum number of rabits ran away is "<<sum;
  return 0;
}