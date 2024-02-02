export interface ICartItem {
  imgSrc: string;
  combo: string;
  title: string;
  price: number;
}

export interface IHeaderNotifyItem {
  src: string;
  title: string;
  description: string;
  isRead: boolean;
}

export interface IProduct {
  id: number;
  src: string;
  title: string;
  discount: number;
  price: number;
  rating: number;
  sold: number;
  shop: string;
  location: string;
}
