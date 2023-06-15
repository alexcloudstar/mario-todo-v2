import { useLayoutEffect } from 'react';
import { Todos } from './components';
import { Input } from './components/Input';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  useLayoutEffect(() => {
    if (!localStorage.getItem('userId')) {
      const newUserId = uuidv4();
      localStorage.setItem('userId', newUserId.toString());
    }
  }, []);

  return (
    <main className='flex flex-col items-center h-[700px] w-[700px] bg-slate-200 overflow-y-auto rounded-[25px] shadow-custom'>
      <h1 className='text-3xl font-bold text-slate-900 my-6 font-smfont'>
        Your Todos
      </h1>
      <div className='m-w-[350px]'>
        <Input />
        <Todos />
      </div>
    </main>
  );
};

export default App;
