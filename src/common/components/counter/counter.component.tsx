import {
	FC,
	MouseEvent,
	PropsWithChildren,
	useEffect,
	useRef,
	useState,
} from 'react'

interface CounterProps {
	onRestart?: () => void
}

export const Counter: FC<PropsWithChildren<CounterProps>> = ({
	children,
	onRestart,
}) => {
	const [counter, setCounter] = useState(60)
	const [isDisabled, setDisabled] = useState(false)

	const counterRef = useRef<NodeJS.Timer>()

	const startCounter = (event?: MouseEvent<HTMLButtonElement>) => {
		if (event) {
			onRestart && onRestart()
		}
		setCounter(60)
		setDisabled(true)
		counterRef.current = setInterval(() => {
			setCounter(counter => counter - 1)
		}, 1000)
	}

	useEffect(() => {
		startCounter()
	}, [])

	useEffect(() => {
		if (counter === 0) {
			clearInterval(counterRef.current)
			setDisabled(false)
		}
	}, [counter])

	return (
		<button
			className="text-gray-900 text-sm disabled:cursor-not-allowed"
			disabled={isDisabled}
			onClick={startCounter}
		>
			{children} {isDisabled && ` (${counter} сек)`}
		</button>
	)
}
