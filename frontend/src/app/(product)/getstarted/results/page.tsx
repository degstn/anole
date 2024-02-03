"use client"

import React, { useEffect, useState } from 'react';

export default function NextPage() {
    const [address, setAddress] = useState('');
const [residentCount, setResidentCount] = useState(0);

useEffect(() => {
    // Retrieve user's inputs from local storage
    const savedAddress = localStorage.getItem('address');
    const savedResidentCount = localStorage.getItem('residentCount');

    if (savedAddress) setAddress(savedAddress);
    if (savedResidentCount) setResidentCount(Number(savedResidentCount)); // Convert to number before setting in state
}, []);

  return (
    <main className="flex text-center items-center justify-center">
      <h1>Next Page</h1>
      <p>Address: {address}</p>
      <p>Resident Count: {residentCount}</p>
    </main>
  );
}