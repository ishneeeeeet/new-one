interface VendorProps {
  po_number: string;
  po_vendor: string;
  po_warehouse: string;
  po_payment_due_date: string;
  po_payment_terms:string;
  po_date:string;
  po_order_placed_with:string;
  po_note:string;
  po_file:string;
  products:any[];
}

const po_details: VendorProps = {
  "po_number": "#12345",
  "po_vendor": "v2",
  "po_warehouse": "w1",
  "po_payment_terms": "Net 50",
  "po_payment_due_date": "2023-10-26",
  "po_date": "2023-10-26",
  "po_order_placed_with": "",
  "po_note": "",
  "po_file": "",
  "products": [
      {
          "id":"1",
          "p_id": "3",
          "p_quantity": 1,
          "p_unit": "Mtr",
          "p_purchase_price": 8,
          "p_total_amount": 8
      },
      {
          "id":"2",
          "p_id": "1",
          "p_unit": "Ltr",
          "p_quantity": 3,
          "p_purchase_price": 7,
          "p_total_amount": 21
      }
  ]
}
export { po_details };
