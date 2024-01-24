import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Recommended from "../components/Brand/Brand";
import Products from "../components/Products/Products";
import MainLayout from "../layouts/MainLayout";

function ShoePage() {
    return (
        <MainLayout>
            <div className='container d-flex'>
                <div style={{ minWidth: "230px" }}>
                    <Sidebar />
                </div>
                <div className='flex-grow-1'>
                    <Products />
                </div>
            </div>
        </MainLayout>
    )
}

export default ShoePage