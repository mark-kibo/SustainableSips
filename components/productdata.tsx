import React, { useState } from 'react';
import {
    Card,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Modal,
    TextField,
} from '@mui/material';

const AddProductModal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        buyingPrice: '',
        sellingPrice: '',
        quantity: '',
        description: '',
    });

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Implement form submission logic with formData
        console.log('Form submitted with data:', formData);
        onClose(); // Close the modal after submitting
    };
    const handleDiscard: React.MouseEventHandler<HTMLButtonElement> = () => {
        setFormData({
            name: '',
            buyingPrice: '',
            sellingPrice: '',
            quantity: '',
            description: '',
        });
        onClose();
    };


    return (
        <Modal open={open} onClose={onClose}>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 w-96">
                <form onSubmit={handleFormSubmit}>
                    <TextField
                        label="Product Name"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                    />
                    <TextField
                        label="Buying Price"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="buyingPrice"
                        value={formData.buyingPrice}
                        onChange={handleFormChange}
                    />
                    <TextField
                        label="Selling Price"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="sellingPrice"
                        value={formData.sellingPrice}
                        onChange={handleFormChange}
                    />
                    <TextField
                        label="Quantity"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleFormChange}
                    />
                    <TextField
                        label="Description"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="description"
                        value={formData.description}
                        onChange={handleFormChange}
                    />
                    <div className="mt-4 flex justify-between">
                        <Button type="submit" variant="contained" className='text-white bg-[#ffab40] hover:bg-[rgba(255,171,64,0.9)]' >
                            Submit
                        </Button>
                        <br></br>
                        <Button variant="outlined" className='text-[#ffab40]' onClick={handleDiscard}>
                            Discard
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

const MyComponent: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddProduct = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Sample data for the table
    const rows = [
        { id: 6, Products: 'Gilbeys', Buyingprice: 1200, SellingPrice: 2500, Quantity: 300, Description: 'Gin' },
        { id: 2, Products: 'Gilbeys', Buyingprice: 1200, SellingPrice: 2500, Quantity: 300, Description: 'Gin' },
        { id: 3, Products: 'Gilbeys', Buyingprice: 1200, SellingPrice: 2500, Quantity: 300, Description: 'Gin' },
        { id: 4, Products: 'Gilbeys', Buyingprice: 1200, SellingPrice: 2500, Quantity: 300, Description: 'Gin' },
        { id: 5, Products: 'Gilbeys', Buyingprice: 1200, SellingPrice: 2500, Quantity: 300, Description: 'Gin' },
    ];

    // Sample data for card 1, 2, 3, 4
    const categories = ['14', 'last 7 days'];
    const totalProducts = ['8900'];
    const topSellings = ['5', 'last 7 days'];
    const lowStocks = ['12'];

    return (
        <div className="flex flex-wrap justify-around mt-16 mb-8 z-10">
            {/* Card 1 - Categories */}
            <Card className="m-4 p-4 w-56">
                <h2 className="text-lg font-bold" style={{ color: '#e69b04' }}>
                    Categories
                </h2>
                {categories.map((category, index) => (
                    <div key={index}>
                        <h3 className="text-md mb-2">{category}</h3>
                        {/* Add content for each category as needed */}
                        {/* For example, you can add sub-items or details here */}
                    </div>
                ))}
            </Card>

            {/* Card 2 - Total Products */}
            <Card className="m-4 p-4 w-56">
                <h2 className="text-lg font-bold" style={{ color: '#e69b04' }}>
                    Total Products
                </h2>
                <p>{totalProducts} products in stock</p>
            </Card>

            {/* Card 3 - Top Sellings */}
            <Card className="m-4 p-4 w-56">
                <h2 className="text-lg font-bold" style={{ color: '#e69b04' }}>
                    Top Sellings
                </h2>
                <ul>
                    {topSellings.map((product, index) => (
                        <li key={index}>{product}</li>
                    ))}
                </ul>
            </Card>

            {/* Card 4 - Low Stocks */}
            <Card className="m-4 p-4 w-56">
                <h2 className="text-lg font-bold" style={{ color: '#e69b04' }}>
                    Low Stocks
                </h2>
                <ul>
                    {lowStocks.map((product, index) => (
                        <li key={index}>{product}</li>
                    ))}
                </ul>
            </Card>

            {/* Material-UI Table */}
            <Card className="m-4 p-4 w-full">
                <div className="flex justify-between mb-4">
                    <h2 className="text-xl font-bold text-black" style={{ color: '#e69b04' }}>
                        Products
                    </h2>
                    <Button variant="contained" onClick={handleAddProduct} className='text-white  bg-[#ffab40] hover:bg-[rgba(255,171,64,0.9)] '>
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
            </Card >

            {/* Add Product Modal */}
            < AddProductModal open={isModalOpen} onClose={handleCloseModal} />
        </div >
    );
};

export default MyComponent;
