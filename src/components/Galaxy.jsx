// import React from "react";

export default function Galaxy(p){
    
    return (
    <div className="card" style={{textDecoration:"none"}}>
        <h3>
            ({p.id}) {p.name}
        </h3>
        <div>
            Diameter : {p.diameter.toLocaleString("id-ID")}
        </div>
    </div>
    );
}