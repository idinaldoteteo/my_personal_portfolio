import classNames from 'classnames';
import styles from './Stack.module.css'
import type { StackProps } from '../shared/shared';

const tagClasses = {
	'java' : styles.java,
	'csharp' : styles.csharp,
  'javascript' : styles.javascript
}

const Stack = ({value} : StackProps) => {

  const classes = classNames(styles.tag, tagClasses[value]);

  return (
    <span className={classes}>{value}</span>
  )
}

export default Stack