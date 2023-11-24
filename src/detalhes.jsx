import './css/detalhes.css'

export default function Detalhes() {

    return (
        <>
            <div className='cards'>
                <div className="1">
                    <div className='title'>Rotina</div>
                </div>
                <div className="2 centered">
                    <div className='title' style={{fontSize: '14px'}}>Comercial {'>'} Vendas</div>
                </div>
            </div>
            <div className="cards" style={{height: '15em'}}>
                <div className="1" style={{height: '20%'}}>
                    <div className='title'>Cliente</div>
                </div>
                <div className="2" style={{height: '80%'}}>
                    <br/>
                    <div className='row'>
                        <div className='weigth' style={{ width: '35%' }}>Código cliente:</div> <div>125001</div>
                    </div>
                    <div className='row'>
                        <div className='weigth' style={{ width: '35%' }}>Contato:</div> <div>Rafael</div>
                    </div>
                    <div className='row'>
                        <div className='weigth' style={{ width: '35%' }}>Cliente:</div> <div>Posto RC1</div>
                    </div>
                    <div className='row'>
                        <div className='weigth' style={{ width: '35%' }}>CNPJ:</div> <div>46.988.688/0001-60</div>
                    </div>
                    <div className='row'>
                        <div className='weigth' style={{ width: '35%' }}>Rede:</div> <div>RC</div>
                    </div>
                </div>
            </div>
            <div className="cards" style={{height: '25em'}}>
                <div className="1" style={{height: '15%'}}>
                        <div className='title'>Informações do chamado</div>
                </div>
                <div className="2" style={{height: '85%'}}>
                    <br/>
                    <div className='row'>
                        <div className='weigth' style={{ width: '35%' }}>Avaliação:</div> <div>☆☆☆☆☆</div>
                    </div>
                    <div className='row'>
                        <div className='weigth' style={{ width: '35%' }}>Num. Chamado:</div> <div>9177</div>
                    </div>
                    <div className='row'>
                        <div className='weigth' style={{ width: '35%' }}>Versão:</div> <div>2.9.142</div>
                    </div>
                    <div className='row'>
                        <div className='weigth' style={{ width: '35%' }}>Atendente:</div> <div>Rodrigo Tuon</div>
                    </div>
                    <div className='row'>
                        <div className='weigth' style={{ width: '35%' }}>Assunto:</div> <div style={{ width: '55%' }}>Cliente com fiscal exigindo o codigo de barras e o codigo ibpt</div>
                    </div>
                    <div className='row'>
                        <div className='weigth' style={{ width: '35%' }}>Status:</div> <div>Em analise</div>
                    </div>
                    <div className='row'>
                        <div className='weigth' style={{ width: '35%' }}>Situação:</div> <div>Em analisa</div>
                    </div>
                    <div className='row'>
                        <div className='weigth' style={{ width: '35%' }}>Nível:</div> <div>Desenvolvimento</div>
                    </div>
                    <div className='row'>
                        <div className='weigth' style={{ width: '35%' }}>Data abertura:</div> <div>07/11/2023 17:18:08</div>
                    </div>
                    <div className='row'>
                        <div className='weigth' style={{ width: '35%' }}>Usuário:</div> <div>Andre Amorim Carneiro</div>
                    </div>
                </div>
            </div>
        </>
    )
}