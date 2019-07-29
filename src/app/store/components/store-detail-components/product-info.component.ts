import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';
import { product_info } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-product-info',
  template: `
  <div class="product-info-container" *ngIf="productInfo">
    <a href="#"><small class="text-grey">{{ productInfo.brand_name }}</small></a>
    <h1 class="product-name">{{ productInfo.name }}</h1>
    <div class="star-grade">
      <span class="star"></span>
      <span class="star"></span>
      <span class="star"></span>
      <span class="star"></span>
      <span class="star half"></span>
        {{ productInfo.review.length }}개 리뷰
    </div>
    <div class="product-price">
      <del class="original-price">{{ originalPrice }}원</del>
      <mark class="discount-rate">{{ productInfo.discount_rate }}<span>%</span></mark>
      <mark class="price">{{ commonService.addComma(productInfo.price) }}<span>원</span></mark>
      <span class="sprite lowest"></span>
    </div>
    <p class="text-grey"><mark>{{ productInfo.price / 100 }}P</mark> 적립해드립니다.</p>
    <hr>
    <p class="normal-delivery">일반택배</p>
    <span class="sprite delivery"></span>
    <hr>
    <a href="#" class="goToShop"><span class="sprite"></span>{{ productInfo.brand_name }} 상품보기</a>
    </div>
  `,
  styleUrls: ['./product-info.scss']
})
export class ProductInfoComponent implements OnInit {

  @Input() productInfo: product_info;
  @Input() originalPrice: string;

  constructor(private commonService: CommonService) { }

  ngOnInit() {

  }

}
