interface POOrderProps {
  id: number;
  po_number:string;
  po_vendor: string;
  po_ship_to: string;
  po_payment_due_date: string;
  po_payment_terms:string;
  po_date:string;
  // po_order_placed_with:string;
  // po_note:string;
  po_file:string;
  products:any[];
  po_status:number;
}

const purchaseOrders:Array<POOrderProps>= [
  {
  id: 1,
  po_number: "0101022023123",
  po_vendor: 'Vendor 1',
  po_ship_to: 'Warehouse 1',
  po_date: '14 Nov 2023',
  po_payment_due_date:'14 Nov 2023',
  po_file: 'file',
  po_status: 1,
  po_payment_terms:"Due on Receipt" ,
  products:[]
},
{
  id: 2,
  po_number: "12346",
  po_vendor: 'Vendor 2',
  po_ship_to: 'Warehouse 2',
  po_date: '14 Nov 2023',
  po_payment_due_date:'14 Nov 2023',
  po_file: 'file',
  po_status:0,
  po_payment_terms:"Net 45" ,
  products:[]
},
{
  id: 3,
  po_number: "12345",
  po_vendor: 'Vendor 3',
  po_ship_to: 'Warehouse 3',
  po_date: '14 Nov 2023',
  po_payment_due_date:'14 Nov 2023',
  po_file: 'file',
  po_status: 1,
  po_payment_terms:"Due on Receipt" ,
  products:[]
},
{
  id: 4,
  po_number: "12346",
  po_vendor:'Vendor 4',
  po_ship_to: 'Warehouse 4',
  po_date: '14 Nov 2023',
  po_payment_due_date:'14 Nov 2023',
  po_file: 'file',
  po_status:1,
  po_payment_terms:"Net 30",
  products:[]
},
{
  id: 5,
  po_number: "12345",
  po_vendor: 'Vendor 5',
  po_ship_to: 'Warehouse 5',
  po_date: '14 Nov 2023',
  po_payment_due_date:'14 Nov 2023',
  po_file: 'file',
  po_status: 1,
  po_payment_terms:"Due end of the month",
  products:[]
},
{
  id: 6,
  po_number: "12346",
  po_vendor: 'Vendor 6',
  po_ship_to: 'Warehouse 6',
  po_date: '14 Nov 2023',
  po_payment_due_date:'14 Nov 2023',
  po_file: 'file',
  po_status: 1,
  po_payment_terms:"Due on Receipt" ,
  products:[]
}]


export { purchaseOrders };
