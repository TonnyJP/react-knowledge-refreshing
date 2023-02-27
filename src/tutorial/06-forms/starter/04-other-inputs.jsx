import React from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];
const OtherInputs = () => {
  const [ shipping, setShipping ] = React.useState(false);
  const [ framework, setFramework ] = React.useState("react")
 
  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input type="checkbox" checked={shipping} onChange={(e) => setShipping(e.target.checked)} id="shipping" />
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
          <select id='framework' name="framework"  value={framework} onChange={(e) => setFramework(e.target.value)}>
            {frameworks.map((framework, index) => {
              return <option value={framework} key={index}>{framework}</option>
            })}
          </select>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
