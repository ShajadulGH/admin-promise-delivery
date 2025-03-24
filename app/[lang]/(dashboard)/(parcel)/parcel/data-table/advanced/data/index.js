export const data = [
  {
    sl: 1,
    invoice: {
      id: "INV-24896",
      status: "delivered",
      date: "01/07/2024",
    },
    parcel: {
      companyName: "Pathao Logistics",
      storeName: "Dhaka Electronics",
      merchantOrderId: "ORD12345",
      serviceType: "Cash on Delivery",
      deliveryType: "Express",
    },
    status: "delivered",
    customer: {
      name: "Abdul Rahman",
      number: "01712345678",
      address: "123 Mirpur Road",
      district: "Dhaka",
      area: "Mirpur",
    },
    amount: {
      cod: 3280, // Amount in BDT
      collected: 3280, // Amount in BDT
      totalCharge: 97.8, // Delivery charge in BDT
    },
    paymentReturnStatus: {
      status: "paid",
      code: "PAID123",
      paidAt: "01/07/2024 10:00 AM",
    },
  },
  {
    sl: 2,
    invoice: {
      id: "INV-24625",
      status: "partial delivered",
      date: "10/07/2024",
    },
    parcel: {
      companyName: "eCourier",
      storeName: "Chittagong Fashion",
      merchantOrderId: "ORD67890",
      serviceType: "Standard Delivery",
      deliveryType: "Regular",
    },
    status: "partial delivered",
    customer: {
      name: "Fatima Begum",
      number: "01898765432",
      address: "456 Agrabad C/A",
      district: "Chittagong",
      area: "Agrabad",
    },
    amount: {
      cod: 1500, // Amount in BDT
      collected: 1500, // Amount in BDT
      totalCharge: 50.5, // Delivery charge in BDT
    },
    paymentReturnStatus: {
      status: "partial return",
      code: "PRET456",
      paidAt: "10/07/2024 02:00 PM",
    },
  },
  {
    sl: 3,
    invoice: {
      id: "INV-24900",
      status: "canceled",
      date: "05/07/2024",
    },
    parcel: {
      companyName: "Sundarban Courier",
      storeName: "Khulna Grocery",
      merchantOrderId: "ORD54321",
      serviceType: "Cash on Delivery",
      deliveryType: "Express",
    },
    status: "canceled",
    customer: {
      name: "Mohammad Ali",
      number: "01911223344",
      address: "789 Khan Jahan Ali Road",
      district: "Khulna",
      area: "Khan Jahan Ali",
    },
    amount: {
      cod: 5000, // Amount in BDT
      collected: 5000, // Amount in BDT
      totalCharge: 120.75, // Delivery charge in BDT
    },
    paymentReturnStatus: {
      status: "returned",
      code: "RET789",
      paidAt: "05/07/2024 11:30 AM",
    },
  },
];
