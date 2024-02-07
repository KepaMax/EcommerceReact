import React from 'react'
import Navbar from '../common/components/Navbar'
import ProductCard from './components/ProductCard';

function MainPage() {
    return (
        <>
            <div className="md:px-20 lg:px-28">
                <Navbar />
                <div className="px-6 ">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-light py-14 px-5">
                            Category name
                        </h1>
                    </div>
                    <div className="my-10 flex flex-col justify-center sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-y-[100px] sm:gap-x-[10px]">
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage