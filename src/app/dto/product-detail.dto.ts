import {ProductImage} from "../model/product-image.model";
import {ProductDetail} from "../model/product-detail.model";
import {ProductService} from "../service/product.service";

export class ProductDetailDto {
  id: number
  productId: number
  name: string
  size: number
  image: ProductImage[]
  unitPrice: number
  unitInStock: number

  public static createFromEntity(entity: ProductDetail, productService: ProductService): ProductDetailDto {
    let dest = new ProductDetailDto()
    dest.id = entity.id
    dest.productId = entity.productId
    productService.getProduct(entity.productId).subscribe(product => {
      dest.name = product.name + ' (' + product.color + ') Kích thước ' + entity.size
    })
    dest.size = entity.size
    dest.image = entity.image
    dest.unitPrice = entity.unitPrice
    dest.unitInStock = entity.unitInStock
    return dest
  }


}
