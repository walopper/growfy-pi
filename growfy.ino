#include "DHT.h"

#define DHTTYPE DHT22

int DHTPin = 2;

DHT dht(DHTPin, DHTTYPE);

int m1pin = A0;
int m2pin = A1;
int m3pin = A2;
int m4pin = A3;
int m5pin = A4;

int presicion = 200;
char jsonOut[32];
char jsonSoils[32];
char jsonTemp[32];
char str_temp[6];

void setup() {
    dht.begin();
    Serial.begin(9600);
    pinMode(m1pin, INPUT);
    pinMode(m2pin, INPUT);
    pinMode(m3pin, INPUT);
    pinMode(m4pin, INPUT);
    pinMode(m5pin, INPUT);
}


void loop() {
    int m1volt = analogRead(m1pin);
    int m2volt = analogRead(m2pin);
    int m3volt = analogRead(m3pin);
    int m4volt = analogRead(m4pin);
    int m5volt = analogRead(m5pin);

    int m1relValue = map(m1volt, 0, 1023, presicion, 0);
    int m2relValue = map(m2volt, 0, 1023, presicion, 0);
    int m3relValue = map(m3volt, 0, 1023, presicion, 0);
    int m4relValue = map(m4volt, 0, 1023, presicion, 0);
    int m5relValue = map(m5volt, 0, 1023, presicion, 0);

    float humidity = dht.readHumidity();
    float temp = dht.readTemperature();

    Serial.print("{ \"soil\": { \"pot1\": ");
    Serial.print(m1relValue);
    Serial.print(", \"pot2\": ");
    Serial.print(m2relValue);
    Serial.print(", \"pot3\": ");
    Serial.print(m3relValue);
    Serial.print(", \"pot4\": ");
    Serial.print(m4relValue);
    Serial.print(", \"pot5\": ");
    Serial.print(m5relValue);
    Serial.print(" }, \"temp\": ");
    Serial.print(temp);
    Serial.print(", \"humidity\": ");
    Serial.print(humidity);
    Serial.print(" }\n");

    delay(5000);
}
