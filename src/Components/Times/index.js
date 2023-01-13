import Colaborador from '../Colaborador';
import './Times.css'

const Times = (props) => {
    return (
        //const css = {backgroundColor: props.corSecundaria} -> Dps insere dentro de style={}
        (props.colaboradores.length > 0) && <section className='time' style={{ backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} 
            cargo={colaborador.cargo}
            imagem={colaborador.imagem} />)}
            </div>
        </section>

        /* OUTRO JEITO DE RESOLVER STRINGS VAZIAS, POREM COM TERNÁRIO
        (props.colaboradores.lenght > 0) ? <section className='time' style={{ backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} 
            cargo={colaborador.cargo}
            imagem={colaborador.imagem} />)}
            </div>
        </section>
        : ''
         */
    )
}

export default Times;