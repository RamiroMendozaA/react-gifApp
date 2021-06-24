import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from './GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategory={setCategories} />
            <hr />
            <div>
                {
                    categories.map(c => (
                        <GifGrid key={c} category={c} />
                    ))
                }
            </div>

        </>
    );
};

export default GifExpertApp;