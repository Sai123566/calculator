import { useState } from 'react';
import './App.css';

const fmt=n=>'₹'+Number(n).toLocaleString('en-IN',{minimumFractionDigits:2,maximumFractionDigits:2});

export default function App(){
 const [x,setX]=useState('');
 const [y,setY]=useState('');
 const xv=parseFloat(x)||0;
 const yv=parseFloat(y)||0;
 const brahmaji=0.7*xv+0.3*yv;
 const ranganath=0.3*xv+0.7*yv;
 const brahmajiBalance=yv>xv?yv-brahmaji:0;
 const ranganathBalance=xv>yv?xv-ranganath:0;
 return (
 <div className="container">
 <h1>Income Split Calculator</h1>
 <div className="grid">
 <input type="number" value={x} onChange={e=>setX(e.target.value)} placeholder="Munipalli Income"/>
 <input type="number" value={y} onChange={e=>setY(e.target.value)} placeholder="Cheyeru Income"/>
 </div>
 <div className="cards">
 <div className="card"><h2>Brahmaji</h2><p>{fmt(brahmaji)}</p></div>
 <div className="card"><h2>Ranganath</h2><p>{fmt(ranganath)}</p></div>
 <div className="card"><h3>Brahmaji Balance</h3><p>{fmt(brahmajiBalance)}</p></div>
 <div className="card"><h3>Ranganath Balance</h3><p>{fmt(ranganathBalance)}</p></div>
 </div>
 <table><thead><tr><th>Bank</th><th>Total</th><th>Brahmaji</th><th>Ranganath</th></tr></thead>
 <tbody>
 <tr><td>Munipalli</td><td>{fmt(xv)}</td><td>{fmt(0.7*xv)}</td><td>{fmt(0.3*xv)}</td></tr>
 <tr><td>Cheyeru</td><td>{fmt(yv)}</td><td>{fmt(0.3*yv)}</td><td>{fmt(0.7*yv)}</td></tr>
 </tbody></table>
 </div>);
}
