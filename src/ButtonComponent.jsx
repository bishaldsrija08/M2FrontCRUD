import PropTypes from 'prop-types';
const ButtonComponent = ({ content }) => {
    console.log(content)
    return (
        <div>
            <button className="bg-red-100">{content}</button>
        </div>
    )
}
ButtonComponent.PropTypes = {
    content: PropTypes.string.isRequired
}

export default ButtonComponent