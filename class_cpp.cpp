#include<iostream>
using namespace std;

class student
{
  private:
    int roll_number;
    char Name[20];
    float cgpa;
  public:
     void getstudentdata(void);
     void show(void);
};

int main()
{
    student bdiv;
    bdiv.getstudentdata();
    bdiv.show();
    return 0;
}

void student::getstudentdata(void)
{
    cout<<"-> Enter student data <-"<<endl;
    cout<<"Enter Roll number: ";
    cin>>roll_number;

    cout<<"Enter student Name: ";
    cin>>Name;

    cout<<"Enter CGPA: ";
    cin>>cgpa;
}
void student::show(void)
{
  cout<<"***********STUDENT INFORMATION***********"<<endl;
  cout<<"NAME : "<<Name<<endl;
  cout<<"ROLL NUMBER : "<<roll_number<<endl;
  cout<<"CGPA : "<<cgpa<<endl;
  cout<<"***********THANK YOU**************";
}