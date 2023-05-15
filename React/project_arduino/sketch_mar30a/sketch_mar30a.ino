#include <SoftwareSerial.h>

// variables para medir bateria 
const int pinLedVerde = 2;
const int pinLedAmarillo = 3;
const int pinLedRojo = 4;
const int pinAnalogico = A0;
const float resistencia = 220.0;
const float voltajeMaximo = 2.4;

SoftwareSerial esp8266(8, 9); // RX, TX

void setup() {
  // pin leds carga
  pinMode(pinLedVerde, OUTPUT);
  pinMode(pinLedAmarillo, OUTPUT);
  pinMode(pinLedRojo, OUTPUT);

  // Inicializar el puerto serie
  Serial.begin(9600);

  while (!Serial);

  // Inicializar el puerto serie del módulo ESP8266
  esp8266.begin(115200);

  // Configurar el módulo ESP8266 para trabajar con el Arduino Uno
  esp8266.println("AT+RST");
  delay(1000);
  esp8266.println("AT+CWMODE=1");
  delay(1000);
  esp8266.println("AT+CWJAP=\"iPhoneSA\",\"steven2020.\"");
  delay(5000);
  esp8266.println("AT+CIPMUX=0");
  delay(1000);
  esp8266.println("AT+CIFSR");
  delay(1000);
}

void loop() {
  //logica de la medicion
  float voltaje = analogRead(pinAnalogico) * (voltajeMaximo / 1023.0);
  float corriente = voltaje / resistencia;
  float carga = voltaje / voltajeMaximo * 100.0;
  
  Serial.print("Voltaje: ");
  Serial.print(voltaje);
  Serial.print("V, Carga: ");
  Serial.print(carga);
  Serial.println(" %");
  
  if (carga >= 70.0) {
    digitalWrite(pinLedVerde, HIGH);
    digitalWrite(pinLedAmarillo, LOW);
    digitalWrite(pinLedRojo, LOW);
  } else if (carga >= 30.0) {
    digitalWrite(pinLedVerde, LOW);
    digitalWrite(pinLedAmarillo, HIGH);
    digitalWrite(pinLedRojo, LOW);
  } else {
    digitalWrite(pinLedVerde, LOW);
    digitalWrite(pinLedAmarillo, LOW);
    digitalWrite(pinLedRojo, HIGH);
  }


  // Leer la respuesta del módulo ESP8266
  while (esp8266.available()) {
    Serial.write(esp8266.read());
  }

  // Enviar un comando AT al módulo ESP8266
  if (Serial.available()) {
    esp8266.write(Serial.read());
  }

  // Verificar la conexión
  esp8266.println("AT+CIPSTATUS");
  delay(1000);
  while (esp8266.available()) {
    Serial.write(esp8266.read());
  }

char cargaStr[10];
dtostrf(carga, 4, 2, cargaStr); 

 //peticion
 esp8266.println("AT+CIPSTART=\"TCP\",\"172.20.10.13\",3000");
  delay(1000);
  esp8266.println("AT+CIPSEND=75");
  delay(1000);
  esp8266.println("GET /reports/1/1/"+String(cargaStr) + " HTTP/1.1\r\nHost: 172.20.10.13\r\n\r\n");
  delay(5000);
  while (esp8266.available()) {
    Serial.write(esp8266.read());
  }
  esp8266.println("AT+CIPCLOSE");

}
