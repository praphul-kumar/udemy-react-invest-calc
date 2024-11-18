export default function Input({ label, type="text", ...props }) {
    return(
        <div>
            <label htmlFor="">{label}</label>
            <input type={type} {...props}/>
        </div>
    )
}