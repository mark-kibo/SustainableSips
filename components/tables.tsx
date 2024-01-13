import DataTables, { Config } from "datatables.net-dt";
import { useEffect, useRef } from "react";
import axios from "axios";

export function ReactDataTables({ ...props }: Config) {
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    // Fetch data from your Django REST framework API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sustainableapis.onrender.com/api/products/list/');
        const fetchedData = response.data;

        // Initialize DataTables after fetching data
        const dt = new DataTables(tableRef.current!, {
          data: fetchedData,
          columns: [
            { title: 'Product Name', data: 'name' },
            { title: 'Product Quantity', data: 'quantity' },
            { title: 'Buying Price', data: 'buying_price' },
            { title: 'Selling Price', data: 'selling_price' },
            { title: 'Description', data: 'description' },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
}, []);
  return <table ref={tableRef}></table>;
}

export default ReactDataTables;
