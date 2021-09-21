import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const onClick = () => {
    console.log('click');
  }

  return (
    <div>
      <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}/>
        {/* <Button color='blue' text='Hello2' /> */}
        {/* <Button color='red' text='Hello3' /> */}
      </header>
    </div>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header
