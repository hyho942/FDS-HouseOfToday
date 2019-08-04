export interface Community {
  today_entry: todayEntry[],
  today_story: todayStory[],
  todaydeal: todayDeal[],
  today_picture: todayPicture[],
  best100_category_list: best100
}

export interface todayEntry {
  id: number,
  cover_image: string,
  title: string,
  author_profile: string,
  author: string,
  scrap_count: number,
  hit_count: number,
}

export interface todayStory {
  id: number,
  cover_image: string,
  title: string,
  author_profile: string,
  author: string,
  scrap_count: number,
  hit_count: number,
}

export interface todayDeal {
  id: number,
  brand_name: string,
  name: string,
  discount_rate: string,
  price: number,
  review_count: number,
  star_avg: string,
  thumnail_images: thumnailImage[]
}

export interface thumnailImage {
  id: number,
  image: string,
  product: number
}

export interface todayPicture {
  id: number,
  author: string,
  image: string,
  author_profile_image: string
}

export interface best100 {
  total ?
  light_homedeco ?
  daily_supplies ?
  fabric ?
  kitchenware ?
  home_appliances ?
  companion_animal ?
  furniture ?
}