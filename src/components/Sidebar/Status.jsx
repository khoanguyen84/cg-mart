import React from "react";

const statusList = ["In stock", "On Sale"]
function Status() {
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5 className="accordion-header">Product Status</h5>
            <div className="form-group">
                {
                    statusList.map((status, index) => (
                        <div key={index} className="form-check">
                            <input class="form-check-input" type="checkbox" value={status} />
                            <label class="form-check-label">{status}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Status;