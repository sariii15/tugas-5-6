// import React from "react";
import { useState } from "react";
import Galaxy from "./components/Galaxy";
import Header from "./components/Header";
import {AiOutlinePlus} from "react-icons/Ai";
import {AiFillDelete} from "react-icons/Ai";
import {AiOutlineZoomIn} from "react-icons/Ai";
import {AiOutlineZoomOut} from "react-icons/Ai";
import {RxUpdate} from "react-icons/Rx";

export default function App(){
  
  const [galaksi,setGalaksi] = useState([
    {
      id: 1,
      name: "Sagitarius Dwarf Sphr",
      diameter: 220000
    },
    {
      id: 2,
      name : "Small Magellanic Cloud",
      diameter : 100000
    },
    {
      id: 3,
      name : "Small Magellanic Cloud",
      diameter: 60000
    }
  ])

  //Tambah 
  const [newGalaksi,setNewGalaksi] = useState([
    {
      id: "",
      name: "",
      diameter: ""
    }
  ]);

   const [editGalaksi,setEditGalaksi] = useState([
    {
      id: "",
      name: "",
    }
   ]);

  return (
    <>
    <Header/>
    <main>
    <div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
      {
      galaksi.map((galaksi, index)=>(
        <div key={index} className="card">
          <Galaxy
            id={galaksi.id}
            name={galaksi.name}
            diameter={galaksi.diameter}
          />
        </div>
      ))}
    </div>

    {/* ADD  */}
    <div
      className="card"
      style={{
        display: "flex",
        flexBasis: "column",
        gap: "8",
      }}
    >
      <form className="card">
        <h1>Tambah</h1>

        <label> ID  </label>
            <input 
              type="number"
              value={newGalaksi.id}
              onChange={(e) => setNewGalaksi({...newGalaksi,id:e.target.value})}/>

        <label> Nama  </label>
            <input 
              value={newGalaksi.name}
              onChange={(e) => setNewGalaksi({...newGalaksi,name:e.target.value})}

            />

        <label> Diameter  </label> 
            <input 
              type="number"  
              value={newGalaksi.diameter}
              onChange={(e) => setNewGalaksi({...newGalaksi,diameter:e.target.value})}

            />


        <button
          onClick={(e) =>{
            e.preventDefault();
            setGalaksi([ ...galaksi,{...newGalaksi}])
          }}
        >
           <AiOutlinePlus/>Tambah Depan 
        </button>

     
        <button 
          onClick={(e) =>{
            e.preventDefault();
            setGalaksi([{...newGalaksi},...galaksi]);
          }}
        >
              <AiOutlinePlus/>Tambah Belakang 
        </button>
      </form>
    </div>

{/* HAPUS BERDASARKAN ID */}
    <div 
    className="card"
    style={{
      display: "flex",
      flexBasis: "column",
      gap: "8"
    }}>
      <form>
        <h4>Hapus Berdasarkan ID</h4>

        <label>ID </label>
        <input 
          type="number"
          value={editGalaksi.id}
          onChange={(e) => setEditGalaksi({...editGalaksi,id:e.target.value})}
        />

        <label> Nama  </label> 
          <input 
              value={editGalaksi.name}
              onChange={(e) => setEditGalaksi({...editGalaksi,name:e.target.value})}
          />

         <label> Diameter  </label>
          <button
            onClick={(e) =>{
              e.preventDefault();
              const updateGalaksi = galaksi.map((galaxy) =>{
                
                if(parseInt(editGalaksi.id) === galaxy.id ){
                  return {...galaxy, name: editGalaksi.name};
                }else{
                  return galaxy;
                }
            });
                setGalaksi(updateGalaksi);
            }}
            >
                
                <RxUpdate /> update by ID
          </button>

          <button
            onClick={(e) =>{
              e.preventDefault();
              const hapusID = galaksi.filter((galaksi) =>{
                return parseInt(editGalaksi.id) !== galaksi.id
              });
              setGalaksi(hapusID);
            }}
          >
              <AiFillDelete/>  hapus by ID
          </button>

          <button
            onClick={(e) =>{
              e.preventDefault();
              const increment = galaksi.map((galaksi) =>{
                if(parseInt(editGalaksi.id) === galaksi.id){
                  return {...galaksi, diameter: parseInt(galaksi.diameter )+ 1} 
                }else{
                  return galaksi;
                }
            });
                setGalaksi(increment);
            }}
            >
              
              <AiOutlineZoomIn/> Naikkan
          </button>

          <button
            onClick={(e) =>{
              e.preventDefault();
              const decrement = galaksi.map((galaksi) =>{
                if(parseInt(editGalaksi.id) === galaksi.id){
                  return {...galaksi, diameter: parseInt(galaksi.diameter)- 1}
                }else{
                  return galaksi;
                }
              });
                setGalaksi(decrement);
            }}
            >
              
              <AiOutlineZoomOut /> Turunkan
          </button>
      </form>
  </div>

{/* HAPUS */}
     <div
      className="card"
      style={{
        display: "flex",
        flexBasis: "column",
        gap: "8",
      }}
    >
      <form className="card">
        <h1>Hapus</h1>


        <button onClick={(e) =>{
          e.preventDefault();
          setGalaksi(galaksi.slice(1))}}
        > 
          
          <AiFillDelete/> Hapus Depan
        </button>

      
        <button onClick= {(e) =>{
          e.preventDefault();
          setGalaksi(galaksi.slice(0,-1));
        }}>  
           
           <AiFillDelete/>Hapus Belakang 
        </button>

    
        <button onClick={(e) =>{ 
          e.preventDefault();
          setGalaksi([])}}
        >
            
            <AiFillDelete/> Hapus Semua
        </button>
      </form>
    </div>
    </main>
    </>
  );
}