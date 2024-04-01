interface VendorProps {
  v_id: number;
  v_description: string;
  v_name: string;
  v_status: number;
  v_address:string;
}

const vendorsList: Array<VendorProps> = [
  {
    v_id: 1,
    v_description: "description 1",
    v_address:"Address 1",
    v_name: "Connie Franco",
    v_status: 1,
  },
  {
    v_id: 2,
    v_description: "description 2",
    v_name: "Paul Reynolds",
    v_address:"Address 2",
    v_status: 0,
  },
  {
    v_id: 3,
    v_description: "description 3",
    v_name:"Michael Wallace",
    v_address:"Address 3",
    v_status: 1,
  },
  {
    v_id: 4,
    v_description: "description 4",
    v_name:"Ronald Patterson",
    v_address:"Address 4",
    v_status: 1,
  },
  {
    v_id: 5,
    v_description: "description 5",
    v_name:"Adella Perez",
    v_address:"Address 5",
    v_status: 1,
  }
];

export { vendorsList };
