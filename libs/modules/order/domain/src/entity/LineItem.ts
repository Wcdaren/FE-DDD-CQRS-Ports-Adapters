/**
 * id*	integer($int32)
quantity*	integer
price*	string
currency*	string
amount*	string
total*	string
is_free_item*	boolean
is_price_outdated*	boolean
is_region_outdated*	boolean
variant*	LineItemVariant{...}
lead_time*	integer($int32)
lead_time_presentation	string
adjustment_total*	string
= promo_total + addition_tax_total + cancellation_total

additional_tax_total*	string
additional tax applied upon this line item

promo_total*	string
amount of promotin applied upon this line item

manual_discount_total*	string
amount of manual discount of this line item

included_tax_total*	string
amount of tax, included in price, applied upon this line item

product_type	string
 */

export interface LineItem {
  id: string;
  quantity: number;
  price: string;
  currency: string;
  amount: string;
  total: string;
  is_free_item: boolean;
  is_price_outdated: boolean;
  is_region_outdated: boolean;
  lead_time: number;
  lead_time_presentation: string;
  adjustment_total: string;
  additional_tax_total: string;
  promo_total: string;
  manual_discount_total: string;
  included_tax_total: string;
  product_type?: string;
}
