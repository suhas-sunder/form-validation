import { useState, useRef } from "react";

function Form() {
  return (
    <form className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-start text-2xl text-slate-600">
        <label className="mb-3 pl-1">Email</label>
        <input className="border border-slate-300 rounded p-2" />
      </div>
      <div className="flex flex-col items-start text-2xl text-slate-600">
        <label className="mb-3 pl-1">Password</label>
        <input className="border border-slate-300 rounded mb-8 p-2" />
      </div>
    </form>
  );
}

export default Form;
