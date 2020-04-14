import React from 'react';
import { useSelector } from 'react-redux';

const PersonalWorker = () => {
  const isWorker = useSelector((state) => state.worker.worker);

  return !isWorker ? (
    <button>Register as Contractor</button>
  ) : (
    <div>Contractor info</div>
  );
};

export default PersonalWorker;
