export function getIosModelName(modelId: string): string | null {
  const knownModelName = APPLE_DEVICES[modelId]?.name;
  if (knownModelName) {
    return knownModelName;
  }

  // Infer the main type of model from the ID
  if (modelId.startsWith('iPod')) {
    return 'iPod Touch';
  }

  if (modelId.startsWith('iPad')) {
    return 'iPad';
  }

  if (modelId.startsWith('iPhone')) {
    return 'iPhone';
  }

  if (modelId.startsWith('AppleTV')) {
    return 'Apple TV';
  }

  return null;
}

export const APPLE_DEVICES = {
  // iPod
  // -- 12 Start --
  'iPod7,1': { name: 'iPod Touch (6th generation)', year: 2015 }, // (Sixth Generation)
  // -- 12 End --
  'iPod9,1': { name: 'iPod Touch (7th generation)', year: 2019 }, // (Seventh Generation)

  // iPhone
  // -- 12 Start --
  'iPhone6,1': { name: 'iPhone 5s', year: 2013 }, // (model A1433, A1533 | GSM)
  'iPhone6,2': { name: 'iPhone 5s', year: 2013 }, // (model A1457, A1518, A1528 (China), A1530 | Global)
  'iPhone7,1': { name: 'iPhone 6 Plus', year: 2014 }, //
  'iPhone7,2': { name: 'iPhone 6', year: 2014 }, //
  // -- 12 End --
  'iPhone8,1': { name: 'iPhone 6s', year: 2015 }, //
  'iPhone8,2': { name: 'iPhone 6s Plus', year: 2015 }, //
  'iPhone8,4': { name: 'iPhone SE', year: 2016 }, //
  'iPhone9,1': { name: 'iPhone 7', year: 2016 }, // (model A1660 | CDMA)
  'iPhone9,3': { name: 'iPhone 7', year: 2016 }, // (model A1778 | Global)
  'iPhone9,2': { name: 'iPhone 7 Plus', year: 2016 }, // (model A1661 | CDMA)
  'iPhone9,4': { name: 'iPhone 7 Plus', year: 2016 }, // (model A1784 | Global)
  'iPhone10,1': { name: 'iPhone 8', year: 2017 }, // (model A1863, A1906, A1907)
  'iPhone10,2': { name: 'iPhone 8 Plus', year: 2017 }, // (model A1864, A1898, A1899)
  'iPhone10,3': { name: 'iPhone X', year: 2017 }, // (model A1865, A1902)
  'iPhone10,4': { name: 'iPhone 8', year: 2017 }, // (model A1905)
  'iPhone10,5': { name: 'iPhone 8 Plus', year: 2017 }, // (model A1897)
  'iPhone10,6': { name: 'iPhone X', year: 2017 }, // (model A1901)
  'iPhone11,2': { name: 'iPhone XS', year: 2018 }, // (model A2097, A2098)
  'iPhone11,4': { name: 'iPhone XS Max', year: 2018 }, // (model A1921, A2103)
  'iPhone11,6': { name: 'iPhone XS Max', year: 2018 }, // (model A2104)
  'iPhone11,8': { name: 'iPhone XR', year: 2018 }, // (model A1882, A1719, A2105)
  'iPhone12,1': { name: 'iPhone 11', year: 2019 },
  'iPhone12,3': { name: 'iPhone 11 Pro', year: 2019 },
  'iPhone12,5': { name: 'iPhone 11 Pro Max', year: 2019 },
  'iPhone12,8': { name: 'iPhone SE 2', year: 2020 },
  'iPhone13,1': { name: 'iPhone 12 mini', year: 2020 },
  'iPhone13,2': { name: 'iPhone 12', year: 2020 },
  'iPhone13,3': { name: 'iPhone 12 Pro', year: 2020 },
  'iPhone13,4': { name: 'iPhone 12 Pro Max', year: 2020 },
  'iPhone14,2': { name: 'iPhone 13 Pro', year: 2021 },
  'iPhone14,3': { name: 'iPhone 13 Pro Max', year: 2021 },
  'iPhone14,4': { name: 'iPhone 13 Mini', year: 2021 },
  'iPhone14,5': { name: 'iPhone 13', year: 2021 },

  // -- 12 Start --
  'iPad4,1': { name: 'iPad Air', year: 2017 }, // 5th Generation iPad (iPad Air) - Wifi
  'iPad4,2': { name: 'iPad Air', year: 2017 }, // 5th Generation iPad (iPad Air) - Cellular
  'iPad4,3': { name: 'iPad Air', year: 2017 }, // 5th Generation iPad (iPad Air)
  'iPad4,4': { name: 'iPad mini 2', year: 2013 }, // (2nd Generation iPad mini - Wifi)
  'iPad4,5': { name: 'iPad mini 2', year: 2013 }, // (2nd Generation iPad mini - Cellular)
  'iPad4,6': { name: 'iPad mini 2', year: 2013 }, // (2nd Generation iPad mini - China)
  'iPad4,7': { name: 'iPad mini 3', year: 2014 }, // (3rd Generation iPad mini)
  'iPad4,8': { name: 'iPad mini 3', year: 2014 }, // (3rd Generation iPad mini)
  'iPad4,9': { name: 'iPad mini 3', year: 2014 }, // (3rd Generation iPad mini - China)
  // -- 12 End --
  'iPad5,1': { name: 'iPad mini 4', year: 2015 }, // (4th Generation iPad mini)
  'iPad5,2': { name: 'iPad mini 4', year: 2015 }, // (4th Generation iPad mini)
  'iPad5,3': { name: 'iPad Air 2', year: 2014 }, // 6th Generation iPad (iPad Air 2)
  'iPad5,4': { name: 'iPad Air 2', year: 2014 }, // 6th Generation iPad (iPad Air 2)
  'iPad6,3': { name: 'iPad Pro 9.7-inch', year: 2016 }, // iPad Pro 9.7-inch
  'iPad6,4': { name: 'iPad Pro 9.7-inch', year: 2016 }, // iPad Pro 9.7-inch
  'iPad6,7': { name: 'iPad Pro 12.9-inch', year: 2015 }, // iPad Pro 12.9-inch
  'iPad6,8': { name: 'iPad Pro 12.9-inch', year: 2015 }, // iPad Pro 12.9-inch
  'iPad7,1': { name: 'iPad Pro 12.9-inch', year: 2017 }, // 2nd Generation iPad Pro 12.5-inch - Wifi
  'iPad7,2': { name: 'iPad Pro 12.9-inch', year: 2017 }, // 2nd Generation iPad Pro 12.5-inch - Cellular
  'iPad7,3': { name: 'iPad Pro 10.5-inch', year: 2017 }, // iPad Pro 10.5-inch - Wifi
  'iPad7,4': { name: 'iPad Pro 10.5-inch', year: 2017 }, // iPad Pro 10.5-inch - Cellular
  'iPad7,5': { name: 'iPad 6', year: 2018 }, // iPad (6th generation) - Wifi
  'iPad7,6': { name: 'iPad 6', year: 2018 }, // iPad (6th generation) - Cellular
  'iPad7,11': { name: 'iPad 7', year: 2019 }, // iPad (7th generation) - WiFi
  'iPad7,12': { name: 'iPad 7', year: 2019 }, // iPad (7th generation) - WiFi + cellular
  'iPad8,1': { name: 'iPad Pro 11-inch 3', year: 2018 }, // iPad Pro 11 inch (3rd generation) - Wifi
  'iPad8,2': { name: 'iPad Pro 11-inch 3', year: 2018 }, // iPad Pro 11 inch (3rd generation) - 1TB - Wifi
  'iPad8,3': { name: 'iPad Pro 11-inch 3', year: 2018 }, // iPad Pro 11 inch (3rd generation) - Wifi + cellular
  'iPad8,4': { name: 'iPad Pro 11-inch 3', year: 2018 }, // iPad Pro 11 inch (3rd generation) - 1TB - Wifi + cellular
  'iPad8,5': { name: 'iPad Pro 12.9-inch 3', year: 2018 }, // iPad Pro 12.9 inch (3rd generation) - Wifi
  'iPad8,6': { name: 'iPad Pro 12.9-inch 3', year: 2018 }, // iPad Pro 12.9 inch (3rd generation) - 1TB - Wifi
  'iPad8,7': { name: 'iPad Pro 12.9-inch 3', year: 2018 }, // iPad Pro 12.9 inch (3rd generation) - Wifi + cellular
  'iPad8,8': { name: 'iPad Pro 12.9-inch 3', year: 2018 }, // iPad Pro 12.9 inch (3rd generation) - 1TB - Wifi + cellular

  'iPad8,9': { name: 'iPad Pro 11-inch 4', year: 2020 }, // iPad Pro 11 inch (4th generation) - Wifi
  'iPad8,10': { name: 'iPad Pro 11-inch 4', year: 2020 }, // iPad Pro 11 inch (4th generation) - Wifi + cellular
  'iPad8,11': { name: 'iPad Pro 12.9-inch 4', year: 2020 }, // iPad Pro 12.9 inch (4th generation) - Wifi
  'iPad8,12': { name: 'iPad Pro 12.9-inch 4', year: 2020 }, // iPad Pro 12.9 inch (4th generation) - Wifi + cellular
  'iPad11,1': { name: 'iPad mini 5', year: 2019 }, // iPad mini (5th generation) - WiFi
  'iPad11,2': { name: 'iPad mini 5', year: 2019 }, // iPad mini (5th generation) - WiFi + cellular
  'iPad11,3': { name: 'iPad Air 3', year: 2019 }, // iPad Air (3rd generation) - WiFi
  'iPad11,4': { name: 'iPad Air 3', year: 2019 }, // iPad Air (3rd generation) - WiFi + cellular
  'iPad11,6': { name: 'iPad 8', year: 2020 }, // iPad (8th generation) - WiFi
  'iPad11,7': { name: 'iPad 8', year: 2020 }, // iPad (8th generation) - WiFi + cellular
  'iPad13,1': { name: 'iPad Air 4', year: 2020 }, // iPad Air (4th generation) - WiFi
  'iPad13,2': { name: 'iPad Air 4', year: 2020 }, // iPad Air (4th generation) - WiFi + cellular
  'iPad13,4': { name: 'iPad Pro 11-inch 3', year: 2021 }, // WiFi
  'iPad13,5': { name: 'iPad Pro 11-inch 3', year: 2021 }, // WiFi
  'iPad13,6': { name: 'iPad Pro 11-inch 3', year: 2021 }, // WiFi + cellular
  'iPad13,7': { name: 'iPad Pro 11-inch 3', year: 2021 }, // WiFi + cellular
  'iPad13,8': { name: 'iPad Pro 12.9-inch 5', year: 2021 }, // WiFi
  'iPad13,9': { name: 'iPad Pro 12.9-inch 5', year: 2021 }, // WiFi
  'iPad13,10': { name: 'iPad Pro 12.9-inch 5', year: 2021 }, // WiFi + cellular
  'iPad13,11': { name: 'iPad Pro 12.9-inch 5', year: 2021 }, // WiFi + cellular
  'iPad14,1': { name: 'iPad mini 6', year: 2021 }, // WiFi
  'iPad14,2': { name: 'iPad mini 6', year: 2021 }, // WiFi + cellular

  'AppleTV2,1': { name: 'Apple TV', year: 2010 }, // Apple TV (2nd Generation)
  'AppleTV3,1': { name: 'Apple TV', year: 2012 }, // Apple TV (3rd Generation)
  'AppleTV3,2': { name: 'Apple TV', year: 2013 }, // Apple TV (3rd Generation - Rev A)
  'AppleTV5,3': { name: 'Apple TV', year: 2015 }, // Apple TV (4th Generation)
  'AppleTV6,2': { name: 'Apple TV 4K', year: 2021 }, // Apple TV 4K
};
