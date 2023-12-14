const InputForm = ({id, label, placeholder, type}) => {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <div className="text-[#0b132a] font-semibold text-sm">
        {label}
      </div>
      <div className="flex border border-[#dedede] rounded-lg p-2 gap-3 items-center">
        <i className="text-[#4F5665] h-4" data-feather="user"></i>
        <input
          className="w-full outline-none text-sm"
          id={id}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </label>
  );
};

export default InputForm;
