import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { LineItem } from './LineItem';

export interface Order {
  id: string;
  number: string;
  reference_number: string;
  state: string;
  currency: string;
  store_id: number;
  item_count: number;
  confirmation_delivered: boolean;
  created_at: string;
  updated_at: string;
  user_id: number;
  email: string;
  completed_at: string;
  shipment_state: string;
  payment_state: string;
  order_status: string;
  special_instructions: string;
  approved_at: string;
  canceled_at: string;
  total: string;
  item_total: string;
  adjustment_total: string;
  shipment_total: string;
  tax_total: string;
  promo_total: string;
  additional_tax_total: string;
  included_tax_total: string;
  payment_total: string;
  // coupon: CouponAdjustment;
  // bill_address: Address;
  // ship_address: Address;
  line_items: LineItem[];
  // promotions: any[];
  // addon_service_line_items: any[];
  // shipments: any[];
  // payments: any[];
  // shipping_methods: any[];
  // shipping_rates: any[];
}

export interface EmptyOrder {}

// TODO 这里写方法？？

// TODO reducer 写成来
// slice能合并吗

const orderAdapter = createEntityAdapter<Order>({});

const orderSlice = createSlice({
  name: 'order',
  initialState: orderAdapter.getInitialState(),
  reducers: {
    orderAdded: orderAdapter.addOne,
    orderCreated: () => {},
  },
});

export const OrderCommands = orderSlice.actions;

export type OrderSlice = {
  [orderSlice.name]: ReturnType<(typeof orderSlice)['reducer']>;
};

export const orderSelectors = orderAdapter.getSelectors<OrderSlice>(
  (state) => state[orderSlice.name]
);
