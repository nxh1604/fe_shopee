export interface ICategory {
  id: string;
  category: string;
}

export interface IHeaderNotifyItem {
  photo: string;
  title: string;
  description: string;
  isRead: boolean;
}

export interface IProduct {
  id: string;
  photo: string;
  subPhotos: IProduct["photo"][];
  title: string;
  discount: number;
  categories: ICategory["category"][];
  price: number;
  rating: number;
  totalSold: number;
  limit: number;
  soldPerMonth: number;
  shop: string;
  liked: boolean;
  location: string;
  createdAt: Date;
}

export interface ICartItem extends IProduct {
  quantities: number;
}
