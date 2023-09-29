import { useState, useRef } from "react";

function Form() {
  const [focused, setFocused] = useState<boolean>(false);

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <form
      className="flex flex-col items-center gap-10"
      onSubmit={handleSubmission}
    >
      <div className="flex flex-col items-start text-2xl text-slate-600 leading-tight">
        <label htmlFor="email" className="mb-3 pl-1">
          Email
        </label>
        <input
          id="email"
          placeholder="email"
          className="border border-slate-300 rounded p-3 pt-2 pl-4"
        />
      </div>
      <div className="flex flex-col items-start text-2xl text-slate-600 leading-tight">
        <label htmlFor="password" className="mb-3 pl-1">
          Password
        </label>
        <input
          id="password"
          placeholder="password"
          className="border border-slate-300 rounded mb-8 p-3 pt-2 pl-4 "
        />
      </div>
      <button>Login</button>
    </form>
  );
}

export default Form;
