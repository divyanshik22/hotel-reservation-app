import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import './layout.css'

const Layout = () => {
    const [selectedTable, setSelectedTable] = useState('');
    const [customText, setCustomText] = useState('');
    const [imageError, setImageError] = useState(false);

    const handleTableChange = (e) => {
        setSelectedTable(e.target.value);
        setImageError(false);
    };

    const handleCustomTextChange = (e) => {
        setCustomText(e.target.value);
    };

    const handleDelete = () => {
        setSelectedTable('');
        setCustomText('');
        setImageError(false);
    };

    // Function to get the correct image path
    const getTableImage = (tableNumber) => {
        if (!tableNumber) return null;
        
        // Handle special cases for images that might have different naming
        let imageName = tableNumber;
        if (tableNumber === 4) {
            imageName = '4'; // Use 4.png for table 4
        }
        
        // Try to construct the path relative to the public directory
        return `/src/assets/images/Table/${imageName}.png`;
    };

    const handleImageError = (e) => {
        console.error('Image failed to load:', e.target.src);
        setImageError(true);
    };

    return (
        <div className='outer-div'>
            <div className="input-row">
                <div className="input-group">
                    <label htmlFor="table-select" className="input-label">Select Table:</label>
                    <select 
                        id="table-select"
                        value={selectedTable}
                        onChange={handleTableChange}
                        className="table-select"
                    >
                        <option value="">Choose a table...</option>
                        {[...Array(14)].map((_, index) => (
                            <option key={index + 1} value={index + 1}>
                                Table {index + 1}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="input-group">
                    <label htmlFor="custom-text" className="input-label">Custom Text:</label>
                    <input
                        type="text"
                        id="custom-text"
                        value={customText}
                        onChange={handleCustomTextChange}
                        placeholder="Enter your custom text here..."
                        className="custom-input"
                    />
                </div>

                <button 
                    className="delete-btn"
                    onClick={handleDelete}
                    title="Clear all inputs"
                >
                    <FaTrash />
                </button>
            </div>

            {/* Table Image Display */}
            {selectedTable && (
                <div className="table-image-container">
                    <h3 className="table-image-title">Table {selectedTable}</h3>
                    <div className="table-image-wrapper">
                        {!imageError ? (
                            <img 
                                src={getTableImage(selectedTable)}
                                alt={`Table ${selectedTable}`}
                                className="table-image"
                                onError={handleImageError}
                            />
                        ) : (
                            <div className="table-image-error">
                                <p>Image not found for Table {selectedTable}</p>
                                <p>Path attempted: {getTableImage(selectedTable)}</p>
                                <p>Please check if the image exists in: src/assets/images/Table/</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Layout;