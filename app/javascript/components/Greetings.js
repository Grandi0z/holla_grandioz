import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetings } from '../src/redux/greetings/greetingsSlice';

function Greetings() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);
  const greetings = useSelector((store) => store.greetings);
  return (
    <>
      {greetings.greetings.message}
      🖐️
    </>
  );
}

export default Greetings;
