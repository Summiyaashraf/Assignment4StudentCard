import React from 'react';

interface StudentCardProps {
  name: string;
  age: number;
  rollNumber: string;
  studentClass: string;
}

const StudentCard: React.FC<StudentCardProps> = ({ name, age, rollNumber, studentClass }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-red-300 p-5 m-5">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Name: {name}</div>
        <p className="text-black text-base">Age: {age}</p>
        <p className="text-black  text-base">Roll Number: {rollNumber}</p>
        <p className=" text-black text-base">Class: {studentClass}</p>
      </div>
    </div>
  );
}

export default StudentCard;
