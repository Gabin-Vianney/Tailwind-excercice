
const Select = ({ options = [], value, onChange, className = '', ...props }) => {
    return (
        <select
            value={value}
            onChange={onChange}
            className={`w-4/5 sm:w-2/5 h-10 border rounded focus:outline-none focus:ring-2 focus:ring-tertiary ${className}`}
            {...props}
        >
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
