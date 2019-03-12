const pipe = (...fns) => (...params) => 
	fns.reduce((val, fn, i, arr) => 
		Array.isArray(val) 
	        ? fn(...val)
	        : fn(val)
    , params);

export default pipe;
