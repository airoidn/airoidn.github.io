#include <Adafruit_GFX.h>
#include <Adafruit_PCD8544.h>

HardwareSerial PMS(1);

// CLK, DIN, DC, CE, RST
Adafruit_PCD8544 display(18, 23, 2, 5, 4);

void setup() {

  Serial.begin(115200);

  // PMS UART
  PMS.begin(9600, SERIAL_8N1, 16, 17);

  // LCD
  display.begin();
  display.setContrast(60);

  display.clearDisplay();
  display.setCursor(0,0);
  display.println("Starting...");
  display.display();

  delay(1000);
}

void loop() {

  if (PMS.available() >= 32) {

    if (PMS.read() == 0x42 && PMS.read() == 0x4D) {

      byte data[30];
      PMS.readBytes(data, 30);

      int pm1  = (data[2] << 8) | data[3];
      int pm25 = (data[4] << 8) | data[5];
      int pm10 = (data[6] << 8) | data[7];

      // Serial Monitor
      Serial.print("PM1: ");
      Serial.print(pm1);
      Serial.print("  PM2.5: ");
      Serial.print(pm25);
      Serial.print("  PM10: ");
      Serial.println(pm10);

      // LCD
      display.clearDisplay();

      display.setCursor(0,0);
      display.print("PM1 : ");
      display.println(pm1);

      display.print("PM2 : ");
      display.println(pm25);

      display.print("PM10: ");
      display.println(pm10);

      // Air quality label
      display.println();

      if (pm25 <= 12)
        display.println("Clean");
      else if (pm25 <= 35)
        display.println("Moderate");
      else if (pm25 <= 55)
        display.println("Polluted");
      else
        display.println("Hazard!");

      display.display();
    }
  }
}