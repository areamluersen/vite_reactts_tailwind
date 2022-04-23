import React from 'react';

const List: React.FC = () => {
  return <table className="table-auto">
  <thead>
    <tr>
      <th className="rounded-l-2xl bg-slate-500">Song</th>
      <th className='bg-slate-500'>Artist</th>
      <th className='rounded-r-2xl bg-slate-500'>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr className='border-b'>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr className='border-b'>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr className='border-b'>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>;
}

export default List;