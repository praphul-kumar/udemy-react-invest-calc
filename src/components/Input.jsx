export default function Input({ label, type="text", handleChange, ...props }) {
    return(
        <div>
            <label htmlFor="">{label}</label>
            <input type={type} onChange={(e) => handleChange(e.target.value)} {...props}/>
        </div>
    )
}