export interface IHeaderNotifyItem {
  photo: string;
  title: string;
  description: string;
  isRead: boolean;
}

export interface IFakeStoreProducts {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}

export interface IRating {
  rate: number;
  count: number;
}

export interface IProduct {
  id: number;
  image: string;
  subPhotos: string[];
  title: string;
  discount: number;
  category: string;
  price: number;
  rating: IRating;
  totalSold: number;
  limit: number;
  soldPerMonth: number;
  liked: boolean;
  location: string;
  createdAt: Date;
}

export interface ICartItem extends IProduct {
  quantities: number;
}
