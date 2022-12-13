import './Lists.css';

export const Lists = (props) => {
    return(
        <div className='list'>
            <label>{props.label}</label>
            <select onChange={e => props.aoAlterado(e.target.value)} required={props.obrigatorio} value={props.value}
            > 
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })} 
            </select>
        </div>
    )
}