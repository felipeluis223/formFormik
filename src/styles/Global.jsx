import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
	* {
		margin: 0; padding: 0; font-family: 'puppins', sans-serif;
	}
	body { 
		width: 100vh;  height: 100vh; display: flex;
	}
	#root{
		width: 100%;
	}
`;
export default Global;