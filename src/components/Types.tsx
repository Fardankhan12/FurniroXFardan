export interface ProductInterface {
 
  _id: string;
  productImage: string;
  title: string;
  description: string;
  discountedPrice?: number;
  price: number;
  productDetails?: string;
  bgbadge?: string;
  badge?: string;
  isNew? : boolean;
  dicountPercentage? : number
}