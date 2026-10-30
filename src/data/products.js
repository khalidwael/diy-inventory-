// ─── All DIY Lab Products (Updated from Price List 2026) ─────────────────────
export const CATEGORIES = [
  'Microcontrollers & Modules',
  'Sensors & Specialized Modules',
  'Power, Charging & Converters',
  'BMS',
  'LiPo Batteries',
  'Used 18650 Batteries',
  'Displays, Motors & Drivers',
  'Wiring, Tools & Packaging',
];

export const SUB_CATEGORIES = {
  'Microcontrollers & Modules': ['Arduino', 'ESP32', 'STM32', 'Bluetooth', 'GPS', 'FTDI', 'Lidar'],
  'Sensors & Specialized Modules': ['Temperature', 'Humidity', 'Gas', 'Motion', 'Heart', 'Ultrasound', 'Joystick', 'PH', 'Flex', 'Compass', 'Fingerprint'],
  'Power, Charging & Converters': ['Step Up', 'Step Down', 'Charger', 'Adapter', 'Power Bank', 'Samsung', 'Indicator', 'Battery Monitor'],
  'BMS': ['1S', '2S', '3S', '4S', '5S', '6S', 'LiFePO4', 'Higher S'],
  'LiPo Batteries': ['90MAH', '250MAH', '500MAH', '600MAH', 'Battery Pack'],
  'Used 18650 Batteries': ['500-1000MAH', '1000-1500MAH', '1500-2000MAH', '2000-2500MAH', '2500MAH+'],
  'Displays, Motors & Drivers': ['LCD', 'OLED', 'Servo', 'Motor Driver', 'Relay', 'Joystick'],
  'Wiring, Tools & Packaging': ['Jumper', 'Breadboard', 'Solder', 'Cable', 'DC Jack', 'Heatshrink', 'Nickel Strip', 'Battery Holder', 'Static Bag', 'Carbon Tube', 'Tape'],
};

export const PRODUCTS = [
  // ── MICROCONTROLLERS & MODULES ──────────────────────────────────────────
  { id: 'mega2560', name: 'ARDUINO MEGA 2560 DRIVER CH340G', category: 'Microcontrollers & Modules', price: 775 },
  { id: 'uno-dip', name: 'ARDUINO UNO DIP DRIVER 16U2', category: 'Microcontrollers & Modules', price: 295 },
  { id: 'uno-smd', name: 'ARDUINO UNO SMD DRIVER CH340G', category: 'Microcontrollers & Modules', price: 220 },
  { id: 'nano', name: 'ARDUINO NANO DRIVER CH340G', category: 'Microcontrollers & Modules', price: 150 },
  { id: 'pro-micro', name: 'ARDUINO PRO MICRO', category: 'Microcontrollers & Modules', price: 288 },
  { id: 'usb-host', name: 'ARDUINO USB HOST SHIELD', category: 'Microcontrollers & Modules', price: 300 },
  { id: 'hc05', name: 'HC-05 BLUETOOTH MODULE', category: 'Microcontrollers & Modules', price: 170 },
  { id: 'atmega328-dip', name: 'MICROCONTROLLER ATMEGA328P DIP', category: 'Microcontrollers & Modules', price: 148 },
  { id: 'atmega328-smd', name: 'MICROCONTROLLER ATMEGA328P SMD', category: 'Microcontrollers & Modules', price: 133 },
  { id: 'lidar', name: 'RPLIDAR A1 A1M8 360 Degree', category: 'Microcontrollers & Modules', price: 7500 },

  // ── SENSORS & SPECIALIZED MODULES ───────────────────────────────────────
  { id: 'flex-45', name: 'Flex/Bending Sensor 4.5 INCH', category: 'Sensors & Specialized Modules', price: 690 },
  { id: 'compass-gy273', name: 'DIGITAL COMPASS (GY-273) HMC5883L MAGNETOMETER SENSOR 3-Axis MODULE', category: 'Sensors & Specialized Modules', price: 140 },
  { id: 'ph-blue', name: 'PH SENSOR BLUE', category: 'Sensors & Specialized Modules', price: 1250 },
  { id: 'ecg-ad8232', name: 'ECG Module AD8232 Heart Rate (PULSE RATE) SENSOR', category: 'Sensors & Specialized Modules', price: 650 },
  { id: 'emg', name: 'EMG Module Muscle Sensor Kit', category: 'Sensors & Specialized Modules', price: 950 },
  { id: 'heartrate', name: 'HEART RATE (PULSE) SENSOR', category: 'Sensors & Specialized Modules', price: 98 },
  { id: 'turbidity', name: 'TURBIDITY SENSOR (Water Suspended Particles)', category: 'Sensors & Specialized Modules', price: 495 },
  { id: 'tds', name: 'TDS Sensor Meter V1.0 Board Module (MEASURING WATER QUALITY)', category: 'Sensors & Specialized Modules', price: 480 },
  { id: 'fingerprint', name: 'FINGERPRINT MODULE R307', category: 'Sensors & Specialized Modules', price: 775 },
  { id: 'mpu6050', name: 'MPU-6050 module THREE-AXIS ACCELEROMETER GYROSCOPE 6DOF MODULE GY-521', category: 'Sensors & Specialized Modules', price: 160 },
  { id: 'dht22-red', name: 'DHT22 RED', category: 'Sensors & Specialized Modules', price: 110 },
  { id: 'pot-50k', name: 'POT 50K', category: 'Sensors & Specialized Modules', price: 5 },
  { id: 'soil', name: 'SOIL MOISTURE DETECTION HUMIDITY SENSOR MODULE', category: 'Sensors & Specialized Modules', price: 35 },
  { id: 'raindrop', name: 'RAINDROP SENSOR MODULE', category: 'Sensors & Specialized Modules', price: 45 },
  { id: 'water-level', name: 'WATER LEVEL SENSOR', category: 'Sensors & Specialized Modules', price: 15 },
  { id: 'pir', name: 'PIR SENSOR', category: 'Sensors & Specialized Modules', price: 41 },
  { id: 'ir-3pin', name: 'IR SENSOR 3 PIN MODULE', category: 'Sensors & Specialized Modules', price: 25 },
  { id: 'flame', name: 'FLAME SENSOR 3 PIN MODULE', category: 'Sensors & Specialized Modules', price: 25 },
  { id: 'line-follower', name: 'LINE FOLLOWER SENSOR TCRT5000', category: 'Sensors & Specialized Modules', price: 28 },
  { id: 'i2c-board', name: 'I2C BOARD MODULE LCD16X2 SERIAL INTERFACE', category: 'Sensors & Specialized Modules', price: 38 },
  { id: 'ldr', name: 'LDR MODULE 3-PIN', category: 'Sensors & Specialized Modules', price: 24 },
  { id: 'ultrasonic', name: 'ULTRASONIC SENSOR', category: 'Sensors & Specialized Modules', price: 39 },
  { id: 'dht11', name: 'DHT11 module Temperature & humidity sensor', category: 'Sensors & Specialized Modules', price: 39 },
  { id: 'lm35', name: 'LM35DZ Temperature sensor original', category: 'Sensors & Specialized Modules', price: 50 },

  // ── POWER, CHARGING & CONVERTERS ────────────────────────────────────────
  { id: 'smart-bat-monitor', name: 'Smart Battery monitor DC7-55V LED indicator light, voltage and battery indicator', category: 'Power, Charging & Converters', price: 125 },
  { id: 'bat-indicator', name: 'Battery Level Indicator Module 1S8S (General Version)', category: 'Power, Charging & Converters', price: 48 },
  { id: 'bat-30q', name: 'BATTERY SAMSUNG 3000MAH HIGH DRAIN INR 30Q 15A (NEW)', category: 'Power, Charging & Converters', price: 160 },
  { id: 'bat-ultrafire', name: 'BATTERY NEW RED ULTRA FIRE 1100MAH', category: 'Power, Charging & Converters', price: 30 },
  { id: 'mb102', name: 'MB102 Breadboard Power Supply Module 3.3V/5V', category: 'Power, Charging & Converters', price: 35 },
  { id: 'ftdi', name: 'FTDI BASIC BREAKOUT 5V/3.3V (USB TO SERIAL TTL) - RED BOARD', category: 'Power, Charging & Converters', price: 85 },
  { id: 'solar-charger', name: 'MINI SOLAR CHARGER (SINGLE CELL LI ON AND LIPO) CN3065(500MA)', category: 'Power, Charging & Converters', price: 85 },
  { id: 'adapter-5v', name: 'DC POWER ADAPTER (5VDC - 2A)', category: 'Power, Charging & Converters', price: 45 },
  { id: 'adapter-6v', name: 'DC POWER ADAPTER (6VDC - 2A)', category: 'Power, Charging & Converters', price: 45 },
  { id: 'adapter-12v', name: 'DC POWER ADAPTER (12VDC - 2A)', category: 'Power, Charging & Converters', price: 45 },
  { id: 'adaptor-8.4v-2a', name: 'ADAPTOR 8.4V 2A LI-ION', category: 'Power, Charging & Converters', price: 130 },
  { id: 'adaptor-12.6v-2a', name: 'ADAPTOR 12.6V 2A LI-ION', category: 'Power, Charging & Converters', price: 130 },
  { id: 'adaptor-16.8v-2a', name: 'ADAPTOR 16.8V 2A LI-ION', category: 'Power, Charging & Converters', price: 130 },
  { id: 'adaptor-21v-2a', name: 'ADAPTOR 21V 2A LI-ION', category: 'Power, Charging & Converters', price: 130 },
  { id: 'adaptor-7.3v-2a', name: 'ADAPTOR 7.3V 2A LIFEPO4', category: 'Power, Charging & Converters', price: 130 },
  { id: 'adaptor-14.6v-2a', name: 'ADAPTOR 14.6V 2A LIFEPO4', category: 'Power, Charging & Converters', price: 130 },
  { id: 'casing-3s', name: '3S 12.6V 30A LITHIUM BATTERY PACK CASING MATERIAL DRILL', category: 'Power, Charging & Converters', price: 145 },
  { id: 'casing-4s', name: '4S 16.8V 30A LITHIUM BATTERY PACK CASING MATERIAL DRILL', category: 'Power, Charging & Converters', price: 155 },
  { id: 'module-5v-3a-c', name: '5V 3A LITHIUM TYPE C BATTERY CHARGING MODULE', category: 'Power, Charging & Converters', price: 43 },
  { id: 'tp4057-typec', name: 'TP4057 (LX-LBC3) TYPE-C USB 1A LITHIUM BATTERY CHARGER/DISCHARGE MODULE', category: 'Power, Charging & Converters', price: 24 },
  { id: 'powerbank-t6845', name: 'POWER BANK MODULE T6845-C', category: 'Power, Charging & Converters', price: 35 },
  { id: 'dual-usb-pb', name: 'DUAL USB 5V 2.4A DIGITAL POWER BANK 18650 CHARGING MODULE', category: 'Power, Charging & Converters', price: 100 },
  { id: 'lm2596', name: 'DC-DC STEP DOWN BUCK CONVERTER LM2596 (4A)', category: 'Power, Charging & Converters', price: 43 },
  { id: 'boost-2s-4a', name: '2S 4A TYPE-C TO 8.4V Step-Up Boost', category: 'Power, Charging & Converters', price: 40 },
  { id: 'boost-3s-4a', name: '3S 4A TYPE-C TO 12.6V Step-Up Boost', category: 'Power, Charging & Converters', price: 45 },
  { id: 'boost-2s-3s', name: '2S-3S LITHIUM BATTERY CHARGING BOOST MODULE', category: 'Power, Charging & Converters', price: 85 },
  { id: 'xl6009', name: 'DC-DC Step UP Boost Converter Module XL6009', category: 'Power, Charging & Converters', price: 50 },

  // ── BMS ─────────────────────────────────────────────────────────────────
  { id: 'bms-3s-15a-pro', name: '3S 15A 12V 18650 PROTECTION BOARDS', category: 'BMS', price: 73 },
  { id: 'bms-1s-lifepo4', name: 'BMS 1S 3.2V 12A LiFePO4 BMS', category: 'BMS', price: 36 },
  { id: 'bms-4s-lifepo4', name: 'BMS 4S 30A 12.8V LiFePO4 BMS', category: 'BMS', price: 136 },
  { id: 'bms-8s-lifepo4', name: 'BMS 8S 35A 24V LiFePO4 BATTERY CHARGER PROTECTION MODULE', category: 'BMS', price: 750 },
  { id: 'bms-13s-lifepo4', name: 'BMS 13S 25A 41.6V LiFePO4 BATTERY CHARGER PROTECTION MODULE', category: 'BMS', price: 605 },
  { id: 'bms-15s-daly', name: 'BMS 15S 60A 48V DALY LiFePO4 BATTERY CHARGER PROTECTION MODULE', category: 'BMS', price: 2150 },
  { id: 'bms-1s-3a', name: 'BMS 1S (3.7V-3A) BALANCE', category: 'BMS', price: 15 },
  { id: 'bms-1s-tp4056-micro', name: 'BMS 1S TP4056 (5V-1A) (Micro USB) BALANCE', category: 'BMS', price: 13.5 },
  { id: 'bms-1s-tp4056-c', name: 'BMS 1S TP4056 (5V-1A) TYPE C BALANCE', category: 'BMS', price: 15 },
  { id: 'bms-2s-3a', name: 'BMS 2S (8.4V - 3A) BALANCE', category: 'BMS', price: 24 },
  { id: 'bms-3s-10a', name: 'BMS 3S (12.6V - 10A) BALANCE', category: 'BMS', price: 52 },
  { id: 'bms-3s-20a', name: 'BMS 3S (12.6V - 20A) BALANCE', category: 'BMS', price: 42 },
  { id: 'bms-3s-25a', name: 'BMS 3S (12.6V - 25A) BALANCE', category: 'BMS', price: 85 },
  { id: 'bms-3s-40a', name: 'BMS 3S (12.6V - 40A) BALANCE', category: 'BMS', price: 90 },
  { id: 'bms-3s-60a', name: 'BMS 3S (12.6V - 60A) BALANCE', category: 'BMS', price: 96 },
  { id: 'bms-3s-100a', name: 'BMS 3S (12.6V - 100A) BALANCE', category: 'BMS', price: 185 },
  { id: 'bms-4s-20a', name: 'BMS 4S (16.8V 20A) BALANCE', category: 'BMS', price: 80 },
  { id: 'bms-4s-40a', name: 'BMS 4S (16.8V - 40A) BALANCE', category: 'BMS', price: 90 },
  { id: 'bms-5s-15a', name: 'BMS 5S (21V-15A) BALANCE', category: 'BMS', price: 120 },
  { id: 'bms-5s-25a', name: 'BMS 5S (21V-25A) BALANCE', category: 'BMS', price: 85 },
  { id: 'bms-6s-12a', name: 'BMS 6S (24V-12A) BALANCE', category: 'BMS', price: 90 },
  { id: 'bms-6s-40a', name: 'BMS 6S (24V-40A) BALANCE', category: 'BMS', price: 155 },
  { id: 'bms-10s', name: 'BMS 10S', category: 'BMS', price: 690 },
  { id: 'bms-13s-50a', name: 'BMS 13S 50A', category: 'BMS', price: 910 },
  { id: 'bms-16s-50a', name: 'BMS 16S 50A', category: 'BMS', price: 1445 },

  // ── LIPO BATTERIES & PACKS ──────────────────────────────────────────────
  { id: 'pack-2s-1500', name: '2S 1500MAH Pack (BMS 2S 5A + Battery Used 1500MAH 1P)', category: 'LiPo Batteries', price: 160 },
  { id: 'pack-2s-2000', name: '2S 2000MAH Pack (BMS 2S 5A + Battery Used 2000MAH 1P)', category: 'LiPo Batteries', price: 185 },
  { id: 'pack-3s-2000', name: '3S 2000MAH Pack (BMS 3S 20A + Battery Used 2000MAH 1P)', category: 'LiPo Batteries', price: 270 },
  { id: 'pack-3s-2500', name: '3S 2500MAH Pack (BMS 3S 20A + Battery Used 2500MAH 1P)', category: 'LiPo Batteries', price: 320 },
  { id: 'pack-3s-4000', name: '3S 4000MAH Pack (BMS 3S 20A + Battery Used 2000MAH 2P)', category: 'LiPo Batteries', price: 400 },
  { id: 'pack-3s-5000', name: '3S 5000MAH Pack (BMS 3S 20A + Battery Used 2500MAH 2P)', category: 'LiPo Batteries', price: 500 },
  { id: 'lipo-1s-90', name: 'BATTERY LIPO 3.7V 90MAH (301420)', category: 'LiPo Batteries', price: 45 },
  { id: 'lipo-1s-250', name: 'BATTERY LIPO 3.7V 250MAH (400923)', category: 'LiPo Batteries', price: 48 },
  { id: 'lipo-1s-500', name: 'BATTERY LIPO 3.7V 500MAH (502018)', category: 'LiPo Batteries', price: 50 },
  { id: 'lipo-1s-600', name: 'BATTERY LIPO 3.7V 600MAH (602030)', category: 'LiPo Batteries', price: 60 },

  // ── USED 18650 BATTERIES ─────────────────────────────────────────────────
  { id: '18650-500', name: 'BATTERY USED 500MAH+600MAH 18650 3.7V', category: 'Used 18650 Batteries', price: 6 },
  { id: '18650-700', name: 'BATTERY USED 700MAH+800MAH 18650 3.7V', category: 'Used 18650 Batteries', price: 8 },
  { id: '18650-900', name: 'BATTERY USED 900MAH 18650 3.7V', category: 'Used 18650 Batteries', price: 14 },
  { id: '18650-1000', name: 'BATTERY USED 1000MAH+1100MAH 18650 3.7V', category: 'Used 18650 Batteries', price: 18 },
  { id: '18650-1200', name: 'BATTERY USED 1200MAH 18650 3.7V', category: 'Used 18650 Batteries', price: 22 },
  { id: '18650-1300', name: 'BATTERY USED 1300MAH 18650 3.7V', category: 'Used 18650 Batteries', price: 23 },
  { id: '18650-1400', name: 'BATTERY USED 1400MAH 18650 3.7V', category: 'Used 18650 Batteries', price: 24 },
  { id: '18650-1500', name: 'BATTERY USED 1500MAH 18650 3.7V', category: 'Used 18650 Batteries', price: 25 },
  { id: '18650-1600', name: 'BATTERY USED 1600MAH 18650 3.7V', category: 'Used 18650 Batteries', price: 27 },
  { id: '18650-1700', name: 'BATTERY USED 1700MAH 18650 3.7V', category: 'Used 18650 Batteries', price: 30 },
  { id: '18650-1800', name: 'BATTERY USED 1800MAH 18650 3.7V', category: 'Used 18650 Batteries', price: 33 },
  { id: '18650-1900', name: 'BATTERY USED 1900MAH 18650 3.7V', category: 'Used 18650 Batteries', price: 35 },
  { id: '18650-2000', name: 'BATTERY USED 2000MAH 18650 3.7V', category: 'Used 18650 Batteries', price: 38 },
  { id: '18650-2100', name: 'BATTERY USED 2100MAH 18650 3.7V', category: 'Used 18650 Batteries', price: 40 },
  { id: '18650-2200', name: 'BATTERY USED 2200MAH 18650 3.7V', category: 'Used 18650 Batteries', price: 43 },
  { id: '18650-2300', name: 'BATTERY USED 2300MAH 18650 3.7V', category: 'Used 18650 Batteries', price: 45 },
  { id: '18650-2400', name: 'BATTERY USED 2400MAH 18650 3.7V', category: 'Used 18650 Batteries', price: 48 },
  { id: '18650-2500', name: 'BATTERY USED 2500MAH 18650 3.7V', category: 'Used 18650 Batteries', price: 53 },
  { id: '18650-2600', name: 'BATTERY USED 2600MAH 18650 3.7V', category: 'Used 18650 Batteries', price: 58 },
  { id: '18650-2700', name: 'BATTERY USED 2700MAH 18650 3.7V', category: 'Used 18650 Batteries', price: 63 },
  { id: '18650-2800', name: 'BATTERY USED 2800MAH 18650 3.7V', category: 'Used 18650 Batteries', price: 68 },
  { id: '18650-2900', name: 'BATTERY USED 2900MAH 18650 3.7V', category: 'Used 18650 Batteries', price: 73 },

  // ── DISPLAYS, MOTORS & DRIVERS ───────────────────────────────────────────
  { id: 'l293-shield', name: 'L293 Motor Driver Shield', category: 'Displays, Motors & Drivers', price: 64 },
  { id: 'sg90', name: 'SERVO SG90 180D', category: 'Displays, Motors & Drivers', price: 65 },
  { id: 'dc-motor', name: 'DC MOTOR WITH WHEEL', category: 'Displays, Motors & Drivers', price: 40 },
  { id: 'relay-1ch', name: 'Relay Module 1-Channel 5V', category: 'Displays, Motors & Drivers', price: 30 },
  { id: 'lcd-16x2', name: 'LCD 16*2 BLUE', category: 'Displays, Motors & Drivers', price: 60 },
  { id: 'lcd-20x4', name: 'LCD 20*4', category: 'Displays, Motors & Drivers', price: 225 },
  { id: 'joystick', name: 'Joystick Module', category: 'Displays, Motors & Drivers', price: 30 },

  // ── WIRING, TOOLS & PACKAGING ────────────────────────────────────────────
  { id: 'type-c-jack', name: 'TYPE C JACK', category: 'Wiring, Tools & Packaging', price: 18 },
  { id: 'type-c-jack-led', name: 'TYPE C JACK LED', category: 'Wiring, Tools & Packaging', price: 20 },
  { id: 'red-led-oval', name: 'RED LED 5MM OVAL RED (1000 Piece/CODE 546)', category: 'Wiring, Tools & Packaging', price: 200 },
  { id: 'red-led-concave', name: 'RED LED 5MM CONCAVE', category: 'Wiring, Tools & Packaging', price: 200 },
  { id: 'led-blue', name: 'LED BLUE 5MM', category: 'Wiring, Tools & Packaging', price: 350 },
  { id: 'led-yellow', name: 'LED YELLOW 5MM', category: 'Wiring, Tools & Packaging', price: 350 },
  { id: 'led-green', name: 'LED GREEN 5MM', category: 'Wiring, Tools & Packaging', price: 350 },
  { id: 'breadboard', name: 'BREADBOARD 830 TIEPOINTS', category: 'Wiring, Tools & Packaging', price: 35 },
  { id: 'cable-uno', name: 'CABLE ARDUINO UNO 30 CM', category: 'Wiring, Tools & Packaging', price: 18 },
  { id: 'cable-nano', name: 'CABLE ARDUINO NANO 30CM', category: 'Wiring, Tools & Packaging', price: 17 },
  { id: 'solder-wire-sg', name: 'SOLDER WIRE SINGAPORE 100G (0.6MM-70/30)', category: 'Wiring, Tools & Packaging', price: 285 },
  { id: 'solder-wire-cn', name: 'SOLDER WIRE CHINA 100G (0.8MM-45/55)', category: 'Wiring, Tools & Packaging', price: 200 },
  { id: 'tape-pack', name: 'لاصق تغليف 600 YARDS', category: 'Wiring, Tools & Packaging', price: 75 },
  { id: 'tape-mesh', name: 'لاصق شبكي سم2', category: 'Wiring, Tools & Packaging', price: 45 },
  { id: 'kapton-40mm', name: 'High Temperature Kapton Tape 40MM', category: 'Wiring, Tools & Packaging', price: 400 },
  { id: 'kapton-20mm', name: 'High Temperature Kapton Tape 20MM', category: 'Wiring, Tools & Packaging', price: 300 },
  { id: 'ebag-6x9', name: 'Electrostatic bag 6x9cm 100 PIECE', category: 'Wiring, Tools & Packaging', price: 150 },
  { id: 'jumper-mf-10', name: 'JUMPER MALE FEMALE 10 CM', category: 'Wiring, Tools & Packaging', price: 0.63 },
  { id: 'jumper-mm-20', name: 'JUMPER MALE MALE 20CM', category: 'Wiring, Tools & Packaging', price: 0.73 },
  { id: 'jumper-mf-20', name: 'JUMPER MALE FEMALE 20CM', category: 'Wiring, Tools & Packaging', price: 0.73 },
  { id: 'jumper-ff-20', name: 'JUMPER FEMALE FEMALE 20CM', category: 'Wiring, Tools & Packaging', price: 0.73 },
  { id: 'dc-jack-male', name: 'DC JACK MALE', category: 'Wiring, Tools & Packaging', price: 3 },
  { id: 'dc-jack-female', name: 'DC JACK FEMALE', category: 'Wiring, Tools & Packaging', price: 3 },
  { id: 'dc-jack-male-pw', name: 'DC JACK MALE POWER CONNECTOR', category: 'Wiring, Tools & Packaging', price: 6 },
  { id: 'dc-jack-fem-pw', name: 'DC JACK FEMALE POWER CONNECTOR', category: 'Wiring, Tools & Packaging', price: 6 },
  { id: 'jst-2pin', name: 'CABLE JST 2 PIN', category: 'Wiring, Tools & Packaging', price: 5 },
  { id: 'dc-male-male', name: 'DC MALE MALE JACK', category: 'Wiring, Tools & Packaging', price: 20 },
  { id: 'pvc-30', name: 'PVC Shrink Blue 30mm 1M', category: 'Wiring, Tools & Packaging', price: 7 },
  { id: 'pvc-90', name: 'PVC Shrink Blue 90mm 1M', category: 'Wiring, Tools & Packaging', price: 20 },
  { id: 'pvc-100', name: 'PVC Shrink Blue 100mm 1M', category: 'Wiring, Tools & Packaging', price: 24 },
  { id: 'pvc-120', name: 'PVC Shrink Blue 120mm 1M', category: 'Wiring, Tools & Packaging', price: 27 },
  { id: 'pvc-130', name: 'PVC Shrink Blue 130mm IM', category: 'Wiring, Tools & Packaging', price: 32 },
  { id: 'pvc-150', name: 'PVC Shrink Blue 150mm IM', category: 'Wiring, Tools & Packaging', price: 37 },
  { id: 'pvc-200', name: 'PVC Shrink Blue 200mm 1M', category: 'Wiring, Tools & Packaging', price: 67 },
  { id: 'pvc-220', name: 'PVC Shrink Blue 220mm 1M', category: 'Wiring, Tools & Packaging', price: 78 },
  { id: 'bracket-1cell', name: 'BATTERY BRACKET SPACER 1 CELL', category: 'Wiring, Tools & Packaging', price: 2 },
  { id: 'bracket-2cell', name: 'BATTERY BRACKET SPACER 2 CELL', category: 'Wiring, Tools & Packaging', price: 3 },
  { id: 'bracket-3cell', name: 'BATTERY BRACKET SPACER 3 CELL', category: 'Wiring, Tools & Packaging', price: 4 },
  { id: 'holder-1cell', name: 'HOLDER 1 CELL *18650', category: 'Wiring, Tools & Packaging', price: 8 },
  { id: 'holder-2cell', name: 'HOLDER 2 CELL *18650', category: 'Wiring, Tools & Packaging', price: 12 },
  { id: 'holder-4cell', name: 'HOLDER 4 CELL *18650', category: 'Wiring, Tools & Packaging', price: 24 },
  { id: 'nickel-strip-1p', name: 'NICKEL STRIP IP 0.12*8MM FOR 18650 LITHIUM BATTERY 1M', category: 'Wiring, Tools & Packaging', price: 17 },
  { id: 'cf-12mm', name: '12mm (10mm) Woven Finish Roll Wrapped Carbon Fibre Tube [1m]', category: 'Wiring, Tools & Packaging', price: 1470 },
  { id: 'cf-14mm', name: '14mm (12mm) Woven Finish Roll Wrapped Carbon Fibre Tube [1m]', category: 'Wiring, Tools & Packaging', price: 1570 },
  { id: 'cf-16mm', name: '16mm (14mm) Woven Finish Roll Wrapped Carbon Fibre Tube [1m]', category: 'Wiring, Tools & Packaging', price: 2080 },
  { id: 'cf-18mm', name: '18mm (16mm) Woven Finish Roll Wrapped Carbon Fibre Tube [1m]', category: 'Wiring, Tools & Packaging', price: 2280 },
  { id: 'cf-20mm', name: '20mm (18mm) Woven Finish Roll Wrapped Carbon Fibre Tube [1m]', category: 'Wiring, Tools & Packaging', price: 2480 },
  { id: 'cf-22mm', name: '22MM(20MM) WOVEN FINISH CARBON FIBRE TUBE [1M]', category: 'Wiring, Tools & Packaging', price: 2700 },
  { id: 'cf-25mm', name: '25mm(23mm) Woven Finish Carbon Fibre Tube [1m]', category: 'Wiring, Tools & Packaging', price: 3100 },
];

// Helper: get products by category
export function getProductsByCategory(category) {
  return PRODUCTS.filter(p => p.category === category);
}

// Helper: get product by id
export function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

// Helper: search products
export function searchProducts(query) {
  const q = query.toLowerCase().trim();
  if (!q) return PRODUCTS;
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.id.toLowerCase().includes(q)
  );
}

// Helper: featured products
export const FEATURED_PRODUCTS = [
  'uno-smd', 'mega2560', 'mpu6050', 'smart-bat-monitor',
  'dht22-red', 'bms-3s-20a', 'sg90', 'lcd-16x2',
].map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);