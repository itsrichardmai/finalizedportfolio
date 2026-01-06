export const menuData = {
  appetizers: [
    { name: 'Kimchi', korean: '김치', description: 'Traditional fermented cabbage' },
    { name: 'Japchae', korean: '잡채', description: 'Glass noodles with vegetables' },
    { name: 'Mandu', korean: '만두', description: 'Korean dumplings (steamed or fried)' },
    { name: 'Pajeon', korean: '파전', description: 'Korean scallion pancake' },
    { name: 'Tteokbokki', korean: '떡볶이', description: 'Spicy rice cakes' },
  ],
  bbqChicken: [
    { name: 'Original BBQ Chicken', korean: '오리지널 치킨', description: 'Our signature Korean fried chicken' },
    { name: 'Spicy BBQ Chicken', korean: '매운 치킨', description: 'Crispy chicken with spicy glaze' },
    { name: 'Soy Garlic Chicken', korean: '간장 마늘 치킨', description: 'Sweet and savory soy garlic flavor' },
    { name: 'Honey Butter Chicken', korean: '허니 버터 치킨', description: 'Sweet honey butter coating' },
    { name: 'Half & Half', korean: '하프 앤 하프', description: 'Two flavors on one plate' },
  ],
  bbq: [
    { name: 'Galbi (Short Ribs)', korean: '갈비', description: 'Marinated beef short ribs' },
    { name: 'Bulgogi', korean: '불고기', description: 'Marinated beef' },
    { name: 'Samgyeopsal', korean: '삼겹살', description: 'Pork belly' },
    { name: 'Spicy Pork', korean: '제육볶음', description: 'Marinated spicy pork' },
    { name: 'Combo Platter', korean: '모듬구이', description: 'Mix of beef, pork, and chicken' },
  ],
  soups: [
    { name: 'Kimchi Jjigae', korean: '김치찌개', description: 'Kimchi stew with pork' },
    { name: 'Doenjang Jjigae', korean: '된장찌개', description: 'Soybean paste stew' },
    { name: 'Sundubu Jjigae', korean: '순두부찌개', description: 'Soft tofu stew' },
    { name: 'Galbitang', korean: '갈비탕', description: 'Beef short rib soup' },
  ],
  mains: [
    { name: 'Bibimbap', korean: '비빔밥', description: 'Mixed rice with vegetables and egg' },
    { name: 'Dolsot Bibimbap', korean: '돌솥 비빔밥', description: 'Bibimbap in hot stone pot' },
    { name: 'Kimchi Fried Rice', korean: '김치볶음밥', description: 'Fried rice with kimchi' },
    { name: 'Jajangmyeon', korean: '자장면', description: 'Noodles with black bean sauce' },
  ],
  drinks: {
    byDraft: [
      { name: 'Coors Light', description: '4.2% Light Lager' },
      { name: 'Yuengling Lager', description: '4.2% Amber Lager' },
      { name: 'Sapporo Premium', description: '4.9% Lager' },
      { name: 'Heineken', description: '5.0% Pale Lager' },
      { name: 'Angry Orchard Crisp Apple', description: '5.0% Cider' },
      { name: 'Blue Moon', description: '5.4% Witbier' },
      { name: 'Sierra Nevada', description: '5.6% Pale Ale' },
      { name: 'Allagash White', description: '5.1% Witbier' },
      { name: '2SP Up & Out', description: '6.0% Hazy IPA' },
      { name: 'Lagunitas IPA', description: '6.2% IPA' },
      { name: 'Dogfish Head 60 Min IPA', description: '6.0% IPA' },
      { name: 'Guinness', description: '4.2% Stout' },
    ],
    byBottle: {
      domestic: [
        { name: 'Coors Light', description: '4.2% Light Lager' },
        { name: 'Miller Lite', description: '4.2% Light Lager' },
        { name: 'Budweiser', description: '' },
        { name: 'Stella Artois', description: '5.0% Lager' },
        { name: 'White Claw', description: '5.0% Seltzer' },
        { name: "Truly's", description: '5.0% Seltzer' },
        { name: 'Dogfish Head 90 min', description: '9.0% Imperial IPA' },
      ],
      imports: [
        { name: 'Corona Extra', description: '4.6% Adjunct Lager' },
        { name: 'Heineken', description: '5.0% Pale Lager' },
        { name: 'Kirin Ichiban', description: '5.0% Pale Lager' },
        { name: 'Tsingtao', description: '4.8% Lager' },
        { name: 'Hoegaarden', description: '4.9% Witbier' },
        { name: 'Singha', description: '5.0% Pale Larger' },
        { name: 'Kloud', description: '5.0% Pilsener' },
      ],
    },
    cocktails: {
      adultCaprisun: [
        { name: 'Strawberry Smash Caprisun', description: 'Soju, Muddled Strawberry, Yuzu Syrup' },
        { name: 'Lemonade Caprisun', description: 'Soju, Squeezed Lemon, Simple Syrup' },
        { name: 'Mango Caprisun', description: 'Soju, Mango Syrup, Orange Juice' },
        { name: 'Soju Punch Caprisun', description: 'Soju, Pineapple Juice, Orange Juice, Cranberry Juice, Lime Juice, Grenadine' },
        { name: 'Peach Caprisun', description: 'Soju, Peach Schnapps, Peach Syrup, Peach Nectar, Lime Juice' },
      ],
      classicCocktails: [
        { name: 'Bay Breeze', description: 'Vodka, Pineapple Juice, Cranberry Juice' },
        { name: 'Long Island', description: 'Vodka, Rum, Gin, Tequila, Triple Sec, Sweet & Sour Mix, Coke' },
        { name: 'Tokyo Tea', description: 'Vodka, Rum, Gin, Tequila, Tripel Sec, Midori, Sweet & Sour Mix, Sprite' },
        { name: 'Tequila Sunrise', description: 'Tequila, Orange Juice, Cranberry Juice, Grenadine' },
        { name: 'Yuzu Mule', description: 'Vodka, Yuzu, Lime, Ginger Beer' },
        { name: 'Peach-Pomtini', description: 'Pomegranate Vodka, Peach Schnapps, Lemon, Grenadine' },
        { name: 'Cosmopolitan', description: 'Vodka, Lime Juice, Triple Sec, Cranberry Juice' },
      ],
      shooters: [
        { name: 'Green Tea', description: '(1) or (Pitcher)' },
        { name: 'Lemon Drop', description: '' },
        { name: 'Irish Car Bomb', description: '' },
        { name: 'Jager Bomb', description: '' },
      ],
    },
    koreanTraditional: [
      { name: 'Charm Soju', korean: '참 소주', description: '19.3% - High ABV, Sweeter Clean Finish - 375ml' },
      { name: 'Chamisul Fresh', korean: '참이슬 후레쉬', description: "17.8% - Korea's No.1 seller, Bamboo charcoal filtered soju - 375ml" },
      { name: 'Chamisul Plum', korean: '참이슬 매실', description: '13.0% - Plum flavored Soju - 375ml' },
      { name: 'Chamisul Grapefruit', korean: '참이슬 자몽', description: '13.0% - Grapefruit flavored Soju - 375ml' },
      { name: 'Chamisul Green Grape', korean: '참이슬 청포도', description: '13.0% - Green Grape flavored Soju - 375ml' },
      { name: 'Chum Churum', korean: '처음처럼', description: '17.3% - Spirit Distilled from Rice - 375ml' },
      { name: 'Makgeolli', korean: '막걸리', description: '6.0% - Unfiltered Rice Wine - 1 Liter' },
      { name: 'Bok Bun Ja', korean: '복분자', description: '15.0% - Korean Raspberry Wine - 375ml' },
    ],
    whiskey: {
      japanese: [
        { name: 'Suntory Toki Blended', description: '' },
        { name: 'Nikka Taketsuru Pure Malt', description: '' },
        { name: 'Suntory Hibiki Harmony', description: '' },
        { name: 'Blende 86 Proof', description: '' },
      ],
      american: [
        { name: 'Mellow Corn Kentucky Straight Corn 100 Proof', description: '' },
        { name: "Jack Daniel's Old Number 7", description: '' },
      ],
      irish: [
        { name: 'Jameson', description: '' },
      ],
      bourbon: [
        { name: 'Evan Williams Bottled in Bond 100 Proof', description: '' },
        { name: "Maker's Mark", description: '' },
        { name: 'Bulleit', description: '' },
      ],
      scotch: {
        singleMalt: [
          { name: 'Glenlivet 12 years', description: '' },
          { name: 'Macallan 12 years', description: '' },
          { name: 'Oban Scotch 14 years', description: '' },
          { name: 'Glenfiddich Scotch 18 year', description: '' },
          { name: 'Glenlivet 18 years', description: '' },
          { name: 'Macallan 18 years', description: '' },
        ],
        blended: [
          { name: 'Johnnie Walker Black 12 year', description: '' },
          { name: 'Johnnie Walker Blue', description: '' },
        ],
      },
      rye: [
        { name: 'Old Overholt Rye Whiskey', description: '' },
        { name: 'Bulleit Rye', description: '' },
      ],
      canadian: [
        { name: "Seagram's 7 Crown Blended Whiskey", description: '' },
        { name: 'Crown Royal Canadian Whisky', description: '' },
      ],
    },
    wine: {
      red: [
        { name: 'Cabernet Sauvignon', description: "Beringer Founder's Estate, California" },
        { name: 'Malbec', description: 'Alamos, Mendoza, Argentina' },
        { name: 'Sweet Red', description: '' },
      ],
      white: [
        { name: 'Moscato', description: '' },
        { name: 'Sauvignon Blanc', description: 'Brancott Estate, New Zealand' },
        { name: 'Chardonnay', description: 'Alamos, Mendoza, Argentina' },
      ],
      rose: [
        { name: 'Rose', description: 'Sepal Estates, California 2016' },
      ],
      bubble: [
        { name: 'Champagnes', description: 'Korbel Brut, California' },
      ],
    },
  },
};

export const happyHour = {
  timing: 'Sunday - Thursday | 5PM - 10PM',
  note: 'Except Holidays',
  specials: [
    { name: 'Capri Pouches', price: '$8' },
    { name: 'Shooter Pitcher', price: '$20' },
    { name: 'Dumplings', price: '$6' },
    { name: 'Honey Butter Chips', price: '$6' },
    { name: 'Fries', price: '$6' },
    { name: 'Yoo Lin Gi', price: '$10' },
    { name: 'Hawaiian Spam', price: '$8' },
    { name: 'Korean Ribs', price: '$15' },
    { name: 'Korean Wings', price: '$20' },
  ],
  karaokeDiscount: '50% OFF Karaoke',
};

export const karaokeRooms = [
  { name: 'Heineken', capacity: '9', price: '$60/hr' },
  { name: 'Brooklyn', capacity: '12', price: '$80/hr' },
  { name: 'Corona', capacity: '6', price: '$40/hr' },
  { name: 'Budweiser', capacity: '12', price: '$80/hr' },
  { name: 'Factory', capacity: '18', price: '$100/hr' },
  { name: 'Coors', capacity: '6', price: '$40/hr' },
  { name: 'Guinness', capacity: '6', price: '$40/hr' },
  { name: 'Stella', capacity: '6', price: '$40/hr' },
  { name: 'Lounge', capacity: '30', price: '$125/hr' },
];
