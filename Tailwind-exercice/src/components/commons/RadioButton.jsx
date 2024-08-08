const RadioButton = ({
  label,
  value,
  name,
  checked,
  onChange,
  className = "",
  ...props
}) => {
  return (
    <label className={`flex items-center space-x-2 ${className}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-radio text-primary focus:ring-tertiary focus:outline-none"
        {...props}
      />
      <span>{label}</span>
    </label>
  );
};
export default RadioButton;
