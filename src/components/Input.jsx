export default function Input({ type="number", label, identifier, handleChange, ...props }) {
    return(
        <p>
            <label htmlFor="">{label}</label>
            <input type={type} onChange={(e) => handleChange(identifier, e.target.value)} {...props}/>
        </p>
    )
}