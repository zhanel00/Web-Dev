import {Category, categories} from "./categories";

export interface Product {
  category: Category;
  likes: number;
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  img: string;
  url: string;
}

export const products = [
  {
    category: categories.filter(category => {
      return category.name === 'Electronics';
    })[0],
    likes: 0,
    id: 1,
    name: 'Смартфон Apple iPhone 14 128Gb черный',
    price: 327_320,
    description: 'технология NFC, цвет: черный, тип экрана: OLED, Super Retina XDR display, диагональ: 6.1 дюйм, размер оперативной памяти: 6 ГБ, процессор: 6-ядерный Apple A15 Bionic, объем встроенной памяти: 128 ГБ, емкость аккумулятора: 3279 мАч',
    rating: 4.3,
    img: './assets/images/apple-iphone-14.jpg',
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023',
  },
  {
    category: categories.filter(category => {
      return category.name === 'Electronics'
    })[0],
    likes: 0,
    id: 2,
    name: 'Клавиатура Rii mini i8 черный',
    price: 2_435,
    description: 'тип: оптическая, дизайн: мультимедийная, назначение: для настольного компьютера, тип подключения: беспроводная',
    rating: 5.0,
    img: './assets/images/rii-mini-i8.jpg',
    url: 'https://kaspi.kz/shop/p/rii-mini-i8-chernyi-101174843'
  },
  {
    category: categories.filter(category => {
      return category.name === 'Electronics'
    })[0],
    likes: 0,
    id: 3,
    name: 'Микрофон Union YS-63',
    price: 3_950,
    description: 'тип: динамический, конструкция: ручной, назначение: универсальный, тип подключения: беспроводной, радиосистема: Нет, разъемы: UЅВ, цвет: черный',
    rating: 4.7,
    img: './assets/images/union-ys-63.jpg',
    url: 'https://kaspi.kz/shop/p/union-ys-63-102469810',
  },
  {
    category: categories.filter(category => {
      return category.name === 'Furniture'
    })[0],
    likes: 0,
    id: 4,
    name: 'Табурет Stoly Almaty',
    price: 5_600,
    description: 'тип: табурет, материал: дерево, обивка: отсутствует, жесткость сиденья: средняя, высота, см: 43, ширина, см: 32, глубина, см: 35, цвет: слоновая кость, страна: Казахстан',
    rating: 5.0,
    img: './assets/images/stul-taburet-stoly-almaty.jpg',
    url: 'https://kaspi.kz/shop/p/taburet-stoly-almaty-56005600-43x32x35-sm-slonovaja-kost--104030003'
  },
  {
    category: categories.filter(category => {
      return category.name === 'Electronics'
    })[0],
    likes: 0,
    id: 5,
    name: 'Кофеварка CENTEK CT-1164',
    price: 60_885,
    description: 'тип: кофеварка, вид: рожковая, приготовление эспрессо: автоматическое, используемый кофе: молотый, возможность приготовления капучино, цвет: серебристый, черный',
    rating: 5.0,
    img: './assets/images/centek-ct-1164.jpg',
    url: 'https://kaspi.kz/shop/p/kofevarka-centek-ct-1164-serebristyi-chernyi-100358682'
  },
  {
    category: categories.filter(category => {
      return category.name === 'Electronics'
    })[0],
    likes: 0,
    id: 6,
    name: 'Мороженица Kitfort KT-1821',
    price: 199_960,
    description: 'тип: автоматическая, управление: электронное, объем чаши: 0.5 л, количество чаш: 1, материал чаши: металл, материал корпуса: металл, мощность: 120 Вт, цвет: серебристый',
    rating: 5.0,
    img: './assets/images/kitfort-kt-1821.jpg',
    url: 'https://kaspi.kz/shop/p/kitfort-kt-1821-serebristyi-106729389'
  },
  {
    category: categories.filter(category => {
      return category.name === 'Electronics'
    })[0],
    likes: 0,
    id: 7,
    name: 'Смарт-кольцо iQibla',
    price: 16_487,
    description: 'совместимость: iOS, размер кольца: 22 мм, беспроводные интерфейсы: Bluetooth, цвет: черный, модель: ZIKR1-22F',
    rating: 5.0,
    img: './assets/images/smart-kol-co-iqibla.jpg',
    url: 'https://kaspi.kz/shop/p/smart-kol-tso-iqibla-zikr1-22f-chernyi-107070750'
  },
  {
    category: categories.filter(category => {
      return category.name === 'Accessories'
    })[0],
    likes: 0,
    id: 8,
    name: 'Чехол OEM для Samsung Galaxy Buds',
    price: 2_409,
    description: 'материал: силикон, пластик,особенности: карабин для переноски, ударопрочный,цвет: синий',
    rating: 5.0,
    img: './assets/images/oem-dlya-samsung-galaxy-buds-live-buds.jpg',
    url: 'https://kaspi.kz/shop/p/oem-dlja-samsung-galaxy-buds-live-buds-pro-2-buds-2-buds-pro-sinii-107427005'
  },
  {
    category: categories.filter(category => {
      return category.name === 'Electronics'
    })[0],
    likes: 0,
    id: 9,
    name: 'SSD Kingston SNV2S/1000G 1000 ГБ',
    price: 33_187,
    description: 'тип: SSD,форм-фактор: M.2,емкость: 1000 ГБ,интерфейсы: NVMe, PCI-Express 4.0',
    rating: 5.0,
    img: './assets/images/ssd-kingston.jpg',
    url: 'https://kaspi.kz/shop/p/ssd-kingston-snv2s-1000g-1000-gb-107232387'
  },
  {
    category: categories.filter(category => {
      return category.name === 'Electronics'
    })[0],
    likes: 0,
    id: 10,
    name: 'Видеокарта GIGABYTE GeForce RTX 3060 Ti 8GB',
    price: 298_990,
    description: 'серия: GeForce RTX 30 Series, частота графического процессора: 1410, объем видеопамяти: 8 ГБ, тип видеопамяти: GDDR6, рекомендуемая мощность блока питания: 650 Вт',
    rating: 5.0,
    img: './assets/images/gigabyte-geforce-rtx-3060-ti.jpg',
    url: 'https://kaspi.kz/shop/p/gigabyte-geforce-rtx-3060-ti-gv-n306tgaming-oc-8gd-2-0-8gb-102565473'
  },
  {
    category: categories.filter(category => {
      return category.name === 'Furniture'
    })[0],
    likes: 0,
    id: 11,
    name: 'Кровать Mod Beds',
    price: 157_600,
    description: 'спальное место: 180x200 см ширина, см: 189 длина, см: 209',
    rating: 5.0,
    img: './assets/images/krovat-mod-beds.jpeg',
    url: 'https://kaspi.kz/shop/p/mod-beds-vertikal-18756-180x200-sm-s-matrasom-seryi-106051867'
  },
  {
    category: categories.filter(category => {
      return category.name === 'Furniture'
    })[0],
    likes: 0,
    id: 12,
    name: 'BULGYN угловой диван',
    price: 93_999,
    description: 'высота, см: 60; ширина, см: 284; глубина, см: 140',
    rating: 5.0,
    img: './assets/images/arman-company-komfort.jpeg',
    url: 'https://kaspi.kz/shop/p/bulgyn-komfort-p36-divan-obivka-veljur-60x284x140-sm-sinii-102085936'
  },
  {
    category: categories.filter(category => {
      return category.name === 'Furniture'
    })[0],
    likes: 0,
    id: 13,
    name: 'Ritmix компьютерный стол',
    price: 202_566,
    description: 'тип: трансформер; форма: прямоугольный; материал: металл, пластик; длина, см: 140; ширина, см: 70; высота, см: 70; цвет: черный; страна: Корея',
    rating: 5.0,
    img: './assets/images/komputernyj-stol-ritmix.jpeg',
    url: 'https://kaspi.kz/shop/p/ritmix-tbl-140-chernyi-103003492'
  },
  {
    category: categories.filter(category => {
      return category.name === 'Furniture'
    })[0],
    likes: 0,
    id: 14,
    name: 'Кухонный гарнитур Asyl Ui Dake',
    price: 220_000,
    description: 'тип: прямая; основной материал: ЛДСП; ширина гарнитура, см: 300; глубина гарнитура, см: 60; высота гарнитура, см: 85; цвет: белый; страна: Казахстан',
    rating: 5.0,
    img: './assets/images/asyl-ui-dake-brend.jpeg',
    url: 'https://kaspi.kz/shop/p/asyl-ui-dake-300x60x85-ldsp-106405113'
  },
  {
    category: categories.filter(category => {
      return category.name === 'Beauty products'
    })[0],
    likes: 0,
    id: 15,
    name: 'MEDI-PEEL Luxury 24K Gold Ampoule сыворотка 100 мл',
    price: 4_349,
    description: 'тип: сыворотка; действие: питание, ,увлажнение, ,повышение упругости; область нанесения: для лица; тип кожи: для всех типов; страна производства: Корея',
    rating: 5.0,
    img: './assets/images/medi-peel-luxury-24k-gold-ampoule.jpeg',
    url: 'https://kaspi.kz/shop/p/medi-peel-luxury-24k-gold-ampoule-syvorotka-100-ml-100375778'
  },
  {
    category: categories.filter(category => {
      return category.name === 'Beauty products'
    })[0],
    likes: 0,
    id: 16,
    name: 'Патчи MEDI-PEEL гидрогелевые Hyaluron Cica Peptide 9 для глаз 60 шт',
    price: 4_901,
    description: 'вид патчей: гидрогелевые; зона нанесения: для глаз; действие: увлажнение, ,от отеков, ,от темных кругов; тип кожи: для всех типов; страна производства: Корея',
    rating: 5.0,
    img: './assets/images/medi-peel-hyaluron-cica-peptide-9.jpeg',
    url: 'https://kaspi.kz/shop/p/medi-peel-gidrogelevye-hyaluron-cica-peptide-9-dlja-glaz-60-sht-100378895'
  },
  {
    category: categories.filter(category => {
      return category.name === 'Beauty products'
    })[0],
    likes: 0,
    id: 17,
    name: 'Vivienne Sabo Concealer Retouche 01 светло-розовый',
    price: 2_530,
    description: 'тип: консилер; назначение: для области вокруг глаз; текстура: кремовая; тип кожи: для всех типов; страна производства: Франция',
    rating: 5.0,
    img: './assets/images/vivienne-sabo-concealer-retouche-konsiler-01.jpeg',
    url: 'https://kaspi.kz/shop/p/vivienne-sabo-concealer-retouche-01-svetlo-rozovyi-102000704'
  },
  {
    category: categories.filter(category => {
      return category.name === 'Beauty products'
    })[0],
    likes: 0,
    id: 18,
    name: 'Batiste Cherry сухой шампунь 200 мл',
    price: 2_820,
    description: 'тип: шампунь; тип волос: светлые, темные; страна производства: Великобритания',
    rating: 5.0,
    img: './assets/images/batiste-cherry-sukhoi-shampun.jpeg',
    url: 'https://kaspi.kz/shop/p/batiste-cherry-suhoi-shampun-200-ml-24200005'
  },
  {
    category: categories.filter(category => {
      return category.name === 'Beauty products'
    })[0],
    likes: 0,
    id: 19,
    name: 'Boosh Cosmetics Миноксидил 10% лосьон 55 мл',
    price: 12_159,
    description: 'средство: бальзам; назначение: для бороды и усов; объем: 55 мл; тип волос: для всех типов; страна производства: Россия',
    rating: 4.5,
    img: './assets/images/boosh-cosmetics.jpeg',
    url: 'https://kaspi.kz/shop/p/boosh-cosmetics-minoksidil-10-los-on-55-ml-102513333'
  },
  {
    category: categories.filter(category => {
      return category.name === 'Accessories'
    })[0],
    likes: 0,
    id: 20,
    name: 'Стекло OEM Watch для Apple Watch 4',
    price: 5_990,
    description: 'тип: стекло; назначение: смарт-часы; совместимый бренд: Apple; совместимые модели: Watch 4; вид покрытия: глянцевое',
    rating: 0.0,
    img: './assets/images/steklo-oem-watch-dla-apple-watch-4.jpeg',
    url: 'https://kaspi.kz/shop/p/steklo-oem-watch-dlja-apple-watch-4-40mm-105920439'
  },
  {
    category: categories.filter(category => {
      return category.name === 'Accessories'
    })[0],
    likes: 0,
    id: 21,
    name: 'Наклейка для телефона Better Life SP951 60 шт',
    price: 1_200,
    description: 'количество штук в упаковке: 60; материал: пленка',
    rating: 0.0,
    img: './assets/images/better-life-sp951-60-sht.jpeg',
    url: 'https://kaspi.kz/shop/p/better-life-sp951-60-sht-108908892'
  },
  {
    category: categories.filter(category => {
      return category.name === 'Accessories'
    })[0],
    likes: 0,
    id: 22,
    name: 'Чехол Smart Case для Apple iPhone 13 прозрачный',
    price: 226,
    description: 'тип: накладка с защитой камеры; совместимый бренд: Apple; материал: силикон',
    rating: 5.0,
    img: './assets/images/prozracnyj-cehol-na-iphone-13.jpeg',
    url: 'https://kaspi.kz/shop/p/smart-case-dlja-apple-iphone-13-prozrachnyi-106185651'
  },
  {
    category: categories.filter(category => {
      return category.name === 'Accessories'
    })[0],
    likes: 0,
    id: 23,
    name: 'Зарядное устройство Apple 20W USB-C Power Adapter белый',
    price: 11_787,
    description: 'тип: сетевая зарядка; количество подключаемых устройств: 1; быстрая зарядка: Да; разъем подключения: USB Type-C',
    rating: 5.0,
    img: './assets/images/apple-20w-usb-c-power-adapter.jpeg',
    url: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093'
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/