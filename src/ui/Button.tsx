import { FC } from 'react'
import { IBtn } from '../interfaces/btn.interface';

const Button: FC<IBtn> = ({text, className, onClick}) => {
	return <button className={className} onClick={onClick}>{text}</button>
}

export default Button