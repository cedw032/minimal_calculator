const unboxThen = action => e => action(e.target.value);
export default unboxThen;