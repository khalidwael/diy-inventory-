// ============================================================
// DIY LAB - FULL PRODUCT DATABASE (Updated)
// ============================================================

export const PRODUCTS = [

  // === MICROCONTROLLERS & DEVELOPMENT BOARDS ===
  { id: 'mega2560',        name: 'ARDUINO MEGA 2560 DRIVER CH340G',                   category: 'Microcontrollers & Boards', price: 775 },
  { id: 'uno-dip',         name: 'ARDUINO UNO DIP DRIVER 16U2',                       category: 'Microcontrollers & Boards', price: 298 },
  { id: 'uno-smd',         name: 'ARDUINO UNO SMD DRIVER CH340G',                     category: 'Microcontrollers & Boards', price: 220 },
  { id: 'nano',            name: 'ARDUINO NANO DRIVER CH340G',                        category: 'Microcontrollers & Boards', price: 150 },
  { id: 'pro-micro',       name: 'ARDUINO PRO MICRO',                                 category: 'Microcontrollers & Boards', price: 288 },
  { id: 'pro-mini',        name: 'ARDUINO PRO MINI 5V/16MHZ',                        category: 'Microcontrollers & Boards', price: 148 },
  { id: 'usb-host',        name: 'ARDUINO USB HOST SHIELD',                           category: 'Microcontrollers & Boards', price: 300 },
  { id: 'atmega328-dip',   name: 'ATMEGA328P DIP',                                   category: 'Microcontrollers & Boards', price: 148 },
  { id: 'atmega328-smd',   name: 'ATMEGA328P SMD',                                   category: 'Microcontrollers & Boards', price: 133 },
  { id: 'stm32',           name: 'STM32F103C8T6 Development Board',                  category: 'Microcontrollers & Boards', price: 158 },
  { id: 'ftdi',            name: 'FTDI BASIC BREAKOUT USB TO SERIAL TTL',            category: 'Microcontrollers & Boards', price: 85 },

  // === WIRELESS & COMMUNICATION MODULES ===
  { id: 'hc05',            name: 'HC-05 BLUETOOTH MODULE',                           category: 'Wireless & Modules', price: 142 },
  { id: 'esp32cam-mb',     name: 'ESP32CAMMB MICRO USB MODULE FOR ESP32 CAM',        category: 'Wireless & Modules', price: 65 },
  { id: 'esp32-30pin',     name: 'ESP32 DEVELOPMENT BOARD WIFI AND BLUETOOTH 30PIN', category: 'Wireless & Modules', price: 255 },
  { id: 'esp32-s3',        name: 'ESP32-S3-N16R8 DEVELOPMENT BOARD WIFI AND BLUETOOTH', category: 'Wireless & Modules', price: 390 },
  { id: 'ov3660',          name: 'OV3660 CAM',                                       category: 'Wireless & Modules', price: 140 },
  { id: 'mp3-player',      name: 'Mini MP3 Player Module For Arduino',               category: 'Wireless & Modules', price: 90 },

  // === SENSORS & SPECIALIZED MODULES ===
  { id: 'flex-45',         name: 'Flex/Bending Sensor 4.5 INCH',                    category: 'Sensors', price: 690 },
  { id: 'flex-22',         name: 'Flex/Bending Sensor 2.2 INCH',                    category: 'Sensors', price: 370 },
  { id: 'lidar',           name: 'RPLIDAR A1 A1M8 360 Degree',                      category: 'Sensors', price: 7500 },
  { id: 'ph-blue',         name: 'PH SENSOR BLUE',                                  category: 'Sensors', price: 1250 },
  { id: 'ecg-ad8232',      name: 'ECG Module AD8232 Heart Rate Sensor',             category: 'Sensors', price: 650 },
  { id: 'emg',             name: 'EMG Module Muscle Sensor Kit',                    category: 'Sensors', price: 950 },
  { id: 'heartrate',       name: 'HEART RATE SENSOR',                               category: 'Sensors', price: 98 },
  { id: 'turbidity',       name: 'TURBIDITY SENSOR',                                category: 'Sensors', price: 495 },
  { id: 'tds',             name: 'TDS Sensor Meter V1.0',                           category: 'Sensors', price: 480 },
  { id: 'fingerprint',     name: 'FINGERPRINT MODULE R307',                         category: 'Sensors', price: 775 },
  { id: 'mpu6050',         name: 'MPU6050 GY521',                                   category: 'Sensors', price: 160 },
  { id: 'mpu9250',         name: 'IMU MPU9250 9AXIS',                               category: 'Sensors', price: 415 },
  { id: 'joystick',        name: 'Joystick Module',                                 category: 'Sensors', price: 30 },
  { id: 'water-level',     name: 'WATER LEVEL SENSOR',                              category: 'Sensors', price: 15 },
  { id: 'pir',             name: 'PIR SENSOR',                                      category: 'Sensors', price: 41 },
  { id: 'ir-3pin',         name: 'IR SENSOR 3 PIN MODULE',                          category: 'Sensors', price: 25 },
  { id: 'flame',           name: 'FLAME SENSOR 3 PIN MODULE',                       category: 'Sensors', price: 25 },
  { id: 'line-follower',   name: 'LINE FOLLOWER SENSOR TCRT5000',                   category: 'Sensors', price: 28 },
  { id: 'max30102',        name: 'MAX30102 HEART RATE SENSOR',                      category: 'Sensors', price: 130 },
  { id: 'ldr',             name: 'LDR MODULE 3 PIN',                                category: 'Sensors', price: 24 },
  { id: 'ultrasonic',      name: 'ULTRASONIC SENSOR',                               category: 'Sensors', price: 39 },
  { id: 'dht11',           name: 'DHT11 Temperature Humidity Sensor',               category: 'Sensors', price: 39 },
  { id: 'soil',            name: 'SOIL MOISTURE SENSOR',                            category: 'Sensors', price: 35 },
  { id: 'mic',             name: 'MICROPHONE SOUND DETECTION SENSOR',               category: 'Sensors', price: 25 },
  { id: 'lm35',            name: 'LM35DZ TEMPERATURE SENSOR',                      category: 'Sensors', price: 50 },
  { id: 'raindrop',        name: 'RAINDROP SENSOR MODULE',                          category: 'Sensors', price: 45 },

  // === DISPLAYS ===
  { id: 'oled-096',        name: 'OLED LCD 0.96 INCH 128X64 I2C',                  category: 'Displays', price: 110 },
  { id: 'oled-091',        name: 'OLED LCD 0.91 INCH 128X32 I2C',                  category: 'Displays', price: 100 },
  { id: 'lcd-16x2',        name: 'LCD 16X2 BLUE',                                  category: 'Displays', price: 60 },
  { id: 'i2c-board',       name: 'I2C BOARD MODULE LCD16X2',                       category: 'Displays', price: 38 },

  // === MOTORS & DRIVERS ===
  { id: 'drv8825',         name: 'DRV8825 STEPPER MOTOR DRIVER',                   category: 'Motors & Drivers', price: 80 },
  { id: 'a4988',           name: 'A4988 STEPPER MOTOR DRIVER',                     category: 'Motors & Drivers', price: 52 },
  { id: 'l298n',           name: 'L298N MOTOR DRIVER',                             category: 'Motors & Drivers', price: 66 },
  { id: 'sg90',            name: 'SERVO SG90 180D',                                category: 'Motors & Drivers', price: 65 },
  { id: 'dc-motor',        name: 'DC MOTOR WITH WHEEL',                            category: 'Motors & Drivers', price: 39.5 },
  { id: 'relay-1ch',       name: 'Relay Module 1 Channel 5V',                      category: 'Motors & Drivers', price: 30 },

  // === POWER, CHARGING & CONVERTERS ===
  { id: 'bat-indicator',   name: 'Battery Level Indicator Module 1S8S',            category: 'Power & Converters', price: 48 },
  { id: 'solar-charger',   name: 'MINI SOLAR CHARGER CN3065',                      category: 'Power & Converters', price: 85 },
  { id: 'bat-30q',         name: 'BATTERY SAMSUNG INR30Q 3000MAH 15A',             category: 'Power & Converters', price: 150 },
  { id: 'bat-ultrafire',   name: 'BATTERY ULTRA FIRE 1100MAH',                     category: 'Power & Converters', price: 30 },
  { id: 'adapter-5v',      name: 'DC POWER ADAPTER 5V 2A',                         category: 'Power & Converters', price: 45 },
  { id: 'adapter-6v',      name: 'DC POWER ADAPTER 6V 2A',                         category: 'Power & Converters', price: 45 },
  { id: 'adapter-12v',     name: 'DC POWER ADAPTER 12V 2A',                        category: 'Power & Converters', price: 45 },
  { id: 'mb102',           name: 'MB102 Breadboard Power Supply Module',           category: 'Power & Converters', price: 35 },
  { id: 'usb-stepdown',    name: 'USB DC-DC Converter Step Down 5V 3A',            category: 'Power & Converters', price: 60 },
  { id: 'xl6009',          name: 'DC-DC Step UP Boost Converter XL6009',           category: 'Power & Converters', price: 50 },
  { id: 'lm2596',          name: 'DC-DC Step Down Buck Converter LM2596 4A',       category: 'Power & Converters', price: 43 },
  { id: 'powerbank-t6845', name: 'Power Bank Module T6845-C 5V 1A',               category: 'Power & Converters', price: 35 },

  // === BMS (BATTERY MANAGEMENT SYSTEMS) ===
  { id: 'bms-1s-3a',       name: 'BMS 1S 3.7V 3A',                                category: 'BMS', price: 15 },
  { id: 'tp4056-micro',    name: 'TP4056 Micro USB 5V 1A',                         category: 'BMS', price: 13 },
  { id: 'tp4056-c',        name: 'TP4056 Type C 5V 1A',                            category: 'BMS', price: 14 },
  { id: 'bms-2s-5a',       name: 'BMS 2S 8.4V 5A',                                category: 'BMS', price: 24 },
  { id: 'bms-2s-20a',      name: 'BMS 2S 8.4V 20A',                               category: 'BMS', price: 45 },
  { id: 'bms-3s-10a',      name: 'BMS 3S 12.6V 10A',                              category: 'BMS', price: 52 },
  { id: 'bms-3s-20a',      name: 'BMS 3S 12.6V 20A',                              category: 'BMS', price: 42 },
  { id: 'bms-3s-25a',      name: 'BMS 3S 12.6V 25A',                              category: 'BMS', price: 85 },
  { id: 'bms-3s-40a',      name: 'BMS 3S 12.6V 40A',                              category: 'BMS', price: 88 },
  { id: 'bms-3s-60a',      name: 'BMS 3S 12.6V 60A',                              category: 'BMS', price: 90 },
  { id: 'bms-3s-100a',     name: 'BMS 3S 12.6V 100A',                             category: 'BMS', price: 165 },
  { id: 'bms-4s-20a',      name: 'BMS 4S 16.8V 20A',                              category: 'BMS', price: 80 },
  { id: 'bms-4s-40a',      name: 'BMS 4S 16.8V 40A',                              category: 'BMS', price: 90 },
  { id: 'bms-5s-15a',      name: 'BMS 5S 21V 15A',                                category: 'BMS', price: 120 },
  { id: 'bms-5s-25a',      name: 'BMS 5S 21V 25A',                                category: 'BMS', price: 85 },
  { id: 'bms-6s-12a',      name: 'BMS 6S 24V 12A',                                category: 'BMS', price: 90 },
  { id: 'bms-6s-40a',      name: 'BMS 6S 24V 40A',                                category: 'BMS', price: 155 },
  { id: 'bms-10s',         name: 'BMS 10S',                                        category: 'BMS', price: 690 },
  { id: 'bms-13s-50a',     name: 'BMS 13S 50A',                                   category: 'BMS', price: 910 },
  { id: 'bms-16s-50a',     name: 'BMS 16S 50A',                                   category: 'BMS', price: 1445 },

  // === LIPO BATTERIES ===
  { id: 'lipo-1s-90',      name: 'LIPO 3.7V 90MAH 301420',                        category: 'LiPo Batteries', price: 45 },
  { id: 'lipo-1s-250',     name: 'LIPO 3.7V 250MAH 400923',                       category: 'LiPo Batteries', price: 48 },
  { id: 'lipo-1s-500',     name: 'LIPO 3.7V 500MAH 502018',                       category: 'LiPo Batteries', price: 50 },
  { id: 'lipo-1s-600',     name: 'LIPO 3.7V 600MAH 602030',                       category: 'LiPo Batteries', price: 60 },
  { id: 'lipo-3s-1500',    name: 'LIPO 3S 1500MAH 25C',                           category: 'LiPo Batteries', price: 1100 },
  { id: 'lipo-3s-2200',    name: 'LIPO 3S 2200MAH 25C',                           category: 'LiPo Batteries', price: 1500 },
  { id: 'lipo-3s-3300',    name: 'LIPO 3S 3300MAH 35C',                           category: 'LiPo Batteries', price: 1850 },
  { id: 'lipo-3s-5200',    name: 'LIPO 3S 5200MAH 40C',                           category: 'LiPo Batteries', price: 2650 },
  { id: 'lipo-3s-10400',   name: 'LIPO 3S 10400MAH 40C',                          category: 'LiPo Batteries', price: 4600 },
  { id: 'lipo-3s-22000',   name: 'LIPO 3S 22000MAH',                              category: 'LiPo Batteries', price: 10500 },

  // === BATTERY PACKS ===
  { id: 'pack-2s-1500',    name: '2S 1500MAH Battery Pack',                        category: 'Battery Packs', price: 160 },
  { id: 'pack-2s-2000',    name: '2S 2000MAH Battery Pack',                        category: 'Battery Packs', price: 185 },
  { id: 'pack-3s-2000',    name: '3S 2000MAH Battery Pack',                        category: 'Battery Packs', price: 270 },
  { id: 'pack-3s-2500',    name: '3S 2500MAH Battery Pack',                        category: 'Battery Packs', price: 320 },
  { id: 'pack-3s-4000',    name: '3S 4000MAH Battery Pack',                        category: 'Battery Packs', price: 400 },
  { id: 'pack-3s-5000',    name: '3S 5000MAH Battery Pack',                        category: 'Battery Packs', price: 500 },

  // === USED 18650 BATTERIES (3 Months Warranty) ===
  { id: '18650-500',       name: 'USED 18650 BATTERY 500-600MAH',                 category: 'Used 18650 Batteries', price: 6 },
  { id: '18650-700',       name: 'USED 18650 BATTERY 700-800MAH',                 category: 'Used 18650 Batteries', price: 8 },
  { id: '18650-900',       name: 'USED 18650 BATTERY 900MAH',                     category: 'Used 18650 Batteries', price: 14 },
  { id: '18650-1000',      name: 'USED 18650 BATTERY 1000-1100MAH',              category: 'Used 18650 Batteries', price: 18 },
  { id: '18650-1200',      name: 'USED 18650 BATTERY 1200MAH',                   category: 'Used 18650 Batteries', price: 20 },
  { id: '18650-1300',      name: 'USED 18650 BATTERY 1300MAH',                   category: 'Used 18650 Batteries', price: 21 },
  { id: '18650-1400',      name: 'USED 18650 BATTERY 1400MAH',                   category: 'Used 18650 Batteries', price: 22 },
  { id: '18650-1500',      name: 'USED 18650 BATTERY 1500MAH',                   category: 'Used 18650 Batteries', price: 23 },
  { id: '18650-1600',      name: 'USED 18650 BATTERY 1600MAH',                   category: 'Used 18650 Batteries', price: 25 },
  { id: '18650-1700',      name: 'USED 18650 BATTERY 1700MAH',                   category: 'Used 18650 Batteries', price: 27.5 },
  { id: '18650-1800',      name: 'USED 18650 BATTERY 1800MAH',                   category: 'Used 18650 Batteries', price: 31 },
  { id: '18650-1900',      name: 'USED 18650 BATTERY 1900MAH',                   category: 'Used 18650 Batteries', price: 33.5 },
  { id: '18650-2000',      name: 'USED 18650 BATTERY 2000MAH',                   category: 'Used 18650 Batteries', price: 36 },
  { id: '18650-2100',      name: 'USED 18650 BATTERY 2100MAH',                   category: 'Used 18650 Batteries', price: 38.5 },
  { id: '18650-2200',      name: 'USED 18650 BATTERY 2200MAH',                   category: 'Used 18650 Batteries', price: 41 },
  { id: '18650-2300',      name: 'USED 18650 BATTERY 2300MAH',                   category: 'Used 18650 Batteries', price: 43.5 },
  { id: '18650-2400',      name: 'USED 18650 BATTERY 2400MAH',                   category: 'Used 18650 Batteries', price: 46 },
  { id: '18650-2500',      name: 'USED 18650 BATTERY 2500MAH',                   category: 'Used 18650 Batteries', price: 51 },
  { id: '18650-2600',      name: 'USED 18650 BATTERY 2600MAH',                   category: 'Used 18650 Batteries', price: 56 },
  { id: '18650-2700',      name: 'USED 18650 BATTERY 2700MAH',                   category: 'Used 18650 Batteries', price: 61 },
  { id: '18650-2800',      name: 'USED 18650 BATTERY 2800MAH',                   category: 'Used 18650 Batteries', price: 66 },
  { id: '18650-2900',      name: 'USED 18650 BATTERY 2900MAH',                   category: 'Used 18650 Batteries', price: 71 },

  // === CARBON FIBRE TUBES ===
  { id: 'cf-6x4',          name: 'Carbon Fibre Tube 6x4x1000mm',                  category: 'Carbon Fibre Tubes', price: 1270 },
  { id: 'cf-10x8',         name: 'Carbon Fibre Tube 10x8x1000mm',                 category: 'Carbon Fibre Tubes', price: 1370 },
  { id: 'cf-12x10',        name: 'Carbon Fibre Tube 12x10x1000mm',                category: 'Carbon Fibre Tubes', price: 1470 },
  { id: 'cf-14x12',        name: 'Carbon Fibre Tube 14x12x1000mm',                category: 'Carbon Fibre Tubes', price: 1570 },
  { id: 'cf-16x14',        name: 'Carbon Fibre Tube 16x14x1000mm',                category: 'Carbon Fibre Tubes', price: 2080 },
  { id: 'cf-18x16',        name: 'Carbon Fibre Tube 18x16x1000mm',                category: 'Carbon Fibre Tubes', price: 2280 },
  { id: 'cf-20x18',        name: 'Carbon Fibre Tube 20x18x1000mm',                category: 'Carbon Fibre Tubes', price: 2480 },
  { id: 'cf-22x20',        name: 'Carbon Fibre Tube 22x20x1000mm',                category: 'Carbon Fibre Tubes', price: 2700 },
  { id: 'cf-25x23',        name: 'Carbon Fibre Tube 25x23x1000mm',                category: 'Carbon Fibre Tubes', price: 3100 },

  // === WIRING, CABLES & CONNECTORS ===
  { id: 'cable-uno',       name: 'CABLE ARDUINO UNO 30CM',                         category: 'Wiring & Connectors', price: 16 },
  { id: 'cable-nano',      name: 'CABLE ARDUINO NANO 30CM',                        category: 'Wiring & Connectors', price: 16 },
  { id: 'jumper-mf-10',    name: 'JUMPER MALE FEMALE 10CM',                        category: 'Wiring & Connectors', price: 0.63 },
  { id: 'jumper-mm-20',    name: 'JUMPER MALE MALE 20CM',                          category: 'Wiring & Connectors', price: 0.73 },
  { id: 'jumper-mf-20',    name: 'JUMPER MALE FEMALE 20CM',                        category: 'Wiring & Connectors', price: 0.73 },
  { id: 'jumper-ff-20',    name: 'JUMPER FEMALE FEMALE 20CM',                      category: 'Wiring & Connectors', price: 0.73 },
  { id: 'dc-jack-male',    name: 'DC JACK MALE',                                   category: 'Wiring & Connectors', price: 3 },
  { id: 'dc-jack-female',  name: 'DC JACK FEMALE',                                 category: 'Wiring & Connectors', price: 3 },
  { id: 'dc-jack-male-pw', name: 'DC JACK MALE POWER CONNECTOR',                  category: 'Wiring & Connectors', price: 5.5 },
  { id: 'dc-jack-fem-pw',  name: 'DC JACK FEMALE POWER CONNECTOR',                category: 'Wiring & Connectors', price: 5.5 },
  { id: 'male-jack-male',  name: 'MALE JACK TO MALE',                              category: 'Wiring & Connectors', price: 18 },
  { id: 'jst-2pin',        name: 'DATA CABLE JST 2 PIN',                           category: 'Wiring & Connectors', price: 5 },
  { id: 'pot-50k',         name: 'POT 50K',                                        category: 'Wiring & Connectors', price: 5 },

  // === TOOLS & CONSUMABLES ===
  { id: 'breadboard',      name: 'BREADBOARD 830 TIEPOINTS',                       category: 'Tools & Consumables', price: 35 },
  { id: 'solder-sg',       name: 'SOLDER WIRE SINGAPORE 100G 0.6MM',              category: 'Tools & Consumables', price: 285 },
  { id: 'solder-cn',       name: 'SOLDER WIRE CHINA 100G 0.8MM',                  category: 'Tools & Consumables', price: 200 },
  { id: 'red-led-oval',    name: 'RED LED 5MM OVAL 1000 PCS',                      category: 'Tools & Consumables', price: 165 },
  { id: 'red-led-concave', name: 'RED LED 5MM CONCAVE',                            category: 'Tools & Consumables', price: 165 },

  // === PACKAGING & BATTERY ACCESSORIES ===
  { id: 'pvc-30mm',        name: 'PVC Shrink Blue 30mm 1M',                        category: 'Packaging & Battery Accessories', price: 7 },
  { id: 'pvc-90mm',        name: 'PVC Shrink Blue 90mm 1M',                        category: 'Packaging & Battery Accessories', price: 20 },
  { id: 'pvc-100mm',       name: 'PVC Shrink Blue 100mm 1M',                       category: 'Packaging & Battery Accessories', price: 24 },
  { id: 'pvc-120mm',       name: 'PVC Shrink Blue 120mm 1M',                       category: 'Packaging & Battery Accessories', price: 27 },
  { id: 'pvc-130mm',       name: 'PVC Shrink Blue 130mm 1M',                       category: 'Packaging & Battery Accessories', price: 32 },
  { id: 'pvc-150mm',       name: 'PVC Shrink Blue 150mm 1M',                       category: 'Packaging & Battery Accessories', price: 37 },
  { id: 'pvc-200mm',       name: 'PVC Shrink Blue 200mm 1M',                       category: 'Packaging & Battery Accessories', price: 67 },
  { id: 'pvc-220mm',       name: 'PVC Shrink Blue 220mm 1M',                       category: 'Packaging & Battery Accessories', price: 78 },
  { id: 'bracket-1cell',   name: 'BATTERY BRACKET SPACER 1 CELL',                 category: 'Packaging & Battery Accessories', price: 2 },
  { id: 'bracket-2cell',   name: 'BATTERY BRACKET SPACER 2 CELL',                 category: 'Packaging & Battery Accessories', price: 3 },
  { id: 'bracket-3cell',   name: 'BATTERY BRACKET SPACER 3 CELL',                 category: 'Packaging & Battery Accessories', price: 4 },
  { id: 'holder-1cell',    name: 'HOLDER 1 CELL 18650',                            category: 'Packaging & Battery Accessories', price: 8 },
  { id: 'holder-2cell',    name: 'HOLDER 2 CELL 18650',                            category: 'Packaging & Battery Accessories', price: 12 },
  { id: 'holder-3cell',    name: 'HOLDER 3 CELL 18650',                            category: 'Packaging & Battery Accessories', price: 18 },
  { id: 'holder-4cell',    name: 'HOLDER 4 CELL 18650',                            category: 'Packaging & Battery Accessories', price: 24 },
  { id: 'ebag-6x9',        name: 'Electrostatic Bag 6x9cm 100 PCS',               category: 'Packaging & Battery Accessories', price: 150 },
  { id: 'ebag-9x13',       name: 'Electrostatic Bag 9x13cm 100 PCS',              category: 'Packaging & Battery Accessories', price: 200 },
  { id: 'ebag-9x18',       name: 'Electrostatic Bag 9x18cm 100 PCS',              category: 'Packaging & Battery Accessories', price: 250 },
  { id: 'tape-75y',        name: 'لاصق تغليف 75 yards',                            category: 'Packaging & Battery Accessories', price: 600 },
  { id: 'tape-mesh',       name: 'لاصق شبكي 2سم',                                  category: 'Packaging & Battery Accessories', price: 45 },
  { id: 'kapton-40mm',     name: 'Kapton Tape 40MM',                               category: 'Packaging & Battery Accessories', price: 400 },
  { id: 'kapton-20mm',     name: 'Kapton Tape 20MM',                               category: 'Packaging & Battery Accessories', price: 300 },
  { id: 'bat-gasket-50',   name: '18650 BATTERY GASKET 50 PCS',                   category: 'Packaging & Battery Accessories', price: 35 },
  { id: 'insulation-paper',name: 'Battery Insulation Gasket Paper 1M',            category: 'Packaging & Battery Accessories', price: 18 },
  { id: 'nickel-strip-1p', name: 'NICKEL STRIP 1P 0.15x8MM 1M',                   category: 'Packaging & Battery Accessories', price: 14 },
  { id: 'nickel-strip-2p', name: 'NICKEL STRIP 2P 1M',                             category: 'Packaging & Battery Accessories', price: 65 },
  { id: 'heatshrink-1s',   name: '18650 HEAT SHRINK TUBING 1S',                   category: 'Packaging & Battery Accessories', price: 125 },

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
