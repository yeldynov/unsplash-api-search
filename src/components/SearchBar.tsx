import React, { useState } from 'react';

type Props = {
  // Prop from App Parent Component to get results
  onSubmit: (term: string) => void;
};

export default function SearchBar({ onSubmit }: Props) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    // Getting term from input and passing it to parent for search
    onSubmit(term);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          className='border border-gray-500 w-full rounded-md h-10 text-xl p-2'
          type='text'
          placeholder='Search your images here...'
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
      </form>
    </div>
  );
}
