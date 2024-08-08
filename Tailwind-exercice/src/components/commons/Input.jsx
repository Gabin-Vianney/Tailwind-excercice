
const Input = ({ type = 'text', placeholder = '', value, onChange, className = '', ...props }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-4/5 sm:w-2/5 h-10  border rounded focus:outline-none focus:ring-2 focus:ring-tertiary-400 ${className}`}
            {...props}
        />
    );
};

export default Input;
