import  { useEffect, useRef, useState } from 'react';

const FormTracker = () => {
    const [name, setName] = useState("");
    const renderCount = useRef(0);
    const submitCount = useRef(0);
    const inputRef = useRef(null);

    useEffect(() => {
        renderCount.current ++
    });

    const handleSubmit = () => {
      submitCount.current++;
      console.log(submitCount.current);
    }

  return (
    <div>
        <input type="text" value={name} placeholder='type here...' onChange={(e) => setName(e.target.value)} />
        <p>You typed : {name}</p>
        <button onClick={() => setName("")}>Reset</button>

        <p>Render Count : {renderCount.current}</p>

        <button onClick={handleSubmit}>Submit</button>
        

        <br />
        <br />
        <input ref={inputRef} />
        <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  )
}

export default FormTracker