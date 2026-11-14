
function ThemeToggle(props) {

	const knobShift = props.isLightTheme ? '' : 'after:translate-x-5';

	return (
		<button className={`
			relative
			rounded-full 
			w-8 h-3.5
			bg-mist-500
			
			after:absolute
			after:-left-0.5
			after:-top-px
			after:transition-transform
			after:duration-350
			after:rounded-full
			after:w-4 after:h-4
			${knobShift}
			after:bg-mist-200
		`} onClick={props.toggleTheme}/>
	);
}

export default ThemeToggle;