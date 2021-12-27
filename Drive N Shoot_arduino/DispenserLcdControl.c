// LCD 코드

//#include <core_build_options.h>
//#include <swRTC.h>

#include <LiquidCrystal_I2C.h>
#include <Wire.h>
#include <Servo.h>

#define GAMETIME 30000
int red_sense = 4;
int count = 0;
int radiowaveValue = 0;
Servo servo2;
Servo servo3;
Servo servo4;
int servoBottom = 9;  //각도 조절
int servoHeight = 10; //높이 조절
int servoSpoon = 12;  //숟가락잡기
int angleBottom = 40;
int angleHeight = 40;
int angleSpoon = 120;
LiquidCrystal_I2C lcd(0x27, 16, 2);
// swRTC rtc;  //클래스 개체 선언
struct Person
{
  String id;
  int score;
};
int registered = 0;

String temp_name;
boolean GameTimer = false;
unsigned long time; //물어본 시간을 저장할 변수
Person person[30] = {};

void sortLeaderBoard()
{
  for (int i = 0; i < registered; i++)
  {
    for (int j = 0; j < registered - i - 1; j++)
    {
      if (person[j].score < person[j + 1].score)
      {
        int temp_score = person[j].score;
        String temp_id = person[j].id;
        person[j].score = person[j + 1].score;
        person[j].id = person[j + 1].id;
        person[j + 1].score = temp_score;
        person[j + 1].id = temp_id;
      }
    }
  }
}

void printLeaderBoard()
{
  sortLeaderBoard();
  Serial.println("                LEADER BOARD                  ");
  Serial.println("┏------------------------------------┓");
  Serial.println("|          NAME          |   SCORE   |");
  int space = 24;
  for (int i = 0; i < registered; i++)
  {
    int lrspace = (space - person[i].id.length())/2;
    Serial.print("|");
    for(int j=0;j<lrspace;j++){
      Serial.print(" ");
    }
    Serial.print(person[i].id);
    for(int j=0;j<lrspace;j++){
      Serial.print(" ");
    }
    
    Serial.print(" |     ");
    Serial.print(person[i].score);
    Serial.println("     |");
    
  }
  Serial.println("┗------------------------------------┛");
}


void moveServoBottom()
{
          if (angleBottom==40){//공놓는데로
          for(angleBottom = 40; angleBottom < 130; angleBottom++) 
          { 
            servo2.write(angleBottom); 
            delay(10); 
          } 
        }
  
        else if(angleBottom == 130){//공집으러가는데
          for(angleBottom = 130; angleBottom > 40; angleBottom--) 
          { 
            servo2.write(angleBottom); 
            delay(10); 
          } 
        }
}

void moveServoHeightLess()
{
        if(angleHeight == 40){

        for(angleHeight = 40; angleHeight > 10; angleHeight--)
        { 
          servo3.write(angleHeight); 
          delay(10); 
        } 
      }

      else{

        for(angleHeight = 10; angleHeight < 40; angleHeight++)
        { 
          servo3.write(angleHeight); 
          delay(10); 
        } 
        
      }
}


void moveServoHeightMany(){
        if(angleHeight == 40){

        for(angleHeight = 40; angleHeight > 10; angleHeight--)
        { 
          servo3.write(angleHeight); 
          delay(10); 
        } 
      }

      else{

        for(angleHeight = 10; angleHeight < 40; angleHeight++)
        { 
          servo3.write(angleHeight); 
          delay(10); 
        } 
        
      }
}

void moveServoSpoon(){
        if(angleSpoon == 85){//낮을수록 덜 벌림

        for(angleSpoon = 85; angleSpoon < 120; angleSpoon++)
        { 
          servo4.write(angleSpoon); 
          delay(10); 
        } 
      }

      else if(angleSpoon == 120){

        for(angleSpoon = 120; angleSpoon > 85; angleSpoon--)
        { 
          servo4.write(angleSpoon); 
          delay(10); 
        } 
        
      }
}

void setup()
{
  //  rtc.stopRTC();            //정지
  //  rtc.setTime(21, 46, 10);  //시, 분, 초
  //  rtc.setDate(30, 11, 2021); //일, 월, 년
  //  rtc.startRTC();           //시작
  servo2.attach(servoBottom);
  servo3.attach(servoHeight);
  servo4.attach(servoSpoon);
  Serial.begin(9600);
  pinMode(red_sense, INPUT);
  // I2C LCD를 초기화 합니다..
  lcd.init();
  // I2C LCD의 백라이트를 켜줍니다.
  lcd.backlight();
  lcd.setCursor(0, 0); // 0번째 줄 0번째 셀부터 입력하게 합니다.
  lcd.print("Are You Ready?");
  moveServoBottom();
  delay(500);
  moveServoBottom();
  delay(500);
  moveServoSpoon();
  delay(500);
  moveServoSpoon();
  delay(500);
  moveServoHeightLess();
  delay(500);
  moveServoHeightLess();
  Serial.println("공배급은 1,게임시작은 0");
}

void loop()
{
  if (Serial.available() > 0)
  {
    String answer = Serial.readStringUntil('\n');
    if (answer == "0")
    { //
      printLeaderBoard();
      int point = 0;
      Serial.println("이름을 입력해 주세요!");
      while (true)
      {
        if (Serial.available() > 0)
        {
          temp_name = Serial.readStringUntil('\n');
          person[registered].id = temp_name;
          Serial.println(person[registered].id);
          break;
        }
      }

      Serial.println("30초 안에 최대한 많이 득점하세요!");
      lcd.clear();
      lcd.setCursor(1,0);
      lcd.print("START!");
      time = millis();
      while (millis() - time <= GAMETIME)
      { // 게임 하는 구간

        int radiowaveValue = digitalRead(red_sense);
        if (radiowaveValue == LOW)
        {
          // 0번째 줄 0번째 셀부터 입력하게 합니다.
          point += 2;
          lcd.setCursor(0, 0); // 0번째 줄 0번째 셀부터 입력하게 합니다.
          lcd.clear();
          lcd.print("GOAL!!!!"); // 문구를 출력합니다.
          delay(1000);
          lcd.clear();
          lcd.setCursor(3, 0);
          lcd.print("SCORE : ");
          lcd.setCursor(11, 0);
          lcd.print(point);
        }
      }
      lcd.clear();
      lcd.setCursor(1,0);
      lcd.print("FINISH");
      person[registered].score = point;
      Serial.println(person[registered].id + "의 점수는" + person[registered].score + "점 입니다");
      registered += 1;
      printLeaderBoard();
      lcd.clear();
      Serial.println("공배급은 1,게임시작은 0");
    }

    else if (answer == "1")
    { // 서보모터 돌리는 로직

    moveServoBottom();
    delay(1000);
    moveServoHeightLess();
    delay(1000);
    moveServoSpoon();
    delay(1000);
    moveServoHeightLess();
    delay(1000);
    moveServoBottom();
    delay(1000);
    moveServoHeightMany();
    delay(1000);
    moveServoSpoon();
    delay(1000);
    moveServoHeightLess();
    delay(1000);
    Serial.println("공배급은 1,게임시작은 0");


    }

  }
}