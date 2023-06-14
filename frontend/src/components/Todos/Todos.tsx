import React from 'react';
import { Input } from '../Input';

const Todos = () => {
  return (
    <div className='flex flex-col items-center h-[700px] w-[700px] bg-slate-200 overflow-y-auto rounded-[25px] shadow-custom'>
      <h1 className='text-3xl font-bold text-slate-900 my-6'>Your Todos</h1>
      <Input />
    </div>
  );
};

export default Todos;
