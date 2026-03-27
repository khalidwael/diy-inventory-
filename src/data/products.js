// ============================================================
// DIY LAB - FULL PRODUCT DATABASE
// ============================================================

export const PRODUCTS = [
  // === MICROCONTROLLERS & MODULES ===
  { id: 'hc05', name: 'HC-05 Bluetooth Module', category: 'Modules', price: 142 },
  { id: 'uno-dip', name: 'Arduino Uno DIP (16U2)', category: 'Modules', price: 298 },
  { id: 'uno-smd', name: 'Arduino Uno SMD (CH340G)', category: 'Modules', price: 198 },
  { id: 'nano', name: 'Arduino Nano (CH340G)', category: 'Modules', price: 155 },
  { id: 'pro-micro', name: 'Arduino Pro Micro', category: 'Modules', price: 288 },
  { id: 'pro-mini', name: 'Arduino Pro Mini (5V/16MHz)', category: 'Modules', price: 148 },
  { id: 'usb-host', name: 'Arduino USB Host Shield', category: 'Modules', price: 288 },
  { id: 'gps-neo6m', name: 'Ublox Neo-6M GPS Module', category: 'Modules', price: 350 },
  { id: 'mpu6050', name: 'MPU-6050 Gyro/Accel', category: 'Modules', price: 160 },
  { id: 'atmega328-dip', name: 'ATmega328P DIP IC', category: 'Modules', price: 148 },
  { id: 'atmega328-smd', name: 'ATmega328P SMD IC', category: 'Modules', price: 133 },
  { id: 'esp32cam', name: 'ESP32 CAM + MB Micro USB', category: 'Modules', price: 425 },
  { id: 'esp32s', name: 'NodeMCU ESP32-S (38 Pin)', category: 'Modules', price: 275 },
  { id: 'esp32cam-mb', name: 'ESP32 CAM MB Module', category: 'Modules', price: 65 },
  { id: 'stm32', name: 'STM32F103C8T6 Board', category: 'Modules', price: 158 },
  { id: 'ftdi', name: 'FTDI Basic Breakout (5V/3.3V)', category: 'Modules', price: 85 },

  // === SENSORS ===
  { id: 'ph-blue', name: 'pH Sensor Blue', category: 'Sensors', price: 1250 },
  { id: 'flex-45', name: 'Flex/Bending Sensor 4.5"', category: 'Sensors', price: 890 },
  { id: 'flex-22', name: 'Flex/Bending Sensor 2.2"', category: 'Sensors', price: 370 },
  { id: 'ecg-ad8232', name: 'ECG Module AD8232', category: 'Sensors', price: 350 },
  { id: 'emg', name: 'EMG Muscle Sensor Kit', category: 'Sensors', price: 690 },
  { id: 'lidar', name: 'RP LIDAR-A1 A1M8', category: 'Sensors', price: 7250 },
  { id: 'heartrate', name: 'Heart Rate (Pulse) Sensor', category: 'Sensors', price: 98 },
  { id: 'turbidity', name: 'Turbidity Sensor', category: 'Sensors', price: 495 },
  { id: 'tds', name: 'TDS Sensor Meter V1.0', category: 'Sensors', price: 480 },
  { id: 'fingerprint', name: 'Fingerprint Module R307', category: 'Sensors', price: 775 },
  { id: 'depth-ms5540', name: 'Waterproof Depth Sensor (MS5540C)', category: 'Sensors', price: 750 },
  { id: 'joystick', name: 'Joystick Module', category: 'Sensors', price: 30 },
  { id: 'ir-3pin', name: 'IR Sensor 3-Pin', category: 'Sensors', price: 25 },
  { id: 'flame', name: 'Flame Sensor 3-Pin', category: 'Sensors', price: 25 },
  { id: 'line-follower', name: 'Line Follower TCRT5000', category: 'Sensors', price: 25 },
  { id: 'max30102', name: 'MAX30102 Heart Rate (Purple)', category: 'Sensors', price: 130 },
  { id: 'ldr', name: 'LDR Module 3-Pin', category: 'Sensors', price: 24 },
  { id: 'ultrasonic', name: 'Ultrasonic Sensor HC-SR04', category: 'Sensors', price: 39 },
  { id: 'dht11', name: 'DHT11 Temperature/Humidity', category: 'Sensors', price: 39 },
  { id: 'dht22', name: 'DHT22 Module (Red/Black)', category: 'Sensors', price: 99 },
  { id: 'soil', name: 'Soil Moisture Sensor', category: 'Sensors', price: 35 },
  { id: 'mic', name: 'Microphone Sound Sensor', category: 'Sensors', price: 25 },
  { id: 'mq2', name: 'MQ-2 Smoke Sensor', category: 'Sensors', price: 64 },
  { id: 'mq7', name: 'MQ-7 Carbon Monoxide', category: 'Sensors', price: 65 },
  { id: 'mq9', name: 'MQ-9 Combustible Gas', category: 'Sensors', price: 70 },

  // === POWER & BATTERIES ===
  { id: 'solar-charger', name: 'Mini Solar Charger CN3065', category: 'Power', price: 85 },
  { id: 'bat-30q', name: 'Battery Samsung 30Q 3000mAh', category: 'Power', price: 140 },
  { id: 'bat-ultrafire', name: 'Battery Ultra Fire 1100mAh', category: 'Power', price: 28 },
  { id: 'adapter-5v', name: 'DC Power Adapter (5V 2A)', category: 'Power', price: 45 },
  { id: 'adapter-12v', name: 'DC Power Adapter (12V 2A)', category: 'Power', price: 39 },
  { id: 'powerbank-t6845', name: 'Power Bank Module T6845-C', category: 'Power', price: 35 },
  { id: 'powerbank-dual', name: 'Dual USB Power Bank Module', category: 'Power', price: 99 },
  { id: 'bat-indicator', name: 'Battery Level Indicator (1S-8S)', category: 'Power', price: 47 },
  { id: 'usb-stepdown', name: 'USB DC-DC Step Down (6-24V to 5V)', category: 'Power', price: 60 },
  { id: 'xl6009', name: 'XL6009 Step Up Boost', category: 'Power', price: 50 },
  { id: 'lm2596', name: 'LM2596 Step Down Buck', category: 'Power', price: 43 },

  // === BMS & PROTECTION ===
  { id: 'bms-1s-3a', name: 'BMS 1S (3.7V 3A)', category: 'BMS', price: 15 },
  { id: 'bms-1s-tp4056-micro', name: 'BMS 1S TP4056 (Micro USB)', category: 'BMS', price: 12 },
  { id: 'bms-1s-tp4056-c', name: 'BMS 1S TP4056 (Type C)', category: 'BMS', price: 13 },
  { id: 'bms-2s-5a', name: 'BMS 2S (8.4V 5A)', category: 'BMS', price: 24 },
  { id: 'bms-2s-20a', name: 'BMS 2S (8.4V 20A)', category: 'BMS', price: 45 },
  { id: 'bms-3s-10a', name: 'BMS 3S (12.6V 10A)', category: 'BMS', price: 52 },
  { id: 'bms-3s-20a', name: 'BMS 3S (12.6V 20A)', category: 'BMS', price: 42 },
  { id: 'bms-3s-25a', name: 'BMS 3S (12.6V 25A)', category: 'BMS', price: 85 },
  { id: 'bms-3s-40a', name: 'BMS 3S (12.6V 40A)', category: 'BMS', price: 88 },
  { id: 'bms-3s-60a', name: 'BMS 3S (12.6V 60A)', category: 'BMS', price: 90 },
  { id: 'bms-3s-100a', name: 'BMS 3S (12.6V 100A)', category: 'BMS', price: 165 },
  { id: 'bms-4s-20a', name: 'BMS 4S (16.8V 20A)', category: 'BMS', price: 80 },
  { id: 'bms-4s-40a', name: 'BMS 4S (16.8V 40A)', category: 'BMS', price: 90 },
  { id: 'bms-5s-15a', name: 'BMS 5S (21V 15A)', category: 'BMS', price: 120 },
  { id: 'bms-5s-25a', name: 'BMS 5S (21V 25A)', category: 'BMS', price: 85 },
  { id: 'bms-6s-12a', name: 'BMS 6S (24V 12A)', category: 'BMS', price: 90 },
  { id: 'bms-13s-50a', name: 'BMS 13S 50A', category: 'BMS', price: 910 },
  { id: 'bms-16s-50a', name: 'BMS 16S 50A', category: 'BMS', price: 1445 },

  // === LIPO BATTERIES ===
  { id: 'lipo-3s-1500', name: 'Lipo 3S 1500mAh 25C', category: 'Lipo', price: 1100 },
  { id: 'lipo-3s-2200', name: 'Lipo 3S 2200mAh 25C', category: 'Lipo', price: 1500 },
  { id: 'lipo-3s-3300', name: 'Lipo 3S 3300mAh 35C', category: 'Lipo', price: 1850 },
  { id: 'lipo-3s-5200', name: 'Lipo 3S 5200mAh 40C', category: 'Lipo', price: 2400 },
  { id: 'lipo-3s-10400', name: 'Lipo 3S 10400mAh 40C', category: 'Lipo', price: 4600 },
  { id: 'lipo-3s-22000', name: 'Lipo 3S 22000mAh', category: 'Lipo', price: 10500 },

  // === USED 18650 BATTERIES ===
  { id: '18650-100', name: 'Used 18650 (100-499mAh)', category: 'Used 18650', price: 0 },
  { id: '18650-500', name: 'Used 18650 (500-600mAh)', category: 'Used 18650', price: 6 },
  { id: '18650-700', name: 'Used 18650 (700-800mAh)', category: 'Used 18650', price: 8 },
  { id: '18650-900', name: 'Used 18650 (900mAh)', category: 'Used 18650', price: 14 },
  { id: '18650-1000', name: 'Used 18650 (1000-1100mAh)', category: 'Used 18650', price: 18.5 },
  { id: '18650-1200', name: 'Used 18650 (1200mAh)', category: 'Used 18650', price: 20 },
  { id: '18650-1300', name: 'Used 18650 (1300mAh)', category: 'Used 18650', price: 21 },
  { id: '18650-1400', name: 'Used 18650 (1400mAh)', category: 'Used 18650', price: 22 },
  { id: '18650-1500', name: 'Used 18650 (1500mAh)', category: 'Used 18650', price: 23 },
  { id: '18650-1600', name: 'Used 18650 (1600mAh)', category: 'Used 18650', price: 25 },
  { id: '18650-1700', name: 'Used 18650 (1700mAh)', category: 'Used 18650', price: 27.5 },
  { id: '18650-1800', name: 'Used 18650 (1800mAh)', category: 'Used 18650', price: 31 },
  { id: '18650-1900', name: 'Used 18650 (1900mAh)', category: 'Used 18650', price: 33.5 },
  { id: '18650-2000', name: 'Used 18650 (2000mAh)', category: 'Used 18650', price: 36 },
  { id: '18650-2100', name: 'Used 18650 (2100mAh)', category: 'Used 18650', price: 38.5 },
  { id: '18650-2200', name: 'Used 18650 (2200mAh)', category: 'Used 18650', price: 41 },
  { id: '18650-2300', name: 'Used 18650 (2300mAh)', category: 'Used 18650', price: 43.5 },
  { id: '18650-2400', name: 'Used 18650 (2400mAh)', category: 'Used 18650', price: 46 },
  { id: '18650-2500', name: 'Used 18650 (2500mAh)', category: 'Used 18650', price: 51 },
  { id: '18650-2600', name: 'Used 18650 (2600mAh)', category: 'Used 18650', price: 56 },
  { id: '18650-2700', name: 'Used 18650 (2700mAh)', category: 'Used 18650', price: 61 },
  { id: '18650-2800', name: 'Used 18650 (2800mAh)', category: 'Used 18650', price: 66 },
  { id: '18650-2900', name: 'Used 18650 (2900mAh)', category: 'Used 18650', price: 71 },

  // === DISPLAYS ===
  { id: 'lcd-16x2', name: 'LCD 16x2 Blue', category: 'Displays', price: 54 },
  { id: 'lcd-20x4', name: 'LCD 20x4 Blue', category: 'Displays', price: 200 },
  { id: 'oled-091', name: 'I2C OLED 0.91" (128x32)', category: 'Displays', price: 95 },
  { id: 'oled-096', name: 'I2C OLED 0.96" (128x64)', category: 'Displays', price: 110 },
  { id: 'i2c-board', name: 'I2C Board Module for LCD', category: 'Displays', price: 38 },

  // === MOTORS & DRIVERS ===
  { id: 'drv8825', name: 'DRV8825 Stepper Driver', category: 'Motors', price: 78 },
  { id: 'a4988', name: 'A4988 Stepper Driver', category: 'Motors', price: 50 },
  { id: 'l298n', name: 'L298N Motor Driver', category: 'Motors', price: 66 },
  { id: 'sg90', name: 'Servo SG90 180°', category: 'Motors', price: 65 },
  { id: 'dc-motor', name: 'DC Motor + Wheel', category: 'Motors', price: 39.5 },
  { id: 'relay-1ch', name: 'Relay 5V 1-Channel', category: 'Motors', price: 27 },

  // === ACCESSORIES & TOOLS ===
  { id: 'breadboard', name: 'Breadboard 830 Points', category: 'Accessories', price: 35 },
  { id: 'solder-wire', name: 'Solder Wire Singapore 250g', category: 'Accessories', price: 570 },
  { id: 'red-led', name: 'Red LED 5mm (1000 Pcs)', category: 'Accessories', price: 165 },
  { id: 'cable-uno', name: 'Arduino Uno Cable 30cm', category: 'Accessories', price: 16.5 },
  { id: 'cable-nano', name: 'Arduino Nano Cable 30cm', category: 'Accessories', price: 16 },
  { id: 'jumper-mf-10', name: 'Jumper Male-Female 10cm', category: 'Accessories', price: 0.53 },
  { id: 'jumper-20', name: 'Jumper M-M / M-F / F-F 20cm', category: 'Accessories', price: 0.63 },
  { id: 'dc-jack', name: 'DC Jack Male/Female', category: 'Accessories', price: 2.5 },
  { id: 'heatshrink', name: 'Heat Shrink Tubing 1S (100 Pcs)', category: 'Accessories', price: 125 },
  { id: 'pvc-shrink-120', name: 'PVC Shrink Tube 120mm', category: 'Accessories', price: 27 },
  { id: 'pvc-shrink-150', name: 'PVC Shrink Tube 150mm', category: 'Accessories', price: 37 },
  { id: 'pvc-shrink-200', name: 'PVC Shrink Tube 200mm', category: 'Accessories', price: 67 },
  { id: 'nickel-strip', name: 'Nickel Strip (1M)', category: 'Accessories', price: 14 },
  { id: 'insulation-gasket', name: 'Battery Insulation Gasket (50 Pcs)', category: 'Accessories', price: 35 },
  { id: 'kapton-tape', name: 'Kapton Tape 40mm', category: 'Accessories', price: 400 },
  { id: 'bracket-1cell', name: 'Battery Bracket Spacer (1 Cell)', category: 'Accessories', price: 2 },
  { id: 'bracket-2cell', name: 'Battery Bracket Spacer (2 Cell)', category: 'Accessories', price: 3 },
  { id: 'bracket-3cell', name: 'Battery Bracket Spacer (3 Cell)', category: 'Accessories', price: 4 },
  { id: 'holder-1cell', name: 'Battery Holder 18650 (1 Cell)', category: 'Accessories', price: 8 },
  { id: 'holder-2cell', name: 'Battery Holder 18650 (2 Cell)', category: 'Accessories', price: 12 },
  { id: 'holder-3cell', name: 'Battery Holder 18650 (3 Cell)', category: 'Accessories', price: 18 },
  { id: 'holder-4cell', name: 'Battery Holder 18650 (4 Cell)', category: 'Accessories', price: 24 },
  { id: 'ebag-6x9', name: 'Electrostatic Bag 6x9cm (per pc)', category: 'Accessories', price: 150 },
  { id: 'ebag-9x13', name: 'Electrostatic Bag 9x13cm (per pc)', category: 'Accessories', price: 200 },
  { id: 'ebag-9x18', name: 'Electrostatic Bag 9x18cm (per pc)', category: 'Accessories', price: 250 },
  { id: 'slot-tape', name: 'Slotted Packaging Tape', category: 'Accessories', price: 75 },
];

export const CATEGORIES = [...new Set(PRODUCTS.map(p => p.category))];

export function searchProducts(query) {
  if (!query.trim()) return PRODUCTS;
  const q = query.toLowerCase();
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
}
