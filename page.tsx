     'use client'; 

import React from 'react';
import StudentCard from './components/StudentCard'; 

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl text-center my-4">Student ID Cards</h1>
      <StudentCard name="Sumiii" age={20} rollNumber="001" studentClass="12th" />
      <StudentCard name="Faiza" age={19} rollNumber="002" studentClass="10th" />
      <StudentCard name="Alisha" age={21} rollNumber="003" studentClass="11th" />
    </div>
  );
}

     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     // import React from 'react'
      
      // const page = () => {
      //   return (
      //     <div className="bg-yellow-500 w-50 h-40 ml-6 mt-4 text-red-500 pt-5 pl-6">Summiya</div>
      //   )
      // }
      // export default page
      