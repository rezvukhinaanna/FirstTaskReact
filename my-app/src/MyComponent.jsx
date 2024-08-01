import { useState } from 'react';

export function MyComponent() {
	const [showText, setShowText] = useState(true);

	const click = () => {
		setShowText(!showText)
	}

	return (
		<>
			{showText && <div>Текст1</div>}
			<button onClick={click}>{showText ? 'Hide' : 'Show'} text</button>
		</>
	)
}
