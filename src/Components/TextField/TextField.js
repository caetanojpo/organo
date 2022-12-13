import './TextField.css'

export const TextField = (props) => {



    const onDigit = (e) => {
        props.aoAlterado(e.target.value);
    }

    return (
        <div className='text-field'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={onDigit} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}
