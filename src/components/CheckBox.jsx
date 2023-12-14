const CheckBox = ({label, value, name}) => {
    return (
        <div className="flex gap-3">
        <input
          type="checkbox"
          name={name}
          id={value}
          value={value}
        />
        <label for={value}>{label}</label>
      </div>
    )
}

export default CheckBox