import {ProductImage, productImages} from "./product-image.model";

export class ProductDetail {
  id: number
  productId: number
  size: number
  image: ProductImage[]
  unitPrice: number
  unitInStock: number

  constructor(id: number, productId: number, size: number, image: ProductImage[], unitPrice: number, unitInStock: number) {
    this.id = id
    this.productId = productId
    this.size = size
    this.image = image
    this.unitPrice = unitPrice
    this.unitInStock = unitInStock
  }

}

export let productDetails: ProductDetail[] = [
  {
    "id": 1,
    "productId": 1,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===1),
    "unitPrice": 814000,
    "unitInStock": 0
  },
  {
    "id": 2,
    "productId": 1,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===2),
    "unitPrice": 824000,
    "unitInStock": 10
  },
  {
    "id": 3,
    "productId": 1,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===3),
    "unitPrice": 834000,
    "unitInStock": 20
  },
  {
    "id": 4,
    "productId": 1,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===4),
    "unitPrice": 844000,
    "unitInStock": 30
  },
  {
    "id": 5,
    "productId": 1,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===5),
    "unitPrice": 854000,
    "unitInStock": 15
  },
  {
    "id": 6,
    "productId": 2,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===6),
    "unitPrice": 814000,
    "unitInStock": 0
  },
  {
    "id": 7,
    "productId": 2,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===7),
    "unitPrice": 824000,
    "unitInStock": 10
  },
  {
    "id": 8,
    "productId": 2,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===8),
    "unitPrice": 834000,
    "unitInStock": 20
  },
  {
    "id": 9,
    "productId": 2,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===9),
    "unitPrice": 844000,
    "unitInStock": 30
  },
  {
    "id": 10,
    "productId": 2,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===10),
    "unitPrice": 854000,
    "unitInStock": 15
  },
  {
    "id": 11,
    "productId": 3,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===11),
    "unitPrice": 814000,
    "unitInStock": 0
  },
  {
    "id": 12,
    "productId": 3,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===12),
    "unitPrice": 824000,
    "unitInStock": 10
  },
  {
    "id": 13,
    "productId": 3,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===13),
    "unitPrice": 834000,
    "unitInStock": 20
  },
  {
    "id": 14,
    "productId": 3,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===14),
    "unitPrice": 844000,
    "unitInStock": 30
  },
  {
    "id": 15,
    "productId": 3,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===15),
    "unitPrice": 854000,
    "unitInStock": 15
  },
  {
    "id": 16,
    "productId": 4,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===16),
    "unitPrice": 794000,
    "unitInStock": 0
  },
  {
    "id": 17,
    "productId": 4,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===17),
    "unitPrice": 804000,
    "unitInStock": 10
  },
  {
    "id": 18,
    "productId": 4,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===18),
    "unitPrice": 814000,
    "unitInStock": 20
  },
  {
    "id": 19,
    "productId": 4,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===19),
    "unitPrice": 824000,
    "unitInStock": 30
  },
  {
    "id": 20,
    "productId": 4,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===20),
    "unitPrice": 834000,
    "unitInStock": 15
  },
  {
    "id": 21,
    "productId": 5,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===21),
    "unitPrice": 794000,
    "unitInStock": 0
  },
  {
    "id": 22,
    "productId": 5,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===22),
    "unitPrice": 804000,
    "unitInStock": 10
  },
  {
    "id": 23,
    "productId": 5,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===23),
    "unitPrice": 814000,
    "unitInStock": 20
  },
  {
    "id": 24,
    "productId": 5,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===24),
    "unitPrice": 824000,
    "unitInStock": 30
  },
  {
    "id": 25,
    "productId": 5,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===25),
    "unitPrice": 834000,
    "unitInStock": 15
  },
  {
    "id": 26,
    "productId": 6,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===26),
    "unitPrice": 794000,
    "unitInStock": 10
  },
  {
    "id": 27,
    "productId": 6,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===27),
    "unitPrice": 804000,
    "unitInStock": 10
  },
  {
    "id": 28,
    "productId": 6,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===28),
    "unitPrice": 814000,
    "unitInStock": 0
  },
  {
    "id": 29,
    "productId": 6,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===29),
    "unitPrice": 824000,
    "unitInStock": 30
  },
  {
    "id": 30,
    "productId": 6,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===30),
    "unitPrice": 834000,
    "unitInStock": 20
  },
  {
    "id": 31,
    "productId": 7,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===31),
    "unitPrice": 1010000,
    "unitInStock": 10
  },
  {
    "id": 32,
    "productId": 7,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===32),
    "unitPrice": 1020000,
    "unitInStock": 10
  },
  {
    "id": 33,
    "productId": 7,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===33),
    "unitPrice": 1030000,
    "unitInStock": 0
  },
  {
    "id": 34,
    "productId": 7,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===34),
    "unitPrice": 1040000,
    "unitInStock": 30
  },
  {
    "id": 35,
    "productId": 7,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===35),
    "unitPrice": 1050000,
    "unitInStock": 20
  },
  {
    "id": 36,
    "productId": 8,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===36),
    "unitPrice": 1010000,
    "unitInStock": 0
  },
  {
    "id": 37,
    "productId": 8,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===37),
    "unitPrice": 1020000,
    "unitInStock": 10
  },
  {
    "id": 38,
    "productId": 8,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===38),
    "unitPrice": 1030000,
    "unitInStock": 20
  },
  {
    "id": 39,
    "productId": 8,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===39),
    "unitPrice": 1040000,
    "unitInStock": 30
  },
  {
    "id": 40,
    "productId": 8,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===40),
    "unitPrice": 1050000,
    "unitInStock": 15
  },
  {
    "id": 41,
    "productId": 9,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===41),
    "unitPrice": 1010000,
    "unitInStock": 0
  },
  {
    "id": 42,
    "productId": 9,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===42),
    "unitPrice": 1020000,
    "unitInStock": 10
  },
  {
    "id": 43,
    "productId": 9,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===43),
    "unitPrice": 1030000,
    "unitInStock": 20
  },
  {
    "id": 44,
    "productId": 9,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===44),
    "unitPrice": 1040000,
    "unitInStock": 30
  },
  {
    "id": 45,
    "productId": 9,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===45),
    "unitPrice": 1050000,
    "unitInStock": 15
  },
  {
    "id": 46,
    "productId": 10,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===46),
    "unitPrice": 814000,
    "unitInStock": 0
  },
  {
    "id": 47,
    "productId": 10,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===47),
    "unitPrice": 824000,
    "unitInStock": 10
  },
  {
    "id": 48,
    "productId": 10,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===48),
    "unitPrice": 834000,
    "unitInStock": 20
  },
  {
    "id": 49,
    "productId": 10,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===49),
    "unitPrice": 844000,
    "unitInStock": 30
  },
  {
    "id": 50,
    "productId": 10,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===50),
    "unitPrice": 854000,
    "unitInStock": 15
  },
  {
    "id": 51,
    "productId": 11,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===51),
    "unitPrice": 814000,
    "unitInStock": 0
  },
  {
    "id": 52,
    "productId": 11,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===52),
    "unitPrice": 824000,
    "unitInStock": 10
  },
  {
    "id": 53,
    "productId": 11,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===53),
    "unitPrice": 834000,
    "unitInStock": 20
  },
  {
    "id": 54,
    "productId": 11,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===54),
    "unitPrice": 844000,
    "unitInStock": 30
  },
  {
    "id": 55,
    "productId": 11,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===55),
    "unitPrice": 854000,
    "unitInStock": 15
  },
  {
    "id": 56,
    "productId": 12,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===56),
    "unitPrice": 814000,
    "unitInStock": 0
  },
  {
    "id": 57,
    "productId": 12,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===57),
    "unitPrice": 824000,
    "unitInStock": 10
  },
  {
    "id": 58,
    "productId": 12,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===58),
    "unitPrice": 834000,
    "unitInStock": 20
  },
  {
    "id": 59,
    "productId": 12,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===59),
    "unitPrice": 844000,
    "unitInStock": 30
  },
  {
    "id": 60,
    "productId": 12,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===60),
    "unitPrice": 854000,
    "unitInStock": 15
  },
  {
    "id": 61,
    "productId": 13,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===61),
    "unitPrice": 735000,
    "unitInStock": 10
  },
  {
    "id": 62,
    "productId": 13,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===62),
    "unitPrice": 745000,
    "unitInStock": 10
  },
  {
    "id": 63,
    "productId": 13,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===63),
    "unitPrice": 755000,
    "unitInStock": 0
  },
  {
    "id": 64,
    "productId": 13,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===64),
    "unitPrice": 765000,
    "unitInStock": 30
  },
  {
    "id": 65,
    "productId": 13,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===65),
    "unitPrice": 775000,
    "unitInStock": 20
  },
  {
    "id": 66,
    "productId": 14,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===66),
    "unitPrice": 735000,
    "unitInStock": 10
  },
  {
    "id": 67,
    "productId": 14,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===67),
    "unitPrice": 745000,
    "unitInStock": 10
  },
  {
    "id": 68,
    "productId": 14,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===68),
    "unitPrice": 755000,
    "unitInStock": 0
  },
  {
    "id": 69,
    "productId": 14,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===69),
    "unitPrice": 765000,
    "unitInStock": 30
  },
  {
    "id": 70,
    "productId": 14,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===70),
    "unitPrice": 775000,
    "unitInStock": 20
  },
  {
    "id": 71,
    "productId": 15,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===71),
    "unitPrice": 1100000,
    "unitInStock": 10
  },
  {
    "id": 72,
    "productId": 15,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===72),
    "unitPrice": 1110000,
    "unitInStock": 10
  },
  {
    "id": 73,
    "productId": 15,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===73),
    "unitPrice": 1120000,
    "unitInStock": 0
  },
  {
    "id": 74,
    "productId": 15,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===74),
    "unitPrice": 1130000,
    "unitInStock": 30
  },
  {
    "id": 75,
    "productId": 15,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===75),
    "unitPrice": 1140000,
    "unitInStock": 20
  },
  {
    "id": 76,
    "productId": 16,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===76),
    "unitPrice": 700000,
    "unitInStock": 0
  },
  {
    "id": 77,
    "productId": 16,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===77),
    "unitPrice": 710000,
    "unitInStock": 10
  },
  {
    "id": 78,
    "productId": 16,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===78),
    "unitPrice": 720000,
    "unitInStock": 20
  },
  {
    "id": 79,
    "productId": 16,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===79),
    "unitPrice": 730000,
    "unitInStock": 30
  },
  {
    "id": 80,
    "productId": 16,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===80),
    "unitPrice": 740000,
    "unitInStock": 15
  },
  {
    "id": 81,
    "productId": 17,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===81),
    "unitPrice": 700000,
    "unitInStock": 0
  },
  {
    "id": 82,
    "productId": 17,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===82),
    "unitPrice": 710000,
    "unitInStock": 10
  },
  {
    "id": 83,
    "productId": 17,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===83),
    "unitPrice": 720000,
    "unitInStock": 20
  },
  {
    "id": 84,
    "productId": 17,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===84),
    "unitPrice": 730000,
    "unitInStock": 30
  },
  {
    "id": 85,
    "productId": 17,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===85),
    "unitPrice": 740000,
    "unitInStock": 15
  },
  {
    "id": 86,
    "productId": 18,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===86),
    "unitPrice": 750000,
    "unitInStock": 0
  },
  {
    "id": 87,
    "productId": 18,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===87),
    "unitPrice": 760000,
    "unitInStock": 10
  },
  {
    "id": 88,
    "productId": 18,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===88),
    "unitPrice": 770000,
    "unitInStock": 20
  },
  {
    "id": 89,
    "productId": 18,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===89),
    "unitPrice": 780000,
    "unitInStock": 30
  },
  {
    "id": 90,
    "productId": 18,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===90),
    "unitPrice": 790000,
    "unitInStock": 15
  },
  {
    "id": 91,
    "productId": 19,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===91),
    "unitPrice": 750000,
    "unitInStock": 10
  },
  {
    "id": 92,
    "productId": 19,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===92),
    "unitPrice": 760000,
    "unitInStock": 0
  },
  {
    "id": 93,
    "productId": 19,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===93),
    "unitPrice": 770000,
    "unitInStock": 15
  },
  {
    "id": 94,
    "productId": 19,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===94),
    "unitPrice": 780000,
    "unitInStock": 30
  },
  {
    "id": 95,
    "productId": 19,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===95),
    "unitPrice": 790000,
    "unitInStock": 15
  },
  {
    "id": 96,
    "productId": 20,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===96),
    "unitPrice": 870000,
    "unitInStock": 10
  },
  {
    "id": 97,
    "productId": 20,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===97),
    "unitPrice": 880000,
    "unitInStock": 0
  },
  {
    "id": 98,
    "productId": 20,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===98),
    "unitPrice": 890000,
    "unitInStock": 15
  },
  {
    "id": 99,
    "productId": 20,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===99),
    "unitPrice": 900000,
    "unitInStock": 30
  },
  {
    "id": 100,
    "productId": 20,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===100),
    "unitPrice": 910000,
    "unitInStock": 15
  },
  {
    "id": 101,
    "productId": 21,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===101),
    "unitPrice": 686000,
    "unitInStock": 0
  },
  {
    "id": 102,
    "productId": 21,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===102),
    "unitPrice": 696000,
    "unitInStock": 10
  },
  {
    "id": 103,
    "productId": 21,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===103),
    "unitPrice": 706000,
    "unitInStock": 20
  },
  {
    "id": 104,
    "productId": 21,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===104),
    "unitPrice": 716000,
    "unitInStock": 30
  },
  {
    "id": 105,
    "productId": 21,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===105),
    "unitPrice": 726000,
    "unitInStock": 15
  },
  {
    "id": 106,
    "productId": 22,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===106),
    "unitPrice": 686000,
    "unitInStock": 0
  },
  {
    "id": 107,
    "productId": 22,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===107),
    "unitPrice": 696000,
    "unitInStock": 10
  },
  {
    "id": 108,
    "productId": 22,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===108),
    "unitPrice": 706000,
    "unitInStock": 20
  },
  {
    "id": 109,
    "productId": 22,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===109),
    "unitPrice": 716000,
    "unitInStock": 30
  },
  {
    "id": 110,
    "productId": 22,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===110),
    "unitPrice": 726000,
    "unitInStock": 15
  },
  {
    "id": 111,
    "productId": 23,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===111),
    "unitPrice": 686000,
    "unitInStock": 0
  },
  {
    "id": 112,
    "productId": 23,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===112),
    "unitPrice": 696000,
    "unitInStock": 10
  },
  {
    "id": 113,
    "productId": 23,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===113),
    "unitPrice": 706000,
    "unitInStock": 20
  },
  {
    "id": 114,
    "productId": 23,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===114),
    "unitPrice": 716000,
    "unitInStock": 30
  },
  {
    "id": 115,
    "productId": 23,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===115),
    "unitPrice": 726000,
    "unitInStock": 15
  },
  {
    "id": 116,
    "productId": 24,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===116),
    "unitPrice": 716000,
    "unitInStock": 10
  },
  {
    "id": 117,
    "productId": 24,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===117),
    "unitPrice": 726000,
    "unitInStock": 0
  },
  {
    "id": 118,
    "productId": 24,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===118),
    "unitPrice": 736000,
    "unitInStock": 15
  },
  {
    "id": 119,
    "productId": 24,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===119),
    "unitPrice": 746000,
    "unitInStock": 30
  },
  {
    "id": 120,
    "productId": 24,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===120),
    "unitPrice": 756000,
    "unitInStock": 15
  },
  {
    "id": 121,
    "productId": 25,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===121),
    "unitPrice": 716000,
    "unitInStock": 10
  },
  {
    "id": 122,
    "productId": 25,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===122),
    "unitPrice": 726000,
    "unitInStock": 10
  },
  {
    "id": 123,
    "productId": 25,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===123),
    "unitPrice": 736000,
    "unitInStock": 0
  },
  {
    "id": 124,
    "productId": 25,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===124),
    "unitPrice": 746000,
    "unitInStock": 30
  },
  {
    "id": 125,
    "productId": 25,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===125),
    "unitPrice": 756000,
    "unitInStock": 20
  },
  {
    "id": 126,
    "productId": 26,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===126),
    "unitPrice": 716000,
    "unitInStock": 0
  },
  {
    "id": 127,
    "productId": 26,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===127),
    "unitPrice": 726000,
    "unitInStock": 10
  },
  {
    "id": 128,
    "productId": 26,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===128),
    "unitPrice": 736000,
    "unitInStock": 20
  },
  {
    "id": 129,
    "productId": 26,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===129),
    "unitPrice": 746000,
    "unitInStock": 30
  },
  {
    "id": 130,
    "productId": 26,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===130),
    "unitPrice": 756000,
    "unitInStock": 15
  },
  {
    "id": 131,
    "productId": 27,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===131),
    "unitPrice": 370000,
    "unitInStock": 10
  },
  {
    "id": 132,
    "productId": 27,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===132),
    "unitPrice": 380000,
    "unitInStock": 0
  },
  {
    "id": 133,
    "productId": 27,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===133),
    "unitPrice": 390000,
    "unitInStock": 15
  },
  {
    "id": 134,
    "productId": 27,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===134),
    "unitPrice": 400000,
    "unitInStock": 30
  },
  {
    "id": 135,
    "productId": 27,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===135),
    "unitPrice": 410000,
    "unitInStock": 15
  },
  {
    "id": 136,
    "productId": 28,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===136),
    "unitPrice": 370000,
    "unitInStock": 0
  },
  {
    "id": 137,
    "productId": 28,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===137),
    "unitPrice": 380000,
    "unitInStock": 10
  },
  {
    "id": 138,
    "productId": 28,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===138),
    "unitPrice": 390000,
    "unitInStock": 20
  },
  {
    "id": 139,
    "productId": 28,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===139),
    "unitPrice": 400000,
    "unitInStock": 30
  },
  {
    "id": 140,
    "productId": 28,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===140),
    "unitPrice": 410000,
    "unitInStock": 15
  },
  {
    "id": 141,
    "productId": 29,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===141),
    "unitPrice": 460000,
    "unitInStock": 10
  },
  {
    "id": 142,
    "productId": 29,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===142),
    "unitPrice": 470000,
    "unitInStock": 10
  },
  {
    "id": 143,
    "productId": 29,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===143),
    "unitPrice": 480000,
    "unitInStock": 0
  },
  {
    "id": 144,
    "productId": 29,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===144),
    "unitPrice": 490000,
    "unitInStock": 30
  },
  {
    "id": 145,
    "productId": 29,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===145),
    "unitPrice": 500000,
    "unitInStock": 20
  },
  {
    "id": 146,
    "productId": 30,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===146),
    "unitPrice": 460000,
    "unitInStock": 0
  },
  {
    "id": 147,
    "productId": 30,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===147),
    "unitPrice": 470000,
    "unitInStock": 10
  },
  {
    "id": 148,
    "productId": 30,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===148),
    "unitPrice": 480000,
    "unitInStock": 20
  },
  {
    "id": 149,
    "productId": 30,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===149),
    "unitPrice": 490000,
    "unitInStock": 30
  },
  {
    "id": 150,
    "productId": 30,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===150),
    "unitPrice": 500000,
    "unitInStock": 15
  },
  {
    "id": 151,
    "productId": 31,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===151),
    "unitPrice": 460000,
    "unitInStock": 0
  },
  {
    "id": 152,
    "productId": 31,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===152),
    "unitPrice": 470000,
    "unitInStock": 10
  },
  {
    "id": 153,
    "productId": 31,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===153),
    "unitPrice": 480000,
    "unitInStock": 20
  },
  {
    "id": 154,
    "productId": 31,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===154),
    "unitPrice": 490000,
    "unitInStock": 30
  },
  {
    "id": 155,
    "productId": 31,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===155),
    "unitPrice": 500000,
    "unitInStock": 15
  },
  {
    "id": 156,
    "productId": 32,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===156),
    "unitPrice": 1400000,
    "unitInStock": 0
  },
  {
    "id": 157,
    "productId": 32,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===157),
    "unitPrice": 1410000,
    "unitInStock": 10
  },
  {
    "id": 158,
    "productId": 32,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===158),
    "unitPrice": 1420000,
    "unitInStock": 20
  },
  {
    "id": 159,
    "productId": 32,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===159),
    "unitPrice": 1430000,
    "unitInStock": 30
  },
  {
    "id": 160,
    "productId": 32,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===160),
    "unitPrice": 1430000,
    "unitInStock": 15
  },
  {
    "id": 161,
    "productId": 33,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===161),
    "unitPrice": 1400000,
    "unitInStock": 0
  },
  {
    "id": 162,
    "productId": 33,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===162),
    "unitPrice": 1410000,
    "unitInStock": 10
  },
  {
    "id": 163,
    "productId": 33,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===163),
    "unitPrice": 1420000,
    "unitInStock": 20
  },
  {
    "id": 164,
    "productId": 33,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===164),
    "unitPrice": 1430000,
    "unitInStock": 30
  },
  {
    "id": 165,
    "productId": 33,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===165),
    "unitPrice": 1440000,
    "unitInStock": 15
  },
  {
    "id": 166,
    "productId": 34,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===166),
    "unitPrice": 1100000,
    "unitInStock": 0
  },
  {
    "id": 167,
    "productId": 34,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===167),
    "unitPrice": 1110000,
    "unitInStock": 10
  },
  {
    "id": 168,
    "productId": 34,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===168),
    "unitPrice": 1120000,
    "unitInStock": 20
  },
  {
    "id": 169,
    "productId": 34,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===169),
    "unitPrice": 1130000,
    "unitInStock": 30
  },
  {
    "id": 170,
    "productId": 34,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===170),
    "unitPrice": 1140000,
    "unitInStock": 15
  },
  {
    "id": 171,
    "productId": 35,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===171),
    "unitPrice": 1100000,
    "unitInStock": 0
  },
  {
    "id": 172,
    "productId": 35,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===172),
    "unitPrice": 1110000,
    "unitInStock": 10
  },
  {
    "id": 173,
    "productId": 35,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===173),
    "unitPrice": 1120000,
    "unitInStock": 20
  },
  {
    "id": 174,
    "productId": 35,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===174),
    "unitPrice": 1130000,
    "unitInStock": 30
  },
  {
    "id": 175,
    "productId": 35,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===175),
    "unitPrice": 1140000,
    "unitInStock": 15
  },
  {
    "id": 176,
    "productId": 36,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===176),
    "unitPrice": 1500000,
    "unitInStock": 10
  },
  {
    "id": 177,
    "productId": 36,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===177),
    "unitPrice": 1510000,
    "unitInStock": 10
  },
  {
    "id": 178,
    "productId": 36,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===178),
    "unitPrice": 1520000,
    "unitInStock": 0
  },
  {
    "id": 179,
    "productId": 36,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===179),
    "unitPrice": 1530000,
    "unitInStock": 30
  },
  {
    "id": 180,
    "productId": 36,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===180),
    "unitPrice": 1540000,
    "unitInStock": 20
  },
  {
    "id": 181,
    "productId": 37,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===181),
    "unitPrice": 1450000,
    "unitInStock": 10
  },
  {
    "id": 182,
    "productId": 37,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===182),
    "unitPrice": 1460000,
    "unitInStock": 10
  },
  {
    "id": 183,
    "productId": 37,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===183),
    "unitPrice": 1470000,
    "unitInStock": 0
  },
  {
    "id": 184,
    "productId": 37,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===184),
    "unitPrice": 1480000,
    "unitInStock": 30
  },
  {
    "id": 185,
    "productId": 37,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===185),
    "unitPrice": 1490000,
    "unitInStock": 20
  },
  {
    "id": 186,
    "productId": 38,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===186),
    "unitPrice": 1500000,
    "unitInStock": 0
  },
  {
    "id": 187,
    "productId": 38,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===187),
    "unitPrice": 1510000,
    "unitInStock": 10
  },
  {
    "id": 188,
    "productId": 38,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===188),
    "unitPrice": 1520000,
    "unitInStock": 20
  },
  {
    "id": 189,
    "productId": 38,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===189),
    "unitPrice": 1530000,
    "unitInStock": 30
  },
  {
    "id": 190,
    "productId": 38,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===190),
    "unitPrice": 1540000,
    "unitInStock": 15
  },
  {
    "id": 191,
    "productId": 39,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===191),
    "unitPrice": 5000000,
    "unitInStock": 0
  },
  {
    "id": 192,
    "productId": 39,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===192),
    "unitPrice": 5010000,
    "unitInStock": 10
  },
  {
    "id": 193,
    "productId": 39,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===193),
    "unitPrice": 5020000,
    "unitInStock": 20
  },
  {
    "id": 194,
    "productId": 39,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===194),
    "unitPrice": 5030000,
    "unitInStock": 30
  },
  {
    "id": 195,
    "productId": 39,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===195),
    "unitPrice": 5040000,
    "unitInStock": 15
  },
  {
    "id": 196,
    "productId": 40,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===196),
    "unitPrice": 5000000,
    "unitInStock": 10
  },
  {
    "id": 197,
    "productId": 40,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===197),
    "unitPrice": 5010000,
    "unitInStock": 10
  },
  {
    "id": 198,
    "productId": 40,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===198),
    "unitPrice": 5020000,
    "unitInStock": 0
  },
  {
    "id": 199,
    "productId": 40,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===199),
    "unitPrice": 5030000,
    "unitInStock": 30
  },
  {
    "id": 200,
    "productId": 40,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===200),
    "unitPrice": 5040000,
    "unitInStock": 20
  },
  {
    "id": 201,
    "productId": 41,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===201),
    "unitPrice": 5000000,
    "unitInStock": 0
  },
  {
    "id": 202,
    "productId": 41,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===202),
    "unitPrice": 5010000,
    "unitInStock": 10
  },
  {
    "id": 203,
    "productId": 41,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===203),
    "unitPrice": 5020000,
    "unitInStock": 20
  },
  {
    "id": 204,
    "productId": 41,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===204),
    "unitPrice": 5030000,
    "unitInStock": 30
  },
  {
    "id": 205,
    "productId": 41,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===205),
    "unitPrice": 5040000,
    "unitInStock": 15
  },
  {
    "id": 206,
    "productId": 42,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===206),
    "unitPrice": 5000000,
    "unitInStock": 10
  },
  {
    "id": 207,
    "productId": 42,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===207),
    "unitPrice": 5010000,
    "unitInStock": 10
  },
  {
    "id": 208,
    "productId": 42,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===208),
    "unitPrice": 5020000,
    "unitInStock": 0
  },
  {
    "id": 209,
    "productId": 42,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===209),
    "unitPrice": 5030000,
    "unitInStock": 30
  },
  {
    "id": 210,
    "productId": 42,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===210),
    "unitPrice": 5040000,
    "unitInStock": 20
  },
  {
    "id": 211,
    "productId": 43,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===211),
    "unitPrice": 6000000,
    "unitInStock": 0
  },
  {
    "id": 212,
    "productId": 43,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===212),
    "unitPrice": 6010000,
    "unitInStock": 10
  },
  {
    "id": 213,
    "productId": 43,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===213),
    "unitPrice": 6020000,
    "unitInStock": 20
  },
  {
    "id": 214,
    "productId": 43,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===214),
    "unitPrice": 6030000,
    "unitInStock": 30
  },
  {
    "id": 215,
    "productId": 43,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===215),
    "unitPrice": 6040000,
    "unitInStock": 15
  },
  {
    "id": 216,
    "productId": 44,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===216),
    "unitPrice": 2200000,
    "unitInStock": 0
  },
  {
    "id": 217,
    "productId": 44,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===217),
    "unitPrice": 2210000,
    "unitInStock": 10
  },
  {
    "id": 218,
    "productId": 44,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===218),
    "unitPrice": 2220000,
    "unitInStock": 20
  },
  {
    "id": 219,
    "productId": 44,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===219),
    "unitPrice": 2230000,
    "unitInStock": 30
  },
  {
    "id": 220,
    "productId": 44,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===220),
    "unitPrice": 2240000,
    "unitInStock": 15
  },
  {
    "id": 221,
    "productId": 45,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===221),
    "unitPrice": 2200000,
    "unitInStock": 0
  },
  {
    "id": 222,
    "productId": 45,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===222),
    "unitPrice": 2210000,
    "unitInStock": 10
  },
  {
    "id": 223,
    "productId": 45,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===223),
    "unitPrice": 2220000,
    "unitInStock": 20
  },
  {
    "id": 224,
    "productId": 45,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===224),
    "unitPrice": 2230000,
    "unitInStock": 30
  },
  {
    "id": 225,
    "productId": 45,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===225),
    "unitPrice": 2240000,
    "unitInStock": 15
  },
  {
    "id": 226,
    "productId": 46,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===226),
    "unitPrice": 2000000,
    "unitInStock": 10
  },
  {
    "id": 227,
    "productId": 46,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===227),
    "unitPrice": 2010000,
    "unitInStock": 10
  },
  {
    "id": 228,
    "productId": 46,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===228),
    "unitPrice": 2020000,
    "unitInStock": 0
  },
  {
    "id": 229,
    "productId": 46,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===229),
    "unitPrice": 2030000,
    "unitInStock": 30
  },
  {
    "id": 230,
    "productId": 46,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===230),
    "unitPrice": 2040000,
    "unitInStock": 20
  },
  {
    "id": 231,
    "productId": 47,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===231),
    "unitPrice": 2000000,
    "unitInStock": 10
  },
  {
    "id": 232,
    "productId": 47,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===232),
    "unitPrice": 2010000,
    "unitInStock": 10
  },
  {
    "id": 233,
    "productId": 47,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===233),
    "unitPrice": 2020000,
    "unitInStock": 0
  },
  {
    "id": 234,
    "productId": 47,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===234),
    "unitPrice": 2030000,
    "unitInStock": 30
  },
  {
    "id": 235,
    "productId": 47,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===235),
    "unitPrice": 2040000,
    "unitInStock": 20
  },
  {
    "id": 236,
    "productId": 48,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===236),
    "unitPrice": 2000000,
    "unitInStock": 0
  },
  {
    "id": 237,
    "productId": 48,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===237),
    "unitPrice": 2010000,
    "unitInStock": 10
  },
  {
    "id": 238,
    "productId": 48,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===238),
    "unitPrice": 2020000,
    "unitInStock": 20
  },
  {
    "id": 239,
    "productId": 48,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===239),
    "unitPrice": 2030000,
    "unitInStock": 30
  },
  {
    "id": 240,
    "productId": 48,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===240),
    "unitPrice": 2040000,
    "unitInStock": 15
  },
  {
    "id": 241,
    "productId": 49,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===241),
    "unitPrice": 2500000,
    "unitInStock": 0
  },
  {
    "id": 242,
    "productId": 49,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===242),
    "unitPrice": 2510000,
    "unitInStock": 10
  },
  {
    "id": 243,
    "productId": 49,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===243),
    "unitPrice": 2520000,
    "unitInStock": 20
  },
  {
    "id": 244,
    "productId": 49,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===244),
    "unitPrice": 2530000,
    "unitInStock": 30
  },
  {
    "id": 245,
    "productId": 49,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===245),
    "unitPrice": 2540000,
    "unitInStock": 15
  },
  {
    "id": 246,
    "productId": 50,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===246),
    "unitPrice": 2500000,
    "unitInStock": 0
  },
  {
    "id": 247,
    "productId": 50,
    "size": 40,
    "image": productImages.filter(image => image.productDetailId ===247),
    "unitPrice": 2510000,
    "unitInStock": 10
  },
  {
    "id": 248,
    "productId": 50,
    "size": 41,
    "image": productImages.filter(image => image.productDetailId ===248),
    "unitPrice": 2520000,
    "unitInStock": 20
  },
  {
    "id": 249,
    "productId": 50,
    "size": 42,
    "image": productImages.filter(image => image.productDetailId ===249),
    "unitPrice": 2530000,
    "unitInStock": 30
  },
  {
    "id": 250,
    "productId": 50,
    "size": 43,
    "image": productImages.filter(image => image.productDetailId ===250),
    "unitPrice": 2540000,
    "unitInStock": 15
  },
  {
    "id": 251,
    "productId": 51,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===251),
    "unitPrice": 3500000,
    "unitInStock": 10
  },
  {
    "id": 252,
    "productId": 51,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===252),
    "unitPrice": 3510000,
    "unitInStock": 0
  },
  {
    "id": 253,
    "productId": 51,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===253),
    "unitPrice": 3520000,
    "unitInStock": 15
  },
  {
    "id": 254,
    "productId": 51,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===254),
    "unitPrice": 3530000,
    "unitInStock": 30
  },
  {
    "id": 255,
    "productId": 51,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===255),
    "unitPrice": 3540000,
    "unitInStock": 15
  },
  {
    "id": 256,
    "productId": 52,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===256),
    "unitPrice": 3500000,
    "unitInStock": 10
  },
  {
    "id": 257,
    "productId": 52,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===257),
    "unitPrice": 3510000,
    "unitInStock": 0
  },
  {
    "id": 258,
    "productId": 52,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===258),
    "unitPrice": 3520000,
    "unitInStock": 15
  },
  {
    "id": 259,
    "productId": 52,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===259),
    "unitPrice": 3530000,
    "unitInStock": 30
  },
  {
    "id": 260,
    "productId": 52,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===260),
    "unitPrice": 3540000,
    "unitInStock": 15
  },
  {
    "id": 261,
    "productId": 53,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===261),
    "unitPrice": 3500000,
    "unitInStock": 10
  },
  {
    "id": 262,
    "productId": 53,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===262),
    "unitPrice": 3510000,
    "unitInStock": 0
  },
  {
    "id": 263,
    "productId": 53,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===263),
    "unitPrice": 3520000,
    "unitInStock": 15
  },
  {
    "id": 264,
    "productId": 53,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===264),
    "unitPrice": 3530000,
    "unitInStock": 30
  },
  {
    "id": 265,
    "productId": 53,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===265),
    "unitPrice": 3540000,
    "unitInStock": 15
  },
  {
    "id": 266,
    "productId": 54,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===266),
    "unitPrice": 3500000,
    "unitInStock": 10
  },
  {
    "id": 267,
    "productId": 54,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===267),
    "unitPrice": 3530000,
    "unitInStock": 0
  },
  {
    "id": 268,
    "productId": 54,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===268),
    "unitPrice": 3560000,
    "unitInStock": 15
  },
  {
    "id": 269,
    "productId": 54,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===269),
    "unitPrice": 3590000,
    "unitInStock": 30
  },
  {
    "id": 270,
    "productId": 54,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===270),
    "unitPrice": 3620000,
    "unitInStock": 15
  },
  {
    "id": 271,
    "productId": 55,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===271),
    "unitPrice": 3500000,
    "unitInStock": 10
  },
  {
    "id": 272,
    "productId": 55,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===272),
    "unitPrice": 3530000,
    "unitInStock": 0
  },
  {
    "id": 273,
    "productId": 55,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===273),
    "unitPrice": 3560000,
    "unitInStock": 15
  },
  {
    "id": 274,
    "productId": 55,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===274),
    "unitPrice": 3590000,
    "unitInStock": 30
  },
  {
    "id": 275,
    "productId": 55,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===275),
    "unitPrice": 3620000,
    "unitInStock": 15
  },
  {
    "id": 276,
    "productId": 56,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===276),
    "unitPrice": 3500000,
    "unitInStock": 10
  },
  {
    "id": 277,
    "productId": 56,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===277),
    "unitPrice": 3530000,
    "unitInStock": 0
  },
  {
    "id": 278,
    "productId": 56,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===278),
    "unitPrice": 3560000,
    "unitInStock": 15
  },
  {
    "id": 279,
    "productId": 56,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===279),
    "unitPrice": 3590000,
    "unitInStock": 30
  },
  {
    "id": 280,
    "productId": 56,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===280),
    "unitPrice": 3620000,
    "unitInStock": 15
  },
  {
    "id": 281,
    "productId": 57,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===281),
    "unitPrice": 3500000,
    "unitInStock": 10
  },
  {
    "id": 282,
    "productId": 57,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===282),
    "unitPrice": 3530000,
    "unitInStock": 0
  },
  {
    "id": 283,
    "productId": 57,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===283),
    "unitPrice": 3560000,
    "unitInStock": 15
  },
  {
    "id": 284,
    "productId": 57,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===284),
    "unitPrice": 3590000,
    "unitInStock": 30
  },
  {
    "id": 285,
    "productId": 57,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===285),
    "unitPrice": 3620000,
    "unitInStock": 15
  },
  {
    "id": 286,
    "productId": 58,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===286),
    "unitPrice": 3500000,
    "unitInStock": 10
  },
  {
    "id": 287,
    "productId": 58,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===287),
    "unitPrice": 3530000,
    "unitInStock": 0
  },
  {
    "id": 288,
    "productId": 58,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===288),
    "unitPrice": 3560000,
    "unitInStock": 15
  },
  {
    "id": 289,
    "productId": 58,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===289),
    "unitPrice": 3590000,
    "unitInStock": 30
  },
  {
    "id": 290,
    "productId": 58,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===290),
    "unitPrice": 3620000,
    "unitInStock": 15
  },
  {
    "id": 291,
    "productId": 59,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===291),
    "unitPrice": 3500000,
    "unitInStock": 10
  },
  {
    "id": 292,
    "productId": 59,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===292),
    "unitPrice": 3530000,
    "unitInStock": 0
  },
  {
    "id": 293,
    "productId": 59,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===293),
    "unitPrice": 3560000,
    "unitInStock": 15
  },
  {
    "id": 294,
    "productId": 59,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===294),
    "unitPrice": 3590000,
    "unitInStock": 30
  },
  {
    "id": 295,
    "productId": 59,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===295),
    "unitPrice": 3620000,
    "unitInStock": 15
  },
  {
    "id": 296,
    "productId": 60,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===296),
    "unitPrice": 520000,
    "unitInStock": 0
  },
  {
    "id": 297,
    "productId": 60,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===297),
    "unitPrice": 550000,
    "unitInStock": 10
  },
  {
    "id": 298,
    "productId": 60,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===298),
    "unitPrice": 580000,
    "unitInStock": 20
  },
  {
    "id": 299,
    "productId": 60,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===299),
    "unitPrice": 610000,
    "unitInStock": 30
  },
  {
    "id": 300,
    "productId": 60,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===300),
    "unitPrice": 640000,
    "unitInStock": 15
  },
  {
    "id": 301,
    "productId": 61,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===301),
    "unitPrice": 520000,
    "unitInStock": 0
  },
  {
    "id": 302,
    "productId": 61,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===302),
    "unitPrice": 540000,
    "unitInStock": 10
  },
  {
    "id": 303,
    "productId": 61,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===303),
    "unitPrice": 560000,
    "unitInStock": 20
  },
  {
    "id": 304,
    "productId": 61,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===304),
    "unitPrice": 580000,
    "unitInStock": 30
  },
  {
    "id": 305,
    "productId": 61,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===305),
    "unitPrice": 600000,
    "unitInStock": 15
  },
  {
    "id": 306,
    "productId": 62,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===306),
    "unitPrice": 520000,
    "unitInStock": 0
  },
  {
    "id": 307,
    "productId": 62,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===307),
    "unitPrice": 540000,
    "unitInStock": 10
  },
  {
    "id": 308,
    "productId": 62,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===308),
    "unitPrice": 560000,
    "unitInStock": 20
  },
  {
    "id": 309,
    "productId": 62,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===309),
    "unitPrice": 580000,
    "unitInStock": 30
  },
  {
    "id": 310,
    "productId": 62,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===310),
    "unitPrice": 600000,
    "unitInStock": 15
  },
  {
    "id": 311,
    "productId": 63,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===311),
    "unitPrice": 539000,
    "unitInStock": 10
  },
  {
    "id": 312,
    "productId": 63,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===312),
    "unitPrice": 559000,
    "unitInStock": 0
  },
  {
    "id": 313,
    "productId": 63,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===313),
    "unitPrice": 579000,
    "unitInStock": 15
  },
  {
    "id": 314,
    "productId": 63,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===314),
    "unitPrice": 599000,
    "unitInStock": 30
  },
  {
    "id": 315,
    "productId": 63,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===315),
    "unitPrice": 619000,
    "unitInStock": 15
  },
  {
    "id": 316,
    "productId": 64,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===316),
    "unitPrice": 539000,
    "unitInStock": 10
  },
  {
    "id": 317,
    "productId": 64,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===317),
    "unitPrice": 559000,
    "unitInStock": 0
  },
  {
    "id": 318,
    "productId": 64,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===318),
    "unitPrice": 579000,
    "unitInStock": 15
  },
  {
    "id": 319,
    "productId": 64,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===319),
    "unitPrice": 599000,
    "unitInStock": 30
  },
  {
    "id": 320,
    "productId": 64,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===320),
    "unitPrice": 619000,
    "unitInStock": 15
  },
  {
    "id": 321,
    "productId": 65,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===321),
    "unitPrice": 539000,
    "unitInStock": 10
  },
  {
    "id": 322,
    "productId": 65,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===322),
    "unitPrice": 559000,
    "unitInStock": 0
  },
  {
    "id": 323,
    "productId": 65,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===323),
    "unitPrice": 579000,
    "unitInStock": 15
  },
  {
    "id": 324,
    "productId": 65,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===324),
    "unitPrice": 599000,
    "unitInStock": 30
  },
  {
    "id": 325,
    "productId": 65,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===325),
    "unitPrice": 619000,
    "unitInStock": 15
  },
  {
    "id": 326,
    "productId": 66,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===326),
    "unitPrice": 539000,
    "unitInStock": 10
  },
  {
    "id": 327,
    "productId": 66,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===327),
    "unitPrice": 559000,
    "unitInStock": 10
  },
  {
    "id": 328,
    "productId": 66,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===328),
    "unitPrice": 579000,
    "unitInStock": 0
  },
  {
    "id": 329,
    "productId": 66,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===329),
    "unitPrice": 599000,
    "unitInStock": 30
  },
  {
    "id": 330,
    "productId": 66,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===330),
    "unitPrice": 619000,
    "unitInStock": 20
  },
  {
    "id": 331,
    "productId": 67,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===331),
    "unitPrice": 430000,
    "unitInStock": 0
  },
  {
    "id": 332,
    "productId": 67,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===332),
    "unitPrice": 450000,
    "unitInStock": 10
  },
  {
    "id": 333,
    "productId": 67,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===333),
    "unitPrice": 470000,
    "unitInStock": 20
  },
  {
    "id": 334,
    "productId": 67,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===334),
    "unitPrice": 490000,
    "unitInStock": 30
  },
  {
    "id": 335,
    "productId": 67,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===335),
    "unitPrice": 510000,
    "unitInStock": 15
  },
  {
    "id": 336,
    "productId": 68,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===336),
    "unitPrice": 430000,
    "unitInStock": 0
  },
  {
    "id": 337,
    "productId": 68,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===337),
    "unitPrice": 450000,
    "unitInStock": 10
  },
  {
    "id": 338,
    "productId": 68,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===338),
    "unitPrice": 470000,
    "unitInStock": 20
  },
  {
    "id": 339,
    "productId": 68,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===339),
    "unitPrice": 490000,
    "unitInStock": 30
  },
  {
    "id": 340,
    "productId": 68,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===340),
    "unitPrice": 510000,
    "unitInStock": 15
  },
  {
    "id": 341,
    "productId": 69,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===341),
    "unitPrice": 500000,
    "unitInStock": 10
  },
  {
    "id": 342,
    "productId": 69,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===342),
    "unitPrice": 520000,
    "unitInStock": 10
  },
  {
    "id": 343,
    "productId": 69,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===343),
    "unitPrice": 540000,
    "unitInStock": 0
  },
  {
    "id": 344,
    "productId": 69,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===344),
    "unitPrice": 560000,
    "unitInStock": 30
  },
  {
    "id": 345,
    "productId": 69,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===345),
    "unitPrice": 580000,
    "unitInStock": 20
  },
  {
    "id": 346,
    "productId": 70,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===346),
    "unitPrice": 500000,
    "unitInStock": 0
  },
  {
    "id": 347,
    "productId": 70,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===347),
    "unitPrice": 520000,
    "unitInStock": 10
  },
  {
    "id": 348,
    "productId": 70,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===348),
    "unitPrice": 540000,
    "unitInStock": 20
  },
  {
    "id": 349,
    "productId": 70,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===349),
    "unitPrice": 560000,
    "unitInStock": 30
  },
  {
    "id": 350,
    "productId": 70,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===350),
    "unitPrice": 580000,
    "unitInStock": 15
  },
  {
    "id": 351,
    "productId": 71,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===351),
    "unitPrice": 863000,
    "unitInStock": 0
  },
  {
    "id": 352,
    "productId": 71,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===352),
    "unitPrice": 883000,
    "unitInStock": 10
  },
  {
    "id": 353,
    "productId": 71,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===353),
    "unitPrice": 903000,
    "unitInStock": 20
  },
  {
    "id": 354,
    "productId": 71,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===354),
    "unitPrice": 923000,
    "unitInStock": 30
  },
  {
    "id": 355,
    "productId": 71,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===355),
    "unitPrice": 943000,
    "unitInStock": 15
  },
  {
    "id": 356,
    "productId": 72,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===356),
    "unitPrice": 863000,
    "unitInStock": 10
  },
  {
    "id": 357,
    "productId": 72,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===357),
    "unitPrice": 883000,
    "unitInStock": 10
  },
  {
    "id": 358,
    "productId": 72,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===358),
    "unitPrice": 903000,
    "unitInStock": 0
  },
  {
    "id": 359,
    "productId": 72,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===359),
    "unitPrice": 923000,
    "unitInStock": 30
  },
  {
    "id": 360,
    "productId": 72,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===360),
    "unitPrice": 943000,
    "unitInStock": 20
  },
  {
    "id": 361,
    "productId": 73,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===361),
    "unitPrice": 388000,
    "unitInStock": 0
  },
  {
    "id": 362,
    "productId": 73,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===362),
    "unitPrice": 408000,
    "unitInStock": 10
  },
  {
    "id": 363,
    "productId": 73,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===363),
    "unitPrice": 428000,
    "unitInStock": 20
  },
  {
    "id": 364,
    "productId": 73,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===364),
    "unitPrice": 448000,
    "unitInStock": 30
  },
  {
    "id": 365,
    "productId": 73,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===365),
    "unitPrice": 468000,
    "unitInStock": 15
  },
  {
    "id": 366,
    "productId": 74,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===366),
    "unitPrice": 400000,
    "unitInStock": 10
  },
  {
    "id": 367,
    "productId": 74,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===367),
    "unitPrice": 420000,
    "unitInStock": 10
  },
  {
    "id": 368,
    "productId": 74,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===368),
    "unitPrice": 440000,
    "unitInStock": 0
  },
  {
    "id": 369,
    "productId": 74,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===369),
    "unitPrice": 460000,
    "unitInStock": 30
  },
  {
    "id": 370,
    "productId": 74,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===370),
    "unitPrice": 480000,
    "unitInStock": 20
  },
  {
    "id": 371,
    "productId": 75,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===371),
    "unitPrice": 400000,
    "unitInStock": 0
  },
  {
    "id": 372,
    "productId": 75,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===372),
    "unitPrice": 420000,
    "unitInStock": 10
  },
  {
    "id": 373,
    "productId": 75,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===373),
    "unitPrice": 440000,
    "unitInStock": 20
  },
  {
    "id": 374,
    "productId": 75,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===374),
    "unitPrice": 460000,
    "unitInStock": 30
  },
  {
    "id": 375,
    "productId": 75,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===375),
    "unitPrice": 480000,
    "unitInStock": 15
  },
  {
    "id": 376,
    "productId": 76,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===376),
    "unitPrice": 900000,
    "unitInStock": 0
  },
  {
    "id": 377,
    "productId": 76,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===377),
    "unitPrice": 920000,
    "unitInStock": 10
  },
  {
    "id": 378,
    "productId": 76,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===378),
    "unitPrice": 940000,
    "unitInStock": 20
  },
  {
    "id": 379,
    "productId": 76,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===379),
    "unitPrice": 960000,
    "unitInStock": 30
  },
  {
    "id": 380,
    "productId": 76,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===380),
    "unitPrice": 980000,
    "unitInStock": 15
  },
  {
    "id": 381,
    "productId": 77,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===381),
    "unitPrice": 900000,
    "unitInStock": 0
  },
  {
    "id": 382,
    "productId": 77,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===382),
    "unitPrice": 920000,
    "unitInStock": 10
  },
  {
    "id": 383,
    "productId": 77,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===383),
    "unitPrice": 940000,
    "unitInStock": 20
  },
  {
    "id": 384,
    "productId": 77,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===384),
    "unitPrice": 960000,
    "unitInStock": 30
  },
  {
    "id": 385,
    "productId": 77,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===385),
    "unitPrice": 980000,
    "unitInStock": 15
  },
  {
    "id": 386,
    "productId": 78,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===386),
    "unitPrice": 900000,
    "unitInStock": 10
  },
  {
    "id": 387,
    "productId": 78,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===387),
    "unitPrice": 920000,
    "unitInStock": 10
  },
  {
    "id": 388,
    "productId": 78,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===388),
    "unitPrice": 940000,
    "unitInStock": 0
  },
  {
    "id": 389,
    "productId": 78,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===389),
    "unitPrice": 960000,
    "unitInStock": 30
  },
  {
    "id": 390,
    "productId": 78,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===390),
    "unitPrice": 980000,
    "unitInStock": 20
  },
  {
    "id": 391,
    "productId": 79,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===391),
    "unitPrice": 1200000,
    "unitInStock": 10
  },
  {
    "id": 392,
    "productId": 79,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===392),
    "unitPrice": 1220000,
    "unitInStock": 10
  },
  {
    "id": 393,
    "productId": 79,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===393),
    "unitPrice": 1240000,
    "unitInStock": 0
  },
  {
    "id": 394,
    "productId": 79,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===394),
    "unitPrice": 1260000,
    "unitInStock": 30
  },
  {
    "id": 395,
    "productId": 79,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===395),
    "unitPrice": 1280000,
    "unitInStock": 20
  },
  {
    "id": 396,
    "productId": 80,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===396),
    "unitPrice": 800000,
    "unitInStock": 10
  },
  {
    "id": 397,
    "productId": 80,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===397),
    "unitPrice": 820000,
    "unitInStock": 0
  },
  {
    "id": 398,
    "productId": 80,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===398),
    "unitPrice": 840000,
    "unitInStock": 15
  },
  {
    "id": 399,
    "productId": 80,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===399),
    "unitPrice": 860000,
    "unitInStock": 30
  },
  {
    "id": 400,
    "productId": 80,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===400),
    "unitPrice": 880000,
    "unitInStock": 15
  },
  {
    "id": 401,
    "productId": 81,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===401),
    "unitPrice": 800000,
    "unitInStock": 0
  },
  {
    "id": 402,
    "productId": 81,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===402),
    "unitPrice": 820000,
    "unitInStock": 10
  },
  {
    "id": 403,
    "productId": 81,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===403),
    "unitPrice": 840000,
    "unitInStock": 20
  },
  {
    "id": 404,
    "productId": 81,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===404),
    "unitPrice": 860000,
    "unitInStock": 30
  },
  {
    "id": 405,
    "productId": 81,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===405),
    "unitPrice": 880000,
    "unitInStock": 15
  },
  {
    "id": 406,
    "productId": 82,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===406),
    "unitPrice": 800000,
    "unitInStock": 0
  },
  {
    "id": 407,
    "productId": 82,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===407),
    "unitPrice": 840000,
    "unitInStock": 10
  },
  {
    "id": 408,
    "productId": 82,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===408),
    "unitPrice": 880000,
    "unitInStock": 20
  },
  {
    "id": 409,
    "productId": 82,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===409),
    "unitPrice": 920000,
    "unitInStock": 30
  },
  {
    "id": 410,
    "productId": 82,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===410),
    "unitPrice": 960000,
    "unitInStock": 15
  },
  {
    "id": 411,
    "productId": 83,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===411),
    "unitPrice": 800000,
    "unitInStock": 0
  },
  {
    "id": 412,
    "productId": 83,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===412),
    "unitPrice": 840000,
    "unitInStock": 10
  },
  {
    "id": 413,
    "productId": 83,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===413),
    "unitPrice": 880000,
    "unitInStock": 20
  },
  {
    "id": 414,
    "productId": 83,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===414),
    "unitPrice": 920000,
    "unitInStock": 30
  },
  {
    "id": 415,
    "productId": 83,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===415),
    "unitPrice": 960000,
    "unitInStock": 15
  },
  {
    "id": 416,
    "productId": 84,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===416),
    "unitPrice": 670000,
    "unitInStock": 0
  },
  {
    "id": 417,
    "productId": 84,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===417),
    "unitPrice": 710000,
    "unitInStock": 10
  },
  {
    "id": 418,
    "productId": 84,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===418),
    "unitPrice": 750000,
    "unitInStock": 20
  },
  {
    "id": 419,
    "productId": 84,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===419),
    "unitPrice": 790000,
    "unitInStock": 30
  },
  {
    "id": 420,
    "productId": 84,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===420),
    "unitPrice": 830000,
    "unitInStock": 15
  },
  {
    "id": 421,
    "productId": 85,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===421),
    "unitPrice": 670000,
    "unitInStock": 0
  },
  {
    "id": 422,
    "productId": 85,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===422),
    "unitPrice": 710000,
    "unitInStock": 10
  },
  {
    "id": 423,
    "productId": 85,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===423),
    "unitPrice": 750000,
    "unitInStock": 20
  },
  {
    "id": 424,
    "productId": 85,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===424),
    "unitPrice": 790000,
    "unitInStock": 30
  },
  {
    "id": 425,
    "productId": 85,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===425),
    "unitPrice": 830000,
    "unitInStock": 15
  },
  {
    "id": 426,
    "productId": 86,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===426),
    "unitPrice": 670000,
    "unitInStock": 0
  },
  {
    "id": 427,
    "productId": 86,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===427),
    "unitPrice": 710000,
    "unitInStock": 10
  },
  {
    "id": 428,
    "productId": 86,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===428),
    "unitPrice": 750000,
    "unitInStock": 20
  },
  {
    "id": 429,
    "productId": 86,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===429),
    "unitPrice": 790000,
    "unitInStock": 30
  },
  {
    "id": 430,
    "productId": 86,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===430),
    "unitPrice": 830000,
    "unitInStock": 15
  },
  {
    "id": 431,
    "productId": 87,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===431),
    "unitPrice": 2000000,
    "unitInStock": 10
  },
  {
    "id": 432,
    "productId": 87,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===432),
    "unitPrice": 2040000,
    "unitInStock": 10
  },
  {
    "id": 433,
    "productId": 87,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===433),
    "unitPrice": 2080000,
    "unitInStock": 0
  },
  {
    "id": 434,
    "productId": 87,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===434),
    "unitPrice": 2120000,
    "unitInStock": 30
  },
  {
    "id": 435,
    "productId": 87,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===435),
    "unitPrice": 2160000,
    "unitInStock": 20
  },
  {
    "id": 436,
    "productId": 88,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===436),
    "unitPrice": 2000000,
    "unitInStock": 0
  },
  {
    "id": 437,
    "productId": 88,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===437),
    "unitPrice": 2040000,
    "unitInStock": 10
  },
  {
    "id": 438,
    "productId": 88,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===438),
    "unitPrice": 2080000,
    "unitInStock": 20
  },
  {
    "id": 439,
    "productId": 88,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===439),
    "unitPrice": 2120000,
    "unitInStock": 30
  },
  {
    "id": 440,
    "productId": 88,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===440),
    "unitPrice": 2160000,
    "unitInStock": 15
  },
  {
    "id": 441,
    "productId": 89,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===441),
    "unitPrice": 2000000,
    "unitInStock": 10
  },
  {
    "id": 442,
    "productId": 89,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===442),
    "unitPrice": 2040000,
    "unitInStock": 10
  },
  {
    "id": 443,
    "productId": 89,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===443),
    "unitPrice": 2080000,
    "unitInStock": 0
  },
  {
    "id": 444,
    "productId": 89,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===444),
    "unitPrice": 2120000,
    "unitInStock": 30
  },
  {
    "id": 445,
    "productId": 89,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===445),
    "unitPrice": 2160000,
    "unitInStock": 20
  },
  {
    "id": 446,
    "productId": 90,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===446),
    "unitPrice": 2000000,
    "unitInStock": 0
  },
  {
    "id": 447,
    "productId": 90,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===447),
    "unitPrice": 2040000,
    "unitInStock": 10
  },
  {
    "id": 448,
    "productId": 90,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===448),
    "unitPrice": 2080000,
    "unitInStock": 20
  },
  {
    "id": 449,
    "productId": 90,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===449),
    "unitPrice": 2120000,
    "unitInStock": 30
  },
  {
    "id": 450,
    "productId": 90,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===450),
    "unitPrice": 2160000,
    "unitInStock": 15
  },
  {
    "id": 451,
    "productId": 91,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===451),
    "unitPrice": 1500000,
    "unitInStock": 0
  },
  {
    "id": 452,
    "productId": 91,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===452),
    "unitPrice": 1540000,
    "unitInStock": 10
  },
  {
    "id": 453,
    "productId": 91,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===453),
    "unitPrice": 1580000,
    "unitInStock": 20
  },
  {
    "id": 454,
    "productId": 91,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===454),
    "unitPrice": 1620000,
    "unitInStock": 30
  },
  {
    "id": 455,
    "productId": 91,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===455),
    "unitPrice": 1660000,
    "unitInStock": 15
  },
  {
    "id": 456,
    "productId": 92,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===456),
    "unitPrice": 1500000,
    "unitInStock": 0
  },
  {
    "id": 457,
    "productId": 92,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===457),
    "unitPrice": 1540000,
    "unitInStock": 10
  },
  {
    "id": 458,
    "productId": 92,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===458),
    "unitPrice": 1580000,
    "unitInStock": 20
  },
  {
    "id": 459,
    "productId": 92,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===459),
    "unitPrice": 1620000,
    "unitInStock": 30
  },
  {
    "id": 460,
    "productId": 92,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===460),
    "unitPrice": 1660000,
    "unitInStock": 15
  },
  {
    "id": 461,
    "productId": 93,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===461),
    "unitPrice": 1500000,
    "unitInStock": 0
  },
  {
    "id": 462,
    "productId": 93,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===462),
    "unitPrice": 1540000,
    "unitInStock": 10
  },
  {
    "id": 463,
    "productId": 93,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===463),
    "unitPrice": 1580000,
    "unitInStock": 20
  },
  {
    "id": 464,
    "productId": 93,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===464),
    "unitPrice": 1620000,
    "unitInStock": 30
  },
  {
    "id": 465,
    "productId": 93,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===465),
    "unitPrice": 1660000,
    "unitInStock": 15
  },
  {
    "id": 466,
    "productId": 94,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===466),
    "unitPrice": 3000000,
    "unitInStock": 0
  },
  {
    "id": 467,
    "productId": 94,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===467),
    "unitPrice": 3040000,
    "unitInStock": 10
  },
  {
    "id": 468,
    "productId": 94,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===468),
    "unitPrice": 3080000,
    "unitInStock": 20
  },
  {
    "id": 469,
    "productId": 94,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===469),
    "unitPrice": 3120000,
    "unitInStock": 30
  },
  {
    "id": 470,
    "productId": 95,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===470),
    "unitPrice": 2500000,
    "unitInStock": 15
  },
  {
    "id": 471,
    "productId": 95,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===471),
    "unitPrice": 2540000,
    "unitInStock": 0
  },
  {
    "id": 472,
    "productId": 95,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===472),
    "unitPrice": 2580000,
    "unitInStock": 10
  },
  {
    "id": 473,
    "productId": 95,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===473),
    "unitPrice": 2620000,
    "unitInStock": 20
  },
  {
    "id": 474,
    "productId": 95,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===474),
    "unitPrice": 2660000,
    "unitInStock": 30
  },
  {
    "id": 475,
    "productId": 95,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===475),
    "unitPrice": 2700000,
    "unitInStock": 15
  },
  {
    "id": 476,
    "productId": 96,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===476),
    "unitPrice": 2500000,
    "unitInStock": 10
  },
  {
    "id": 477,
    "productId": 96,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===477),
    "unitPrice": 2530000,
    "unitInStock": 10
  },
  {
    "id": 478,
    "productId": 96,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===478),
    "unitPrice": 2560000,
    "unitInStock": 0
  },
  {
    "id": 479,
    "productId": 96,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===479),
    "unitPrice": 2590000,
    "unitInStock": 30
  },
  {
    "id": 480,
    "productId": 96,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===480),
    "unitPrice": 2620000,
    "unitInStock": 20
  },
  {
    "id": 481,
    "productId": 97,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===481),
    "unitPrice": 600000,
    "unitInStock": 10
  },
  {
    "id": 482,
    "productId": 97,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===482),
    "unitPrice": 630000,
    "unitInStock": 10
  },
  {
    "id": 483,
    "productId": 97,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===483),
    "unitPrice": 660000,
    "unitInStock": 0
  },
  {
    "id": 484,
    "productId": 97,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===484),
    "unitPrice": 690000,
    "unitInStock": 30
  },
  {
    "id": 485,
    "productId": 97,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===485),
    "unitPrice": 720000,
    "unitInStock": 20
  },
  {
    "id": 486,
    "productId": 98,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===486),
    "unitPrice": 600000,
    "unitInStock": 0
  },
  {
    "id": 487,
    "productId": 98,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===487),
    "unitPrice": 630000,
    "unitInStock": 10
  },
  {
    "id": 488,
    "productId": 98,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===488),
    "unitPrice": 660000,
    "unitInStock": 20
  },
  {
    "id": 489,
    "productId": 98,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===489),
    "unitPrice": 690000,
    "unitInStock": 30
  },
  {
    "id": 490,
    "productId": 98,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===490),
    "unitPrice": 720000,
    "unitInStock": 15
  },
  {
    "id": 491,
    "productId": 99,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===491),
    "unitPrice": 300000,
    "unitInStock": 10
  },
  {
    "id": 492,
    "productId": 99,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===492),
    "unitPrice": 330000,
    "unitInStock": 10
  },
  {
    "id": 493,
    "productId": 99,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===493),
    "unitPrice": 360000,
    "unitInStock": 0
  },
  {
    "id": 494,
    "productId": 99,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===494),
    "unitPrice": 390000,
    "unitInStock": 30
  },
  {
    "id": 495,
    "productId": 99,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===495),
    "unitPrice": 420000,
    "unitInStock": 20
  },
  {
    "id": 496,
    "productId": 100,
    "size": 35,
    "image": productImages.filter(image => image.productDetailId ===496),
    "unitPrice": 300000,
    "unitInStock": 10
  },
  {
    "id": 497,
    "productId": 100,
    "size": 36,
    "image": productImages.filter(image => image.productDetailId ===497),
    "unitPrice": 305000,
    "unitInStock": 10
  },
  {
    "id": 498,
    "productId": 100,
    "size": 37,
    "image": productImages.filter(image => image.productDetailId ===498),
    "unitPrice": 310000,
    "unitInStock": 0
  },
  {
    "id": 499,
    "productId": 100,
    "size": 38,
    "image": productImages.filter(image => image.productDetailId ===499),
    "unitPrice": 315000,
    "unitInStock": 30
  },
  {
    "id": 500,
    "productId": 100,
    "size": 39,
    "image": productImages.filter(image => image.productDetailId ===500),
    "unitPrice": 320000,
    "unitInStock": 20
  }
]
