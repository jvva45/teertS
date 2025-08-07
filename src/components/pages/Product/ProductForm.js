import { useState } from "react";
import Button from "../../Button/Button";
import TextField from "../../TextField/TextField";
import ImageUploadField from "../../ui/ImageUploadField/ImageUploadField";

import './ProductPage.css'

const ProductForm = (props) => {

    const [productName, setProductName] = useState('');
    const [sku, setSku] = useState('');
    const [category, setCategory] = useState('');
    const [purchasePrice, setPurchasePrice] = useState('');
    const [price, setPrice] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [amount, setAmount] = useState('');
    const [imageResetTrigger, setImageResetTrigger] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newProduct = {
            image: productImage,
            productName: productName,
            sku: sku,
            category: category,
            purchasePrice: purchasePrice,
            price: price,
            amount: amount
        };

        // Call the method passed via props (e.g. from CustomerPage)
        props.onSubmit(newProduct);

        // Clear form fields
        setProductName('');
        setSku('');
        setCategory('');
        setPurchasePrice('');
        setPrice('');
        setAmount('');
        setProductImage(null);
        setImageResetTrigger(prev => !prev);
    };

    return (
        <div className='form'>
            <h3 className='name_form'>Product Registration</h3>
            <form onSubmit={handleSubmit} className="form-grid">
                <TextField
                    label="Product Name"
                    placeholder="Enter product name"
                    value={productName}
                    onChange={value => setProductName(value)}
                    mandatory={true}
                    type="text"
                />

                <TextField
                    label="SKU"
                    placeholder="Enter SKU"
                    value={sku}
                    onChange={value => setSku(value)}
                    mandatory={true}
                    type="number"
                />

                <TextField
                    label="Purchase Price"
                    placeholder="Enter purchase price"
                    value={purchasePrice}
                    onChange={value => setPurchasePrice(value)}
                    mandatory={true}
                    type="number"
                />

                <TextField
                    label="Sale Price"
                    placeholder="Enter sale price"
                    value={price}
                    onChange={value => setPrice(value)}
                    mandatory={true}
                />

                <TextField
                    label="Category"
                    placeholder="Enter product category"
                    value={category}
                    onChange={value => setCategory(value)}
                    mandatory={true}
                    type="text"
                />

                <TextField
                    label="Amount"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={value => setAmount(value)}
                    mandatory={true}
                    type="number"
                />

                <ImageUploadField
                    label="Product Image"
                    onChange={setProductImage}
                    mandatory={false}
                    resetTrigger={imageResetTrigger}
                />

                <div className="form-button-container">
                    <Button>Send</Button>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;
