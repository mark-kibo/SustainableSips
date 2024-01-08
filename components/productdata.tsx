import React from 'react';
import { Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Button } from '@mui/material';

const MyComponent: React.FC = () => {
    // Sample data for the table
    const rows = [
        { id: 6, Products: 'Gilbeys', Buyingprice: 1200, SellingPrice: 2500, Quantity: 300, Description: "Gin" },
        { id: 2, Products: 'Gilbeys', Buyingprice: 1200, SellingPrice: 2500, Quantity: 300, Description: "Gin" },
        { id: 3, Products: 'Gilbeys', Buyingprice: 1200, SellingPrice: 2500, Quantity: 300, Description: "Gin" },
        { id: 4, Products: 'Gilbeys', Buyingprice: 1200, SellingPrice: 2500, Quantity: 300, Description: "Gin" },
        { id: 5, Products: 'Gilbeys', Buyingprice: 1200, SellingPrice: 2500, Quantity: 300, Description: "Gin" },

    ];

    // Sample data for card 1, 2, 3, 4
    const categories = ['14', 'last 7 days'];
    const totalProducts = ['8900',]
    const topSellings = ['5', 'last 7 days',];
    const lowStocks = ['12'];

    const handleAddProduct = () => {
        // Implement the logic for adding a product here
        console.log('Adding a product');
    };

    return (
        <div className="flex flex-wrap justify-around">
            {/* Card 1 - Categories */}
            <Card className="m-4 p-4 w-56">
                <h2 className="text-lg font-bold  " style={{ color: '#e69b04' }}>Categories</h2>
                {categories.map((category, index) => (
                    <div key={index}>
                        <h3 className="text-md  mb-2" >{category}</h3>
                        {/* Add content for each category as needed */}
                        {/* For example, you can add sub-items or details here */}
                    </div>
                ))}
            </Card>

            {/* Card 2 - Total Products */}
            <Card className="m-4 p-4 w-56">
                <h2 className="text-lg font-bold" style={{ color: '#e69b04' }}>Total Products</h2>
                <p>{totalProducts} products in stock</p>
            </Card>

            {/* Card 3 - Top Sellings */}
            <Card className="m-4 p-4 w-56">
                <h2 className="text-lg font-bold" style={{ color: '#e69b04' }}>Top Sellings</h2>
                <ul>
                    {topSellings.map((product, index) => (
                        <li key={index}>{product}</li>
                    ))}
                </ul>
            </Card>

            {/* Card 4 - Low Stocks */}
            <Card className="m-4 p-4 w-56">
                <h2 className="text-lg font-bold" style={{ color: '#e69b04' }}>Low Stocks</h2>
                <ul>
                    {lowStocks.map((product, index) => (
                        <li key={index}>{product}</li>
                    ))}
                </ul>
            </Card>

            {/* Material-UI Table */}
            <Card className="m-4 p-4 w-full">
            <div className="flex justify-between mb-4">
                    <h2 className="text-xl font-bold" style={{ color: '#e69b04' }}>Products</h2>
                    <Button variant="contained" color="primary" onClick={handleAddProduct}>
                        Add Product
                    </Button>
                </div>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Products</TableCell>
                                <TableCell>Buying price</TableCell>
                                <TableCell>Selling Price</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.Products}</TableCell>
                                    <TableCell>{row.Buyingprice}</TableCell>
                                    <TableCell>{row.SellingPrice}</TableCell>
                                    <TableCell>{row.Quantity}</TableCell>
                                    <TableCell>{row.Description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </div>
    );
};

export default MyComponent;
