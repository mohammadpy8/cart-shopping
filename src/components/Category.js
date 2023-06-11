import React, { useState } from 'react';


const Category = () => {

    const [search, setSearch] = useState("");

    return (
        <div>
            <div>
                <div>
                    <h>search by category</h>
                </div>
                <div>
                    <input
                        type='text'
                        value={search}
                        placeholder='search in category'
                        onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
        </div>
    );
};

export default Category;
export { fliterProducts };