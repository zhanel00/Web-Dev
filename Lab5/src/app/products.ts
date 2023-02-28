import {Category, categories} from "./categories";

export interface Product {
  category: Category;
  likes?: number;
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
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/